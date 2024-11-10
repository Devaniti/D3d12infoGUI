import * as Constants from "./constants.mjs"
import * as Properties from "./properties.mjs"

export default class ReportContainer {
    #originalReport = {}
    #fields = []
    #fieldsMap = {}

    #import(data) {
        this.#originalReport = data
        let dest = this.#fields
        function flatten(obj, prefix) {
            if (typeof (obj) == "object" && !Array.isArray(obj)) {
                for (const property in obj) {
                    let newPrefix = prefix
                    if (newPrefix != "") newPrefix += "."
                    newPrefix += property
                    flatten(obj[property], newPrefix)
                }
            }
            else if (Array.isArray(obj)) {
                // if all elements of array are strings, then join them
                if (obj.every(e => typeof e != "object")) {
                    dest.push({ name: prefix, value: obj.join(", ") })
                }
                else {
                    for (let i = 0; i < obj.length; ++i) {
                        flatten(obj[i], `${prefix}[${i}]`)
                    }
                }
            }
            else if (typeof obj == "boolean") {
                dest.push({ name: prefix, value: +obj })
            }
            else {
                dest.push({ name: prefix, value: obj })
            }
        }
        flatten(data, "")
    }

    #patchData() {
        for (const e of this.#fields) {
            if (e.name in Constants.RenameList) {
                e.name = Constants.RenameList[e.name]
            }
        }

        for (const e of this.#fields) {
            switch (e.name) {
                case "NvPhysicalGpuHandle.NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::implementation_id":
                    {
                        for (const e2 of this.#fields) {
                            if (e2.name == "NvPhysicalGpuHandle.NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id") {
                                e.value += e2.value
                                break
                            }
                        }
                    }
                    break
            }
        }
    }

    #reorderFields() {
        function getPropertyIndex(a) {
            let reorderName = Properties.GetNameBeforeArrayIndex(a.name)
            let result = Constants.PropertiesOrderMap.get(reorderName) ?? Infinity
            if (result == Infinity) console.log(`No order for ${a.name}`)
            return result
        }

        function getSubPropertyIndex(a) {
            let reorderName = Properties.RemoveArrayIndex(a.name)
            let result = Constants.SubPropertiesOrderMap.get(reorderName) ?? Infinity
            if (result == Infinity) console.log(`No order for ${a.name}`)
            return result
        }

        this.#fields = this.#fields.sort((a, b) => {
            let aIndex = getPropertyIndex(a)
            let bIndex = getPropertyIndex(b)

            if (aIndex != bIndex) {
                return aIndex - bIndex
            }

            if (aIndex == bIndex) {
                // Extract the numeric parts (if any)
                const aNum = parseInt(a.name.match(/\d+/), 10) || 0;
                const bNum = parseInt(b.name.match(/\d+/), 10) || 0;
                // Compare the numeric parts
                if (aNum !== bNum) {
                    return aNum - bNum;
                }

                // Compare sub properties
                aIndex = getSubPropertyIndex(a)
                bIndex = getSubPropertyIndex(b)
                if (aIndex != bIndex) {
                    return aIndex - bIndex
                }

                // Compare the full strings
                return a.name.localeCompare(b.name)
            }

            return aIndex - bIndex
        })
    }

    #initializeMap() {
        for (const e of this.#fields) {
            this.#fieldsMap[e.name] = e.value
        }
    }

    constructor(data) {
        this.#import(data)
        this.#patchData()
        this.#reorderFields()
        this.#initializeMap()
    }

    *[Symbol.iterator]() {
        for (const field of this.#fields) {
            yield field;
        }
    }

    HumanReadable(filterCallback) {
        class HumanReadableObj {
            constructor(fields, filterCallback) {
                this.fields = fields;
                this.filterCallback = filterCallback;
            }

            *[Symbol.iterator]() {
                for (const field of this.fields) {
                    if (this.filterCallback(field.name, field.value)) {
                        let humanReadableName = Properties.MakeHumanReadableProperty(field.name)
                        let humanReadableValue = Properties.MakeHumanReadable(field.name, field.value)
                        yield { name: humanReadableName, value: humanReadableValue }
                    }
                }
            }
        }

        return new HumanReadableObj(this.#fields, filterCallback);
    }

    GetField(field) {
        return this.#fieldsMap[field]
    }

    GetOriginalReport() {
        return this.#originalReport
    }
}
