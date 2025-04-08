import * as Server from './server.mjs'
import * as ReportViewer from './website_report_viewer.mjs'

function OnLoad() {
    ReportViewer.Initialize(false)

    Server.GetAllSubmissions((reports) => {
        let queryParams = (new URL(document.location)).searchParams
        let reportID = queryParams.get('ID')
        ReportViewer.LoadReports(reports, reportID)

        if (reportID !== null) {
            var report = reports.find(r => r.GetField("ID") == reportID)
            if (report != null) {    
                document.title = report.GetField("DXGI_ADAPTER_DESC3.Description") + " - D3d12infoDB";
            }
        }
    })
}

window.addEventListener('DOMContentLoaded', OnLoad, false);
