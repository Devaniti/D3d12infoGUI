import * as HTML from "./html.mjs"
import * as Constants from "./constants.mjs"
import * as Properties from "./properties.mjs"
import * as FormatTable from "./format_table.mjs"
import Globals from './globals.mjs'

let ShowAdapterSearch = true
let IsComparison = false
let Reports = []
let ReportIndex = null

let ComparisonShowEqual = true
let ComparisonShowOneSided = false
let ComparisonShowVendorSpecific = false

let SortProperty = "ID"
let SortInverse = true
let Page = 0
let PageCount = 0
const ElementsPerPage = 10

let AdaptersSearchString = ""
let AdaptersFilters = []
let FilteredReports = []

let PropertiesSearchBarContainer = null

function ShouldPropertySearchBarBeVisible()
{
    return IsComparison || ReportIndex != null
}

function DeselectReport() {
    ReportIndex = null
    PropertiesSearchBarContainer.style.visibility = "hidden"
    UpdateReport()
    const url = new URL(window.location.href);
    url.searchParams.delete('ID');
    window.history.replaceState({}, '', url.toString());
    document.title = "D3d12infoDB";
}

function SelectReport(newReportIndex)
{
    ReportIndex = newReportIndex
    PropertiesSearchBarContainer.style.visibility = "visible"
    UpdateReport()
    const url = new URL(window.location.href);
    url.searchParams.set('ID', Reports[ReportIndex].GetField("ID"));
    window.history.replaceState({}, '', url.toString());
    document.title = Reports[ReportIndex].GetField("DXGI_ADAPTER_DESC3.Description") + " - D3d12infoDB";

    // Scroll down to the report
    PropertiesSearchBarContainer.scrollIntoView();
}

function FilterSingleReport(wrappedReport) {
    let report = wrappedReport.value
    let adaptersSearchString = AdaptersSearchString.toLowerCase()
    let searchTest = adaptersSearchString == ""
        || Constants.ListHeader.some(collumn => {
            let value = report.GetField(collumn)
            let humanReadableValue = Properties.MakeHumanReadable(collumn, value).toString().toLowerCase()
            value = value.toString().toLowerCase()
            return humanReadableValue.includes(adaptersSearchString)
        })
    let filterTest = Constants.FilterMultichoiceFields.every(filter => {
        let value = report.GetField(filter)
        return AdaptersFilters[filter][value]
    })
    let adapterType = report.GetField("DXGI_ADAPTER_DESC3.Flags") & 2 ? "Software" : "Hardware"
    let adapterTypeTest = AdaptersFilters["Adapter Type"][adapterType]
    let translationLayer = Properties.GetTranslationLayerName(report)
    let translationLayerTest = AdaptersFilters["Translation Layer"][translationLayer]
    return searchTest && filterTest && adapterTypeTest && translationLayerTest
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
    // Set initial value from URL
    const queryParams = (new URL(document.location)).searchParams
    AdaptersSearchString = queryParams.get('q') || ""
    searchBar.value = AdaptersSearchString
    searchBar.type = "search"
    searchBar.placeholder = "Search Adapters"
    searchBar.classList.add("searchBar")
    searchBar.addEventListener('input', function (e) {
        AdaptersSearchString = searchBar.value
        PrepareReports()
        UpdateList()
        DeselectReport()
        
        const url = new URL(window.location.href);
        if (AdaptersSearchString) {
            url.searchParams.set('q', AdaptersSearchString);
        } else {
            url.searchParams.delete('q');
        }
        window.history.replaceState({}, '', url.toString());
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
    },
    "Translation Layer": {
        "default": false,
        "None": true
    }
}

function GetFilterSortFunc(property)
{
    switch (property)
    {
        case "DXGI_ADAPTER_DESC3.VendorId":
            return (a, b) => (Number(a) > Number(b))
        case "Header.Using preview Agility SDK":
            return (a, b) => (a < b)
        default:
            return (a, b) => (a > b)
    }
}

function AddFilterMultichoice(container, property) {
    const filterFieldSet = document.createElement("fieldset")
    const filterLegend = document.createElement("legend")
    filterLegend.appendChild(document.createTextNode(Properties.MakeHumanReadableProperty(property)))
    AdaptersFilters[property] = []

    let valuesList = [...new Set(Reports.map(e => e.GetField(property)))].sort(GetFilterSortFunc(property))
    
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

function AddCustomFilters(container) {

    const customFilters = [{ property: "Adapter Type", values: ["Hardware", "Software"] }, { property: "Translation Layer", values: ["None", "vkd3d-proton", "Other"] }]

    customFilters.forEach(filter => {
        const filterFieldSet = document.createElement("fieldset")
        const filterLegend = document.createElement("legend")
        const property = filter.property
        filterLegend.appendChild(document.createTextNode(Properties.MakeHumanReadableProperty(property)))
        AdaptersFilters[property] = []

        let valuesList = filter.values
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
    })
}

function UpdateAdaptersFilter() {
    const filterContainer = document.getElementById("AdaptersFilterContainer")

    HTML.ClearElement(filterContainer)

    Constants.FilterMultichoiceFields.forEach(e => AddFilterMultichoice(filterContainer, e))
    AddCustomFilters(filterContainer)
}

function AddFilterComparison(container) {
    const filterFieldSet = document.createElement("fieldset")
    const filterLegend = document.createElement("legend")
    const property = "Show Properties"
    filterLegend.appendChild(document.createTextNode(Properties.MakeHumanReadableProperty(property)))
    AdaptersFilters[property] = []

    let valuesList = [{ name: "Equal", default: ComparisonShowEqual }, { name: "Exist only in one of reports", default: false }, { name: "Vendor specific", default: ComparisonShowVendorSpecific }];
    valuesList.forEach(e => {
        const checkboxLabel = document.createElement("label")
        const filterCheckbox = document.createElement("input")
        filterCheckbox.type = "checkbox"
        filterCheckbox.checked = e.default
        filterCheckbox.addEventListener('change', () => {
            switch (e.name) {
                case "Equal":
                    ComparisonShowEqual = filterCheckbox.checked
                    break;
                case "Exist only in one of reports":
                    ComparisonShowOneSided = filterCheckbox.checked
                    break;
                case "Vendor specific":
                    ComparisonShowVendorSpecific = filterCheckbox.checked
                    break;
            }
            UpdateComparison()
        })
        checkboxLabel.appendChild(filterCheckbox)
        checkboxLabel.appendChild(document.createTextNode(e.name))
        filterFieldSet.appendChild(checkboxLabel)
        filterFieldSet.appendChild(document.createElement("br"))
    })

    filterFieldSet.appendChild(filterLegend)
    container.appendChild(filterFieldSet)
}

function UpdateComparisonPropertyFilter() {
    const filterContainer = document.getElementById("ComparisonPropertyFilterContainer")

    HTML.ClearElement(filterContainer)

    AddFilterComparison(filterContainer)
}

function UpdateSearchBarProperties() {
    PropertiesSearchBarContainer = document.getElementById("SearchBarPropertiesContainer")
    PropertiesSearchBarContainer.style.visibility = ShouldPropertySearchBarBeVisible() ? "visible" : "hidden"

    HTML.ClearElement(PropertiesSearchBarContainer)

    const searchBar = document.createElement("input")
    searchBar.type = "search"
    searchBar.placeholder = "Search Properties"
    searchBar.classList.add("searchBar")
    searchBar.addEventListener('input', function (e) {
        Globals.PropertiesSearchString = searchBar.value
        if (IsComparison) {
            UpdateComparison()
        }
        else {
            UpdateReport()
        }
    })
    PropertiesSearchBarContainer.appendChild(searchBar)
}

let compareToID = -1;

function HandleCompareClick(adapter, icon) {
    icon.classList.add('ActionIconActivated')

    const thisID = adapter.GetField('ID')

    if (thisID == compareToID) {
        return
    }

    if (compareToID == -1) {
        compareToID = thisID;
    }
    else {
        window.location.assign(`compare.html?ID1=${compareToID}&ID2=${thisID}`);
    }
}

let lastShare = null;
let lastPopup = null;
let lastPopupTimeout = null;

function HandleShareClick(adapter, icon) {
    if (lastShare != null) {
        lastShare.classList.remove("ActionIconActivated");
    }
    lastShare = icon;

    icon.classList.add("ActionIconActivated");

    navigator.clipboard.writeText(`${Constants.WebsiteAddress}/ID.html?ID=${adapter.GetField('ID')}`);

    let rect = icon.getBoundingClientRect();

    let popup = document.createElement("div");
    popup.classList.add("PopupMessage");
    popup.textContent = "Link copied to clipboard";
    popup.getClientRects

    popup.style.left = `${rect.left + window.scrollX - 200}px`;
    popup.style.top = `${rect.top + window.scrollY - 7}px`;

    document.body.appendChild(popup);

    if (lastPopup != null) {
        lastPopup.remove();
        clearTimeout(lastPopupTimeout);
    }
    lastPopup = popup;

    lastPopupTimeout = setTimeout(() => {
        popup.remove();
        lastPopup = null;
        lastPopupTimeout = null;
    }, 4000)
}

function UpdateList() {
    const listContainer = document.getElementById("ListContainer")

    HTML.ClearElement(listContainer)

    const table = document.createElement("table")
    const tableBody = document.createElement("tbody")

    {
        const firstRow = document.createElement("tr")
        Constants.ListHeader.forEach(collumn => {
            const cell = document.createElement("td")
            cell.classList.add("hiddenCell")
            firstRow.appendChild(cell)
        })
        Constants.ListHeaderSpecial.forEach(collumn => {
            const cell = document.createElement("td")
            cell.classList.add("hiddenCell")
            switch (collumn) {
                case "Action":
                    cell.style.width = "3.1em"
                    break;
            }
            firstRow.appendChild(cell)
        })
        tableBody.appendChild(firstRow)
    }


    {
        const secondRow = document.createElement("tr")
        const secondRowCell = document.createElement("td")
        secondRowCell.colSpan = Constants.ListHeader.length + Constants.ListHeaderSpecial.length
        const prevPageButton = document.createElement("button")
        prevPageButton.appendChild(document.createTextNode("Previous page"))
        prevPageButton.className = "ActionButton"
        prevPageButton.addEventListener('click', function (e) {
            Page = Math.max(Page - 1, 0)
            UpdateList()
        })
        prevPageButton.disabled = Page == 0
        secondRowCell.appendChild(prevPageButton)
        const nextPageButton = document.createElement("button")
        nextPageButton.appendChild(document.createTextNode("Next page"))
        nextPageButton.className = "ActionButton"
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
        Constants.ListHeaderSpecial.forEach(collumn => {
            const cell = document.createElement("td")
            let text = ""
            switch (collumn) {
                case "Action":
                    // Noop
                    break;
            }
            const cellText = document.createTextNode(text)
            cell.appendChild(cellText)
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
        Constants.ListHeaderSpecial.forEach(collumn => {
            const cell = document.createElement("td")
            switch (collumn) {
                case "Action":
                    {
                        {
                            const compareIcon = document.createElement("img")
                            compareIcon.src = "compare.svg"
                            compareIcon.alt = "Share"
                            compareIcon.title = "Click compare icon on 2 reports to open comparison"
                            compareIcon.className = "ActionIcon"
                            if (adapter.GetField('ID') == compareToID) {
                                compareIcon.classList.add('ActionIconActivated')
                            }
                            compareIcon.addEventListener('click', (e) => {
                                e.stopPropagation()
                                HandleCompareClick(adapter, compareIcon)
                            })
                            cell.appendChild(compareIcon)
                        }
                        {
                            const shareIcon = document.createElement("img")
                            shareIcon.src = "share.svg"
                            shareIcon.alt = "Share"
                            shareIcon.title = "Click to copy URL to this report"
                            shareIcon.className = "ActionIcon"
                            shareIcon.addEventListener('click', (e) => {
                                e.stopPropagation()
                                HandleShareClick(adapter, shareIcon)
                            })
                            cell.appendChild(shareIcon)
                        }
                    }
                    break;
            }
            row.appendChild(cell)
        })
        row.addEventListener('click', () => {
            SelectReport(index)
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

function FilterFieldComparison(name, values) {
    if (Constants.PropertiesFilterWhitelist.has(name)) {
        return true
    }

    if (!ComparisonShowEqual) {
        const isAllValuesEqual = values.every((e) => { return e == values[0] })
        if (isAllValuesEqual) {
            return false
        }
    }

    if (!ComparisonShowOneSided) {
        const nonEmptyValues = values.filter((e) => { return e != null }).length
        if (nonEmptyValues <= 1) {
            return false
        }
    }

    if (!ComparisonShowVendorSpecific) {
        const lookupName = Properties.GetNameBeforeArrayIndex(name)
        const isVendorSpecificProperty = Constants.VendorSpecificPropertiesSet.has(lookupName)
        if (isVendorSpecificProperty) {
            return false
        }
    }

    return true;
}

function UpdateComparison() {
    const reports = [Reports[0], Reports[1]]

    const tableContainer = document.getElementById("TableContainer")

    HTML.ClearElement(tableContainer)

    const table = document.createElement("table")
    const tableBody = document.createElement("tbody")

    {
        const firstRow = document.createElement("tr")
        tableBody.appendChild(firstRow)
    }

    let properties = {};
    for (const report of reports) {
        for (const e of report.FilteredFields(Properties.FilterField)) {
            properties[e.name] = e.value;
        }
    }

    let propertyArray = []
    for (const [inName, inValue] of Object.entries(properties)) {
        propertyArray.push({ name: inName, value: inValue });
    }

    propertyArray.sort(Properties.PropertyComparison);

    for (const e of propertyArray) {
        const propertyName = e.name;
        const propertyNameHumanReadable = Properties.MakeHumanReadableProperty(propertyName);
        const values = [];
        const valuesHumanReadable = [];
        for (const report of reports) {
            const value = report.GetField(propertyName);
            const valueHumanReadable = (value != null) ? Properties.MakeHumanReadable(propertyName, value) : "";
            values.push(value);
            valuesHumanReadable.push(valueHumanReadable);
        }

        if (!FilterFieldComparison(propertyName, values)) {
            continue;
        }

        const isAllValuesEqual = values.every((e) => { return e == values[0] })

        const row = document.createElement("tr")

        const cell0 = document.createElement("td")
        AddTooltip(propertyNameHumanReadable, cell0)
        const cell0Text = document.createTextNode(propertyNameHumanReadable)
        cell0.appendChild(cell0Text)
        AddTooltipIcon(propertyNameHumanReadable, cell0)
        row.appendChild(cell0)

        for (const valueHumanReadable of valuesHumanReadable) {
            const cell = document.createElement("td")
            const cellText = document.createTextNode(valueHumanReadable)
            if (isAllValuesEqual) {
                cell.style.fontStyle = "italic";
                cell.style.color = "#888888";
            }
            cell.appendChild(cellText)
            row.appendChild(cell)
        }

        tableBody.appendChild(row)
    }

    table.appendChild(tableBody)
    tableContainer.appendChild(table)
}

function UpdateReport() {
    const report = Reports[ReportIndex]

    const tableContainer = document.getElementById("TableContainer")

    HTML.ClearElement(tableContainer)

    if (ReportIndex == null)
    {
        return;
    }

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

    FormatTable.BuildFormatTable(report, tableContainer)
}

function UpdateOutput() {
    if (Reports.length == 0) {
        const errorText = document.createTextNode("No reports found")
        document.body.appendChild(errorText)
        return
    }

    if (ShowAdapterSearch) {
        UpdateSearchBarAdapters()
        UpdateAdaptersFilter()
        PrepareReports()
        UpdateList()
    }
    else if (IsComparison) {
        UpdateComparisonPropertyFilter()
    }
    UpdateSearchBarProperties()
    if (IsComparison) {
        UpdateComparison()
    }
    else {
        UpdateReport()
    }
}

function PrepareReports() {
    FilteredReports = FilterReports()
    PageCount = Math.max(1, Math.ceil(FilteredReports.length / ElementsPerPage))
    Page = Math.min(Page, PageCount - 1)
}

export function Initialize(inShowAdapterSearch, inIsComparison) {
    ShowAdapterSearch = inShowAdapterSearch
    IsComparison = inIsComparison

    const tableContainer = document.getElementById("TableContainer")
    const textContainer = document.createElement("div")
    const loadingText = document.createTextNode("Loading. Please wait.")
    textContainer.appendChild(loadingText)
    tableContainer.appendChild(textContainer)
}

export function LoadReports(reports, startingID) {
    Reports = reports
    if (startingID != null)
    {
        ReportIndex = Reports.findIndex(e => e.GetField("ID") == startingID)
        if (ReportIndex == -1) {
            ReportIndex = Reports.length - 1
        }
    }
    UpdateOutput()
    if (startingID != null)
    {
        PropertiesSearchBarContainer.scrollIntoView();
    }
}
