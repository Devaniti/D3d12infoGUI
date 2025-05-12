import * as Constants from "./constants.mjs"
import * as Properties from "./properties.mjs"

export default class ReportContainer {
    #originalReport = {}
    #fields = []
    #formats = {}
    #fieldsMap = {}

    #import(data) {
        this.#originalReport = data
        let dest = this.#fields
        this.#formats = data.Formats
        function flatten(obj, prefix) {
            // Formats are handled separately
            // Need to filter out Formats from the fields
            if (prefix == "Formats") {
                return
            }
            else if (typeof (obj) == "object" && !Array.isArray(obj)) {
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
        this.#fields = this.#fields.sort(Properties.PropertyComparison)
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

    Formats() {
        return this.#formats
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

    FilteredFields(filterCallback) {
        class HumanReadableObj {
            constructor(fields, filterCallback) {
                this.fields = fields;
                this.filterCallback = filterCallback;
            }

            *[Symbol.iterator]() {
                for (const field of this.fields) {
                    if (this.filterCallback(field.name, field.value)) {
                        yield field;
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
