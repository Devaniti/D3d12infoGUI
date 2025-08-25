import * as HTML from "./html.mjs"
import * as Constants from "./constants.mjs"
import * as Properties from "./properties.mjs"
import * as Server from './server.mjs'
import * as ArchClassifier from './arch_classifier.mjs'
import ArchStats from './arch_stats.mjs'
import Globals from './globals.mjs'

let Reports = [];
let VendorArray = [];
let SearchBar = null;
let SelectedFeature = "";

const HeaderCols = ["Support"]
const ColsPerVendor = ["Architecture", "Market Share"]

let ColorGradientLightMode = [[250, 180, 180], [180, 250, 180]];
let UnknownColorLightMode = [210, 210, 210];
let ColorGradientDarkMode = [[80, 30, 30], [30, 80, 30]];
let UnknownColorDarkMode = [40, 40, 40];

function IsDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function GetFeatureValue(report, arch) {
    // Pascal and Turing have different support tiers within same arch
    if (SelectedFeature == "D3D12_FEATURE_DATA_D3D12_OPTIONS5.RaytracingTier" && (arch == "Pascal" || arch == "Turing")) return undefined;
    // RDNA2 iGPUs with 1 WGP don't have mesh shader support. Force Mesh Shaders as Tier 1 to prevent iGPU reports from overriding support.
    if (SelectedFeature == "D3D12_FEATURE_DATA_D3D12_OPTIONS7.MeshShaderTier" && arch == "RDNA2") return 10;

    // GPU Upload Heap support depends on BIOS settings and Windows version.
    // If at least one report has GPUUploadHeapSupported == 1, this means that architecture supports it
    if (SelectedFeature == "D3D12_FEATURE_DATA_D3D12_OPTIONS16.GPUUploadHeapSupported") {
        for (let r of ArchClassifier.ReportsPerArch.get(arch)) {
            if (r.D3D12_FEATURE_DATA_D3D12_OPTIONS16.GPUUploadHeapSupported) {
                return 1;
            }
        }
    }

    let newestReportContainer = Reports.find(r => r.GetField("ID") == report.ID);
    return newestReportContainer.GetField(SelectedFeature);
}

function GetMarketShare(arch) {
    return ArchStats[arch] ?? 0.0;
}

function GetMarketShareText(arch) {
    switch (arch) {
        case "WARP": return "N/A";
    }
    let marketShareValue = GetMarketShare(arch);
    if (marketShareValue == 0.0) return "~0%";
    return (marketShareValue * 100.0).toFixed(2) + "%";
}

function NeedShowTable() {
    switch (SelectedFeature) {
        case "D3D12_FEATURE_DATA_D3D12_OPTIONS19.RasterizerDesc2Supported":
        case "D3D12_FEATURE_DATA_D3D12_OPTIONS18.RenderPassesValid":
        case "D3D12_FEATURE_DATA_ROOT_SIGNATURE.HighestVersion":
        case "D3D12_FEATURE_DATA_D3D12_OPTIONS1.ExpandedComputeResourceStates":
            return false;
        default:
            return true;
    }
}

function GetVendorArray() {
    let result = [];
    for (let [vendor, archs] of Object.entries(ArchClassifier.ArchsPerVendor)) {
        if (archs.size == 0)
            continue;
        result.push(vendor)
    }
    return result;
}

function GetVendorsOutOfOrder() {
    let result = [];
    
    for (let [vendor, archs] of Object.entries(ArchClassifier.ArchsPerVendor)) {
        if (archs.size == 0)
            continue;

        let prevValue = undefined;
        for (let arch of archs)
        {
            let report = ArchClassifier.NewestDriverReportPerArch.get(arch);
            let value = GetFeatureValue(report, arch);
            if (value == undefined) continue;
            if (prevValue != undefined && value < prevValue)
            {
                console.log(prevValue)
                console.log(value)
                console.log(vendor)
                console.log(arch)
                result.push(vendor);
                break;
            }
            prevValue = value;
        }
    }

    return result;
}

function SetSearchString(str) {
    SearchBar.value = str;
    Globals.PropertiesSearchString = str;
    if (Constants.PureFeatureList.includes(Globals.PropertiesSearchString)) {
        SelectedFeature = Globals.PropertiesSearchString;
    }
    else {
        SelectedFeature = "";
    }

    const url = new URL(window.location);
    if (Globals.PropertiesSearchString == "")
    {
        url.searchParams.delete('q');
    }
    else
    {
        url.searchParams.set('q', Globals.PropertiesSearchString)
    }
    window.history.replaceState({}, '', url);

    UpdateOutput()
}

function CreateTableHead(table) {
    const tableHead = document.createElement("thead");
    const vendorNameRow = document.createElement("tr");
    const vendorHeadersRow = document.createElement("tr");

    let colGroupHeader = document.createElement("colgroup");
    colGroupHeader.span = HeaderCols.length;
    table.appendChild(colGroupHeader);

    let headerEmptyCell = document.createElement("th");
    headerEmptyCell.scope = "colgroup";
    headerEmptyCell.colSpan = HeaderCols.length;
    vendorNameRow.appendChild(headerEmptyCell);

    for (let headerCol of HeaderCols) {
        let headerCell = document.createElement("th");
        headerCell.textContent = headerCol;
        headerCell.scope = "col";
        vendorHeadersRow.appendChild(headerCell);
    }

    for (let vendor of VendorArray) {
        let vendorColGroup = document.createElement("colgroup");
        vendorColGroup.span = ColsPerVendor.length;
        table.appendChild(vendorColGroup);

        const vendorHeader = document.createElement("th");
        vendorHeader.textContent = vendor;
        vendorHeader.className = vendor;
        vendorHeader.scope = "colgroup";
        vendorHeader.colSpan = ColsPerVendor.length;
        vendorNameRow.appendChild(vendorHeader);

        for (let vendorColName of ColsPerVendor) {
            const vendorCol = document.createElement("th");
            vendorCol.textContent = vendorColName;
            vendorCol.className = vendor;
            vendorCol.scope = "colgroup";
            vendorHeadersRow.appendChild(vendorCol);
        }
    }
    tableHead.appendChild(vendorNameRow)
    tableHead.appendChild(vendorHeadersRow)
    table.appendChild(tableHead)
}

function UniqueValues() {
    let valuesSet = new Set();

    for (let [arch, report] of ArchClassifier.NewestDriverReportPerArch) {
        valuesSet.add(GetFeatureValue(report, arch))
    }

    let valuesArray = Array.from(valuesSet)
    valuesArray.sort((a, b) => (Number(a) - Number(b)))

    return valuesArray
}

function CreateArchCells(row, arch) {
    for (let col of ColsPerVendor) {
        const cell = document.createElement("td");
        switch (col) {
            case "Architecture":
                cell.textContent = arch;
                break;
            case "Market Share":
                cell.textContent = GetMarketShareText(arch);
                break;
        }
        row.appendChild(cell);
    }
}

function CreateEmptyCells(row) {
    for (let col of ColsPerVendor) {
        const emptyCell = document.createElement("td");
        row.appendChild(emptyCell);
    }
}

function CalculateGradientColor(gradientCoord) {
    let color = [];

    const colorGradient = IsDarkMode() ? ColorGradientDarkMode : ColorGradientLightMode;
    const unknownColor = IsDarkMode() ? UnknownColorDarkMode : UnknownColorLightMode;

    if (gradientCoord < 0.0) return `rgb(${unknownColor.join(',')})`;
    for (let i = 0; i < colorGradient[0].length; ++i) {
        color[i] = Math.floor(colorGradient[0][i] * (1 - gradientCoord) + colorGradient[1][i] * gradientCoord);
    }
    return `rgb(${color.join(',')})`;
}

function CreateTableBodyPart(table, propertyValue, gradientCoord) {
    let color = CalculateGradientColor(gradientCoord);

    let archsToOutput = [];
    for (let i = 0; i < VendorArray.length; ++i) {
        archsToOutput[i] = [];
    }

    for (let [vendor, archs] of Object.entries(ArchClassifier.ArchsPerVendor)) {
        let vendorIndex = VendorArray.indexOf(vendor);
        if (vendorIndex == -1)
            continue;

        for (let arch of archs) {
            let report = ArchClassifier.NewestDriverReportPerArch.get(arch);
            let value = GetFeatureValue(report, arch);
            if (value != propertyValue)
                continue;
            archsToOutput[vendorIndex].push(arch);
        }
    }

    let sectionHeight = archsToOutput.reduce((prev, elem) => { return Math.max(prev, elem.length) }, 0)


    let grid = [];
    for (let i = 0; i < VendorArray.length; ++i) {
        grid[i] = [];

        let j = 0;
        for (; j < archsToOutput[i].length; ++j) {
            grid[i][j] = archsToOutput[i][j];
        }
        for (; j < sectionHeight; ++j) {
            grid[i][j] = null;
        }
    }

    for (let i = 0; i < sectionHeight; ++i) {
        const tableRow = document.createElement("tr");
        // set background color of whole row
        tableRow.style.backgroundColor = color;

        for (let headerCol of HeaderCols) {
            const headerCell = document.createElement("td");
            if (i == 0) {
                switch (headerCol) {
                    case "Support":
                        headerCell.textContent = Properties.MakeHumanReadableShort(SelectedFeature, propertyValue);
                }
            }
            tableRow.appendChild(headerCell);
        }

        for (let j = 0; j < VendorArray.length; ++j) {
            let currentArch = grid[j][i];
            if (currentArch == null) {
                CreateEmptyCells(tableRow)
            }
            else {
                CreateArchCells(tableRow, currentArch)
            }
        }

        table.appendChild(tableRow)
    }
}

function CreateTableBody(table) {
    const uniqueValues = UniqueValues();
    let gradientWidth = uniqueValues.length;
    if (uniqueValues[uniqueValues.length - 1] == undefined) {
        --gradientWidth;
    }

    for (let i = 0; i < uniqueValues.length; ++i) {
        let value = uniqueValues[i]
        let gradientCoord;
        if (gradientWidth == 1) {
            gradientCoord = value == 0 ? 0.0 : 1.0;
        }
        else {
            gradientCoord = i / (gradientWidth - 1);
        }

        if (value == undefined) {
            gradientCoord = -1.0;
        }

        CreateTableBodyPart(table, value, gradientCoord)
    }
}

function CreateFeatureTable(tableContainer) {
    const table = document.createElement("table")
    CreateTableHead(table)
    CreateTableBody(table)
    tableContainer.appendChild(table)
}

function CreateSupportPercentageTable(tableContainer) {
    const uniqueValues = UniqueValues();

    const supportPercentage = {}
    for (let value of uniqueValues) {
        supportPercentage[value] = 0.0;
    }

    for (let [arch, report] of ArchClassifier.NewestDriverReportPerArch) {
        supportPercentage[GetFeatureValue(report, arch)] += GetMarketShare(arch)
    }

    const table = document.createElement("table");
    const tableHead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const headers = ["Support", "Percentage"];
    for (let header of headers) {
        const headerCell = document.createElement("th");
        headerCell.textContent = header;
        headerCell.scope = "col";
        headerRow.appendChild(headerCell);
    }

    let accumulatedSupport = 0.0;

    for (let value of uniqueValues.reverse()) {
        if (value == undefined) continue;
        const row = document.createElement("tr");
        const valueCell = document.createElement("td");
        const percentageCell = document.createElement("td");
        let tierText = Properties.MakeHumanReadableShort(SelectedFeature, value);
        tierText += " or higher"
        valueCell.textContent = tierText;
        accumulatedSupport += supportPercentage[value];
        percentageCell.textContent = (accumulatedSupport * 100.0).toFixed(2) + "%";
        row.appendChild(valueCell);
        row.appendChild(percentageCell);
        table.appendChild(row);
    }

    {
        const row = document.createElement("tr");
        const valueCell = document.createElement("td");
        const percentageCell = document.createElement("td");
        valueCell.textContent = "Unknown";
        percentageCell.textContent = ((1.0 - accumulatedSupport) * 100.0).toFixed(2) + "%";
        row.appendChild(valueCell);
        row.appendChild(percentageCell);
        table.appendChild(row);
    }

    tableHead.appendChild(headerRow);
    table.appendChild(tableHead);
    tableContainer.appendChild(table);
}

function AddNote(text, noteContainer) {
    const noteDiv = document.createElement("div");
    noteDiv.textContent = text;
    noteDiv.classList.add("FeatureNotes");
    noteContainer.appendChild(noteDiv);
}

function CreateNotes(dataContainer) {
    let noteContainer = document.createElement("div");
    noteContainer.classList.add("FeatureNotes");

    if (NeedShowTable()) {
        AddNote("Market Share is calculated from the Steam Hardware Survey among DirectX 12 Systems. This is an underestimate and may not be very accurate in general.", noteContainer);
        AddNote("Market Share will vary a lot between different games. Steam Hardware Survey may not be a good representation of your target audience.", noteContainer);
        AddNote("Note that this table assumes that app uses latest non-preview Agility SDK.", noteContainer);
    }

    switch (SelectedFeature) {
        case "D3D12_FEATURE_DATA_D3D12_OPTIONS5.RaytracingTier":
            AddNote("Nvidia Pascal cards with >=6GiB of VRAM have emulated Tier 1.0 support, while other cards don't have any support. Pascal is marked as Unknown for that reason.", noteContainer);
            AddNote("Nvidia Turing 20xx cards have hardware Tier 1.1 support, 16xx cards with >=6GiB of VRAM have emulated Tier 1.0 support, while other cards don't have any support. Turing is marked as Unknown for that reason.", noteContainer);
            break;
        case "D3D12_FEATURE_DATA_D3D12_OPTIONS7.MeshShaderTier":
            AddNote("RDNA2 iGPUs with 1 WGP don't have mesh shader support. Share of such iGPUs is minor though, so RDNA2 is marked as Mesh Shader capable.", noteContainer)
            break;
        case "D3D12_FEATURE_DATA_D3D12_OPTIONS16.GPUUploadHeapSupported":
            AddNote("GPU Upload Heap support depends on BIOS settings and Windows version. Same GPU may report different values depending on the system.", noteContainer)
            AddNote("Table shows this capability assuming all users have BIOS setting supported and enabled and that Windows version is new enough.", noteContainer)
            break;
        case "D3D12_FEATURE_DATA_D3D12_OPTIONS19.RasterizerDesc2Supported":
        case "D3D12_FEATURE_DATA_D3D12_OPTIONS18.RenderPassesValid":
            AddNote("Yes you can.", noteContainer);
            AddNote("Starting with Agility SDK 1.610.0, it is always supported, independently of GPU or driver.", noteContainer);
            break;
        case "D3D12_FEATURE_DATA_ROOT_SIGNATURE.HighestVersion":
            AddNote("Yes, you can always use Root Signature 1.2.", noteContainer);
            AddNote("Starting with Agility SDK 1.610.0, Root Signature 1.2 is always supported, independently of GPU or driver.", noteContainer);
            break;
        case "D3D12_FEATURE_DATA_D3D12_OPTIONS1.ExpandedComputeResourceStates":
            AddNote("Yes you can.", noteContainer);
            AddNote("Starting with Windows 10 version 1607, it is always supported, independently of GPU or driver.", noteContainer);
            AddNote("All currently supported Windows versions are newer than Windows 10 version 1607.", noteContainer);
            break;
    }

    if (NeedShowTable()) {
        let vendorsOutOfOrder = GetVendorsOutOfOrder();
        if (vendorsOutOfOrder.length > 0)
        {
            AddNote(`${vendorsOutOfOrder.join(", ")} ${vendorsOutOfOrder.length == 1 ? "has" : "have"} feature support that is out of order of architecture release dates. Some newer GPUs may have less support than older ones. Or this may be a false positive warning caused by out of date reports.`, noteContainer);
        }
    }

    dataContainer.appendChild(noteContainer);
}

function UpdateFeatureData() {
    const dataContainer = document.getElementById("FeatureData")
    HTML.ClearElement(dataContainer)

    if (SelectedFeature == "") {
        return;
    }

    if (NeedShowTable()) {
        const tableContainer = document.createElement("div")
        tableContainer.classList.add("TableContainer")
        CreateFeatureTable(tableContainer)
        CreateSupportPercentageTable(tableContainer)
        dataContainer.appendChild(tableContainer)
    }
    CreateNotes(dataContainer)
}

function FilterProperty(name) {
    let humanReadableName = Properties.MakeHumanReadableProperty(name)
    let filterString = Globals.PropertiesSearchString.toLocaleLowerCase()
    return filterString == ""
        || Constants.PropertiesFilterWhitelist.has(name)
        || name.toString().toLowerCase().includes(filterString)
        || humanReadableName.toString().toLowerCase().includes(filterString)
}

function UpdateFeatureSearch() {
    const resultContainer = document.getElementById("FeatureSearchResult")
    HTML.ClearElement(resultContainer)

    if (SelectedFeature != "") {
        return;
    }

    SelectedFeature = "";

    Constants.PureFeatureList.forEach((property) => {

        if (!FilterProperty(property)) {
            return;
        }

        let propertyNode = document.createElement("div")
        propertyNode.classList.add("PropertyItem")
        propertyNode.textContent = property
        propertyNode.addEventListener("click", function (e) {
            SetSearchString(property);
        });

        resultContainer.appendChild(propertyNode)
    })
}

function UpdateOutput() {
    UpdateFeatureSearch();
    UpdateFeatureData();
}

function CreateSearchBar() {
    const searchBarContainer = document.getElementById("FeatureSearchBar")
    SearchBar = document.createElement("input")
    SearchBar.type = "search"
    SearchBar.placeholder = "Search Features"
    SearchBar.classList.add("searchBar")
    SearchBar.addEventListener('input', function (e) {
        SetSearchString(SearchBar.value);
    })
    searchBarContainer.appendChild(SearchBar)
}

function OverrideSearch() {
    window.addEventListener("keydown", function (e) {
        if (SearchBar == null || document.activeElement == SearchBar) {
            return;
        }

        let searchDetected = false;
        searchDetected = searchDetected || (e.key === "F3");
        searchDetected = searchDetected || (e.key.toUpperCase() === "F" && e.ctrlKey);

        if (searchDetected) {
            e.preventDefault();
            SearchBar.focus();
        }
    })
}

function AddDarkModeListener() {
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            UpdateOutput();
        });
    }
}

function OnLoad() {
    OverrideSearch();
    AddDarkModeListener();

    const dataContainer = document.getElementById("FeatureData")
    const textContainer = document.createElement("div")
    const loadingText = document.createTextNode("Loading. Please wait.")
    textContainer.appendChild(loadingText)
    dataContainer.appendChild(textContainer)

    Server.GetAllSubmissions((data) => {
        Reports = data;
        ArchClassifier.ClassifyReports(Reports);
        VendorArray = GetVendorArray();
        CreateSearchBar();

        let queryParams = (new URL(document.location)).searchParams
        let searchQuery = queryParams.get('q')
        let defaultSearchString = searchQuery ?? "";
        SetSearchString(defaultSearchString)
    })
}

window.addEventListener('DOMContentLoaded', OnLoad, false)
