import * as Server from './server.mjs'
import * as ReportViewer from './website_report_viewer.mjs'

function OnLoad() {
    ReportViewer.Initialize(false)

    Server.GetAllSubmissions((reports) => {
        let queryParams = (new URL(document.location)).searchParams
        ReportViewer.LoadReports(reports, queryParams.get('ID'))
    })
}

window.addEventListener('DOMContentLoaded', OnLoad, false);
