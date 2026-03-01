"use strict"

// Get the directory of the current script
const scriptDirectory = import.meta.dirname;
// Change the current working directory to the script's directory
process.chdir(scriptDirectory);

import fs from 'fs';
import https from 'https';
import http from 'http';
import util from 'util';
import express from 'express';
import cors from 'cors';
import zlib from 'zlib';
import compression from 'compression';
import Database from 'better-sqlite3';
import semver from 'semver';

// Local imports - file extensions are mandatory in ESM
import upgrade from './upgrade.js';
import database_common from './database_common.js';
import notification_handler from './notification_handler.js';

const databaseFolder = 'Database/'
const databasePath = databaseFolder + 'main.db'

const apiPort = process.env.D3D12INFODB_CUSTOM_PORT ? process.env.D3D12INFODB_CUSTOM_PORT : 50854;

console.log('Initializing')

if (!fs.existsSync(databaseFolder)) {
    fs.mkdirSync(databaseFolder);
}

const api = express()
let db = new Database(databasePath)
console.log(`Opened database ${databasePath}`)

upgrade.upgradeDatabase(db)

let latestReportID = 0
let latestReportQuery = db.prepare("SELECT ID FROM Submissions ORDER BY ID DESC LIMIT 1").get()
if (latestReportQuery) {
    latestReportID = latestReportQuery.ID
    console.log(`Latest report ID is ${latestReportID}`)
}

console.log("Database is ready")

function GetCurrentTimeAsString() {
    return "" + (new Date()).valueOf()
}

const startupTime = GetCurrentTimeAsString()
let databaseLastDeleteTime = startupTime
let databaseLastModificationTime = startupTime
let getAllSubmissionsCache = {}

const getAllSubmissionsStatement = db.prepare("SELECT * FROM Submissions")

const brCompress = util.promisify(zlib.brotliCompress)
const gzipCompress = util.promisify(zlib.gzip)
const deflateCompress = util.promisify(zlib.deflate)

async function populateGetAllSubmissionsCache() {
    let result = {}
    
    let rows = getAllSubmissionsStatement.all()
    
    rows = rows.map(database_common.unpackDatabaseObject)
    result[""] = JSON.stringify(rows)
    
    let brCompression = brCompress(result[""], {
                    [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT,
                    [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
                    [zlib.constants.BROTLI_PARAM_SIZE_HINT]: result[""].length,
                })
    let gzipCompression = gzipCompress(result[""], {
                    "level": 9,
                    "memLevel": 9
                });
    let deflateCompression = deflateCompress(getAllSubmissionsCache[""], {
                    "level": 9,
                    "memLevel": 9
                });

    result["br"] = await brCompression
    result["gzip"] = await gzipCompression
    result["deflate"] = await deflateCompression

    getAllSubmissionsCache = result
}

await populateGetAllSubmissionsCache()

console.log("Cache is ready")

let isCacheRequested = false
let cacheUpdateInstance = null

function requestCacheUpdate() {
    if (isCacheRequested)
    {
        return;
    }

    isCacheRequested = true

    setTimeout(async () => {
        if (cacheUpdateInstance)
        {
            await cacheUpdateInstance
        }

        cacheUpdateInstance = populateGetAllSubmissionsCache()

        isCacheRequested = false
    }, 5000);
}

function markDatabaseModified(isDeleted = false) {
    const currentTime = GetCurrentTimeAsString()
    if (isDeleted) {
        databaseLastDeleteTime = currentTime
    }
    databaseLastModificationTime = currentTime
    requestCacheUpdate()
}

function isObjectAllowedInDB(inObj) {
    let isAllowed = true;
    database_common.submitRequiredProperites.forEach(p => {
        if (inObj[p] == null) {
            console.log(`Missing property ${p}`)
            isAllowed = false
        }
    })
    if (!isAllowed) {
        console.log("isObjectAllowedInDB - object disallowed")
        console.log()
    }
    return isAllowed
}

api.use(express.json())
api.use(express.urlencoded({ extended: true }))
api.use(cors())
api.use(compression())
api.disable('etag')

api.get('/', (req, res) => {
    res.send('Server is up')
})

const getSubmissionStatement = db.prepare("SELECT * FROM Submissions WHERE ID = ?")
api.get('/get_submission', (req, res) => {
    if (!req.query.ID) {
        res.status(400)
        res.send('ID is missing')
        return
    }

    if (isNaN(req.query.ID)) {
        res.status(400)
        res.send('ID is not a number')
        return
    }

    let etag = req.query.ID > latestReportID ? "0" : databaseLastDeleteTime
    if (req.headers['if-none-match'] == etag) {
        res.status(304)
        res.send()
        return
    }

    try {
        let rows = getSubmissionStatement.all([req.query.ID])
        rows = rows.map(database_common.unpackDatabaseObject)

        let cacheLifetime = 300
        if (rows.length != 0) {
            cacheLifetime = 86400
        }

        res.header("Cache-Control", "public, max-age=" + cacheLifetime)
        res.header("ETag", etag)
        res.send(JSON.stringify(rows))
    }
    catch (e) {
        console.log('DB Error')
        console.log(e)

        res.status(500)
        res.send('DB Error')
        return
    }
})

const getTwoSubmissionsStatement = db.prepare("SELECT * FROM Submissions WHERE ID IN (?,?)")
api.get('/get_two_submissions', (req, res) => {
    if (!req.query.IDs) {
        res.status(400)
        res.send('IDs is missing')
        return
    }

    let ids = req.query.IDs.split(",").map(Number)
    if (ids.some(isNaN)) {
        res.status(400)
        res.send('IDs are not numbers')
        return
    }
    if (ids.length != 2) {
        res.status(400)
        res.send('Expected exactly 2 IDs')
        return
    }

    let etag = req.query.ID > latestReportID ? "0" : databaseLastDeleteTime
    if (req.headers['if-none-match'] == etag) {
        res.status(304)
        res.send()
        return
    }

    try {
        let rows = getTwoSubmissionsStatement.all([ids[0], ids[1]])
        rows = rows.map(database_common.unpackDatabaseObject)

        let cacheLifetime = 300
        if (rows.length != 0) {
            cacheLifetime = 86400
        }

        res.header("Cache-Control", "public, max-age=" + cacheLifetime)
        res.header("ETag", etag)
        res.send(JSON.stringify(rows))
    }
    catch (e) {
        console.log('DB Error')
        console.log(e)

        res.status(500)
        res.send('DB Error')
        return
    }
})

api.get('/get_all_submissions', (req, res) => {
    // Check etag to potentially skip returning real data
    const etag = databaseLastModificationTime
    if (req.headers['if-none-match'] == etag) {
        res.status(304)
        res.send()
        return
    }
    
    res.header("Cache-Control", "public, max-age=300")
    res.header("ETag", etag)

    const acceptEncoding = req.headers["accept-encoding"] || "";
    let encoding = "";
    if (acceptEncoding.includes("br")) {
        encoding = "br";
    } else if (acceptEncoding.includes("gzip")) {
        encoding = "gzip";
    } else if (acceptEncoding.includes("deflate")) {
        encoding = "deflate";
    }

    res.setHeader("Content-Encoding", encoding)
    res.send(getAllSubmissionsCache[encoding])
    return
})

const isSubmittedStatement = db.prepare(database_common.convertToSqlSelectIDQuery("Submissions", database_common.submitUniqueProperites, "LIMIT 1"))
api.post('/is_submitted', (req, res) => {
    try {
        let newSubmission = req.body
        if (typeof newSubmission !== 'object' || newSubmission instanceof Array) {
            res.status(400)
            res.send('Bad submission format')
            return
        }

        newSubmission = database_common.packUniqueProperties(newSubmission)
        let parameterList = database_common.convertObjectToArrayOfValues(database_common.submitUniqueProperites, newSubmission)

        let rows = isSubmittedStatement.all(parameterList)
        if (rows.length == 0) {
            res.status(204)
            res.send()
        }
        else {
            rows = rows[0].ID
            res.send(JSON.stringify(rows))
        }
    }
    catch (e) {
        console.log('DB Error')
        console.log(e)

        res.status(500)
        res.send('DB Error')
        return
    }
})

const postSubmissionStatement = db.prepare(database_common.convertToSqlInsertQuery("Submissions", database_common.submitAllProperties))
api.post('/post_submission', (req, res) => {
    try {
        let newSubmission = req.body
        if (typeof newSubmission !== 'object' || newSubmission instanceof Array) {
            res.status(400)
            res.send('Bad submission format')
            return
        }

        newSubmission = database_common.packDatabaseObject(newSubmission)

        if (!isObjectAllowedInDB(newSubmission)) {
            res.status(400)
            res.send('Bad submission format')
            return
        }

        if (semver.lt(newSubmission["Header.Version"], "3.13.0")) {
            res.status(400)
            res.send('Unsupported D3d12info version. Please use newer D3d12infoGUI version to submit.')
            return
        }

        let isSubmittedParameterList = database_common.convertObjectToArrayOfValues(database_common.submitUniqueProperites, newSubmission)
        let parameterList = database_common.convertObjectToArrayOfValues(database_common.submitAllProperties, newSubmission)

        let submitted = isSubmittedStatement.all(isSubmittedParameterList)
        if (submitted.length != 0) {
            res.status(400)
            res.send("Already submitted")
            return
        }

        let info = postSubmissionStatement.run(parameterList)

        res.send("" + info.lastInsertRowid)
        markDatabaseModified()
        latestReportID = Math.max(info.lastInsertRowid, latestReportID)

        console.log(`Inserted submission ID ${info.lastInsertRowid} - ${newSubmission["DXGI_ADAPTER_DESC3.Description"]}`)

        let notification = {
            "embeds": [
                {
                    "title": newSubmission["DXGI_ADAPTER_DESC3.Description"],
                    "url": `https://d3d12infodb.boolka.dev/ID?ID=${info.lastInsertRowid}`,
                    "fields": [
                        {
                            "name": "Vendor",
                            "value": notification_handler.formatVendor(newSubmission["DXGI_ADAPTER_DESC3.VendorId"]),
                            "inline": true
                        },
                        {
                            "name": "Driver Version",
                            "value": notification_handler.formatDriverVersion(newSubmission["CheckInterfaceSupport.UMDVersion"]),
                            "inline": true
                        },
                        {
                            "name": "VRAM",
                            "value": notification_handler.formatVRAM(newSubmission["DXGI_ADAPTER_DESC3.DedicatedVideoMemory"]),
                            "inline": true
                        },
                        {
                            "name": "D3d12info Version",
                            "value": newSubmission["Header.Version"],
                            "inline": true
                        },
                        {
                            "name": "Preview Agility SDK?",
                            "value": newSubmission["Header.Using preview Agility SDK"] ? "Yes" : "No",
                            "inline": true
                        }
                    ],
                    "footer": {
                        "text": "New submission"
                    }
                }
            ]
        }

        if (process.env.SubmissionRemovalPassword) {
            notification.embeds[0].fields.push({
                "name": "Remove submission",
                "value": `[x](https://d3d12infodbapi.boolka.dev/remove_submission?ID=${info.lastInsertRowid}&password=${process.env.SubmissionRemovalPassword})`,
                "inline": true
            })
        }

        notification_handler.notify(notification)

        return
    }
    catch (e) {
        console.log('DB Error')
        console.log(e)

        res.status(500)
        res.send('DB Error')
        return
    }
})

if (process.env.SubmissionRemovalPassword) {
    const removeSubmissionStatement = db.prepare("DELETE FROM Submissions WHERE ID = ?")
    api.get('/remove_submission', (req, res) => {
        const password = req.query.password
        const ID = Number(req.query.ID)

        if (password !== process.env.SubmissionRemovalPassword) {
            res.status(401)
            res.send('Unauthorized')
            console.log('Unauthorized removal attempt')
            return
        }

        if (!ID) {
            res.status(400)
            res.send('ID is missing')
            console.log('Failed removal attempt. ID is missing.')
            return
        }

        if (!Number.isInteger(ID) || ID < 1 || ID > latestReportID) {
            res.status(400)
            res.send('ID is not a valid number')
            console.log('Failed removal attempt. ID is not a valid number.')
            return
        }

        try {
            const info = removeSubmissionStatement.run(ID)
            if (info.changes === 0) {
                res.status(404)
                res.send('Submission not found')
                console.log(`Failed removal attempt. Submission not found ID ${ID}.`)
                return
            }
            res.send('OK')
            markDatabaseModified(true)
            console.log(`Removed submission ID ${ID}`)
        }
        catch (e) {
            console.log('DB Error')
            console.log(e)

            res.status(500)
            res.send('DB Error')
            return
        }
    })
}

if (process.env.SSLKey && process.env.SSLCert) {
    console.log('Starting HTTPS Server')
    const options = {
        key: fs.readFileSync(process.env.SSLKey),
        cert: fs.readFileSync(process.env.SSLCert),
    }
    https.createServer(options, api).listen(apiPort, () => {
        console.log(`Started HTTPS Server on port ${apiPort}`)
    })
}
else {
    console.log('Starting HTTP Server')
    http.createServer(api).listen(apiPort, () => {
        console.log(`Started HTTP Server on port ${apiPort}`)
    })
}
