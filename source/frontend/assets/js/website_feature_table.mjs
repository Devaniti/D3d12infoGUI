﻿import * as Server from './server.mjs'
import * as Properties from './properties.mjs'
import * as Constants from './constants.mjs'
import * as FeatureTableConstants from './feature_table_constants.mjs'
import * as HTML from './html.mjs'
import ArchStats from './arch_stats.mjs'
import Globals from './globals.mjs'

let Reports = [];

function MakeHumanReadableForTable(property, value) {
    if (property == null) return value;
    
    let effectiveProperty = Properties.RemoveArrayIndex(property);

    if (value == null) return "❓";

    if (effectiveProperty in FeatureTableConstants.TableEnumMappings) {
        return FeatureTableConstants.TableEnumMappings[effectiveProperty][value] ?? `❓(${value})`;
    }

    if (effectiveProperty in FeatureTableConstants.TableBitFlagsMappings) {
        let result = '';
        let bitCount = 0;
        for (let i = 1; i <= value; i = i << 1) {
            if (value & i) {
                bitCount++;
                result += (FeatureTableConstants.TableBitFlagsMappings[effectiveProperty][i] ?? `❓(${i})`) + "\n";
            }
        }
        if (result == '') {
            result = FeatureTableConstants.TableBitFlagsMappings[effectiveProperty][0] ?? "❓";
        }
        else {
            result = result.substring(0, result.length - 1);
        }
        return result;
    }

    switch (effectiveProperty) {
        case "SystemInfo.NvAPI_SYS_GetDriverAndBranchVersion.pDriverVersion":
        case "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.driverVersion":
            {
                return (value / 100).toFixed(2);
            }
        // WORD sized hex number representing Vendor ID
        case "DXGI_ADAPTER_DESC3.VendorId":
        case "AGSDeviceInfo.vendorId":
        case "VkPhysicalDeviceProperties.vendorID":
        case "Intel GPUDetect::GPUData.VendorId":
            {
                let decodedValue;
                if (value <= 0xFFFF) {
                    // PCI ID codepath
                    let ZeroPad = (e, pad) => e.length >= pad ? e : "0".repeat(pad - e.length) + e;
                    decodedValue = "0x" + ZeroPad(Number(value).toString(16), 4);
                } else {
                    // ACPI ID codepath
                    let ToTextID = (e) => String.fromCharCode(e & 0xFF, (e >> 8) & 0xFF, (e >> 16) & 0xFF, (e >> 24) & 0xFF);
                    decodedValue = ToTextID(value);
                }
                if (Constants.VendorIDs[decodedValue])
                    return `${Constants.VendorIDs[decodedValue]} (${decodedValue})`;
                else
                    return `❓ (${decodedValue})`;
            }
        // WORD sized hex number
        case "DXGI_ADAPTER_DESC3.DeviceId":
        case "DXGI_ADAPTER_DESC3.Revision":
        case "NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pRevisionId":
        case "NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pExtDeviceId":
        case "AGSDeviceInfo.deviceId":
        case "AGSDeviceInfo.revisionId":
        case "Intel GPUDetect::GPUData.deviceID":
        case "VkPhysicalDeviceProperties.driverVersion":
        case "VkPhysicalDeviceProperties.deviceID":
            {
                let ZeroPad = (e, pad) => e.length >= pad ? e : "0".repeat(pad - e.length) + e;
                return "0x" + ZeroPad(Number(value).toString(16), 4);
            }
        // DWORD sized hex number
        case "NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pDeviceID":
        case "NvPhysicalGpuHandle.NvAPI_GPU_GetVbiosRevision":
        case "Intel GPUDetect::GPUData.extensionVersion":
            {
                let ZeroPad = (e, pad) => e.length >= pad ? e : "0".repeat(pad - e.length) + e;
                return "0x" + ZeroPad(Number(value).toString(16), 8);
            }
        // 64 bit encoded version
        case "CheckInterfaceSupport.UMDVersion":
            {
                let a = BigInt(value);
                return `${(a >> 48n) & 65535n}.${(a >> 32n) & 65535n}.${(a >> 16n) & 65535n}.${a & 65535n}`;
            }
    }

    if (Array.isArray(value))
        return value.join(", ");

    return value;
}

function MakeTextElementForTable(property, value) {
    let text = MakeHumanReadableForTable(property, value);
    let span = document.createElement("span");
    span.textContent = text;

    if (text == "N/A")
    {
        span.style.fontStyle = "italic";
        span.style.color = "#888888";
    }

    return span;
}

let ArchsPerVendor = {
    Microsoft: new Set(),
    AMD: new Set(),
    Nvidia: new Set(),
    Intel: new Set(),
    Qualcomm: new Set(),
};
let ReportsPerArch = new Map();
let AdapterNamesPerArch = new Map();
let NewestDriverReportPerArch = new Map();
let UndefinedReports = [];

function ClearTableReportData() {
    ArchsPerVendor.Microsoft.clear();
    ArchsPerVendor.AMD.clear();
    ArchsPerVendor.Nvidia.clear();
    ArchsPerVendor.Intel.clear();
    ArchsPerVendor.Qualcomm.clear();
    ReportsPerArch.clear();
    AdapterNamesPerArch.clear();
    NewestDriverReportPerArch.clear();
    UndefinedReports = [];
}

function SpliceReportByArchAndVendor(reportContainer) {
    let report = reportContainer.GetOriginalReport();
    let vendorId = MakeHumanReadableForTable("DXGI_ADAPTER_DESC3.VendorId", report.DXGI_ADAPTER_DESC3.VendorId);
    let arch;
    if (report.DXGI_ADAPTER_DESC3.Description == "Microsoft Basic Render Driver") {
        arch = "WARP";
        ArchsPerVendor.Microsoft.add(arch);
    }
    else if (report.AGSDeviceInfo && report.AGSDeviceInfo.asicFamily != undefined) {

        const AMDArchitectures = [
            "Unknown", ///< Unknown architecture, potentially from another IHV. Check \ref AGSDeviceInfo::vendorId
            "PreGCN",  ///< Pre GCN architecture.
            "GCN1",    ///< AMD GCN 1 architecture: Oland, Cape Verde, Pitcairn & Tahiti.
            "GCN2",    ///< AMD GCN 2 architecture: Hawaii & Bonaire.  This also includes APUs Kaveri and Carrizo.
            "GCN3",    ///< AMD GCN 3 architecture: Tonga & Fiji.
            "GCN4",    ///< AMD GCN 4 architecture: Polaris.
            "Vega",    ///< AMD Vega architecture, including Raven Ridge (ie AMD Ryzen CPU + AMD Vega GPU).
            "RDNA",    ///< AMD RDNA architecture
            "RDNA2",   ///< AMD RDNA2 architecture
            "RDNA3",   ///< AMD RDNA3 architecture
            "RDNA4",   ///< AMD RDNA4 architecture
        ];

        const DeviceIDMappings = {
            "30032": "RDNA4", // Radeon RX 9070 / 9070 XT
        }

        // TODO: unknown asic reports could be assigned by device ID lists
        if (report.AGSDeviceInfo.asicFamily != 0) {
            arch = AMDArchitectures[report.AGSDeviceInfo.asicFamily];

            if (!arch) {
                arch = "Arch ID " + report.AGSDeviceInfo.asicFamily;
            }

            ArchsPerVendor.AMD.add(arch);
        } else if (report.DXGI_ADAPTER_DESC3.DeviceId in DeviceIDMappings) {
            arch = DeviceIDMappings[report.DXGI_ADAPTER_DESC3.DeviceId];
            ArchsPerVendor.AMD.add(arch);
        }
    }
    else if (vendorId.startsWith("Intel")) {

        // GPUDetect is not necessarily up to date and all it does in the end is match device IDs, so we can just do the same
        // https://github.com/GameTechDev/gpudetect/blob/master/GPUDetect.cpp, https://github.com/GameTechDev/gpudetect/blob/master/DeviceId.cpp
        // https://dgpu-docs.intel.com/devices/hardware-table.html, https://cgit.freedesktop.org/xorg/driver/xf86-video-intel/tree/src/intel_module
        // https://github.com/intel/compute-runtime/blob/master/shared/source/dll/devices/devices_base.inl
        // https://github.com/intel/compute-runtime/blob/master/shared/source/helpers/definitions/device_ids_configs_base.h (e.g. device_ids_configs_bmg.h has the device IDs for Battlemage)
        // NOTE: there are sometimes inconsistencies between those lists
        // Intel has officially dropped the "Gen" naming with Xe, but it's very handy for sorting
        const IntelDeviceIdHighBits = {
            0x0400: "Gen7.5", 0x0A00: "Gen7.5", 0x0D00: "Gen7.5", 0x0C00: "Gen7.5", // Haswell
            0x1600: "Gen8", 0x0B00: "Gen8", 0x2200: "Gen8", // Broadwell, Cherryview
            0x1900: "Gen9", 0x0900: "Gen9", // Skylake
            // Kaby Lake, Gemini Lake, Cannon Lake, Coffee Lake, Comet Lake, Whiskey Lake, Apollo Lake
            0x5900: "Gen9.5", 0x3100: "Gen9.5", 0x3E00: "Gen9.5", 0x9B00: "Gen9.5", 0x5A00: "Gen9.5",
            0x8A00: "Gen11", // Ice Lake
            // Tiger Lake, Elkhart Lake, Jasper Lake, Comet Lake, Rocket Lake, Alder Lake, DG1, Raptor Lake
            0x9A00: "Xe", 0x4500: "Xe", 0x4E00: "Xe", 0x4C00: "Xe", 0x4600: "Xe", 0x4900: "Xe", 0xA700: "Xe",
            0x5600: "Xe-HPG", // Alchemist
            0x0B00: "Xe-HPC", // Ponte Vecchio (data center GPU)
            0x7D00: "Xe-LPG", // Meteor Lake, Arrow Lake
            0x6400: "Xe2-HPG", // Lunar Lake
            0xE200: "Xe2-HPG", // Battlemage
        };

        let idhi = report.DXGI_ADAPTER_DESC3.DeviceId & 0xFF00;
        arch = IntelDeviceIdHighBits[idhi];

        // if the device ID matching didn't work, try GPUDetect
        if (!arch && report["Intel GPUDetect::GPUData"]) {
            arch = report["Intel GPUDetect::GPUData"].GraphicsGeneration;
            if (arch == "Unknown" &&
                report["Intel GPUDetect::GPUData"].GPUArchitecture == "Unknown (37)" &&
                report.DXGI_ADAPTER_DESC3.Description == "Intel(R) Iris(R) Xe Graphics") // integrated Xe-LP, Alder/Rocket Lake
                arch = "Xe";
            else if (arch == "Xe High Performance Graphics")
                arch = "Gen12.7 / Xe-HPG";
            else if (arch == "Xe High Performance Compute") // data center GPU, probably doesn't even have D3D drivers?
                arch = "Xe-HPC";
            else if (arch == "Xe Low Power Graphics") // Meteor/Arrow Lake, reported name unconfirmed, not even in GPUDetect as of 2024-11-11
                arch = "Gen12.7 / Xe-LPG";
            else if (arch == "Xe2 High Performance Graphics") // Lunar Lake, Battlemage, reported name unconfirmed, not even in GPUDetect as of 2024-11-11
                arch = "Gen13 / Xe2-HPG";
        }

        if (arch) ArchsPerVendor.Intel.add(arch);
    }
    else if (report.NvPhysicalGpuHandle && report.NvPhysicalGpuHandle["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id"]) {

        const NvidiaArchitectures = {
            Fermi: 0x000000C0, // GF10x (most 4xx)
            Fermi1: 0x000000D0, // GF11x (most 5xx)
            Kepler: 0x000000E0, // GK10x (most 6xx)
            Kepler1: 0x000000F0, // GK110 (Titan, 780)
            Kepler2: 0x00000100, // GK2xx (Tegra, Jetson, Tesla K80, 720, etc.)
            Maxwell1: 0x00000110, // GM1xx (750, 850M, 950M, etc.)
            Maxwell2: 0x00000120, // GM2xx (most 9xx)
            Pascal: 0x00000130,
            Volta: 0x00000140, // GV100
            Volta1: 0x00000150, // GV11x (Jetson Xavier)
            Turing: 0x00000160,
            Ampere: 0x00000170,
            Ada: 0x00000190,
            Blackwell: 0x000001B0
        };

        function GetKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
        }
        arch = GetKeyByValue(NvidiaArchitectures, report.NvPhysicalGpuHandle["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id"]);

        if (!arch) {
            arch = "Arch ID " + report.NvPhysicalGpuHandle["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id"];
        }

        // filter variants except Maxwell, should have same D3D12 features (though not CUDA features)
        if (arch == "Kepler2" || arch == "Kepler1")
            arch = "Kepler";
        else if (arch == "Fermi1")
            arch = "Fermi"; // unconfirmed
        else if (arch == "Volta1")
            arch = "Volta"; // unconfirmed

        ArchsPerVendor.Nvidia.add(arch ? arch : report.NvPhysicalGpuHandle["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id"].toString());
    }
    else if (vendorId.startsWith("Qualcomm")) {

        if (/Snapdragon\(R\) X (Plus)|(Elite) - X1.*/.test(report.DXGI_ADAPTER_DESC3.Description))
            arch = "X1";
        else if (report.DXGI_ADAPTER_DESC3.Description.includes("8cx"))
        {
            arch = report.DXGI_ADAPTER_DESC3.Description.slice(report.DXGI_ADAPTER_DESC3.Description.search(/8cx.*/));
            arch = arch.replace("Gen ", "");
        }

        if (arch) ArchsPerVendor.Qualcomm.add(arch);
    }

    if (!arch) {
        UndefinedReports.push(report);
    }
    else {
        if (ReportsPerArch.has(arch))
            ReportsPerArch.get(arch).push(report);
        else
            ReportsPerArch.set(arch, [report]);

        if (AdapterNamesPerArch.has(arch))
            AdapterNamesPerArch.get(arch).add(report.DXGI_ADAPTER_DESC3.Description);
        else
            AdapterNamesPerArch.set(arch, new Set([report.DXGI_ADAPTER_DESC3.Description]));
    }
}

function IsReportNewer(lhs, rhs) {
    if (rhs == null)
        return true;
    if (lhs.CheckInterfaceSupport.UMDVersion != rhs.CheckInterfaceSupport.UMDVersion)
        return lhs.CheckInterfaceSupport.UMDVersion > rhs.CheckInterfaceSupport.UMDVersion;
    if (lhs.Header.Version != rhs.Header.Version)
        return lhs.Header.Version > rhs.Header.Version;
    return lhs.ID > rhs.ID;
}

function FeatureTableFilter(report) {
    if (report.GetField("Header.Using preview Agility SDK"))
        return true;

    // filter out RDNA2 iGPUs with 1 WGP since they don't have mesh shaders unlike all other RDNA2 GPUs
    if (report.GetField("AGSDeviceInfo.asicFamily") == 8 && report.GetField("AGSDeviceInfo.numWGPs") == 1 && report.GetField("D3D12_FEATURE_DATA_D3D12_OPTIONS7.MeshShaderTier") == 0)
        return true;

    return false;
}

function PrepareReportsForTable() {
    ClearTableReportData();

    for (let report of Reports) {
        if (!FeatureTableFilter(report))
            SpliceReportByArchAndVendor(report);
    }

    for (let [arch, reports] of ReportsPerArch) {
        let newestReport = null;
        for (let r of reports) {
            if (IsReportNewer(r, newestReport))
                newestReport = r;
        }
        NewestDriverReportPerArch.set(arch, newestReport);
    }

    function SortSet(set, comparefn) {
        const entries = [];
        for (const member of set) {
            entries.push(member);
        }
        set.clear();
        for (const entry of entries.sort(comparefn)) {
            set.add(entry);
        }
        return set;
    }

    function ReleaseDateCompare(a, b) {
        // If the release date is not defined, it's set to 9999
        let ra = FeatureTableConstants.ArchReleaseDates[a] ?? 9999;
        let rb = FeatureTableConstants.ArchReleaseDates[b] ?? 9999; 
        if (ra == rb)
            return a.localeCompare(b);
        return ra - rb;
    }
    
    SortSet(ArchsPerVendor.AMD, ReleaseDateCompare);
    SortSet(ArchsPerVendor.Nvidia, ReleaseDateCompare);
    SortSet(ArchsPerVendor.Intel, ReleaseDateCompare);
    SortSet(ArchsPerVendor.Qualcomm, ReleaseDateCompare);
}

const DefaultTooltipOptions = {
    alignOutsideHorizontal: false,
    alignOutsideVertical: false,
    preferTowardsBottom: false,
    tooltipAlignment: "top"
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
    tooltipTextElement.className = "tooltiptext white_space_pre tooltiptext" + options.tooltipAlignment;
    tooltipTextElement.textContent = text;
    parent.appendChild(tooltipTextElement);

    return tooltipTextElement; // in case you want to do something further with it
}

function NeedOutputVendor(vendor) {
    if (!Globals.VendorFilter[vendor])
        return false;

    // Check if any of the architectures for this vendor are newer than the filter
    for (let arch of ArchsPerVendor[vendor]) {
        let releaseDate = FeatureTableConstants.ArchReleaseDates[arch] ?? 9999;
        if (Globals.ArchAgeFilter <= releaseDate)
            return true;
    }

    return false;
}

function VendorArchToOutputCount(vendor) {
    let res = 0;
    
    for (let arch of ArchsPerVendor[vendor]) {
        let releaseDate = FeatureTableConstants.ArchReleaseDates[arch] ?? 9999;
        if (Globals.ArchAgeFilter <= releaseDate)
            res++;
    }

    return res;
}

function NeedOutputArch(vendor, arch) {
    let vendorShows = Globals.VendorFilter[vendor];
    let archReleaseDate = FeatureTableConstants.ArchReleaseDates[arch];
    if (archReleaseDate == undefined)
        {
            archReleaseDate = "9999"
        };
    return vendorShows && Globals.ArchAgeFilter <= archReleaseDate;
}

function AddFilterPanel(container) {
    let filterPanel = document.createElement("div");
    filterPanel.className = "FilterPanel";
    container.appendChild(filterPanel);

    const searchBar = document.createElement("input")
    searchBar.type = "search"
    searchBar.placeholder = "Search Properties"
    searchBar.classList.add("searchBar")
    Globals.PropertiesSearchString = "";
    searchBar.addEventListener('input', function (e) {
        Globals.PropertiesSearchString = e.target.value;
        UpdateTable();
    })
    container.appendChild(searchBar)

    let fieldSetContainer = document.createElement("div");
    fieldSetContainer.classList.add("FieldSetContainer");
    container.appendChild(fieldSetContainer);

    let vendorFilterFieldset = document.createElement("fieldset");
    vendorFilterFieldset.classList.add("VendorFilter");
    let legend = document.createElement("legend");
    legend.textContent = "Vendor Filter";
    vendorFilterFieldset.appendChild(legend);

    for (let vendor of Object.keys(ArchsPerVendor)) {
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
    archAgeSlider.value = 2017;
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

function UpdateTable() {
    const tableContainer = document.getElementById("FeatureTable");
    HTML.ClearElement(tableContainer);

    let table = document.createElement("table");
    tableContainer.appendChild(table);
    HTML.ClearElement(table);

    // construct table header with vendor name in the first row and arch name in the second row
    UpdateTableHeader(table);

    // construct table body with all the features
    UpdateTableBody(table);
}

function UpdateTableHeader(table) {
    let thead = document.createElement("thead");
    let headerRowVendor = document.createElement("tr");
    let headerRowArch = document.createElement("tr");
    headerRowVendor.appendChild(document.createElement("th")); // column for feature name
    headerRowArch.appendChild(document.createElement("th")); // column for feature name

    let colGroupFeature = document.createElement("colgroup");
    table.appendChild(colGroupFeature);

    for (let [vendor, archs] of Object.entries(ArchsPerVendor)) {
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

            let sortedAdapterNames = Array.from(AdapterNamesPerArch.get(a)).sort();

            for (let adapterName of sortedAdapterNames) {
                tooltipText += adapterName + "\n";
            }

            AddTooltipForTable(thArch, tooltipText,
                {
                    alignOutsideVertical: true,
                    preferTowardsBottom: true,
                    tooltipAlignment: "bottomright"
                });
        }
    }

    thead.appendChild(headerRowVendor);
    thead.appendChild(headerRowArch);
    table.appendChild(thead);
}

function UpdateTableBody(table) {
    let tbody = document.createElement("tbody");

    for (let [featureName, featureShortName] of Object.entries(FeatureTableConstants.TableFeaturesShortNames)) {
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
            continue;
        }

        let featureHeader = document.createElement("td");
        featureHeader.classList.add("FeatureHeader");
        featureHeader.append(featureShortName);
        featureHeader.scope = "row";
        if (!featureName.startsWith("Table"))
            AddTooltipForTable(featureHeader, featureName, { alignOutsideVertical: true });
        else if (featureName == "TableMarketShare")
            AddTooltipForTable(featureHeader, "Market share in the Steam Hardware Survey among DirectX 12 System. This is an underestimate.", { alignOutsideVertical: true });

        featureRow.appendChild(featureHeader);

        // TODO: merge columns that are the same across GPUs for the same vendor? maybe a bit too much
        for (let [vendor, archs] of Object.entries(ArchsPerVendor)) {
            for (let archName of archs) {
                if (!NeedOutputArch(vendor, archName))
                    continue;

                let newestDriverReport = NewestDriverReportPerArch.get(archName);

                if (featureName == "TableReleaseDate") {
                    let td = document.createElement("td");
                    let releaseDate = FeatureTableConstants.ArchReleaseDates[archName];
                    if (releaseDate == undefined)
                    {
                        releaseDate = "Unknown"
                    }

                    let tooltipText;
                    if (archName == "WARP")
                    {
                        releaseDate = "N/A"
                        tooltipText = "WARP is a software rasterizer that continues to receive updates over time.\nComparing its initial release date (2015) to the release dates of hardware GPUs,\nwhich cannot gain new features after release, is not meaningful.";
                    }
                    if (tooltipText)
                        AddTooltipForTable(td, tooltipText, { alignOutsideVertical: true, tooltipAlignment: "bottomleft" });

                    td.appendChild(MakeTextElementForTable(null, releaseDate));
                    featureRow.appendChild(td);
                }
                else if (featureName == "TableNumReports") {
                    let td = document.createElement("td");
                    td.append(ReportsPerArch.get(archName).length);
                    featureRow.appendChild(td);
                }
                else if (featureName == "TableMarketShare") {
                    let td = document.createElement("td");
                    let marketShare = ArchStats[archName];
                    let tooltipText;

                    if (archName == "WARP")
                    {
                        marketShare = "N/A"
                        tooltipText = "WARP is a software rasterizer, not a hardware GPU, so it doesn't have a market share and not in Steam Hardware Survey.";
                    }
                    else if (marketShare == undefined)
                    {
                        marketShare = "~0%"
                    }
                    else
                    {
                        marketShare = Math.round(marketShare * 10000) / 100 + "%"
                    }
                    td.appendChild(MakeTextElementForTable(null, marketShare));
                    featureRow.appendChild(td);
                    if (tooltipText)
                        AddTooltipForTable(td, tooltipText, { alignOutsideVertical: true, tooltipAlignment: "bottomleft" });
                }
                else if (featureName == "TableReportUsed") {
                    let td = document.createElement("td");
                    let link = document.createElement("a");
                    link.href = `ID.html?ID=${newestDriverReport.ID}`;
                    link.append(newestDriverReport.ID);
                    td.appendChild(link);
                    featureRow.appendChild(td);
                }
                else if (featureName == "TableD3d12InfoVersion") {
                    let td = document.createElement("td");
                    let version = newestDriverReport.Header.Version;
                    td.append(version);
                    featureRow.appendChild(td);
                }
                else { // regular feature data
                    // TODO: report feature data more reliably, is this good enough?
                    // - output something like "7/10" for boolean data?
                    // - enums could display highest value in any report
                    // - bisect by driver version?
                    // - filter out reports with experimental features on, take max of every feature? (too many reports with this, would remove archs from the table)
                    // NOTE: we need to get the matching ReportContainer that has all the fields mapped as strings
                    // TODO: could also redesign all of the code above to use ReportContainers, it's just slightly less nice to use
                    let newestReportContainer = Reports.find(r => r.GetField("ID") == newestDriverReport.ID);

                    let featureValue = newestReportContainer.GetField(featureName);
                    let displayRawFeatureValue = false;
                    let tooltipText = "";

                    // fix up reports with preview SDK that use the experimental options field instead of OPTIONS12 for work graphs
                    if (featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS21.WorkGraphsTier" && featureValue == undefined) {
                        featureValue = newestReportContainer.GetField("D3D12_FEATURE_DATA_D3D12_OPTIONS_EXPERIMENTAL.WorkGraphsTier");
                    }
                    // GPU Upload Heap support depends on BIOS settings / Windows version, so if any report is true we take that one
                    else if (featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS16.GPUUploadHeapSupported") {
                        for (let r of ReportsPerArch.get(archName)) {
                            if (r.D3D12_FEATURE_DATA_D3D12_OPTIONS16.GPUUploadHeapSupported) {
                                featureValue = 1;
                                break;
                            }
                        }
                    }
                    // If our tiled resource tier is 3, the SRVOnlyTiledResourceTier3 flag does not apply, but is always true, which is misleading
                    else if (featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS5.SRVOnlyTiledResourceTier3" && newestDriverReport.D3D12_FEATURE_DATA_D3D12_OPTIONS.TiledResourcesTier >= 3) {
                        featureValue = "N/A";
                        displayRawFeatureValue = true;
                    }
                    else if (featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS5.RaytracingTier" && archName == "Pascal") {
                        featureValue = "Tier 1.0 *";
                        displayRawFeatureValue = true;
                        tooltipText = "Pascal have (software emulated) Tier 1.0 raytracing support, but only if the card has 6GB of VRAM or more";
                    }
                    else if (featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS5.RaytracingTier" && archName == "Turing") {
                        featureValue = "Tier 1.1 *";
                        displayRawFeatureValue = true;
                        tooltipText = "Within Turing architecture there are:\nRTX 20 series and Quadro RTX cards with hardware Tier 1.1 support\nGTX 16 series cards with >= 6GB of VRAM with software emulated Tier 1.0 support\nGTX 16 series cards with < 6GB of VRAM with no raytracing support at all";
                    }
                    else if (featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS7.MeshShaderTier" && archName == "RDNA2") {
                        featureValue = FeatureTableConstants.TableTrueFalseMapping["1"] + "*";
                        displayRawFeatureValue = true;
                        tooltipText = "RDNA2 iGPUs with 1 WGP don't have mesh shader support";
                    }
                    let td = document.createElement("td");
                    td.appendChild(MakeTextElementForTable(displayRawFeatureValue ? null : featureName, featureValue));
                    featureRow.appendChild(td);
                    if (tooltipText !== "")
                        AddTooltipForTable(td, tooltipText, { alignOutsideVertical: true, tooltipAlignment: "bottomcenter" });
                }
            }
            tbody.appendChild(featureRow);
        }
    }
    table.appendChild(tbody);
}

function OnLoad() {
    const tableContainer = document.getElementById("FeatureTable")
    const textContainer = document.createElement("div")
    const loadingText = document.createTextNode("Loading. Please wait.")
    textContainer.appendChild(loadingText)
    tableContainer.appendChild(textContainer)

    Server.GetAllSubmissions((data) => {
        Reports = data;
        PrepareReportsForTable();
        UpdateTableFilter();
        UpdateTable();
    })
}

window.addEventListener('DOMContentLoaded', OnLoad, false);
