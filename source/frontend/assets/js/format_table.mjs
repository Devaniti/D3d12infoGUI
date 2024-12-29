import * as Properties from "./properties.mjs"
import * as Constants from "./constants.mjs"

const Headers = [
    "Format",
    "Supported",
    "Buffer",
    "Vertex Buffer",
    "Index Buffer",
    "Stream Output",
    "Texture1D",
    "Texture2D",
    "Texture3D",
    "Texture Cube",
    "Shader Load",
    "Shader Sample",
    "Shader Comparison Sample",
    "Reserved",
    "Mipmaps",
    "Render Target",
    "Blendable",
    "Depth Stencil",
    "MultiSample Resolve",
    "Display",
    "Cast Within Bit Layout",
    "MultiSample Render Target",
    "MultiSample Load",
    "Shader Gather",
    "Casting when Back Buffer",
    "Typed UAV",
    "Shader Gather Comparison",
    "Decoder Output",
    "Video Processor Output",
    "Video Processor Input",
    "Video Encoder",
    "UAV Atomic Add",
    "UAV Atomic Bitwise ops",
    "UAV Atomic CmpStore/Exch",
    "UAV Atomic Exchange",
    "UAV Atomic Signed min/max",
    "UAV Atomic Unsigned min/max",
    "UAV Typed Load",
    "UAV Typed Store",
    "Output Merged Logic Ops",
    "Tiled",
    "MultiPlane Overlay",
    "Sampler Feedback"
]

const BitMapping = [
    [1, 0],          // Buffer                    
    [2, 0],          // Vertex Buffer
    [4, 0],          // Index Buffer
    [8, 0],          // Stream Output
    [16, 0],         // Texture1D
    [32, 0],         // Texture2D
    [64, 0],         // Texture3D
    [128, 0],        // TextureCube
    [256, 0],        // Shader Load
    [512, 0],        // Shader Sample
    [1024, 0],       // Shader Sample Comparison
    [2048, 0],       // Reserved (SHADER_SAMPLE_MONO_TEXT)
    [4096, 0],       // Mipmaps
    // Skipped bit
    [16384, 0],      // Render Target
    [32768, 0],      // Blendable
    [65536, 0],      // Depth Stencil
    // Skipped bit
    [262144, 0],     // MultiSample Resolve
    [524288, 0],     // Display
    [1048576, 0],    // Cast Within Bit Layout
    [2097152, 0],    // MultiSample Render Target
    [4194304, 0],    // MultiSample Load
    [8388608, 0],    // Shader Gather
    [16777216, 0],   // Casting when Back Buffer
    [33554432, 0],   // Typed UAV
    [67108864, 0],   // Shader Gather Comparison
    [134217728, 0],  // Decoder Output
    [268435456, 0],  // Video Processor Output
    [536870912, 0],  // Video Processor Input
    [1073741824, 0], // Video Encoder
    [0, 1],          // UAV Atomic add
    [0, 2],          // UAV Atomic bitwise ops
    [0, 4],          // UAV Atomic compare store/exchange
    [0, 8],          // UAV Atomic exchange
    [0, 16],         // UAV Atomic signed min/max
    [0, 32],         // UAV Atomic unsigned min/max
    [0, 64],         // UAV Typed Load
    [0, 128],        // UAV Typed Store
    [0, 256],        // Output Merger Logical Ops
    [0, 512],        // Tiled
    // Skipped bits
    [0, 16384],      // MultiPlane Overlay
    [0, 32768]       // Sampler Feedback
]

const RequiredSupport = {
    "0": { "Support1": 1, "Support2": 512 },
    "1": { "Support1": 1052912, "Support2": 512 },
    "2": { "Support1": 49599483, "Support2": 704 },
    "3": { "Support1": 40915451, "Support2": 960 },
    "4": { "Support1": 40915451, "Support2": 704 },
    "5": { "Support1": 1052912, "Support2": 0 },
    "6": { "Support1": 5509627, "Support2": 0 },
    "7": { "Support1": 5247483, "Support2": 256 },
    "8": { "Support1": 5247483, "Support2": 0 },
    "9": { "Support1": 1052912, "Support2": 512 },
    "10": { "Support1": 50123763, "Support2": 704 },
    "11": { "Support1": 49599475, "Support2": 640 },
    "12": { "Support1": 40915443, "Support2": 960 },
    "13": { "Support1": 49599475, "Support2": 640 },
    "14": { "Support1": 40915443, "Support2": 704 },
    "15": { "Support1": 1052912, "Support2": 512 },
    "16": { "Support1": 49599483, "Support2": 640 },
    "17": { "Support1": 40915451, "Support2": 896 },
    "18": { "Support1": 40915451, "Support2": 640 },
    "19": { "Support1": 1052848, "Support2": 0 },
    "20": { "Support1": 3215536, "Support2": 0 },
    "21": { "Support1": 80746416, "Support2": 0 },
    "22": { "Support1": 5247408, "Support2": 0 },
    "23": { "Support1": 1052912, "Support2": 512 },
    "24": { "Support1": 66900979, "Support2": 640 },
    "25": { "Support1": 40915443, "Support2": 896 },
    "89": { "Support1": 18350112, "Support2": 512 },
    "26": { "Support1": 48550899, "Support2": 640 },
    "27": { "Support1": 1052912, "Support2": 512 },
    "28": { "Support1": 66900979, "Support2": 704 },
    "29": { "Support1": 33346544, "Support2": 512 },
    "30": { "Support1": 40915443, "Support2": 960 },
    "31": { "Support1": 49599475, "Support2": 640 },
    "32": { "Support1": 40915443, "Support2": 704 },
    "33": { "Support1": 1052912, "Support2": 512 },
    "34": { "Support1": 49599475, "Support2": 640 },
    "35": { "Support1": 49599475, "Support2": 640 },
    "36": { "Support1": 40915443, "Support2": 896 },
    "37": { "Support1": 49599475, "Support2": 640 },
    "38": { "Support1": 40915443, "Support2": 640 },
    "39": { "Support1": 1052912, "Support2": 512 },
    "40": { "Support1": 3215536, "Support2": 512 },
    "41": { "Support1": 116709371, "Support2": 712 },
    "42": { "Support1": 40915455, "Support2": 1023 },
    "43": { "Support1": 40915451, "Support2": 767 },
    "44": { "Support1": 1052848, "Support2": 0 },
    "45": { "Support1": 3215536, "Support2": 0 },
    "46": { "Support1": 80746416, "Support2": 0 },
    "47": { "Support1": 5247408, "Support2": 0 },
    "48": { "Support1": 1052912, "Support2": 512 },
    "49": { "Support1": 49599475, "Support2": 640 },
    "50": { "Support1": 40915443, "Support2": 896 },
    "51": { "Support1": 49599475, "Support2": 640 },
    "52": { "Support1": 40915443, "Support2": 640 },
    "53": { "Support1": 1052912, "Support2": 512 },
    "54": { "Support1": 49599475, "Support2": 704 },
    "55": { "Support1": 3215536, "Support2": 512 },
    "56": { "Support1": 116709363, "Support2": 640 },
    "57": { "Support1": 40915447, "Support2": 960 },
    "58": { "Support1": 49599475, "Support2": 640 },
    "59": { "Support1": 40915443, "Support2": 704 },
    "60": { "Support1": 1052912, "Support2": 512 },
    "61": { "Support1": 49599475, "Support2": 704 },
    "62": { "Support1": 40915443, "Support2": 960 },
    "63": { "Support1": 49599475, "Support2": 640 },
    "64": { "Support1": 40915443, "Support2": 704 },
    "65": { "Support1": 48550896, "Support2": 640 },
    "67": { "Support1": 8393712, "Support2": 512 },
    "68": { "Support1": 8393712, "Support2": 0 },
    "69": { "Support1": 8393712, "Support2": 0 },
    "70": { "Support1": 1052896, "Support2": 512 },
    "71": { "Support1": 9442272, "Support2": 512 },
    "72": { "Support1": 9442272, "Support2": 512 },
    "73": { "Support1": 1052896, "Support2": 512 },
    "74": { "Support1": 9442272, "Support2": 512 },
    "75": { "Support1": 9442272, "Support2": 512 },
    "76": { "Support1": 1052896, "Support2": 512 },
    "77": { "Support1": 9442272, "Support2": 512 },
    "78": { "Support1": 9442272, "Support2": 512 },
    "79": { "Support1": 1052896, "Support2": 512 },
    "80": { "Support1": 9442272, "Support2": 512 },
    "81": { "Support1": 9442272, "Support2": 512 },
    "82": { "Support1": 1052896, "Support2": 512 },
    "83": { "Support1": 9442272, "Support2": 512 },
    "84": { "Support1": 9442272, "Support2": 512 },
    "85": { "Support1": 14996464, "Support2": 512 },
    "86": { "Support1": 8655856, "Support2": 512 },
    "90": { "Support1": 1052912, "Support2": 512 },
    "87": { "Support1": 33346547, "Support2": 512 },
    "91": { "Support1": 33346544, "Support2": 512 },
    "92": { "Support1": 1052912, "Support2": 512 },
    "88": { "Support1": 16045043, "Support2": 512 },
    "93": { "Support1": 16045040, "Support2": 512 },
    "94": { "Support1": 1052896, "Support2": 512 },
    "95": { "Support1": 9442272, "Support2": 512 },
    "96": { "Support1": 9442272, "Support2": 512 },
    "97": { "Support1": 1052896, "Support2": 512 },
    "98": { "Support1": 9442272, "Support2": 512 },
    "99": { "Support1": 9442272, "Support2": 512 },
    "103": { "Support1": 41992992, "Support2": 128 },
    "106": { "Support1": 32, "Support2": 0 },
    "107": { "Support1": 41943840, "Support2": 128 },
    "115": { "Support1": 8655856, "Support2": 512 },
}

function AddCell(row, text) {
    let cell = document.createElement("td")
    cell.textContent = text
    row.appendChild(cell)
    return cell
}

function AddIconCell(row, iconName) {
    let cell = document.createElement("td")
    let icon = document.createElement("img")
    icon.className = "cell-icon"
    icon.src = iconName
    cell.appendChild(icon)
    row.appendChild(cell)
    return cell
}

function SupportValue(isSupported, isRequired) {
    if (isSupported && isRequired) {
        return "required.svg"
    }
    else if (isSupported && !isRequired) {
        return "supported.svg"
    }
    else if (!isSupported && !isRequired) {
        return "unsupported.svg"
    }
    else {
        return "error.svg"
    }
}

function FeatureSupportValue(formatID, format, bit1, bit2) {
    let isSupported = ((format.Support1 & bit1) == bit1) && ((format.Support2 & bit2) == bit2)
    let requiredFormat = RequiredSupport[formatID]
    let isRequired = requiredFormat && ((requiredFormat.Support1 & bit1) == bit1) && ((requiredFormat.Support2 & bit2) == bit2);
    return SupportValue(isSupported, isRequired)
}

function FormatSupportValue(formatID, isSupported) {
    let isRequired = RequiredSupport[formatID] != undefined
    return SupportValue(isSupported, isRequired)
}

export function BuildFormatTable(reportContainer, tableContainer) {
    let formats = reportContainer.Formats()
    if (!formats) {
        return
    }

    const table = document.createElement("table")
    table.className = "FormatTable"

    const headerRow = document.createElement("tr")

    for (const header of Headers) {
        AddCell(headerRow, header)
    }

    table.appendChild(headerRow)

    for (const [formatID, format] of Object.entries(formats)) {
        let format = formats[formatID]
        const row = document.createElement("tr")
        AddCell(row, Constants.DXGI_FORMAT[formatID])
        AddIconCell(row, FormatSupportValue(formatID, format.Support1 != null))
        for (const [bit1, bit2] of BitMapping) {
            AddIconCell(row, FeatureSupportValue(formatID, format, bit1, bit2))
        }
        table.appendChild(row)
    }

    tableContainer.appendChild(table)
}