import ReportContainer from './report_container.mjs';
import * as Server from './server.mjs';
import * as HTML from './html.mjs';
import * as Properties from './properties.mjs';
import Globals from './globals.mjs';

const SubmissionIDs = [[], []]

// 0 - Retail, 1 - Preview
let RetailIndex = 0
let ReportIndex = 0

let PreviewAvailable = false
let Headers = []
let Adapters = []

function HaveUnsubmittedReports() {
    return SubmissionIDs.some(e => e.some(e => e == -1))
}

function IsPreviewAvailable() {
    return Adapters.length > 1
}

function IterateAdapters(callback) {
    for (let i = 0; i < Adapters.length; ++i) {
        for (let j = 0; j < Adapters[i].length; ++j) {
            callback(i, j, Adapters[i][j])
        }
    }
}

function InitReportData() {
    Headers = reports.map(e => {
        return new ReportContainer({ "Header": e.Header, "SystemInfo": e.SystemInfo })
    })
    Adapters = reports.map(e => e.Adapters.map(e => new ReportContainer(e)))
}

function SubmitAllReports() {
    let adaptersMap = new Set();
    IterateAdapters((retailIndex, index, adapter) => {
        if (SubmissionIDs[retailIndex][index] >= 0)
            return

        let adapterKey = JSON.stringify([
            retailIndex,
            adapter.GetField("DXGI_ADAPTER_DESC3.Description"),
            adapter.GetField("DXGI_ADAPTER_DESC3.VendorId"),
            adapter.GetField("DXGI_ADAPTER_DESC3.DeviceId"),
            adapter.GetField("DXGI_ADAPTER_DESC3.SubSysId"),
            adapter.GetField("DXGI_ADAPTER_DESC3.Revision"),
            adapter.GetField("DXGI_ADAPTER_DESC3.DedicatedVideoMemory"),
            adapter.GetField("CheckInterfaceSupport.UMDVersion")
        ])
        if (adaptersMap.has(adapterKey)) {
            console.log(`Skipping ${retailIndex == 0 ? "retail" : "preview"} adapter ${adapter.GetField("DXGI_ADAPTER_DESC3.Description")} with index ${index}, as it is detected as duplicate`)
            return
        }
        adaptersMap.add(adapterKey);

        SubmissionIDs[retailIndex][index] = null
        SubmitReport(Headers[retailIndex], adapter, (ID) => {
            SubmissionIDs[retailIndex][index] = ID;
            UpdateList();
        })
    })
    UpdateList()
}

function UpdateList() {
    const listContainer = document.getElementById("ListContainer")

    HTML.ClearElement(listContainer)

    const table = document.createElement("table")
    const tableBody = document.createElement("tbody")

    const header = [
        "DXGI_ADAPTER_DESC3.Description",
        "DXGI_ADAPTER_DESC3.VendorId",
        "DXGI_ADAPTER_DESC3.DedicatedVideoMemory",
        "CheckInterfaceSupport.UMDVersion"
    ]

    if (IsPreviewAvailable())
        header.push("Header.Using preview Agility SDK")

    header.push("Online link")

    const firstRow = document.createElement("tr")
    const cell = document.createElement("td")
    cell.colSpan = header.length
    let submitButton = document.createElement("button")
    submitButton.disabled = !HaveUnsubmittedReports();
    submitButton.onclick = () => {
        SubmitAllReports()
    }
    const buttonText = document.createTextNode("Submit all reports")
    submitButton.appendChild(buttonText)
    cell.appendChild(submitButton)
    firstRow.appendChild(cell)
    tableBody.appendChild(firstRow)

    const secondRow = document.createElement("tr")
    header.forEach(collumn => {
        const cell = document.createElement("td")
        const cellText = document.createTextNode(Properties.MakeHumanReadableProperty(collumn))
        cell.appendChild(cellText)
        secondRow.appendChild(cell)
    })
    tableBody.appendChild(secondRow)

    IterateAdapters((retailIndex, index, adapter) => {
        const row = document.createElement("tr")
        header.forEach(collumn => {
            const cell = document.createElement("td")
            switch (collumn) {
                case "Online link":
                    switch (SubmissionIDs[retailIndex][index]) {
                        case null:
                            {
                                let cellText = document.createTextNode("Please wait...")
                                cell.appendChild(cellText)
                                break;
                            }
                        case -1:
                            {
                                let link = document.createElement("a")
                                link.href = "#"
                                link.textContent = "Submit"
                                link.onclick = () => {
                                    SubmissionIDs[retailIndex][index] = null;
                                    UpdateList();
                                    SubmitReport(Headers[retailIndex], adapter, (ID) => {
                                        SubmissionIDs[retailIndex][index] = ID;
                                        UpdateList();
                                    })
                                }
                                cell.appendChild(link)
                                break;
                            }
                        default:
                            {
                                let link = document.createElement("a")
                                link.href = `${Server.siteAddress}/ID.html?ID=${SubmissionIDs[retailIndex][index]}`
                                link.textContent = "Open Online"
                                cell.appendChild(link)
                                break;
                            }
                    }
                    break
                default:
                    let value = adapter.GetField(collumn) ?? Headers[retailIndex].GetField(collumn)
                    let cellText = document.createTextNode(Properties.MakeHumanReadable(collumn, value))
                    cell.appendChild(cellText)
                    break
            }
            row.appendChild(cell)
        })
        row.addEventListener('click', function (e) {
            if (e.target.tagName.toLowerCase() === 'a') return;

            RetailIndex = retailIndex
            ReportIndex = index
            UpdateHeader()
            UpdateReport()
        })
        row.classList.add("clickableRow")
        tableBody.appendChild(row)
    });

    table.appendChild(tableBody)
    listContainer.appendChild(table)
}

function UpdateSearchBar() {
    const searchBarContainer = document.getElementById("SearchBarPropertiesContainer")

    HTML.ClearElement(searchBarContainer)

    const searchBar = document.createElement("input")
    searchBar.type = "search"
    searchBar.placeholder = "Search Properties"
    searchBar.classList.add("searchBar")
    searchBar.addEventListener('input', function (e) {
        Globals.PropertiesSearchString = searchBar.value
        UpdateHeader()
        UpdateReport()
    })
    searchBarContainer.appendChild(searchBar)
}

function UpdateHeader() {
    const headerContainer = document.getElementById("HeaderContainer")

    HTML.ClearElement(headerContainer)

    const table = document.createElement("table")
    const tableBody = document.createElement("tbody")

    // Empty first row to make automatic table size calculation consistent between tables
    const firstRow = document.createElement("tr")
    tableBody.appendChild(firstRow)

    HTML.WriteObjectToTable(Headers[RetailIndex], tableBody, "", false)

    table.appendChild(tableBody)
    headerContainer.appendChild(table)
}

function UpdateReport() {
    const report = Adapters[RetailIndex][ReportIndex]

    const reportContainer = document.getElementById("ReportContainer")

    HTML.ClearElement(reportContainer)

    const table = document.createElement("table")
    const tableBody = document.createElement("tbody")

    {
        const firstRow = document.createElement("tr")
        tableBody.appendChild(firstRow)
    }

    HTML.WriteObjectToTable(report, tableBody)

    table.appendChild(tableBody)
    reportContainer.appendChild(table)
}

function QueryReportIDs() {
    IterateAdapters((retailIndex, index, adapter) => {
        SubmissionIDs[retailIndex][index] = null;
        Server.IsSubmitted(Headers[retailIndex], adapter, (ID) => {
            SubmissionIDs[retailIndex][index] = ID;
            UpdateList();
        })
    })
}

function UpdateOutput() {
    if (Headers.length == 0) {
        const errorText = document.createTextNode("No reports generated")
        document.body.appendChild(errorText)
        return
    }

    UpdateList()
    UpdateSearchBar()
    UpdateHeader()
    UpdateReport()
}

function OnLoad() {
    InitReportData()
    QueryReportIDs()
    UpdateOutput()
}

window.addEventListener('DOMContentLoaded', OnLoad, false);
