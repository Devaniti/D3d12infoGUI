import * as HTML from "./html.mjs"
import * as Constants from "./constants.mjs"
import * as Properties from "./properties.mjs"
import * as Globals from './globals.mjs';

let SingleReport = false
let Reports = []
let ReportIndex = 0

let SortProperty = "ID"
let SortInverse = true
let Page = 0
let PageCount = 0
const ElementsPerPage = 10

let AdaptersSearchString = ""
let AdaptersFilters = []
let FilteredReports = []

function FilterSingleReport(wrappedReport) {
    let report = wrappedReport.value
    let adaptersSearchString = AdaptersSearchString.toLowerCase()
    let searchTest = adaptersSearchString == ""
        || Constants.ListHeader.some(collumn => {
            let value = report.GetField(collumn)
            let humanReadableValue = Properties.MakeHumanReadable(collumn, value).toString().toLowerCase()
            value = value.toString().toLowerCase()
            return value.includes(adaptersSearchString)
                || humanReadableValue.includes(adaptersSearchString)
        })
    let filterTest = Constants.FilterMultichoiceFields.every(filter => {
        let value = report.GetField(filter)
        return AdaptersFilters[filter][value]
    })
    let adapterType = report.GetField("DXGI_ADAPTER_DESC3.Flags") & 2 ? "Software" : "Hardware"
    let adapterTypeTest = AdaptersFilters["Adapter Type"][adapterType]
    return searchTest && filterTest && adapterTypeTest
}

function FilterReports() {
    let reportMap = Reports.map((e, i) => { return { index: i, value: e } })

    return reportMap.filter(FilterSingleReport)
}

function IterateReports(callback) {
    let sortedReports = FilteredReports.sort((a, b) => {
        let aValue = a.value.GetField(SortProperty)
        let bValue = b.value.GetField(SortProperty)

        let compare = 0
        if (aValue < bValue) compare = -1
        if (aValue > bValue) compare = 1
        if (SortInverse) compare *= -1
        return compare
    })
    for (let i = Page * ElementsPerPage; i < Math.min((Page + 1) * ElementsPerPage, sortedReports.length); ++i) {
        callback(sortedReports[i].index, sortedReports[i].value)
    }
}

function SetSortCollumn(collumn) {
    if (SortProperty == collumn) {
        SortInverse = !SortInverse
    }
    else {
        SortProperty = collumn
        SortInverse = false
    }

    Page = 0
}

function UpdateSearchBarAdapters() {
    const searchBarContainer = document.getElementById("SearchBarAdaptersContainer")

    HTML.ClearElement(searchBarContainer)

    const searchBar = document.createElement("input")
    searchBar.type = "search"
    searchBar.placeholder = "Search Adapters"
    searchBar.classList.add("searchBar")
    searchBar.addEventListener('input', function (e) {
        AdaptersSearchString = searchBar.value
        PrepareReports()
        UpdateList()
    })
    searchBarContainer.appendChild(searchBar)
}

const DefaultFilterValues = {
    "DXGI_ADAPTER_DESC3.VendorId": {
        "default": true
    },
    "Header.Version": {
        "default": true
    },
    "Header.Using preview Agility SDK": {
        "default": true,
        "1": false, // By default hide preview reports
    },
    "Adapter Type": {
        "default": false,
        "Hardware": true
    }
}

function AddFilterMultichoice(container, property) {
    const filterFieldSet = document.createElement("fieldset")
    const filterLegend = document.createElement("legend")
    filterLegend.appendChild(document.createTextNode(Properties.MakeHumanReadableProperty(property)))
    AdaptersFilters[property] = []

    let valuesList = [...new Set(Reports.map(e => e.GetField(property)))].sort().reverse()
    valuesList.forEach(e => {
        const checkboxLabel = document.createElement("label")
        const filterCheckbox = document.createElement("input")
        filterCheckbox.type = "checkbox"
        filterCheckbox.checked = DefaultFilterValues[property][e] ?? DefaultFilterValues[property]["default"]
        AdaptersFilters[property][e] = filterCheckbox.checked
        filterCheckbox.addEventListener('change', () => {
            AdaptersFilters[property][e] = filterCheckbox.checked
            PrepareReports()
            UpdateList()
        })
        checkboxLabel.appendChild(filterCheckbox)
        checkboxLabel.appendChild(document.createTextNode(Properties.MakeHumanReadable(property, e)))
        filterFieldSet.appendChild(checkboxLabel)
        filterFieldSet.appendChild(document.createElement("br"))
    })

    filterFieldSet.appendChild(filterLegend)
    container.appendChild(filterFieldSet)
}

function AddFilterAdapterType(container) {
    const filterFieldSet = document.createElement("fieldset")
    const filterLegend = document.createElement("legend")
    const property = "Adapter Type"
    filterLegend.appendChild(document.createTextNode(Properties.MakeHumanReadableProperty(property)))
    AdaptersFilters[property] = []

    let valuesList = ["Hardware", "Software"]
    valuesList.forEach(e => {
        const checkboxLabel = document.createElement("label")
        const filterCheckbox = document.createElement("input")
        filterCheckbox.type = "checkbox"
        filterCheckbox.checked = DefaultFilterValues[property][e] ?? DefaultFilterValues[property]["default"]
        AdaptersFilters[property][e] = filterCheckbox.checked
        filterCheckbox.addEventListener('change', () => {
            AdaptersFilters[property][e] = filterCheckbox.checked
            PrepareReports()
            UpdateList()
        })
        checkboxLabel.appendChild(filterCheckbox)
        checkboxLabel.appendChild(document.createTextNode(Properties.MakeHumanReadable(property, e)))
        filterFieldSet.appendChild(checkboxLabel)
        filterFieldSet.appendChild(document.createElement("br"))
    })

    filterFieldSet.appendChild(filterLegend)
    container.appendChild(filterFieldSet)
}

function UpdateAdaptersFilter() {
    const adapterFilterContainer = document.getElementById("AdaptersFilterContainer")

    HTML.ClearElement(adapterFilterContainer)

    Constants.FilterMultichoiceFields.forEach(e => AddFilterMultichoice(adapterFilterContainer, e))
    AddFilterAdapterType(adapterFilterContainer)
}

function UpdateSearchBarProperties() {
    const searchBarContainer = document.getElementById("SearchBarPropertiesContainer")

    HTML.ClearElement(searchBarContainer)

    const searchBar = document.createElement("input")
    searchBar.type = "search"
    searchBar.placeholder = "Search Properties"
    searchBar.classList.add("searchBar")
    searchBar.addEventListener('input', function (e) {
        Globals.PropertiesSearchString = searchBar.value
        UpdateReport()
    })
    searchBarContainer.appendChild(searchBar)
}

function UpdateList() {
    const listContainer = document.getElementById("ListContainer")

    HTML.ClearElement(listContainer)

    const table = document.createElement("table")
    const tableBody = document.createElement("tbody")

    const firstRow = document.createElement("tr")
    tableBody.appendChild(firstRow)


    {
        const secondRow = document.createElement("tr")
        const secondRowCell = document.createElement("td")
        secondRowCell.colSpan = Constants.ListHeader.length
        const prevPageButton = document.createElement("button")
        prevPageButton.appendChild(document.createTextNode("Previous page"))
        prevPageButton.addEventListener('click', function (e) {
            Page = Math.max(Page - 1, 0)
            UpdateList()
        })
        prevPageButton.disabled = Page == 0
        secondRowCell.appendChild(prevPageButton)
        const nextPageButton = document.createElement("button")
        nextPageButton.appendChild(document.createTextNode("Next page"))
        nextPageButton.addEventListener('click', function (e) {
            Page = Math.min(Page + 1, PageCount - 1)
            UpdateList()
        })
        nextPageButton.disabled = Page >= PageCount - 1
        secondRowCell.appendChild(nextPageButton)
        secondRowCell.classList.add("center")
        secondRow.appendChild(secondRowCell)
        tableBody.appendChild(secondRow)
    }

    {
        const thirdRow = document.createElement("tr")
        Constants.ListHeader.forEach(collumn => {
            const cell = document.createElement("td")
            cell.classList.add("clickableCell")
            const sortMarket = collumn == SortProperty ? (SortInverse ? " ▼" : " ▲") : ""
            const cellText = document.createTextNode(Properties.MakeHumanReadableProperty(collumn) + sortMarket)
            cell.appendChild(cellText)

            cell.addEventListener('click', function (e) {
                SetSortCollumn(collumn)
                UpdateList()
            })
            thirdRow.appendChild(cell)
        })
        tableBody.appendChild(thirdRow)
    }

    IterateReports((index, adapter) => {
        const row = document.createElement("tr")
        Constants.ListHeader.forEach(collumn => {
            const cell = document.createElement("td")
            let value = adapter.GetField(collumn)
            let cellText = document.createTextNode(Properties.MakeHumanReadable(collumn, value))
            cell.appendChild(cellText)
            row.appendChild(cell)
        })
        row.addEventListener('click', () => {
            ReportIndex = index
            UpdateReport()
            window.history.replaceState(null, null, "?ID=" + Reports[ReportIndex].GetField("ID"))
        })
        row.classList.add("clickableRow")
        tableBody.appendChild(row)
    });

    table.appendChild(tableBody)
    listContainer.appendChild(table)
}

function AddTooltip(field, cell) {
    const tooltipText = Constants.PropertyTooltips[field]
    if (tooltipText == null) {
        return
    }

    cell.className = "tooltip";
    const tooltipTextElement = document.createElement("span")
    tooltipTextElement.className = "tooltiptext";
    tooltipTextElement.textContent = tooltipText;
    cell.appendChild(tooltipTextElement)
}

function AddTooltipIcon(field, cell) {
    if (Constants.PropertyTooltips[field] == null) {
        return
    }

    const tooltipIcon = document.createElement("img")
    tooltipIcon.src = "info.svg"
    tooltipIcon.alt = "Info"
    tooltipIcon.className = "tooltipicon"
    cell.appendChild(tooltipIcon)
}

function UpdateReport() {
    const report = Reports[ReportIndex]

    const tableContainer = document.getElementById("TableContainer")

    HTML.ClearElement(tableContainer)

    const table = document.createElement("table")
    const tableBody = document.createElement("tbody")

    {
        const firstRow = document.createElement("tr")
        tableBody.appendChild(firstRow)
    }

    for (const e of report.HumanReadable(Properties.FilterField)) {
        const row = document.createElement("tr")

        const cell0 = document.createElement("td")
        AddTooltip(e.name, cell0)
        const cell0Text = document.createTextNode(e.name)
        cell0.appendChild(cell0Text)
        AddTooltipIcon(e.name, cell0)
        row.appendChild(cell0)

        const cell1 = document.createElement("td")
        const cell1Text = document.createTextNode(e.value)
        cell1.appendChild(cell1Text)
        row.appendChild(cell1)

        tableBody.appendChild(row)
    }

    table.appendChild(tableBody)
    tableContainer.appendChild(table)
}

function UpdateOutput() {
    if (Reports.length == 0) {
        const errorText = document.createTextNode("No reports found")
        document.body.appendChild(errorText)
        return
    }

    if (!SingleReport) {
        UpdateSearchBarAdapters()
        UpdateAdaptersFilter()
        PrepareReports()
        UpdateList()
    }
    UpdateSearchBarProperties()
    UpdateReport()
}

function PrepareReports() {
    FilteredReports = FilterReports()
    PageCount = Math.max(1, Math.ceil(FilteredReports.length / ElementsPerPage))
    Page = Math.min(Page, PageCount - 1)
}

export function Initialize(isSingleReport) {
    SingleReport = isSingleReport

    const tableContainer = document.getElementById("TableContainer")
    const textContainer = document.createElement("div")
    const loadingText = document.createTextNode("Loading. Please wait.")
    textContainer.appendChild(loadingText)
    tableContainer.appendChild(textContainer)
}

export function LoadReports(reports, startingID) {
    Reports = reports
    ReportIndex = Reports.findIndex(e => e.GetField("ID") == startingID)
    if (ReportIndex == -1) {
        ReportIndex = Reports.length - 1
    }
    UpdateOutput()
}
