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

console.log("Database is ready")

api.use(express.json())
api.use(express.urlencoded({ extended: true }))
api.use(cors())
api.use(compression())

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

    try {
        let rows = getSubmissionStatement.all([req.query.ID])
        rows = rows.map(database_common.unpackDatabaseObject)
        res.header("Cache-Control", "public, max-age=300")
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
    try {
        let rows = getAllSubmissionsStatement.all()
        rows = rows.map(database_common.unpackDatabaseObject)
        res.header("Cache-Control", "public, max-age=300")
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

        console.log(`Inserted submission ID ${info.lastInsertRowid} - ${newSubmission["DXGI_ADAPTER_DESC3.Description"]}`)

        notification_handler.notify({
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
        })

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
