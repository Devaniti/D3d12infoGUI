import ReportContainer from './report_container.mjs';
import * as Constants from "./constants.mjs"

function PrepareReportInternal(prefix, obj, filter) {
    let result = {}
    for (const property in obj) {
        if (typeof obj[property] === 'object' && !Array.isArray(obj[property])) {
            let subResult = PrepareReportInternal(`${prefix}${property}.`, obj[property], filter)
            if (Object.keys(subResult).length > 0) {
                result[property] = subResult;
            }
        } else {
            if (filter(`${prefix}${property}`)) {
                result[property] = obj[property];
            }
        }
    }
    return result
}

function PrepareReport(header, report, filter) {
    const mergedObject = { ...header, ...report };
    const filteredReport = PrepareReportInternal("", mergedObject, filter)
    return JSON.stringify(filteredReport)
}

function PrivacyFilter(property) {
    let propertyLower = property.toLowerCase()
    if (propertyLower.includes("uuid") || propertyLower.includes("luid")) {
        return false
    }
    return true
}

function IsSubmittedFilter(property) {
    switch (property) {
        case "Header.Version":
        case "Header.Using preview Agility SDK":
        case "SystemInfo.OS Info.Windows version":
        case "SystemInfo.D3D12EnableExperimentalFeatures":
        case "DXGI_ADAPTER_DESC3.Description":
        case "DXGI_ADAPTER_DESC3.VendorId":
        case "DXGI_ADAPTER_DESC3.DeviceId":
        case "DXGI_ADAPTER_DESC3.SubSysId":
        case "DXGI_ADAPTER_DESC3.Revision":
        case "DXGI_ADAPTER_DESC3.DedicatedVideoMemory":
        case "CheckInterfaceSupport.UMDVersion":
            return true
        default:
            return false
    }
}

export function SubmitReport(header, adapter, onSuccess, onFailure) {
    let xhr = new XMLHttpRequest()
    xhr.open("POST", Constants.APIAddress + "/post_submission")
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = () => {
        if (xhr.readyState != 4)
            return;

        if (xhr.status == 200) {
            if (onSuccess != null)
                onSuccess(xhr.responseText)
        }
        else {
            if (onFailure != null)
                onFailure(xhr.responseText)
        }
    }
    xhr.send(PrepareReport(header.GetOriginalReport(), adapter.GetOriginalReport(), PrivacyFilter))
}

export function IsSubmitted(header, adapter, callback) {
    let xhr = new XMLHttpRequest()
    xhr.open("POST", Constants.APIAddress + "/is_submitted")
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onloadend = () => {
        if (xhr.status == 200) {
            callback(Number(xhr.responseText))
        }
        else {
            callback(-1)
        }
    }

    xhr.send(PrepareReport(header.GetOriginalReport(), adapter.GetOriginalReport(), IsSubmittedFilter))
}

export function GetAllSubmissions(onSuccess) {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", Constants.APIAddress + "/get_all_submissions")
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let reports = JSON.parse(xhr.responseText).map(e => new ReportContainer(e))
            onSuccess(reports)
        }
    }
    xhr.send()
}

export function GetTwoSubmissions(ids, onSuccess) {
    if (ids.length != 2)
    {
        return;
    }
    let xhr = new XMLHttpRequest();
    xhr.open("GET", Constants.APIAddress + "/get_two_submissions?IDs=" + ids.join(","));
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let reports = JSON.parse(xhr.responseText).map(e => new ReportContainer(e));
            onSuccess(reports);
        }
    }
    xhr.send(JSON.stringify(ids))
}

export function GetSubmission(id, onSuccess) {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", Constants.APIAddress + "/get_submission?ID=" + id)
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            debugger
            let reports = JSON.parse(xhr.responseText).map(e => new ReportContainer(e))
            onSuccess(reports)
        }
    }
    xhr.send()
}