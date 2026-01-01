import * as Constants from './constants.mjs'
import * as Properties from './properties.mjs'

export let ArchsPerVendor = {
    Microsoft: new Set(),
    AMD: new Set(),
    Nvidia: new Set(),
    Intel: new Set(),
    Qualcomm: new Set(),
};
export let ReportsPerArch = new Map();
export let AdapterNamesPerArch = new Map();
export let NewestDriverReportPerArch = new Map();
let UndefinedReports = [];

function ReportFilter(report) {
    if (report.GetField("Header.Using preview Agility SDK"))
        return true;

    if (Properties.GetTranslationLayerName(report) != "None")
        return true;

    if (Constants.PreviewDriverVersionsSet.has(report.GetField("CheckInterfaceSupport.UMDVersion")))
        return true;

    // filter out RDNA2 iGPUs with 1 WGP since they don't have mesh shaders unlike all other RDNA2 GPUs
    if (report.GetField("AGSDeviceInfo.asicFamily") == 8 && report.GetField("AGSDeviceInfo.numWGPs") == 1 && report.GetField("D3D12_FEATURE_DATA_D3D12_OPTIONS7.MeshShaderTier") == 0)
        return true;

    return false;
}

function IsReportNewer(lhs, rhs) {
    if (rhs == null)
        return true;
    if (lhs.CheckInterfaceSupport.UMDVersion != rhs.CheckInterfaceSupport.UMDVersion)
        return BigInt(lhs.CheckInterfaceSupport.UMDVersion) > BigInt(rhs.CheckInterfaceSupport.UMDVersion);
    if (lhs.Header.Version != rhs.Header.Version)
        return lhs.Header.Version > rhs.Header.Version;
    return lhs.ID > rhs.ID;
}

function ClassifyReport(reportContainer) {
    let report = reportContainer.GetOriginalReport();
    let vendorId = Properties.MakeHumanReadable("DXGI_ADAPTER_DESC3.VendorId", report.DXGI_ADAPTER_DESC3.VendorId);
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
            0x000000C0 : "Fermi", // GF10x (most 4xx)
            0x000000D0 : "Fermi2", // GF11x (most 5xx)
            0x000000E0 : "Kepler", // GK10x (most 6xx)
            0x000000F0 : "Kepler1", // GK110 (Titan, 780)
            0x00000100 : "Kepler2", // GK2xx (Tegra, Jetson, Tesla K80, 720, etc.)
            0x00000110 : "Maxwell1", // GM1xx (750, 850M, 950M, etc.)
            0x00000120 : "Maxwell2", // GM2xx (most 9xx)
            0x00000130 : "Pascal",
            0x00000140 : "Volta", // GV100
            0x00000150 : "Volta1", // GV11x (Jetson Xavier)
            0x00000160 : "Turing",
            0x00000170 : "Ampere",
            0x00000190 : "Ada",
            0x000001B0 : "Blackwell"
        };

        arch = NvidiaArchitectures[report.NvPhysicalGpuHandle["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id"]];

        if (!arch) {
            arch = "Arch ID " + report.NvPhysicalGpuHandle["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id"];
        }

        if (arch === "Turing")
        {
            const GPUID = report.NvPhysicalGpuHandle["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::implementation_id"];
            if (GPUID == 7 || GPUID == 8) // TU116 or TU117
            {
                arch = "Turing 16"
            }
            else
            {
                arch = "Turing 20"
            }
        }

        // filter variants except Maxwell, should have same D3D12 features (though not CUDA features)
        if (arch == "Kepler2" || arch == "Kepler1")
            arch = "Kepler";
        else if (arch == "Fermi2")
            arch = "Fermi"; // unconfirmed
        else if (arch == "Volta1")
            arch = "Volta"; // unconfirmed

        ArchsPerVendor.Nvidia.add(arch);
    }
    else if (vendorId.startsWith("NVIDIA")) {
        // old GPUs for which nvapi doesn't work, or we don't know whether it works
        switch (report.DXGI_ADAPTER_DESC3.Description) {
            case "NVIDIA GeForce 615":
            case "NVIDIA GeForce GT 415M":
            case "NVIDIA GeForce GT 420":
            case "NVIDIA GeForce GT 420M":
            case "NVIDIA GeForce GT 425M":
            case "NVIDIA GeForce GT 430":
            case "NVIDIA GeForce GT 435M":
            case "NVIDIA GeForce GT 440":
            case "NVIDIA GeForce GT 445M":
            case "NVIDIA GeForce GT 525M":
            case "NVIDIA GeForce GT 530":
            case "NVIDIA GeForce GT 555M":
            case "NVIDIA GeForce GTS 450":
            case "NVIDIA GeForce GTX 460M":
            case "NVIDIA GeForce GTX 465":
            case "NVIDIA GeForce GTX 470":
            case "NVIDIA GeForce GTX 470M":
            case "NVIDIA GeForce GTX 480":
            case "NVIDIA GeForce GTX 480M":
            case "NVIDIA GeForce GTX 485M":
            case "NVIDIA NVS 5400M":
            case "NVIDIA Quadro 1000M":
            case "NVIDIA Quadro 2000":
            case "NVIDIA Quadro 2000M":
            case "NVIDIA Quadro 3000M":
            case "NVIDIA Quadro 4000":
            case "NVIDIA Quadro 4000M":
            case "NVIDIA Quadro 5000M":
            case "NVIDIA Quadro 600":
            case "NVIDIA Quadro 6000":
                arch = "Fermi";
                break;
            case "NVIDIA GeForce 410M":
            case "NVIDIA GeForce 510":
            case "NVIDIA GeForce 605":
            case "NVIDIA GeForce 705A":
            case "NVIDIA GeForce GT 520":
            case "NVIDIA GeForce GT 520MX":
            case "NVIDIA GeForce GT 545":
            case "NVIDIA GeForce GT 550M":
            case "NVIDIA GeForce GT 625":
            case "NVIDIA GeForce GT 705":
            case "NVIDIA GeForce GTX 550 Ti":
            case "NVIDIA GeForce GTX 555":
            case "NVIDIA GeForce GTX 560":
            case "NVIDIA GeForce GTX 560 SE":
            case "NVIDIA GeForce GTX 560 Ti":
            case "NVIDIA GeForce GTX 560M":
            case "NVIDIA GeForce GTX 570":
            case "NVIDIA GeForce GTX 570M":
            case "NVIDIA GeForce GTX 580":
            case "NVIDIA GeForce GTX 580M":
            case "NVIDIA GeForce GTX 590":
            case "NVIDIA GeForce GTX 670M":
            case "NVIDIA GeForce GTX 675M":
            case "NVIDIA NVS 315":
            case "NVIDIA NVS 4200M":
            case "NVIDIA Quadro 5010M":
                arch = "Fermi2";
                break;
        }
        if (arch) {
            ArchsPerVendor.Nvidia.add(arch);
        }
    }
    else if (vendorId.startsWith("Qualcomm")) {

        if (/Snapdragon\(R\) X (Plus)|(Elite) - X1.*/.test(report.DXGI_ADAPTER_DESC3.Description)) {
            arch = "X1";
        }
        if (/Qualcomm\(R\) Adreno\(TM\) X1.*/.test(report.DXGI_ADAPTER_DESC3.Description)) {
            arch = "X1";
        }
        else if (report.DXGI_ADAPTER_DESC3.Description.includes("8cx")) {
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

export function ClassifyReports(inputReports)
{
    for (let report of inputReports) {
        if (!ReportFilter(report))
            ClassifyReport(report);
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
        let ra = Constants.ArchReleaseDates[a] ?? 9999;
        let rb = Constants.ArchReleaseDates[b] ?? 9999;
        if (ra == rb)
            return a.localeCompare(b);
        return ra - rb;
    }

    SortSet(ArchsPerVendor.AMD, ReleaseDateCompare);
    SortSet(ArchsPerVendor.Nvidia, ReleaseDateCompare);
    SortSet(ArchsPerVendor.Intel, ReleaseDateCompare);
    SortSet(ArchsPerVendor.Qualcomm, ReleaseDateCompare);
}
