"use strict"

let SubmitUniqueProperitesInternal = require("./StructureDesc/submit_unique_properties.json")
let SubmitRequiredProperitesInternal = require("./StructureDesc/submit_required_properties.json")

function ToSqlite3SupportedTypeInternal(inObj) {
    if (inObj instanceof Object) {
        return JSON.stringify(inObj)
    } else if (typeof inObj === 'boolean') {
        return inObj ? 1 : 0;
    } else
    {
        return inObj
    }
}

function DeflattenObjectInternal(input) {
    const result = {};

    for (const key in input) {
        if (input[key] == null) continue;

        const keyParts = key.split('.');
        let currentLevel = result;

        for (let i = 0; i < keyParts.length - 1; i++) {
            if (currentLevel[keyParts[i]] == undefined)
                currentLevel[keyParts[i]] = {};

            currentLevel = currentLevel[keyParts[i]];
        }

        currentLevel[keyParts[keyParts.length - 1]] = input[key];
    }

    return result;
}

function PackObjectInternal(input, includeData, allowMissing = false) {
    if (input["ID"] != undefined) {
        throw new Error("ID property is not allowed in input object")
    }

    let result = {}
    SubmitUniqueProperitesInternal.forEach(prop => {
        let propertyStack = [input]
        let propParts = prop.split('.')
        for (let i = 0; i < propParts.length; i++) {
            if (propertyStack[propertyStack.length - 1] == undefined) {
                if (!allowMissing)
                {
                    throw new Error(`Property ${prop} is missing`)
                }
                result[prop] = null
                return
            }
            propertyStack.push(propertyStack[propertyStack.length - 1][propParts[i]])
        }
        result[prop] = propertyStack[propertyStack.length - 1]
        do {
            delete propertyStack[propertyStack.length - 2][propParts[propParts.length - 1]]
            propertyStack.pop()
            propParts.pop()
        } while (propertyStack.length > 1 && Object.keys(propertyStack[propertyStack.length - 1]).length == 0)
    })

    if (includeData && Object.keys(input).length > 0) {
        result.Data = JSON.stringify(input)
    }

    return result
}

function DeepMergeInternal(target, source) {
    for (const key in source) {
        if (source[key] instanceof Object && key in target)
            DeepMergeInternal(target[key], source[key])
        else
            target[key] = source[key]
    }
}

module.exports = {
    submitUniqueProperites: SubmitUniqueProperitesInternal,
    submitRequiredProperites: SubmitRequiredProperitesInternal,
    submitAllProperties: ["Data"].concat(SubmitUniqueProperitesInternal),

    toSqlite3SupportedType: ToSqlite3SupportedTypeInternal,

    convertToSqlInsertQuery: function (tableName, propertyArray) {
        let columnsString = "(" + propertyArray.map(e => `"${e}"`).join(",") + ")"
        let valuesString = "(" + propertyArray.map(e => "?").join(",") + ")"
        let sqlQuery = `INSERT INTO ${tableName} ${columnsString} Values ${valuesString};`
        return sqlQuery
    },

    convertToSqlSelectIDQuery: function (tableName, propertyArray, suffix) {
        let filterString = propertyArray.map(e => `"${e}" IS ?`).join(" AND ")
        let sqlQuery = `Select ID from ${tableName} WHERE ${filterString} ${suffix};`
        return sqlQuery
    },

    convertObjectToArrayOfValues: function (propertyList, inObj) {
        return propertyList.map(e => ToSqlite3SupportedTypeInternal(inObj[e]))
    },

    deflattenObject: DeflattenObjectInternal,

    packUniqueProperties: function (input) {
        return PackObjectInternal(input, false, true)
    },

    packDatabaseObject: function (input) {
        return PackObjectInternal(input, true)
    },

    unpackDatabaseObject: function (input) {
        input = DeflattenObjectInternal(input)
        DeepMergeInternal(input, JSON.parse(input.Data))
        delete input.Data
        return input
    }
}