import ArchStats from './arch_stats.mjs'
import * as Constants from './constants.mjs'
import * as FeatureTableConstants from './feature_table_constants.mjs'
import Globals from './globals.mjs'
import * as HTML from './html.mjs'
import * as Properties from './properties.mjs'
import * as Server from './server.mjs'
import * as ArchClassifier from './arch_classifier.mjs'

let Reports = [];
let SearchBar = null;

function MakeTextElementForTable(text) {
    let span = document.createElement("span");
    span.textContent = text;

    if (text == "N/A") {
        span.style.fontStyle = "italic";
        span.style.color = "#888888";
    }

    return span;
}

const DefaultTooltipOptions = {
    alignOutsideHorizontal: false,
    alignOutsideVertical: false,
    preferTowardsBottom: false,
    tooltipAlignment: 0.5
};

// Use alignOutside* and preferTowardsBottom to position the tooltip next to the element on the respective side
// to prevent issues with tooltips disappearing below other elements with higher effective z-index than the parent.
function AddTooltipForTable(parent, text, options_param) {
    // JS is bad at interfaces, so we copy the default options and then individually assign them if the passed in options object has the same property
    let options = Object.assign({}, DefaultTooltipOptions);
    for (let [key, value] of Object.entries(options)) {
        if (options_param.hasOwnProperty(key))
            options[key] = options_param[key];
    }

    parent.classList.add("tooltip");

    const tooltipTextElement = document.createElement("span");
    tooltipTextElement.className = "tooltiptext white_space_pre tooltiptext";
    tooltipTextElement.style = `left: ${options.tooltipAlignment*100}%;transform: translateX(-${options.tooltipAlignment*100}%);`;
    tooltipTextElement.textContent = text;
    parent.appendChild(tooltipTextElement);

    return tooltipTextElement; // in case you want to do something further with it
}

function NeedOutputVendor(vendor) {
    if (!Globals.VendorFilter[vendor])
        return false;

    // Check if any of the architectures for this vendor are newer than the filter
    for (let arch of ArchClassifier.ArchsPerVendor[vendor]) {
        let releaseDate = Constants.ArchReleaseDates[arch] ?? 9999;
        if (Globals.ArchAgeFilter <= releaseDate)
            return true;
    }

    return false;
}

function VendorArchToOutputCount(vendor) {
    let res = 0;

    for (let arch of ArchClassifier.ArchsPerVendor[vendor]) {
        let releaseDate = Constants.ArchReleaseDates[arch] ?? 9999;
        if (Globals.ArchAgeFilter <= releaseDate)
            res++;
    }

    return res;
}

function ArchToOutputCount() {
    let res = 0;

    for (let [vendor, archs] of Object.entries(ArchClassifier.ArchsPerVendor)) {
        for (let arch of archs) {
            let releaseDate = Constants.ArchReleaseDates[arch] ?? 9999;
            if (Globals.ArchAgeFilter <= releaseDate)
                res++;
        }
    }

    return res;
}

function NeedOutputArch(vendor, arch) {
    let vendorShows = Globals.VendorFilter[vendor];
    let archReleaseDate = Constants.ArchReleaseDates[arch];
    if (archReleaseDate == undefined) {
        archReleaseDate = "9999"
    };
    return vendorShows && Globals.ArchAgeFilter <= archReleaseDate;
}

function AddFilterPanel(container) {
    let filterPanel = document.createElement("div");
    filterPanel.className = "FilterPanel";
    container.appendChild(filterPanel);

    SearchBar = document.createElement("input")
    SearchBar.type = "search"
    SearchBar.placeholder = "Search Properties"
    SearchBar.classList.add("searchBar")
    Globals.PropertiesSearchString = "";
    SearchBar.addEventListener('input', function (e) {
        Globals.PropertiesSearchString = e.target.value;
        UpdateTable();
    })
    container.appendChild(SearchBar)

    let fieldSetContainer = document.createElement("div");
    fieldSetContainer.classList.add("FieldSetContainer");
    container.appendChild(fieldSetContainer);

    let vendorFilterFieldset = document.createElement("fieldset");
    vendorFilterFieldset.classList.add("VendorFilter");
    let legend = document.createElement("legend");
    legend.textContent = "Vendor Filter";
    vendorFilterFieldset.appendChild(legend);

    for (let vendor of Object.keys(ArchClassifier.ArchsPerVendor)) {
        Globals.VendorFilter[vendor] = true;

        const checkboxLabel = document.createElement("label")
        const filterCheckbox = document.createElement("input")
        filterCheckbox.type = "checkbox"
        filterCheckbox.checked = true
        filterCheckbox.addEventListener('change', (e) => {
            Globals.VendorFilter[vendor] = e.target.checked;
            UpdateTable();
        })
        checkboxLabel.appendChild(filterCheckbox)
        checkboxLabel.appendChild(document.createTextNode(vendor))
        vendorFilterFieldset.appendChild(checkboxLabel)
        vendorFilterFieldset.appendChild(document.createElement("br"))
    }

    fieldSetContainer.appendChild(vendorFilterFieldset);

    // Add fieldset for filtering by architecture age
    let archFilterFieldset = document.createElement("fieldset");
    let archLegend = document.createElement("legend");
    archLegend.textContent = "Architecture Age Filter";
    archFilterFieldset.appendChild(archLegend);
    // Add slider for filtering by architecture age
    let archAgeSlider = document.createElement("input");
    archAgeSlider.type = "range";
    archAgeSlider.min = 2010;
    archAgeSlider.max = new Date().getFullYear();
    archAgeSlider.value = (new Date().getFullYear()) - 9;
    archAgeSlider.step = 1;
    let archAgeLabel = document.createElement("label");
    archAgeLabel.htmlFor = "archAgeSlider";
    archAgeLabel.textContent = `Released in ${archAgeSlider.value} or after`;
    Globals.ArchAgeFilter = archAgeSlider.value;
    archAgeSlider.addEventListener('input', function (e) {
        archAgeLabel.textContent = `Released in ${e.target.value} or after`;
        Globals.ArchAgeFilter = e.target.value;
        UpdateTable();
    });
    archFilterFieldset.appendChild(archAgeSlider);
    archFilterFieldset.appendChild(document.createElement("br"));
    archFilterFieldset.appendChild(archAgeLabel);
    fieldSetContainer.appendChild(archFilterFieldset);
}

function UpdateTableFilter() {
    const headerContainer = document.getElementById("FeatureTableFilter");
    HTML.ClearElement(headerContainer);

    AddFilterPanel(headerContainer);
}

function UpdateTableHeader(table, archTooltipAlignments) {
    let thead = document.createElement("thead");
    let headerRowVendor = document.createElement("tr");
    let headerRowArch = document.createElement("tr");
    headerRowVendor.appendChild(document.createElement("th")); // column for feature name
    headerRowArch.appendChild(document.createElement("th")); // column for feature name

    let colGroupFeature = document.createElement("colgroup");
    table.appendChild(colGroupFeature);

    for (let [vendor, archs] of Object.entries(ArchClassifier.ArchsPerVendor)) {
        if (archs.size == 0)
            continue;

        if (!NeedOutputVendor(vendor))
            continue;

        let thVendor = document.createElement("th");
        thVendor.append(vendor);
        thVendor.className = vendor;
        thVendor.scope = "colgroup";
        thVendor.colSpan = VendorArchToOutputCount(vendor);
        headerRowVendor.appendChild(thVendor);

        let colGroupVendor = document.createElement("colgroup");
        colGroupVendor.span = thVendor.colSpan;
        table.appendChild(colGroupVendor);

        for (let a of archs) {
            if (!NeedOutputArch(vendor, a))
                continue;

            let thArch = document.createElement("th");
            thArch.append(a);
            thArch.className = vendor;
            thArch.scope = "col";
            headerRowArch.appendChild(thArch);

            let tooltipText = "";

            let sortedAdapterNames = Array.from(ArchClassifier.AdapterNamesPerArch.get(a)).sort();

            for (let adapterName of sortedAdapterNames) {
                tooltipText += adapterName + "\n";
            }

            AddTooltipForTable(thArch, tooltipText,
                {
                    alignOutsideVertical: true,
                    preferTowardsBottom: true,
                    tooltipAlignment: archTooltipAlignments.get(a)
                });
        }
    }

    thead.appendChild(headerRowVendor);
    thead.appendChild(headerRowArch);
    table.appendChild(thead);
}

function AddCellReal(text, featureRow, tooltipText, tooltipAlignment, colspan) {
    let td = document.createElement("td");
    td.appendChild(MakeTextElementForTable(text));
    if (colspan) {
        td.scope = "colgroup";
        td.colSpan = colspan;
    }
    featureRow.appendChild(td);
    if (tooltipText)
        AddTooltipForTable(td, tooltipText, { alignOutsideVertical: true, tooltipAlignment: tooltipAlignment});
}

function AddSpecialRowCell(featureRow, archName, featureName, tooltipAlignment) {
    if (featureName == "TableReleaseDate") {
        let releaseDate = Constants.ArchReleaseDates[archName];
        if (releaseDate == undefined) {
            releaseDate = "Unknown"
        }

        let tooltipText;
        if (archName == "WARP") {
            releaseDate = "N/A"
            tooltipText = "WARP is a software rasterizer that continues to receive updates over time.\nComparing its initial release date (2015) to the release dates of hardware GPUs,\nwhich cannot gain new features after release, is not meaningful.";
        }

        AddCellReal(releaseDate, featureRow, tooltipText, tooltipAlignment);
        return true;
    }
    else if (featureName == "TableNumReports") {
        AddCellReal(ArchClassifier.ReportsPerArch.get(archName).length, featureRow);
        return true;
    }
    else if (featureName == "TableMarketShare") {
        let td = document.createElement("td");
        let marketShare = ArchStats[archName];
        let tooltipText;

        if (archName == "WARP") {
            marketShare = "N/A"
            tooltipText = "WARP is a software rasterizer, not a hardware GPU.\nIt doesn't have a market share and not in Steam Hardware Survey.";
        }
        else if (marketShare == undefined) {
            marketShare = "~0%"
        }
        else {
            marketShare = Math.round(marketShare * 10000) / 100 + "%"
        }
        AddCellReal(marketShare, featureRow, tooltipText, tooltipAlignment);
        return true;
    }
    else if (featureName == "TableReportUsed") {
        let newestDriverReport = ArchClassifier.NewestDriverReportPerArch.get(archName);

        let td = document.createElement("td");
        let link = document.createElement("a");
        link.href = `ID.html?ID=${newestDriverReport.ID}`;
        link.append(newestDriverReport.ID);
        td.appendChild(link);
        featureRow.appendChild(td);
        return true;
    }
    else if (featureName == "Table_R9G9B9E5_RTV_UAV") {
        let newestDriverReport = ArchClassifier.NewestDriverReportPerArch.get(archName);
        if (newestDriverReport.Formats == null) {
            AddCellReal("❓", featureRow);
            return true;
        }
        let formats = newestDriverReport.Formats;
        let r9g9b9e5 = formats[67]; // 67 is DXGI_FORMAT_R9G9B9E5_SHAREDEXP
        if (r9g9b9e5 == null) {
            AddCellReal("❓", featureRow);
            return true;
        }
        let rtvSupport = r9g9b9e5.Support1 & 16384; // 0x4000 is D3D12_FORMAT_SUPPORT1_RENDER_TARGET
        // GPUs must either support none or all features listed in Group 1 here https://microsoft.github.io/DirectX-Specs/d3d/D3D12R9G9B9E5Format.html#group-1-rtvuav-use
        // So checking just for RTV is sufficient
        AddCellReal(rtvSupport ? Constants.TrueFalseMappingShort["1"] : Constants.TrueFalseMappingShort["0"], featureRow);
        return true;
    }
    else if (featureName == "Table_R9G9B9E5_Display") {
        let newestDriverReport = ArchClassifier.NewestDriverReportPerArch.get(archName);
        if (newestDriverReport.Formats == null) {
            AddCellReal("❓", featureRow);
            return true;
        }
        let formats = newestDriverReport.Formats;
        let r9g9b9e5 = formats[67]; // 67 is DXGI_FORMAT_R9G9B9E5_SHAREDEXP
        if (r9g9b9e5 == null) {
            AddCellReal("❓", featureRow);
            return true;
        }
        let displaySupport = r9g9b9e5.Support1 & 524288; // 0x80000 is D3D12_FORMAT_SUPPORT1_DISPLAY 
        AddCellReal(displaySupport ? Constants.TrueFalseMappingShort["1"] : Constants.TrueFalseMappingShort["0"], featureRow);
        return true;
    }
    else if (featureName == "TableD3d12InfoVersion") {
        let newestDriverReport = ArchClassifier.NewestDriverReportPerArch.get(archName);
        let version = newestDriverReport.Header.Version;
        AddCellReal(version, featureRow);
        return true;
    }
    return false;
}

function OverrideCell(tableRow, archName, featureName, featureValue, newestDriverReport, newestReportContainer, tooltipAlignment) {
    if (featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS16.GPUUploadHeapSupported") {
        if (archName == "WARP")
        {
            // WARP just supports it without any special conditions
            AddCellReal(Constants.TrueFalseMappingShort["1"], tableRow);
            return true;
        }
        for (let r of ArchClassifier.ReportsPerArch.get(archName)) {
            // If at least one report has GPUUploadHeapSupported == 1, this means that architecture supports it
            if (archName != "WARP" && r.D3D12_FEATURE_DATA_D3D12_OPTIONS16.GPUUploadHeapSupported) {
                AddCellReal(Constants.TrueFalseMappingShort["1"] + "*", tableRow, "GPU Upload Heap support depends on BIOS settings and Windows version.\nSame GPU may report different values depending on the system.", tooltipAlignment);
                return true;
            }
        }
        // If no report has GPUUploadHeapSupported == 1, we assume that the architecture doesn't support it
        AddCellReal(Constants.TrueFalseMappingShort["0"], tableRow);
        return true;
    }
    else if ((featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS6.ShadingRateImageTileSize" || featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS6.AdditionalShadingRatesSupported" || featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS6.PerPrimitiveShadingRateSupportedWithViewportIndexing" || featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS10.VariableRateShadingSumCombinerSupported" || featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS10.MeshShaderPerPrimitiveShadingRateSupported") && newestDriverReport.D3D12_FEATURE_DATA_D3D12_OPTIONS6.VariableShadingRateTier == 0) {
        AddCellReal("N/A", tableRow, "VRS capabilities are only relevant if VRS is supported.", tooltipAlignment);
        return true;
    }
    else if (featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS6.ShadingRateImageTileSize" && newestDriverReport.D3D12_FEATURE_DATA_D3D12_OPTIONS6.VariableShadingRateTier == 1) {
        AddCellReal("N/A", tableRow, "VRS Tier 2 is required for shading rate image support.", tooltipAlignment);
        return true;
    }
    else if ((featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS6.PerPrimitiveShadingRateSupportedWithViewportIndexing" || featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS10.VariableRateShadingSumCombinerSupported" || featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS10.MeshShaderPerPrimitiveShadingRateSupported") && newestDriverReport.D3D12_FEATURE_DATA_D3D12_OPTIONS6.VariableShadingRateTier == 1) {
        AddCellReal("N/A", tableRow, "VRS Tier 2 is required for this capability.", tooltipAlignment);
        return true;
    }
    // If our tiled resource tier is 3, the SRVOnlyTiledResourceTier3 flag does not apply, but is always true, which is misleading
    else if (featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS5.SRVOnlyTiledResourceTier3" && newestDriverReport.D3D12_FEATURE_DATA_D3D12_OPTIONS.TiledResourcesTier >= 3) {
        AddCellReal("N/A", tableRow, "SRVOnlyTiledResourceTier3 is always true\nif TiledResourcesTier >= 3.", tooltipAlignment);
        return true;
    }
    else if (featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS5.RaytracingTier" && archName == "Pascal") {
        AddCellReal("Tier 1.0 *", tableRow, "Pascal have (software emulated) Tier 1.0 raytracing support, but only if the card has 6GB of VRAM or more", tooltipAlignment);
        return true;
    }
    else if (featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS5.RaytracingTier" && archName == "Turing") {
        AddCellReal("Tier 1.1 *", tableRow, "Within Turing architecture there are:\nRTX 20 series and Quadro RTX cards with hardware Tier 1.1 support\nGTX 16 series cards with >= 6GB of VRAM with software emulated Tier 1.0 support\nGTX 16 series cards with < 6GB of VRAM with no raytracing support at all", tooltipAlignment);
        return true;
    }
    else if (featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS5.RaytracingTier" && archName == "X1") {
        AddCellReal("❌ *", tableRow, "X1 supports ray query in hardware,\nbut this capability is not exposed in D3D12,\nsince DXR Tier 1.0 requires callable shaders,\nwhich are unsupported on X1.", tooltipAlignment);
        return true;
    }
    else if (featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS7.MeshShaderTier" && archName == "RDNA2") {
        AddCellReal(Constants.TrueFalseMappingShort["1"] + "*", tableRow, "RDNA2 iGPUs with 1 WGP don't have mesh shader support", tooltipAlignment);
        return true;
    }
    else if (featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS12.MSPrimitivesPipelineStatisticIncludesCulledPrimitives" && newestDriverReport.D3D12_FEATURE_DATA_D3D12_OPTIONS7.MeshShaderTier == 0) {
        AddCellReal("N/A", tableRow, "It is only relevant if Mesh Shaders are supported.", tooltipAlignment);
        return true;
    }
    return false;
}

function AddCell(featureRow, archName, featureName, tooltipAlignment) {
    if (AddSpecialRowCell(featureRow, archName, featureName, tooltipAlignment)) {
        return;
    }

    let newestDriverReport = ArchClassifier.NewestDriverReportPerArch.get(archName);
    let newestReportContainer = Reports.find(r => r.GetField("ID") == newestDriverReport.ID);

    let featureValue = newestReportContainer.GetField(featureName);

    if (OverrideCell(featureRow, archName, featureName, featureValue, newestDriverReport, newestReportContainer, tooltipAlignment)) {
        return
    }

    AddCellReal(Properties.MakeHumanReadableShort(featureName, featureValue), featureRow);
}

function AddSpecialRow(featureRow, featureName) {
    if (featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS19.RasterizerDesc2Supported" || featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS18.RenderPassesValid") {
        // I don't know why, but both D3D12_FEATURE_DATA_D3D12_OPTIONS18 and D3D12_FEATURE_DATA_D3D12_OPTIONS19 were added in the same SDK version
        AddCellReal("Always supported *", featureRow, "Starting with Agility SDK 1.610.0, it is always supported, independently of GPU or driver.", 0.5, ArchToOutputCount());
        return true;
    }
    if (featureName == "D3D12_FEATURE_DATA_ROOT_SIGNATURE.HighestVersion") {
        AddCellReal("1.2 *", featureRow, "Starting with Agility SDK 1.610.0, Root Signature 1.2 is always supported, independently of GPU or driver.", 0.5, ArchToOutputCount());
        return true;
    }
    if (featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS1.ExpandedComputeResourceStates") {
        AddCellReal("Always supported *", featureRow, "Starting with Windows 10 version 1607, it is always supported, independently of GPU or driver.\nAll currently supported Windows versions are newer than Windows 10 version 1607.", 0.5, ArchToOutputCount());
        return true;
    }

    return false;
}

function AddRow(tbody, featureName, featureShortName, archTooltipAlignments) {
    let featureRow = document.createElement("tr");

    // Filter out features based on Globals.PropertiesSearchString
    let featureNameLowercase = featureName.toLowerCase();
    let featureNameShortLowercase = featureName.toLowerCase();
    let searchStringLowercase = Globals.PropertiesSearchString.toLowerCase();
    let propertyAllowList = ["TableReleaseDate", "TableMarketShare"];
    let searchTest =
        searchStringLowercase == "" ||
        featureNameLowercase.includes(searchStringLowercase) ||
        featureNameShortLowercase.includes(searchStringLowercase) ||
        propertyAllowList.includes(featureName);

    if (!searchTest) {
        return;
    }

    let featureHeader = document.createElement("td");
    featureHeader.classList.add("FeatureHeader");
    featureHeader.append(featureShortName);
    featureHeader.scope = "row";
    if (!featureName.startsWith("Table"))
        AddTooltipForTable(featureHeader, featureName, { alignOutsideVertical: true, tooltipAlignment: 0.0 });
    else if (featureName == "TableMarketShare")
        AddTooltipForTable(featureHeader, "Market share in the Steam Hardware Survey among DirectX 12 Systems.\nThis is an underestimate and may not be very accurate in general.", { alignOutsideVertical: true, tooltipAlignment: 0.0 });

    featureRow.appendChild(featureHeader);

    if (AddSpecialRow(featureRow, featureName)) {
        tbody.appendChild(featureRow);
        return;
    }

    // TODO: merge columns that are the same across GPUs for the same vendor? maybe a bit too much
    for (let [vendor, archs] of Object.entries(ArchClassifier.ArchsPerVendor)) {
        for (let archName of archs) {
            if (!NeedOutputArch(vendor, archName))
                continue;
            AddCell(featureRow, archName, featureName, archTooltipAlignments.get(archName));
        }
        tbody.appendChild(featureRow);
    }
}

function UpdateTableBody(table, archTooltipAlignments) {
    let tbody = document.createElement("tbody");

    for (let [featureName, featureShortName] of Object.entries(FeatureTableConstants.TableFeaturesShortNames)) {
        AddRow(tbody, featureName, featureShortName, archTooltipAlignments);
    }
    table.appendChild(tbody);
}

function UpdateTooltipAlignmentMap()
{
    let result = new Map();
    let colCount = 1;
    for (let [vendor, archs] of Object.entries(ArchClassifier.ArchsPerVendor)) {
        for (let a of archs) {
            if (!NeedOutputArch(vendor, a))
                continue;
            ++colCount;
        }
    }
    let currentCol = 0;
    for (let [vendor, archs] of Object.entries(ArchClassifier.ArchsPerVendor)) {
        for (let a of archs) {
            if (!NeedOutputArch(vendor, a))
                continue;
            ++currentCol;
            result.set(a, currentCol / (colCount - 1));
        }
    }
    return result;
}

function UpdateTable() {
    const tableContainer = document.getElementById("FeatureTable");
    HTML.ClearElement(tableContainer);

    let table = document.createElement("table");
    tableContainer.appendChild(table);
    HTML.ClearElement(table);

    let archTooltipAlignments = UpdateTooltipAlignmentMap();

    // construct table header with vendor name in the first row and arch name in the second row
    UpdateTableHeader(table, archTooltipAlignments);

    // construct table body with all the features
    UpdateTableBody(table, archTooltipAlignments);
}

function OverrideSearch() {
    window.addEventListener("keydown", function (e) {
        if (SearchBar == null || document.activeElement == SearchBar)
        {
            return;
        }

        let searchDetected = false;
        searchDetected = searchDetected || (e.key === "F3");
        searchDetected = searchDetected || (e.key.toUpperCase() === "F" && e.ctrlKey);

        if (searchDetected)
        {
            e.preventDefault();
            SearchBar.focus();
        }
    })
}

function OnLoad() {
    OverrideSearch();

    const tableContainer = document.getElementById("FeatureTable")
    const textContainer = document.createElement("div")
    const loadingText = document.createTextNode("Loading. Please wait.")
    textContainer.appendChild(loadingText)
    tableContainer.appendChild(textContainer)

    Server.GetAllSubmissions((data) => {
        Reports = data;
        ArchClassifier.ClassifyReports(Reports);
        UpdateTableFilter();
        UpdateTable();
    })
}

window.addEventListener('DOMContentLoaded', OnLoad, false);
