"use strict"

const fs = require('fs')
const database_common = require('./database_common.js')

const databaseSchemaPath = 'DBSchema.sql'

function UpdateViaSQL(sqlPath) {
    return function (db) {
        console.log(`Updating via SQL file ${sqlPath}`)
        db.exec(fs.readFileSync(sqlPath).toString())
        console.log(`Finished updating via SQL file ${sqlPath}`)
    }
}

function ReWrapObject(input) {
    const result = {};
    let externalProperties = ["ID"].concat(database_common.submitUniqueProperites);
    externalProperties.forEach((key) => {
        result[key] = input[key];
        delete input[key];
    });

    result['Data'] = database_common.deflattenObject(input);
    return result;
}

function FixupOldData(input) {
    let NVGPU = input["Data"]["NvPhysicalGpuHandle"];
    if (NVGPU != undefined) {
        if (NVGPU["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::implementation_id"] != undefined) {
            NVGPU["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::implementation_id"] -=
                NVGPU["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id"];
        }
    }
}

function UpdateToV5(db) {
    console.log("Runnign custom updater for version 5")
    let rows = db.prepare("SELECT * FROM Submissions").all()
    let newRows = rows.map(ReWrapObject)
    let insertProperties = ["ID"].concat(database_common.submitAllProperties);

    try {
        db.exec("DROP TABLE Submissions")
        db.exec(fs.readFileSync(databaseSchemaPath).toString())
        let insertStatement = db.prepare(database_common.convertToSqlInsertQuery("Submissions", insertProperties))
        newRows.forEach((row) => {
            console.log(row.ID)
            FixupOldData(row)
            let parameterList = database_common.convertObjectToArrayOfValues(insertProperties, row)
            insertStatement.run(parameterList)
        })
    }
    catch (e) {
        console.log('DB Error')
        console.log(e)
        throw e
    }

    console.log("Finished updating to version 5")
}

// Uses source schema version as an index
const UPGRADE_SCRIPTS = {
    1: UpdateViaSQL("UpgradeScripts/To_1_1_0.sql"),
    2: UpdateViaSQL("UpgradeScripts/To_1_2_0.sql"),
    3: UpdateViaSQL("UpgradeScripts/To_1_3_0.sql"),
    4: UpdateToV5
}

const CURRENT_SCHEMA_VERSION = 5

module.exports = {
    upgradeDatabase: function (db) {
        let schemaVersion = db.pragma('user_version', { simple: true })
        console.log(`Database schema version is ${schemaVersion}`)

        if (schemaVersion == 0) {
            console.log("Setting up new database")
            db.exec(fs.readFileSync(databaseSchemaPath).toString())
            console.log("Finished new database setup")
            schemaVersion = CURRENT_SCHEMA_VERSION
        }

        if (schemaVersion < CURRENT_SCHEMA_VERSION) {
            console.log("Upgrading database")
            for (let i = schemaVersion; i < CURRENT_SCHEMA_VERSION; i++) {
                UPGRADE_SCRIPTS[i](db)
            }
            console.log("Finished upgrading")
        }

        if (schemaVersion == CURRENT_SCHEMA_VERSION) {
            console.log("Database schema is up to date")
        }

        if (schemaVersion > CURRENT_SCHEMA_VERSION) {
            console.log(`FATAL ERROR: Unexpected schema version ${schemaVersion}`)
            process.exit(1)
        }
    }
}