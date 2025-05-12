"use strict"

const path = require('path');
// Get the directory of the current script
const scriptDirectory = __dirname;
// Change the current working directory to the script's directory
process.chdir(scriptDirectory);

const fs = require('fs')
const https = require('https')
const http = require('http')
const express = require('express')
const cors = require('cors')
const compression = require('compression')
const Database = require('better-sqlite3')
const upgrade = require('./upgrade.js')
const database_common = require('./database_common.js')
const notification_handler = require('./notification_handler.js')

const databaseFolder = 'Database/'
const databasePath = databaseFolder + 'main.db'

const apiPort = process.env.D3D12INFODB_CUSTOM_PORT ? process.env.D3D12INFODB_CUSTOM_PORT : 50854;

function GetCurrentTimeAsString() {
    return "" + (new Date()).valueOf()
}

const startupTime = GetCurrentTimeAsString()
let databaseLastDeleteTime = startupTime
let databaseLastModificationTime = startupTime

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

const getAllSubmissionsStatement = db.prepare("SELECT * FROM Submissions")
api.get('/get_all_submissions', (req, res) => {
    let etag = databaseLastModificationTime
    if (req.headers['if-none-match'] == etag) {
        res.status(304)
        res.send()
        return
    }

    try {
        let rows = getAllSubmissionsStatement.all()
        rows = rows.map(database_common.unpackDatabaseObject)
        res.header("Cache-Control", "public, max-age=300")
        res.header("ETag", databaseLastModificationTime)
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
        databaseLastModificationTime = GetCurrentTimeAsString()
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
            databaseLastDeleteTime = GetCurrentTimeAsString()
            databaseLastModificationTime = databaseLastDeleteTime
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
