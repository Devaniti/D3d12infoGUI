import * as Server from './server.mjs'
import * as ReportViewer from './website_report_viewer.mjs'
import * as HTML from './html.mjs'

function ShowError(message) {
    const tableContainer = document.getElementById("TableContainer")
    const textContainer = document.createElement("div")
    const loadingText = document.createTextNode(message)
    textContainer.appendChild(loadingText)
    HTML.ClearElement(tableContainer)
    tableContainer.appendChild(textContainer)
}

function OnLoad() {
    const queryParams = (new URL(document.location)).searchParams
    if (!queryParams.has('ID')) {
        ShowError("Missing ID parameter.")
        return
    }

    ReportViewer.Initialize(false, false)

    Server.GetSubmission(queryParams.get('ID'), (reports) => {
        if (reports.length == 0) {
            ShowError("Invalid ID.")
            return
        }
        let queryParams = (new URL(document.location)).searchParams
        ReportViewer.LoadReports(reports, queryParams.get('ID'))
        document.title = reports[0].GetField("DXGI_ADAPTER_DESC3.Description") + " - D3d12infoDB";
    })
}

window.addEventListener('DOMContentLoaded', OnLoad, false);
