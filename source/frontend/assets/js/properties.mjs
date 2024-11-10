import * as Constants from './constants.mjs'
import * as Globals from './globals.mjs'

export function RemoveArrayIndex(property) {
    return property.replace(/\[\d+\]/g, "")
}

export function GetNameBeforeArrayIndex(property) {
    return property.replace(/\[\d+\].*/, "")
}

export function MakeHumanReadableProperty(property) {
    if (property in Constants.PropertyHumanReadableNames) {
        return Constants.PropertyHumanReadableNames[property]
    }

    return property
}

export function MakeHumanReadable(property, value) {
    let effectiveProperty = RemoveArrayIndex(property)

    if (value == null) return value

    if (effectiveProperty in Constants.EnumMappings) {
        return Constants.EnumMappings[effectiveProperty][value] ?? `Unknown(${value})`
    }

    if (effectiveProperty in Constants.BitFlagsMappings) {
        let result = ''
        let bitCount = 0
        for (let i = 1; i <= value; i = i << 1) {
            if (value & i) {
                bitCount++
                result += (Constants.BitFlagsMappings[effectiveProperty][i] ?? `Unknown(${i})`) + " |\n"
            }
        }
        if (result == '') {
            result = Constants.BitFlagsMappings[effectiveProperty][0] ?? "Unknown"
        }
        else {
            result = result.substring(0, result.length - 3)
        }
        result += bitCount > 1 ? "\n" : " "
        result += `(0x${Number(value).toString(16)})`
        return result
    }

    if (effectiveProperty in Constants.SuffixMappings) {
        return value + Constants.SuffixMappings[effectiveProperty]
    }

    switch (effectiveProperty) {
        case "SystemInfo.NvAPI_SYS_GetDriverAndBranchVersion.pDriverVersion":
        case "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.driverVersion":
            {
                return (value / 100).toFixed(2)
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
                    let ZeroPad = (e, pad) => e.length >= pad ? e : "0".repeat(pad - e.length) + e
                    decodedValue = "0x" + ZeroPad(Number(value).toString(16), 4)
                } else {
                    // ACPI ID codepath
                    let ToTextID = (e) => String.fromCharCode(e & 0xFF, (e >> 8) & 0xFF, (e >> 16) & 0xFF, (e >> 24) & 0xFF);
                    decodedValue = ToTextID(value)
                }
                if (Constants.VendorIDs[decodedValue])
                    return `${Constants.VendorIDs[decodedValue]} (${decodedValue})`
                else
                    return `Unknown (${decodedValue})`
            }
        // DWORD sized hex number representing Subsystem ID
        case "DXGI_ADAPTER_DESC3.SubSysId":
        case "NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pSubSystemId":
            {
                let ZeroPad = (e, pad) => e.length >= pad ? e : "0".repeat(pad - e.length) + e
                let susbystemVendorID = "0x" + ZeroPad(Number(value & 0xFFFF).toString(16), 4)
                let hexValue = "0x" + ZeroPad(Number(value).toString(16), 8)
                if (Constants.SubsystemVendorIDs[susbystemVendorID])
                    return `${Constants.SubsystemVendorIDs[susbystemVendorID]} (${hexValue})`
                else
                    return hexValue
            }
        // BYTE sized hex number
        case "NvPhysicalGpuHandle.NvAPI_GPU_GetVbiosOEMRevision":
            {
                let ZeroPad = (e, pad) => e.length >= pad ? e : "0".repeat(pad - e.length) + e
                return "0x" + ZeroPad(Number(value).toString(16), 2)
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
                let ZeroPad = (e, pad) => e.length >= pad ? e : "0".repeat(pad - e.length) + e
                return "0x" + ZeroPad(Number(value).toString(16), 4)
            }
        // DWORD sized hex number
        case "NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pDeviceID":
        case "NvPhysicalGpuHandle.NvAPI_GPU_GetVbiosRevision":
        case "Intel GPUDetect::GPUData.extensionVersion":
            {
                let ZeroPad = (e, pad) => e.length >= pad ? e : "0".repeat(pad - e.length) + e
                return "0x" + ZeroPad(Number(value).toString(16), 8)
            }
        // 32 bit AMD AGS encoded version
        case "Header.agsGetVersionNumber":
            {
                let a = BigInt(value)
                return `${(a >> 22n) & 1023n}.${(a >> 12n) & 1023n}.${a & 4095n}`
            }
        // 64 bit encoded version
        case "CheckInterfaceSupport.UMDVersion":
            {
                let a = BigInt(value)
                return `${(a >> 48n) & 65535n}.${(a >> 32n) & 65535n}.${(a >> 16n) & 65535n}.${a & 65535n}`
            }
        // KiB to human readable
        case "SystemInfo.System memory.GetPhysicallyInstalledSystemMemory":
        case "NvPhysicalGpuHandle.NvAPI_GPU_GetPhysicalFrameBufferSize":
        case "NvPhysicalGpuHandle.NvAPI_GPU_GetVirtualFrameBufferSize":
            value *= 1024 // Convert to bytes
        // Then fallthrough to
        // Bytes to human readable
        case "SystemInfo.System memory.MEMORYSTATUSEX::ullTotalPhys":
        case "SystemInfo.System memory.MEMORYSTATUSEX::ullTotalPageFile":
        case "SystemInfo.System memory.MEMORYSTATUSEX::ullTotalVirtual":
        case "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_LOCAL].Budget":
        case "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_LOCAL].AvailableForReservation":
        case "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_NON_LOCAL].Budget":
        case "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_NON_LOCAL].AvailableForReservation":
        case "DXGI_ADAPTER_DESC3.DedicatedVideoMemory":
        case "DXGI_ADAPTER_DESC3.DedicatedSystemMemory":
        case "DXGI_ADAPTER_DESC3.SharedSystemMemory":
        case "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemory":
        case "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::availableDedicatedVideoMemory":
        case "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::systemVideoMemory":
        case "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::sharedSystemMemory":
        case "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::curAvailableDedicatedVideoMemory":
        case "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryEvictionsSize":
        case "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryPromotionsSize":
        case "NvAPI_D3D12_QueryCpuVisibleVidmem.pTotalBytes":
        case "AGSDeviceInfo.localMemoryInBytes":
        case "AGSDeviceInfo.sharedMemoryInBytes":
        case "Intel GPUDetect::GPUData.videoMemory":
        case "NvAPI_D3D12_QueryWorkstationFeatureProperties.NV_D3D12_WORKSTATION_FEATURE_TYPE_RDMA_BAR1_SUPPORT - rdmaHeapSize":
            {
                const prefixes = ['B', 'KiB', 'MiB', 'GiB', 'TiB']
                let a = Number(value)
                let prefixIndex = 0
                while (a > 1024) {
                    a /= 1024
                    ++prefixIndex
                }
                a = a.toFixed(2)
                return a + prefixes[prefixIndex]
            }
        case "DirectSR.OptimizationRankings":
            {
                return value.split(", ").map(e => {
                    switch (e) {
                        case "0": return "DSR_OPTIMIZATION_TYPE_BALANCED"
                        case "1": return "DSR_OPTIMIZATION_TYPE_HIGH_QUALITY"
                        case "2": return "DSR_OPTIMIZATION_TYPE_MAX_QUALITY"
                        case "3": return "DSR_OPTIMIZATION_TYPE_HIGH_PERFORMANCE"
                        case "4": return "DSR_OPTIMIZATION_TYPE_MAX_PERFORMANCE"
                        case "5": return "DSR_OPTIMIZATION_TYPE_POWER_SAVING"
                        case "6": return "DSR_OPTIMIZATION_TYPE_MAX_POWER_SAVING"
                        default: return `Unknown(${e})`
                    }
                }).join(", ")
            }
    }

    if (Array.isArray(value))
        return value.join(", ")

    return value
}

export function FilterField(name, value) {
    let humanReadableName = MakeHumanReadableProperty(name)
    let humanReadableValue = MakeHumanReadable(name, value)
    let filterString = Globals.PropertiesSearchString.toLocaleLowerCase()
    return filterString == ""
        || PropertiesFilterWhitelist.has(name)
        || name.toString().toLowerCase().includes(filterString)
        || humanReadableName.toString().toLowerCase().includes(filterString)
        || value.toString().toLowerCase().includes(filterString)
        || humanReadableValue.toString().toLowerCase().includes(filterString)
}
