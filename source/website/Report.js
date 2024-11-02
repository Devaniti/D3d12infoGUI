const apiAddress = "https://d3d12infodbapi.boolka.dev"
const siteAddress = "https://d3d12infodb.boolka.dev"

const TrueFalseMapping =
{
    "0": "false",
    "1": "true"
}

const NVAPI_Status =
{
    "0": "OK",
    "-3": "NO_IMPLEMENTATION",
    "-8": "INVALID_HANDLE",
    "-104": "NOT_SUPPORTED",
    "-160": "SETTING_NOT_FOUND",
}

const DXGI_FORMAT =
{
    "0": "DXGI_FORMAT_UNKNOWN",
    "1": "DXGI_FORMAT_R32G32B32A32_TYPELESS",
    "2": "DXGI_FORMAT_R32G32B32A32_FLOAT",
    "3": "DXGI_FORMAT_R32G32B32A32_UINT",
    "4": "DXGI_FORMAT_R32G32B32A32_SINT",
    "5": "DXGI_FORMAT_R32G32B32_TYPELESS",
    "6": "DXGI_FORMAT_R32G32B32_FLOAT",
    "7": "DXGI_FORMAT_R32G32B32_UINT",
    "8": "DXGI_FORMAT_R32G32B32_SINT",
    "9": "DXGI_FORMAT_R16G16B16A16_TYPELESS",
    "10": "DXGI_FORMAT_R16G16B16A16_FLOAT",
    "11": "DXGI_FORMAT_R16G16B16A16_UNORM",
    "12": "DXGI_FORMAT_R16G16B16A16_UINT",
    "13": "DXGI_FORMAT_R16G16B16A16_SNORM",
    "14": "DXGI_FORMAT_R16G16B16A16_SINT",
    "15": "DXGI_FORMAT_R32G32_TYPELESS",
    "16": "DXGI_FORMAT_R32G32_FLOAT",
    "17": "DXGI_FORMAT_R32G32_UINT",
    "18": "DXGI_FORMAT_R32G32_SINT",
    "19": "DXGI_FORMAT_R32G8X24_TYPELESS",
    "20": "DXGI_FORMAT_D32_FLOAT_S8X24_UINT",
    "21": "DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS",
    "22": "DXGI_FORMAT_X32_TYPELESS_G8X24_UINT",
    "23": "DXGI_FORMAT_R10G10B10A2_TYPELESS",
    "24": "DXGI_FORMAT_R10G10B10A2_UNORM",
    "25": "DXGI_FORMAT_R10G10B10A2_UINT",
    "26": "DXGI_FORMAT_R11G11B10_FLOAT",
    "27": "DXGI_FORMAT_R8G8B8A8_TYPELESS",
    "28": "DXGI_FORMAT_R8G8B8A8_UNORM",
    "29": "DXGI_FORMAT_R8G8B8A8_UNORM_SRGB",
    "30": "DXGI_FORMAT_R8G8B8A8_UINT",
    "31": "DXGI_FORMAT_R8G8B8A8_SNORM",
    "32": "DXGI_FORMAT_R8G8B8A8_SINT",
    "33": "DXGI_FORMAT_R16G16_TYPELESS",
    "34": "DXGI_FORMAT_R16G16_FLOAT",
    "35": "DXGI_FORMAT_R16G16_UNORM",
    "36": "DXGI_FORMAT_R16G16_UINT",
    "37": "DXGI_FORMAT_R16G16_SNORM",
    "38": "DXGI_FORMAT_R16G16_SINT",
    "39": "DXGI_FORMAT_R32_TYPELESS",
    "40": "DXGI_FORMAT_D32_FLOAT",
    "41": "DXGI_FORMAT_R32_FLOAT",
    "42": "DXGI_FORMAT_R32_UINT",
    "43": "DXGI_FORMAT_R32_SINT",
    "44": "DXGI_FORMAT_R24G8_TYPELESS",
    "45": "DXGI_FORMAT_D24_UNORM_S8_UINT",
    "46": "DXGI_FORMAT_R24_UNORM_X8_TYPELESS",
    "47": "DXGI_FORMAT_X24_TYPELESS_G8_UINT",
    "48": "DXGI_FORMAT_R8G8_TYPELESS",
    "49": "DXGI_FORMAT_R8G8_UNORM",
    "50": "DXGI_FORMAT_R8G8_UINT",
    "51": "DXGI_FORMAT_R8G8_SNORM",
    "52": "DXGI_FORMAT_R8G8_SINT",
    "53": "DXGI_FORMAT_R16_TYPELESS",
    "54": "DXGI_FORMAT_R16_FLOAT",
    "55": "DXGI_FORMAT_D16_UNORM",
    "56": "DXGI_FORMAT_R16_UNORM",
    "57": "DXGI_FORMAT_R16_UINT",
    "58": "DXGI_FORMAT_R16_SNORM",
    "59": "DXGI_FORMAT_R16_SINT",
    "60": "DXGI_FORMAT_R8_TYPELESS",
    "61": "DXGI_FORMAT_R8_UNORM",
    "62": "DXGI_FORMAT_R8_UINT",
    "63": "DXGI_FORMAT_R8_SNORM",
    "64": "DXGI_FORMAT_R8_SINT",
    "65": "DXGI_FORMAT_A8_UNORM",
    "66": "DXGI_FORMAT_R1_UNORM",
    "67": "DXGI_FORMAT_R9G9B9E5_SHAREDEXP",
    "68": "DXGI_FORMAT_R8G8_B8G8_UNORM",
    "69": "DXGI_FORMAT_G8R8_G8B8_UNORM",
    "70": "DXGI_FORMAT_BC1_TYPELESS",
    "71": "DXGI_FORMAT_BC1_UNORM",
    "72": "DXGI_FORMAT_BC1_UNORM_SRGB",
    "73": "DXGI_FORMAT_BC2_TYPELESS",
    "74": "DXGI_FORMAT_BC2_UNORM",
    "75": "DXGI_FORMAT_BC2_UNORM_SRGB",
    "76": "DXGI_FORMAT_BC3_TYPELESS",
    "77": "DXGI_FORMAT_BC3_UNORM",
    "78": "DXGI_FORMAT_BC3_UNORM_SRGB",
    "79": "DXGI_FORMAT_BC4_TYPELESS",
    "80": "DXGI_FORMAT_BC4_UNORM",
    "81": "DXGI_FORMAT_BC4_SNORM",
    "82": "DXGI_FORMAT_BC5_TYPELESS",
    "83": "DXGI_FORMAT_BC5_UNORM",
    "84": "DXGI_FORMAT_BC5_SNORM",
    "85": "DXGI_FORMAT_B5G6R5_UNORM",
    "86": "DXGI_FORMAT_B5G5R5A1_UNORM",
    "87": "DXGI_FORMAT_B8G8R8A8_UNORM",
    "88": "DXGI_FORMAT_B8G8R8X8_UNORM",
    "89": "DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM",
    "90": "DXGI_FORMAT_B8G8R8A8_TYPELESS",
    "91": "DXGI_FORMAT_B8G8R8A8_UNORM_SRGB",
    "92": "DXGI_FORMAT_B8G8R8X8_TYPELESS",
    "93": "DXGI_FORMAT_B8G8R8X8_UNORM_SRGB",
    "94": "DXGI_FORMAT_BC6H_TYPELESS",
    "95": "DXGI_FORMAT_BC6H_UF16",
    "96": "DXGI_FORMAT_BC6H_SF16",
    "97": "DXGI_FORMAT_BC7_TYPELESS",
    "98": "DXGI_FORMAT_BC7_UNORM",
    "99": "DXGI_FORMAT_BC7_UNORM_SRGB",
    "100": "DXGI_FORMAT_AYUV",
    "101": "DXGI_FORMAT_Y410",
    "102": "DXGI_FORMAT_Y416",
    "103": "DXGI_FORMAT_NV12",
    "104": "DXGI_FORMAT_P010",
    "105": "DXGI_FORMAT_P016",
    "106": "DXGI_FORMAT_420_OPAQUE",
    "107": "DXGI_FORMAT_YUY2",
    "108": "DXGI_FORMAT_Y210",
    "109": "DXGI_FORMAT_Y216",
    "110": "DXGI_FORMAT_NV11",
    "111": "DXGI_FORMAT_AI44",
    "112": "DXGI_FORMAT_IA44",
    "113": "DXGI_FORMAT_P8",
    "114": "DXGI_FORMAT_A8P8",
    "115": "DXGI_FORMAT_B4G4R4A4_UNORM",
    "130": "DXGI_FORMAT_P208",
    "131": "DXGI_FORMAT_V208",
    "132": "DXGI_FORMAT_V408",
    "133": "DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE",
    "134": "DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE"
}

const EnumMappings =
{
    "DXGI_ADAPTER_DESC3.GraphicsPreemptionGranularity":
    {
        "0": "DXGI_GRAPHICS_PREEMPTION_DMA_BUFFER_BOUNDARY",
        "1": "DXGI_GRAPHICS_PREEMPTION_PRIMITIVE_BOUNDARY",
        "2": "DXGI_GRAPHICS_PREEMPTION_TRIANGLE_BOUNDARY",
        "3": "DXGI_GRAPHICS_PREEMPTION_PIXEL_BOUNDARY",
        "4": "DXGI_GRAPHICS_PREEMPTION_INSTRUCTION_BOUNDARY",
    },
    "DXGI_ADAPTER_DESC3.ComputePreemptionGranularity":
    {
        "0": "DXGI_COMPUTE_PREEMPTION_DMA_BUFFER_BOUNDARY",
        "1": "DXGI_COMPUTE_PREEMPTION_DISPATCH_BOUNDARY",
        "2": "DXGI_COMPUTE_PREEMPTION_THREAD_GROUP_BOUNDARY",
        "3": "DXGI_COMPUTE_PREEMPTION_THREAD_BOUNDARY",
        "4": "DXGI_COMPUTE_PREEMPTION_INSTRUCTION_BOUNDARY",
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.TiledResourcesTier":
    {
        "0": "D3D12_TILED_RESOURCES_TIER_NOT_SUPPORTED",
        "1": "D3D12_TILED_RESOURCES_TIER_1",
        "2": "D3D12_TILED_RESOURCES_TIER_2",
        "3": "D3D12_TILED_RESOURCES_TIER_3",
        "4": "D3D12_TILED_RESOURCES_TIER_4",
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceBindingTier":
    {
        "1": "D3D12_RESOURCE_BINDING_TIER_1",
        "2": "D3D12_RESOURCE_BINDING_TIER_2",
        "3": "D3D12_RESOURCE_BINDING_TIER_3"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ConservativeRasterizationTier":
    {
        "0": "D3D12_CONSERVATIVE_RASTERIZATION_TIER_NOT_SUPPORTED",
        "1": "D3D12_CONSERVATIVE_RASTERIZATION_TIER_1",
        "2": "D3D12_CONSERVATIVE_RASTERIZATION_TIER_2",
        "3": "D3D12_CONSERVATIVE_RASTERIZATION_TIER_3"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.CrossNodeSharingTier":
    {
        "0": "D3D12_CROSS_NODE_SHARING_TIER_NOT_SUPPORTED",
        "1": "D3D12_CROSS_NODE_SHARING_TIER_1_EMULATED",
        "2": "D3D12_CROSS_NODE_SHARING_TIER_1",
        "3": "D3D12_CROSS_NODE_SHARING_TIER_2",
        "4": "D3D12_CROSS_NODE_SHARING_TIER_3"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceHeapTier":
    {
        "1": "D3D12_RESOURCE_HEAP_TIER_1",
        "2": "D3D12_RESOURCE_HEAP_TIER_2"
    },
    "D3D12_FEATURE_DATA_FEATURE_LEVELS.MaxSupportedFeatureLevel":
    {
        "37120": "D3D_FEATURE_LEVEL_9_1",
        "37376": "D3D_FEATURE_LEVEL_9_2",
        "37632": "D3D_FEATURE_LEVEL_9_3",
        "40960": "D3D_FEATURE_LEVEL_10_0",
        "41216": "D3D_FEATURE_LEVEL_10_1",
        "45056": "D3D_FEATURE_LEVEL_11_0",
        "45312": "D3D_FEATURE_LEVEL_11_1",
        "49152": "D3D_FEATURE_LEVEL_12_0",
        "49408": "D3D_FEATURE_LEVEL_12_1",
        "49664": "D3D_FEATURE_LEVEL_12_2"
    },
    "D3D12_FEATURE_DATA_SHADER_MODEL.HighestShaderModel":
    {
        "81": "D3D_SHADER_MODEL_5_1",
        "96": "D3D_SHADER_MODEL_6_0",
        "97": "D3D_SHADER_MODEL_6_1",
        "98": "D3D_SHADER_MODEL_6_2",
        "99": "D3D_SHADER_MODEL_6_3",
        "100": "D3D_SHADER_MODEL_6_4",
        "101": "D3D_SHADER_MODEL_6_5",
        "102": "D3D_SHADER_MODEL_6_6",
        "103": "D3D_SHADER_MODEL_6_7",
        "104": "D3D_SHADER_MODEL_6_8",
        "105": "D3D_SHADER_MODEL_6_9"
    },
    "D3D12_FEATURE_DATA_ROOT_SIGNATURE.HighestVersion":
    {
        "1": "D3D_ROOT_SIGNATURE_VERSION_1_0",
        "2": "D3D_ROOT_SIGNATURE_VERSION_1_1",
        "3": "D3D_ROOT_SIGNATURE_VERSION_1_2"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS2.ProgrammableSamplePositionsTier":
    {
        "0": "D3D12_PROGRAMMABLE_SAMPLE_POSITIONS_TIER_NOT_SUPPORTED",
        "1": "D3D12_PROGRAMMABLE_SAMPLE_POSITIONS_TIER_1",
        "2": "D3D12_PROGRAMMABLE_SAMPLE_POSITIONS_TIER_2"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.ViewInstancingTier":
    {
        "0": "D3D12_VIEW_INSTANCING_TIER_NOT_SUPPORTED",
        "1": "D3D12_VIEW_INSTANCING_TIER_1",
        "2": "D3D12_VIEW_INSTANCING_TIER_2",
        "3": "D3D12_VIEW_INSTANCING_TIER_3"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS4.SharedResourceCompatibilityTier":
    {
        "0": "D3D12_SHARED_RESOURCE_COMPATIBILITY_TIER_0",
        "1": "D3D12_SHARED_RESOURCE_COMPATIBILITY_TIER_1",
        "2": "D3D12_SHARED_RESOURCE_COMPATIBILITY_TIER_2"
    },
    "D3D12_FEATURE_DATA_SERIALIZATION.HeapSerializationTier":
    {
        "0": "D3D12_HEAP_SERIALIZATION_TIER_0",
        "10": "D3D12_HEAP_SERIALIZATION_TIER_10"
    },
    "D3D12_FEATURE_DATA_CROSS_NODE.SharingTier":
    {
        "0": "D3D12_CROSS_NODE_SHARING_TIER_NOT_SUPPORTED",
        "1": "D3D12_CROSS_NODE_SHARING_TIER_1_EMULATED",
        "2": "D3D12_CROSS_NODE_SHARING_TIER_1",
        "3": "D3D12_CROSS_NODE_SHARING_TIER_2",
        "4": "D3D12_CROSS_NODE_SHARING_TIER_3"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS_EXPERIMENTAL.WorkGraphsTier":
    {
        "0": "D3D12_WORK_GRAPHS_TIER_NOT_SUPPORTED",
        "1": "D3D12_WORK_GRAPHS_TIER_0_1",
        "10": "D3D12_WORK_GRAPHS_TIER_1_0",
        "11": "D3D12_WORK_GRAPHS_TIER_1_1"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS5.RenderPassesTier":
    {
        "0": "D3D12_RENDER_PASS_TIER_0",
        "1": "D3D12_RENDER_PASS_TIER_1",
        "2": "D3D12_RENDER_PASS_TIER_2"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS5.RaytracingTier":
    {
        "0": "D3D12_RAYTRACING_TIER_NOT_SUPPORTED",
        "10": "D3D12_RAYTRACING_TIER_1_0",
        "11": "D3D12_RAYTRACING_TIER_1_1"
    },
    "D3D12_FEATURE_DATA_DISPLAYABLE.SharedResourceCompatibilityTier":
    {
        "0": "D3D12_SHARED_RESOURCE_COMPATIBILITY_TIER_0",
        "1": "D3D12_SHARED_RESOURCE_COMPATIBILITY_TIER_1",
        "2": "D3D12_SHARED_RESOURCE_COMPATIBILITY_TIER_2"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.VariableShadingRateTier":
    {
        "0": "D3D12_VARIABLE_SHADING_RATE_TIER_NOT_SUPPORTED",
        "1": "D3D12_VARIABLE_SHADING_RATE_TIER_1",
        "2": "D3D12_VARIABLE_SHADING_RATE_TIER_2"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS7.MeshShaderTier":
    {
        "0": "D3D12_MESH_SHADER_TIER_NOT_SUPPORTED",
        "10": "D3D12_MESH_SHADER_TIER_1"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS7.SamplerFeedbackTier":
    {
        "0": "D3D12_SAMPLER_FEEDBACK_TIER_NOT_SUPPORTED",
        "90": "D3D12_SAMPLER_FEEDBACK_TIER_0_9",
        "100": "D3D12_SAMPLER_FEEDBACK_TIER_1_0"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.WaveMMATier":
    {
        "0": "D3D12_WAVE_MMA_TIER_NOT_SUPPORTED",
        "10": "D3D12_WAVE_MMA_TIER_1_0"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS12.MSPrimitivesPipelineStatisticIncludesCulledPrimitives":
    {
        "-1": "UNKNOWN",
        "0": "FALSE",
        "1": "TRUE"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS20.RecreateAtTier":
    {
        "0": "D3D12_RECREATE_AT_TIER_NOT_SUPPORTED",
        "1": "D3D12_RECREATE_AT_TIER_1"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.WorkGraphsTier":
    {
        "0": "D3D12_WORK_GRAPHS_TIER_NOT_SUPPORTED",
        "10": "D3D12_WORK_GRAPHS_TIER_1_0",
        "11": "D3D12_WORK_GRAPHS_TIER_1_1"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.ExecuteIndirectTier":
    {
        "10": "D3D12_EXECUTE_INDIRECT_TIER_1_0",
        "11": "D3D12_EXECUTE_INDIRECT_TIER_1_1"
    },
    "DirectSR.VariantId":
    {
        "{8A17AE4B-B5F6-11EE-BAAF-00E1110012F6}": "Intel(R) Xe Super Sampling (XeSS) (8A17AE4B-B5F6-11EE-BAAF-00E1110012F6)",
        "{BCC8A605-FEF7-4089-948F-2796A9D54497}": "AMD FidelityFX Super Resolution 2.2 (BCC8A605-FEF7-4089-948F-2796A9D54497)",
        "{9578D791-9494-4707-8C35-4AF6D58F1DB9}": "AMD FidelityFX Super Resolution 3.1 (9578D791-9494-4707-8C35-4AF6D58F1DB9)"
    },
    "DirectSR.OptimalTargetFormat": DXGI_FORMAT,
    "VkPhysicalDeviceProperties.deviceType":
    {
        "0": "VK_PHYSICAL_DEVICE_TYPE_OTHER",
        "1": "VK_PHYSICAL_DEVICE_TYPE_INTEGRATED_GPU",
        "2": "VK_PHYSICAL_DEVICE_TYPE_DISCRETE_GPU",
        "3": "VK_PHYSICAL_DEVICE_TYPE_VIRTUAL_GPU",
        "4": "VK_PHYSICAL_DEVICE_TYPE_CPU"
    },
    "NvPhysicalGpuHandle.NvAPI_GPU_GetSystemType":
    {
        "0": "UNKNOWN",
        "1": "LAPTOP",
        "2": "DESKTOP"
    },
    "NvPhysicalGpuHandle.NvAPI_GPU_GetGPUType":
    {
        "0": "UNKNOWN",
        "1": "IGPU",
        "2": "DGPU"
    },
    "NvPhysicalGpuHandle.NvAPI_GPU_GetBusType":
    {
        "0": "UNDEFINED",
        "1": "PCI",
        "2": "AGP",
        "3": "PCI_EXPRESS",
        "4": "FPCI",
        "5": "AXI"
    },
    "NvPhysicalGpuHandle.NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id":
    {
        "3758096416": "T2X",
        "3758096432": "T3X",
        "3758096448": "T4X/T12X",
        "64": "NV40",
        "80": "NV50",
        "96": "G78",
        "128": "G80",
        "144": "G90",
        "160": "GT200",
        "192": "GF100",
        "208": "GF110",
        "224": "GK100",
        "240": "GK110",
        "256": "GK200",
        "272": "GM000",
        "288": "GM200",
        "304": "GP100",
        "320": "GV100",
        "336": "GV110",
        "352": "TU100",
        "368": "GA100",
        "400": "AD100"
    },
    "NvPhysicalGpuHandle.NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::implementation_id":
    {
        "3758096416": "T20",

        "3758096432": "T30",
        "3758096437": "T35",

        "3758096448": "T40/T124",

        "64": "NV40",
        "65": "NV41",
        "66": "NV42",
        "67": "NV43",
        "68": "NV44",
        "74": "NV44A",
        "70": "NV46",
        "71": "NV47",
        "73": "NV49",
        "75": "NV4B",
        "76": "NV4C",
        "78": "NV4E",

        "80": "NV50",
        "83": "NV63",
        "87": "NV67",

        "96": "G78",

        "132": "G84",
        "134": "G86",
        "146": "G92",
        "148": "G94",
        "150": "G96",
        "152": "G98",

        "160": "GT200",
        "162": "GT212",
        "164": "GT214",
        "163": "GT215",
        "165": "GT216",
        "168": "GT218",
        "170": "MCP77",
        "171": "GT21C",
        "172": "MCP79",
        "173": "GT21A",
        "175": "MCP89",

        "192": "GF100",
        "196": "GF104",
        "195": "GF106",
        "193": "GF108",

        "208": "GF110",
        "214": "GF116",
        "215": "GF117",
        "216": "GF118",
        "217": "GF119",

        "228": "GK104",
        "230": "GK106",
        "231": "GK107",
        "234": "GK20A",

        "240": "GK110",

        "264": "GK208",

        "272": "GM000",

        "292": "GM204",
        "294": "GM206",

        "304": "GP100",
        "305": "GP000",
        "306": "GP102",
        "308": "GP104",
        "310": "GP106",
        "311": "GP107",
        "312": "GP108",

        "320": "GV100",
        "331": "GV10B",

        "336": "GV110",

        "352": "TU100",
        "354": "TU102",
        "356": "TU104",
        "358": "TU106",
        "360": "TU116",
        "359": "TU117",
        "353": "TU000",

        "368": "GA100",
        "370": "GA102",
        "372": "GA104",
        "374": "GA106",

        "402": "AD102",
        "403": "AD103",
        "404": "AD104",
    },
    "NvPhysicalGpuHandle.NvAPI_GPU_QueryWorkstationFeatureSupport(NV_GPU_WORKSTATION_FEATURE_TYPE_NVIDIA_RTX_VR_READY)": NVAPI_Status,
    "NvPhysicalGpuHandle.NvAPI_GPU_QueryWorkstationFeatureSupport(NV_GPU_WORKSTATION_FEATURE_TYPE_PROVIZ)": NVAPI_Status,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::configurationOptions":
    {
        "0": "NOT_SUPPORTED",
        "1": "DEFERRED",
        "2": "IMMEDIATE"
    },
    "AGSDeviceInfo.asicFamily":
    {
        "0": "UNKNONW",
        "1": "Pre GCN",
        "2": "GCN1",
        "3": "GCN2",
        "4": "GCN3",
        "5": "GCN4",
        "6": "Vega",
        "7": "RDNA",
        "8": "RDNA2",
        "9": "RDNA3"
    },
    "Intel GPUDetect::GPUData.DefaultFidelityPreset":
    {
        "0": "NotCompatible",
        "1": "Low",
        "2": "Medium",
        "3": "MediumPlus",
        "4": "High",
        "5": "Undefined"
    },
    "Header.Using preview Agility SDK": TrueFalseMapping,
    "SystemInfo.DXGI_FEATURE.DXGI_FEATURE_PRESENT_ALLOW_TEARING": TrueFalseMapping,
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsDCHDriver": TrueFalseMapping,
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIAStudioPackage": TrueFalseMapping,
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIAGameReadyPackage": TrueFalseMapping,
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIARTXProductionBranchPackage": TrueFalseMapping,
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIARTXNewFeatureBranchPackage": TrueFalseMapping,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetVRReadyData - NV_GPU_VR_READY::isVRReady": TrueFalseMapping,
    "NvPhysicalGpuHandle.NvAPI_GPU_QueryIlluminationSupport(NV_GPU_IA_LOGO_BRIGHTNESS)": TrueFalseMapping,
    "NvPhysicalGpuHandle.NvAPI_GPU_QueryIlluminationSupport(NV_GPU_IA_SLI_BRIGHTNESS)": TrueFalseMapping,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::isSupported": TrueFalseMapping,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::isEnabled": TrueFalseMapping,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetGPUInfo - NV_GPU_INFO::bIsExternalGpu": TrueFalseMapping,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_SHFL": TrueFalseMapping,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_SHFL_UP": TrueFalseMapping,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_SHFL_DOWN": TrueFalseMapping,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_SHFL_XOR": TrueFalseMapping,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_VOTE_ALL": TrueFalseMapping,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_VOTE_ANY": TrueFalseMapping,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_VOTE_BALLOT": TrueFalseMapping,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_GET_LANE_ID": TrueFalseMapping,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_FP16_ATOMIC": TrueFalseMapping,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_FP32_ATOMIC": TrueFalseMapping,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_UINT64_ATOMIC": TrueFalseMapping,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_GET_SHADING_RATE": TrueFalseMapping,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_VPRS_EVAL_ATTRIB_AT_SAMPLE": TrueFalseMapping,
    "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_THREAD_REORDERING": TrueFalseMapping,
    "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_OPACITY_MICROMAP": TrueFalseMapping,
    "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_DISPLACEMENT_MICROMAP": TrueFalseMapping,
    "NvAPI_D3D12_QueryWorkstationFeatureProperties.NV_D3D12_WORKSTATION_FEATURE_TYPE_PRESENT_BARRIER - supported": TrueFalseMapping,
    "NvAPI_D3D12_QueryWorkstationFeatureProperties.NV_D3D12_WORKSTATION_FEATURE_TYPE_RDMA_BAR1_SUPPORT - supported": TrueFalseMapping,
    "NvAPI_D3D12_GetNeedsAppFPBlendClamping.pAppClampNeeded": TrueFalseMapping,
    "AGSDeviceInfo.isAPU": TrueFalseMapping,
    "AGSDeviceInfo.isExternal": TrueFalseMapping,
    "AGSDX12ReturnedParams::ExtensionsSupported.intrinsics16": TrueFalseMapping,
    "AGSDX12ReturnedParams::ExtensionsSupported.intrinsics17": TrueFalseMapping,
    "AGSDX12ReturnedParams::ExtensionsSupported.userMarkers": TrueFalseMapping,
    "AGSDX12ReturnedParams::ExtensionsSupported.appRegistration": TrueFalseMapping,
    "AGSDX12ReturnedParams::ExtensionsSupported.UAVBindSlot": TrueFalseMapping,
    "AGSDX12ReturnedParams::ExtensionsSupported.intrinsics19": TrueFalseMapping,
    "AGSDX12ReturnedParams::ExtensionsSupported.baseVertex": TrueFalseMapping,
    "AGSDX12ReturnedParams::ExtensionsSupported.baseInstance": TrueFalseMapping,
    "AGSDX12ReturnedParams::ExtensionsSupported.getWaveSize": TrueFalseMapping,
    "AGSDX12ReturnedParams::ExtensionsSupported.floatConversion": TrueFalseMapping,
    "AGSDX12ReturnedParams::ExtensionsSupported.readLaneAt": TrueFalseMapping,
    "AGSDX12ReturnedParams::ExtensionsSupported.rayHitToken": TrueFalseMapping,
    "AGSDX12ReturnedParams::ExtensionsSupported.shaderClock": TrueFalseMapping,
    "Intel GPUDetect::GPUData.intelExtensionAvailability": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.DoublePrecisionFloatShaderOps": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.OutputMergerLogicOp": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.PSSpecifiedStencilRefSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.TypedUAVLoadAdditionalFormats": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ROVsSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.StandardSwizzle64KBSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.CrossAdapterRowMajorTextureSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.VPAndRTArrayIndexFromAnyShaderFeedingRasterizerSupportedWithoutGSEmulation": TrueFalseMapping,
    "D3D12_FEATURE_DATA_ARCHITECTURE1.TileBasedRenderer": TrueFalseMapping,
    "D3D12_FEATURE_DATA_ARCHITECTURE1.UMA": TrueFalseMapping,
    "D3D12_FEATURE_DATA_ARCHITECTURE1.CacheCoherentUMA": TrueFalseMapping,
    "D3D12_FEATURE_DATA_ARCHITECTURE1.IsolatedMMU": TrueFalseMapping,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_NORMAL.PriorityForTypeIsSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_HIGH.PriorityForTypeIsSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_NORMAL.PriorityForTypeIsSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_HIGH.PriorityForTypeIsSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_NORMAL.PriorityForTypeIsSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_HIGH.PriorityForTypeIsSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_CROSS_NODE.AtomicShaderInstructions": TrueFalseMapping,
    "D3D12_FEATURE_DATA_PREDICATION.Supported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_HARDWARE_COPY.Supported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_APPLICATION_SPECIFIC_DRIVER_STATE.Supported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveOps": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.ExpandedComputeResourceStates": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.Int64ShaderOps": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS2.DepthBoundsTestSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.CopyQueueTimestampQueriesSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.CastingFullyTypedFormatSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.BarycentricsSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_EXISTING_HEAPS.Supported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS4.MSAA64KBAlignedTextureSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS4.Native16BitShaderOpsSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS5.SRVOnlyTiledResourceTier3": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.AdditionalShadingRatesSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.PerPrimitiveShadingRateSupportedWithViewportIndexing": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.BackgroundProcessingSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS8.UnalignedBlockTexturesSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.MeshShaderPipelineStatsSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.MeshShaderSupportsFullRangeRenderTargetArrayIndex": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.AtomicInt64OnTypedResourceSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.AtomicInt64OnGroupSharedSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.DerivativesInMeshAndAmplificationShadersSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS10.VariableRateShadingSumCombinerSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS10.MeshShaderPerPrimitiveShadingRateSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS11.AtomicInt64OnDescriptorHeapResourceSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS12.EnhancedBarriersSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS12.RelaxedFormatCastingSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.UnrestrictedBufferTextureCopyPitchSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.UnrestrictedVertexElementAlignmentSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.InvertedViewportHeightFlipsYSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.InvertedViewportDepthFlipsZSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.TextureCopyBetweenDimensionsSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.AlphaBlendFactorSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS14.AdvancedTextureOpsSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS14.WriteableMSAATexturesSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS14.IndependentFrontAndBackStencilRefMaskSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS15.TriangleFanSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS15.DynamicIndexBufferStripCutSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS16.DynamicDepthBiasSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS16.GPUUploadHeapSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS17.NonNormalizedCoordinateSamplersSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS17.ManualWriteTrackingResourceSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS18.RenderPassesValid": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.MismatchingOutputDimensionsSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.PointSamplingAddressesNeverRoundUp": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.RasterizerDesc2Supported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.NarrowQuadrilateralLinesSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.AnisoFilterWithPointMipSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.ComputeOnlyCustomHeapSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS20.ComputeOnlyWriteWatchSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.SampleCmpGradientAndBiasSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.ExtendedCommandInfoSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS22.TightAlignmentSupported": TrueFalseMapping
}

const BitFlagsMappings =
{
    "DXGI_ADAPTER_DESC1.Flags":
    {
        "0": "DXGI_ADAPTER_FLAG_NONE",
        "1": "DXGI_ADAPTER_FLAG_REMOTE",
        "2": "DXGI_ADAPTER_FLAG_SOFTWARE"
    },
    "DXGI_ADAPTER_DESC3.Flags":
    {
        "0": "DXGI_ADAPTER_FLAG3_NONE",
        "1": "DXGI_ADAPTER_FLAG3_REMOTE",
        "2": "DXGI_ADAPTER_FLAG3_SOFTWARE",
        "4": "DXGI_ADAPTER_FLAG3_ACG_COMPATIBLE",
        "8": "DXGI_ADAPTER_FLAG3_SUPPORT_MONITORED_FENCES",
        "16": "DXGI_ADAPTER_FLAG3_SUPPORT_NON_MONITORED_FENCES",
        "32": "DXGI_ADAPTER_FLAG3_KEYED_MUTEX_CONFORMANCE"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.MinPrecisionSupport":
    {
        "0": "D3D12_SHADER_MIN_PRECISION_SUPPORT_NONE",
        "1": "D3D12_SHADER_MIN_PRECISION_SUPPORT_10_BIT",
        "2": "D3D12_SHADER_MIN_PRECISION_SUPPORT_16_BIT"
    },
    "D3D12_FEATURE_DATA_SHADER_CACHE.SupportFlags":
    {
        "0": "D3D12_SHADER_CACHE_SUPPORT_NONE",
        "1": "D3D12_SHADER_CACHE_SUPPORT_SINGLE_PSO",
        "2": "D3D12_SHADER_CACHE_SUPPORT_LIBRARY",
        "4": "D3D12_SHADER_CACHE_SUPPORT_AUTOMATIC_INPROC_CACHE",
        "8": "D3D12_SHADER_CACHE_SUPPORT_AUTOMATIC_DISK_CACHE",
        "16": "D3D12_SHADER_CACHE_SUPPORT_DRIVER_MANAGED_CACHE",
        "32": "D3D12_SHADER_CACHE_SUPPORT_SHADER_CONTROL_CLEAR",
        "64": "D3D12_SHADER_CACHE_SUPPORT_SHADER_SESSION_DELETE"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.WriteBufferImmediateSupportFlags":
    {
        "0": "D3D12_COMMAND_LIST_SUPPORT_FLAG_NONE",
        "1": "D3D12_COMMAND_LIST_SUPPORT_FLAG_DIRECT",
        "2": "D3D12_COMMAND_LIST_SUPPORT_FLAG_BUNDLE",
        "4": "D3D12_COMMAND_LIST_SUPPORT_FLAG_COMPUTE",
        "8": "D3D12_COMMAND_LIST_SUPPORT_FLAG_COPY",
        "16": "D3D12_COMMAND_LIST_SUPPORT_FLAG_VIDEO_DECODE",
        "32": "D3D12_COMMAND_LIST_SUPPORT_FLAG_VIDEO_PROCESS",
        "64": "D3D12_COMMAND_LIST_SUPPORT_FLAG_VIDEO_ENCODE"
    },
    "DirectSR.Flags":
    {
        "0": "DSR_SUPERRES_VARIANT_FLAG_NONE",
        "1": "DSR_SUPERRES_VARIANT_FLAG_SUPPORTS_EXPOSURE_SCALE_TEXTURE",
        "2": "DSR_SUPERRES_VARIANT_FLAG_SUPPORTS_IGNORE_HISTORY_MASK",
        "4": "DSR_SUPERRES_VARIANT_FLAG_NATIVE",
        "8": "DSR_SUPERRES_VARIANT_FLAG_SUPPORTS_REACTIVE_MASK",
        "16": "DSR_SUPERRES_VARIANT_FLAG_SUPPORTS_SHARPNESS",
        "32": "DSR_SUPERRES_VARIANT_FLAG_DISALLOWS_REGION_OFFSETS",
    }
}

const SuffixMappings =
{
    "AGSDeviceInfo.coreClock": "MHz",
    "AGSDeviceInfo.memoryClock": "MHz",
    "AGSDeviceInfo.memoryBandwidth": "MB/s",
}

const VendorIDs =
{
    // PCI IDs
    "0x1002": "AMD/ATI",
    "0x1022": "AMD",
    "0x10de": "NVIDIA",
    "0x1414": "Microsoft",
    "0x1ab8": "Parallels",
    "0x5143": "Qualcomm",
    "0x8086": "Intel",
    // ACPI IDs
    "PRL4": "Parallels", // 0x344C5250
    "NVDA": "NVIDIA", // 0x4144564E
    "INTC": "Intel", // 0x43544E49
    "INTL": "Intel", // 0x4C544E49
    "AMDI": "AMD", // 0x49444D41
    "ACPI": "Intel", // 0x49504341
    "QCOM": "Qualcomm", // 0x4D4F4351
    "MSFT": "Microsoft", // 0x5446534D
    "MSHW": "Microsoft", // 0x5748534D
    "MSAY": "Microsoft", // 0x5941534D
}

const SubsystemVendorIDs =
{
    "0x1002": "AMD/ATI",
    "0x1022": "AMD",
    "0x1025": "Acer",
    "0x1028": "Dell",
    "0x103c": "HP",
    "0x1043": "ASUS",
    "0x104d": "Sony",
    "0x106b": "Apple",
    "0x107b": "Gateway",
    "0x106b": "Diamond Multimedia",
    "0x10de": "NVIDIA",
    "0x1179": "Toshiba",
    "0x1414": "Microsoft",
    "0x1458": "Gigabyte",
    "0x1462": "MSI",
    "0x148c": "PowerColor",
    "0x1545": "VisionTek",
    "0x1569": "Palit",
    "0x1682": "XFX",
    "0x16f3": "Jetway",
    "0x17aa": "Lenovo",
    "0x17af": "HIS",
    "0x1849": "ASRock",
    "0x18bc": "GeCube",
    "0x196d": "Club 3D",
    "0x196e": "PNY",
    "0x1a58": "Razer",
    "0x1ab8": "Parallels",
    "0x1da2": "Sapphire",
    "0x5143": "Qualcomm",
    "0x8086": "Intel",
}

const PropertyHumanReadableNames =
{
    "Header.Program": "Program",
    "Header.Version": "D3d12info Version",
    "Header.Build Date": "Program Build Date",
    "Header.Configuration": "Program Configuration",
    "Header.Configuration bits": "Program Architecture",
    "Header.Generated on": "Report generated on",
    "Header.Using preview Agility SDK": "Using preview Agility SDK",
    "Header.D3D12_SDK_VERSION": "D3D12_SDK_VERSION",
    "Header.NvAPI compiled version": "NVAPI library version",
    "Header.NvAPI_GetInterfaceVersionString": "NVAPI interface version",
    "Header.AMD_AGS_VERSION": "AMD_AGS_VERSION",
    "Header.agsGetVersionNumber": "AMD AGS agsGetVersionNumber",
    "Header.Intel GPU Detect compiled version": "Intel GPU Detect library version",
    "SystemInfo.OS Info.Windows version": "Windows version",
    "SystemInfo.System memory.GetPhysicallyInstalledSystemMemory": "Physically installed RAM",
    "SystemInfo.System memory.MEMORYSTATUSEX::ullTotalPhys": "Actually available RAM",
    "SystemInfo.System memory.MEMORYSTATUSEX::ullTotalPageFile": "Current page file size",
    "SystemInfo.System memory.MEMORYSTATUSEX::ullTotalVirtual": "Total virtual adress space size",
    "SystemInfo.DXGI_FEATURE.DXGI_FEATURE_PRESENT_ALLOW_TEARING": "DXGI_FEATURE_PRESENT_ALLOW_TEARING",
    "SystemInfo.NvAPI_SYS_GetDriverAndBranchVersion.pDriverVersion": "NVAPI pDriverVersion",
    "SystemInfo.NvAPI_SYS_GetDriverAndBranchVersion.szBuildBranchString": "NVAPI szBuildBranchString",
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.driverVersion": "NVAPI Display Driver driverVersion",
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.szBuildBranch": "NVAPI Display Driver szBuildBranch",
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsDCHDriver": "NVAPI Display Driver bIsDCHDriver",
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIAStudioPackage": "NVAPI Display Driver bIsNVIDIAStudioPackage",
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIAGameReadyPackage": "NVAPI Display Driver bIsNVIDIAGameReadyPackage",
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIARTXProductionBranchPackage": "NVAPI Display Driver bIsNVIDIARTXProductionBranchPackage",
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIARTXNewFeatureBranchPackage": "NVAPI Display Driver bIsNVIDIARTXNewFeatureBranchPackage",
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.szBuildBaseBranch": "NVAPI Display Driver szBuildBaseBranch",
    "SystemInfo.D3D12EnableExperimentalFeatures": "Available Experimental Features",
    "AdapterIndex": "Adapter Index",
    "CheckInterfaceSupport.UMDVersion": "Driver Version",
}

const PropertyTooltips = {
    "D3D12_SDK_VERSION":"Version of agility SDK used to generate the report",
    "DXGI_FEATURE_PRESENT_ALLOW_TEARING":"Whether OS supports swapchain presentation with tearing. This is not a GPU capability.",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.VPAndRTArrayIndexFromAnyShaderFeedingRasterizerSupportedWithoutGSEmulation": "ViewPort and RenderTarget array index from any shader feeding rasterizer supported without Geometry Shader emulation",
}

const PropertiesOrder =
    [
        "ID",
        "DXGI_ADAPTER_DESC3.Description",
        "Header.Program",
        "Header.Version",
        "Header.Generated on",
        "Header.Using preview Agility SDK",
        "Header.D3D12_SDK_VERSION",
        "SystemInfo.OS Info.Windows version",
        "SystemInfo.NvAPI_SYS_GetDriverAndBranchVersion.pDriverVersion",
        "SystemInfo.AGSGPUInfo.driverVersion",
        "Header.Build Date",
        "Header.Configuration",
        "Header.Configuration bits",
        "Header.NvAPI compiled version",
        "Header.NvAPI_GetInterfaceVersionString",
        "Header.AMD_AGS_VERSION",
        "Header.agsGetVersionNumber",
        "Header.Intel GPU Detect compiled version",
        "SystemInfo.System memory.GetPhysicallyInstalledSystemMemory",
        "SystemInfo.System memory.MEMORYSTATUSEX::ullTotalPhys",
        "SystemInfo.System memory.MEMORYSTATUSEX::ullTotalPageFile",
        "SystemInfo.System memory.MEMORYSTATUSEX::ullTotalVirtual",
        "SystemInfo.DXGI_FEATURE.DXGI_FEATURE_PRESENT_ALLOW_TEARING",
        "SystemInfo.NvAPI_SYS_GetDriverAndBranchVersion.szBuildBranchString",
        "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.driverVersion",
        "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.szBuildBranch",
        "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsDCHDriver",
        "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIAStudioPackage",
        "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIAGameReadyPackage",
        "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIARTXProductionBranchPackage",
        "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIARTXNewFeatureBranchPackage",
        "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.szBuildBaseBranch",
        "SystemInfo.AGSGPUInfo.radeonSoftwareVersion",
        "SystemInfo.D3D12EnableExperimentalFeatures",
        "AdapterIndex",
        "CheckInterfaceSupport.UMDVersion",
        "VkPhysicalDeviceVulkan12Properties.driverInfo",
        "DXGI_ADAPTER_DESC3.VendorId",
        "DXGI_ADAPTER_DESC3.DeviceId",
        "DXGI_ADAPTER_DESC3.SubSysId",
        "DXGI_ADAPTER_DESC3.Revision",
        "DXGI_ADAPTER_DESC3.DedicatedVideoMemory",
        "DXGI_ADAPTER_DESC3.DedicatedSystemMemory",
        "DXGI_ADAPTER_DESC3.SharedSystemMemory",
        "DXGI_ADAPTER_DESC3.AdapterLuid",
        "DXGI_ADAPTER_DESC3.GraphicsPreemptionGranularity",
        "DXGI_ADAPTER_DESC3.ComputePreemptionGranularity",
        "DXGI_ADAPTER_DESC3.Flags",
        "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_LOCAL].Budget",
        "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_LOCAL].AvailableForReservation",
        "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_NON_LOCAL].Budget",
        "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_NON_LOCAL].AvailableForReservation",
        "GetDescriptorHandleIncrementSize.D3D12_DESCRIPTOR_HEAP_TYPE_CBV_SRV_UAV",
        "GetDescriptorHandleIncrementSize.D3D12_DESCRIPTOR_HEAP_TYPE_SAMPLER",
        "GetDescriptorHandleIncrementSize.D3D12_DESCRIPTOR_HEAP_TYPE_RTV",
        "GetDescriptorHandleIncrementSize.D3D12_DESCRIPTOR_HEAP_TYPE_DSV",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetSystemType",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetFullName",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pDeviceID",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pSubSystemId",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pRevisionId",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pExtDeviceId",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetGPUType",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetBusType",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetVbiosRevision",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetVbiosOEMRevision",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetVbiosVersionString",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetPhysicalFrameBufferSize",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetVirtualFrameBufferSize",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::implementation_id",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::revision_id",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetVRReadyData - NV_GPU_VR_READY::isVRReady",
        "NvPhysicalGpuHandle.NvAPI_GPU_QueryIlluminationSupport(NV_GPU_IA_LOGO_BRIGHTNESS)",
        "NvPhysicalGpuHandle.NvAPI_GPU_QueryIlluminationSupport(NV_GPU_IA_SLI_BRIGHTNESS)",
        "NvPhysicalGpuHandle.NvAPI_GPU_QueryWorkstationFeatureSupport(NV_GPU_WORKSTATION_FEATURE_TYPE_NVIDIA_RTX_VR_READY)",
        "NvPhysicalGpuHandle.NvAPI_GPU_QueryWorkstationFeatureSupport(NV_GPU_WORKSTATION_FEATURE_TYPE_PROVIZ)",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemory",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::availableDedicatedVideoMemory",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::systemVideoMemory",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::sharedSystemMemory",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::curAvailableDedicatedVideoMemory",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryEvictionsSize",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryEvictionCount",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryPromotionsSize",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryPromotionCount",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetShaderSubPipeCount",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetGpuCoreCount",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::isSupported",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::configurationOptions",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::isEnabled",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetRamBusWidth",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetGPUInfo - NV_GPU_INFO::bIsExternalGpu",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetGPUInfo - NV_GPU_INFO::rayTracingCores",
        "NvPhysicalGpuHandle.NvAPI_GPU_GetGPUInfo - NV_GPU_INFO::tensorCores",
        "AGSDeviceInfo.adapterString",
        "AGSDeviceInfo.asicFamily",
        "AGSDeviceInfo.isAPU",
        "AGSDeviceInfo.isExternal",
        "AGSDeviceInfo.vendorId",
        "AGSDeviceInfo.deviceId",
        "AGSDeviceInfo.revisionId",
        "AGSDeviceInfo.numCUs",
        "AGSDeviceInfo.numWGPs",
        "AGSDeviceInfo.numROPs",
        "AGSDeviceInfo.coreClock",
        "AGSDeviceInfo.memoryClock",
        "AGSDeviceInfo.memoryBandwidth",
        "AGSDeviceInfo.teraFlops",
        "AGSDeviceInfo.localMemoryInBytes",
        "AGSDeviceInfo.sharedMemoryInBytes",
        "VkPhysicalDeviceProperties.apiVersion",
        "VkPhysicalDeviceProperties.driverVersion",
        "VkPhysicalDeviceProperties.vendorID",
        "VkPhysicalDeviceProperties.deviceID",
        "VkPhysicalDeviceProperties.deviceType",
        "VkPhysicalDeviceProperties.deviceName",
        "VkPhysicalDeviceIDProperties.deviceUUID",
        "VkPhysicalDeviceIDProperties.driverUUID",
        "VkPhysicalDeviceIDProperties.deviceLUID",
        "VkPhysicalDeviceVulkan12Properties.driverID",
        "VkPhysicalDeviceVulkan12Properties.driverName",
        "AGSDX12ReturnedParams::ExtensionsSupported.intrinsics16",
        "AGSDX12ReturnedParams::ExtensionsSupported.intrinsics17",
        "AGSDX12ReturnedParams::ExtensionsSupported.userMarkers",
        "AGSDX12ReturnedParams::ExtensionsSupported.appRegistration",
        "AGSDX12ReturnedParams::ExtensionsSupported.UAVBindSlot",
        "AGSDX12ReturnedParams::ExtensionsSupported.intrinsics19",
        "AGSDX12ReturnedParams::ExtensionsSupported.baseVertex",
        "AGSDX12ReturnedParams::ExtensionsSupported.baseInstance",
        "AGSDX12ReturnedParams::ExtensionsSupported.getWaveSize",
        "AGSDX12ReturnedParams::ExtensionsSupported.floatConversion",
        "AGSDX12ReturnedParams::ExtensionsSupported.readLaneAt",
        "AGSDX12ReturnedParams::ExtensionsSupported.rayHitToken",
        "AGSDX12ReturnedParams::ExtensionsSupported.shaderClock",
        "Intel GPUDetect::GPUData.VendorId",
        "Intel GPUDetect::GPUData.deviceID",
        "Intel GPUDetect::GPUData.isUMAArchitecture",
        "Intel GPUDetect::GPUData.videoMemory",
        "Intel GPUDetect::GPUData.description",
        "Intel GPUDetect::GPUData.extensionVersion",
        "Intel GPUDetect::GPUData.intelExtensionAvailability",
        "Intel GPUDetect::GPUData.dxDriverVersion",
        "Intel GPUDetect::GPUData.driverInfo.driverReleaseRevision",
        "Intel GPUDetect::GPUData.driverInfo.driverBuildNumber",
        "Intel GPUDetect::GPUData.DefaultFidelityPreset",
        "Intel GPUDetect::GPUData.GPUArchitecture",
        "Intel GPUDetect::GPUData.GraphicsGeneration",
        "Intel GPUDetect::GPUData.euCount",
        "Intel GPUDetect::GPUData.packageTDP",
        "Intel GPUDetect::GPUData.maxFillRate",
        "Intel GPUDetect::GPUData.maxFrequency",
        "Intel GPUDetect::GPUData.minFrequency",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.DoublePrecisionFloatShaderOps",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.OutputMergerLogicOp",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.MinPrecisionSupport",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.TiledResourcesTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceBindingTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.PSSpecifiedStencilRefSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.TypedUAVLoadAdditionalFormats",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.ROVsSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.ConservativeRasterizationTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.MaxGPUVirtualAddressBitsPerResource",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.StandardSwizzle64KBSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.CrossNodeSharingTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.CrossAdapterRowMajorTextureSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.VPAndRTArrayIndexFromAnyShaderFeedingRasterizerSupportedWithoutGSEmulation",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceHeapTier",
        "D3D12_FEATURE_DATA_GPU_VIRTUAL_ADDRESS_SUPPORT.MaxGPUVirtualAddressBitsPerResource",
        "D3D12_FEATURE_DATA_GPU_VIRTUAL_ADDRESS_SUPPORT.MaxGPUVirtualAddressBitsPerProcess",
        "D3D12_FEATURE_DATA_SHADER_MODEL.HighestShaderModel",
        "D3D12_FEATURE_DATA_ROOT_SIGNATURE.HighestVersion",
        "D3D12_FEATURE_DATA_ARCHITECTURE1.NodeIndex",
        "D3D12_FEATURE_DATA_ARCHITECTURE1.TileBasedRenderer",
        "D3D12_FEATURE_DATA_ARCHITECTURE1.UMA",
        "D3D12_FEATURE_DATA_ARCHITECTURE1.CacheCoherentUMA",
        "D3D12_FEATURE_DATA_ARCHITECTURE1.IsolatedMMU",
        "D3D12_FEATURE_DATA_FEATURE_LEVELS.MaxSupportedFeatureLevel",
        "D3D12_FEATURE_DATA_SHADER_CACHE.SupportFlags",
        "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_NORMAL.PriorityForTypeIsSupported",
        "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_HIGH.PriorityForTypeIsSupported",
        "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported",
        "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_NORMAL.PriorityForTypeIsSupported",
        "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_HIGH.PriorityForTypeIsSupported",
        "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported",
        "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_NORMAL.PriorityForTypeIsSupported",
        "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_HIGH.PriorityForTypeIsSupported",
        "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported",
        "D3D12_FEATURE_DATA_SERIALIZATION.HeapSerializationTier",
        "D3D12_FEATURE_DATA_CROSS_NODE.SharingTier",
        "D3D12_FEATURE_DATA_CROSS_NODE.AtomicShaderInstructions",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS_EXPERIMENTAL.WorkGraphsTier",
        "D3D12_FEATURE_DATA_PREDICATION.Supported",
        "D3D12_FEATURE_DATA_HARDWARE_COPY.Supported",
        "D3D12_FEATURE_DATA_APPLICATION_SPECIFIC_DRIVER_STATE.Supported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveOps",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveLaneCountMin",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveLaneCountMax",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS1.TotalLaneCount",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS1.ExpandedComputeResourceStates",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS1.Int64ShaderOps",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS2.DepthBoundsTestSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS2.ProgrammableSamplePositionsTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS3.CopyQueueTimestampQueriesSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS3.CastingFullyTypedFormatSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS3.WriteBufferImmediateSupportFlags",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS3.ViewInstancingTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS3.BarycentricsSupported",
        "D3D12_FEATURE_DATA_EXISTING_HEAPS.Supported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS4.MSAA64KBAlignedTextureSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS4.SharedResourceCompatibilityTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS4.Native16BitShaderOpsSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS5.SRVOnlyTiledResourceTier3",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS5.RenderPassesTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS5.RaytracingTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS6.AdditionalShadingRatesSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS6.PerPrimitiveShadingRateSupportedWithViewportIndexing",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS6.VariableShadingRateTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS6.ShadingRateImageTileSize",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS6.BackgroundProcessingSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS7.MeshShaderTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS7.SamplerFeedbackTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS8.UnalignedBlockTexturesSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS9.MeshShaderPipelineStatsSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS9.MeshShaderSupportsFullRangeRenderTargetArrayIndex",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS9.AtomicInt64OnTypedResourceSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS9.AtomicInt64OnGroupSharedSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS9.DerivativesInMeshAndAmplificationShadersSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS9.WaveMMATier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS10.VariableRateShadingSumCombinerSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS10.MeshShaderPerPrimitiveShadingRateSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS11.AtomicInt64OnDescriptorHeapResourceSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS12.MSPrimitivesPipelineStatisticIncludesCulledPrimitives",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS12.EnhancedBarriersSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS12.RelaxedFormatCastingSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS13.UnrestrictedBufferTextureCopyPitchSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS13.UnrestrictedVertexElementAlignmentSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS13.InvertedViewportHeightFlipsYSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS13.InvertedViewportDepthFlipsZSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS13.TextureCopyBetweenDimensionsSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS13.AlphaBlendFactorSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS14.AdvancedTextureOpsSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS14.WriteableMSAATexturesSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS14.IndependentFrontAndBackStencilRefMaskSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS15.TriangleFanSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS15.DynamicIndexBufferStripCutSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS16.DynamicDepthBiasSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS16.GPUUploadHeapSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS17.NonNormalizedCoordinateSamplersSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS17.ManualWriteTrackingResourceSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS18.RenderPassesValid",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS19.MismatchingOutputDimensionsSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS19.IndependentFrontAndBackStencilRefMaskSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS19.SupportedSampleCountsWithNoOutputs",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS19.PointSamplingAddressesNeverRoundUp",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS19.RasterizerDesc2Supported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS19.NarrowQuadrilateralLinesSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS19.AnisoFilterWithPointMipSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS19.MaxSamplerDescriptorHeapSize",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS19.MaxSamplerDescriptorHeapSizeWithStaticSamplers",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS19.MaxViewDescriptorHeapSize",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS19.ComputeOnlyCustomHeapSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS20.ComputeOnlyWriteWatchSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS20.RecreateAtTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS21.WorkGraphsTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS21.ExecuteIndirectTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS21.SampleCmpGradientAndBiasSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS21.ExtendedCommandInfoSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS22.TightAlignmentSupported",
        "DirectSR",
        "NvAPI_D3D12_QueryCpuVisibleVidmem.pTotalBytes",
        "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_SHFL",
        "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_SHFL_UP",
        "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_SHFL_DOWN",
        "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_SHFL_XOR",
        "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_VOTE_ALL",
        "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_VOTE_ANY",
        "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_VOTE_BALLOT",
        "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_GET_LANE_ID",
        "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_FP16_ATOMIC",
        "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_FP32_ATOMIC",
        "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_UINT64_ATOMIC",
        "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_GET_SHADING_RATE",
        "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_VPRS_EVAL_ATTRIB_AT_SAMPLE",
        "NvAPI_D3D12_GetOptimalThreadCountForMesh.pThreadCount",
        "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_THREAD_REORDERING",
        "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_OPACITY_MICROMAP",
        "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_DISPLACEMENT_MICROMAP",
        "NvAPI_D3D12_QueryWorkstationFeatureProperties.NV_D3D12_WORKSTATION_FEATURE_TYPE_PRESENT_BARRIER - supported",
        "NvAPI_D3D12_QueryWorkstationFeatureProperties.NV_D3D12_WORKSTATION_FEATURE_TYPE_RDMA_BAR1_SUPPORT - supported",
        "NvAPI_D3D12_QueryWorkstationFeatureProperties.NV_D3D12_WORKSTATION_FEATURE_TYPE_RDMA_BAR1_SUPPORT - rdmaHeapSize",
        "NvAPI_D3D12_GetNeedsAppFPBlendClamping.pAppClampNeeded"
    ]

const SubPropertiesOrder =
    [
        "DirectSR.VariantId",
        "DirectSR.VariantName",
        "DirectSR.Flags",
        "DirectSR.OptimizationRankings",
        "DirectSR.OptimalTargetFormat"
    ]

const PropertiesFilterWhitelist = new Set([
    "ID",
    "DXGI_ADAPTER_DESC3.Description",
    "AdapterIndex"
])

function MakeMap(order) {
    let result = new Map()
    for (let i = 0; i < order.length; ++i) {
        result.set(order[i], i);
    }
    return result;
}

const PropertiesOrderMap = MakeMap(PropertiesOrder)
const SubPropertiesOrderMap = MakeMap(SubPropertiesOrder)

function RemoveArrayIndex(property) {
    return property.replace(/\[\d+\]/g, "")
}

function GetNameBeforeArrayIndex(property) {
    return property.replace(/\[\d+\].*/, "")
}

function MakeHumanReadableProperty(property) {
    if (property in PropertyHumanReadableNames) {
        return PropertyHumanReadableNames[property]
    }

    return property
}

function MakeHumanReadable(property, value) {
    let effectiveProperty = RemoveArrayIndex(property)

    if (value == null) return value

    if (effectiveProperty in EnumMappings) {
        return EnumMappings[effectiveProperty][value] ?? `Unknown(${value})`
    }

    if (effectiveProperty in BitFlagsMappings) {
        let result = ''
        let bitCount = 0
        for (let i = 1; i <= value; i = i << 1) {
            if (value & i) {
                bitCount++
                result += (BitFlagsMappings[effectiveProperty][i] ?? `Unknown(${i})`) + " |\n"
            }
        }
        if (result == '') {
            result = BitFlagsMappings[effectiveProperty][0] ?? "Unknown"
        }
        else {
            result = result.substring(0, result.length - 3)
        }
        result += bitCount > 1 ? "\n" : " "
        result += `(0x${Number(value).toString(16)})`
        return result
    }

    if (effectiveProperty in SuffixMappings) {
        return value + SuffixMappings[effectiveProperty]
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
                if (VendorIDs[decodedValue])
                    return `${VendorIDs[decodedValue]} (${decodedValue})`
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
                if (SubsystemVendorIDs[susbystemVendorID])
                    return `${SubsystemVendorIDs[susbystemVendorID]} (${hexValue})`
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

class ReportContainer {
    static #renameList = new Map([
        ["Header.D3D12_PREVIEW_SDK_VERSION", "Header.D3D12_SDK_VERSION"]
    ])

    #originalReport = {}
    #fields = []
    #fieldsMap = {}

    #import(data) {
        this.#originalReport = data
        let dest = this.#fields
        function flatten(obj, prefix) {
            if (typeof (obj) == "object" && !Array.isArray(obj)) {
                for (const property in obj) {
                    let newPrefix = prefix
                    if (newPrefix != "") newPrefix += "."
                    newPrefix += property
                    flatten(obj[property], newPrefix)
                }
            }
            else if (Array.isArray(obj)) {
                // if all elements of array are strings, then join them
                if (obj.every(e => typeof e != "object")) {
                    dest.push({ name: prefix, value: obj.join(", ") })
                }
                else {
                    for (let i = 0; i < obj.length; ++i) {
                        flatten(obj[i], `${prefix}[${i}]`)
                    }
                }
            }
            else if (typeof obj == "boolean") {
                dest.push({ name: prefix, value: +obj })
            }
            else {
                dest.push({ name: prefix, value: obj })
            }
        }
        flatten(data, "")
    }

    #patchData() {
        for (const e of this.#fields) {
            if (ReportContainer.#renameList.has(e.name)) {
                e.name = ReportContainer.#renameList.get(e.name)
            }
        }

        for (const e of this.#fields) {
            switch (e.name) {
                case "NvPhysicalGpuHandle.NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::implementation_id":
                    {
                        for (const e2 of this.#fields) {
                            if (e2.name == "NvPhysicalGpuHandle.NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id") {
                                e.value += e2.value
                                break
                            }
                        }
                    }
                    break
            }
        }
    }

    #reorderFields() {
        function getPropertyIndex(a) {
            let reorderName = GetNameBeforeArrayIndex(a.name)
            let result = PropertiesOrderMap.get(reorderName) ?? Infinity
            if (result == Infinity) console.log(`No order for ${a.name}`)
            return result
        }

        function getSubPropertyIndex(a) {
            let reorderName = RemoveArrayIndex(a.name)
            let result = SubPropertiesOrderMap.get(reorderName) ?? Infinity
            if (result == Infinity) console.log(`No order for ${a.name}`)
            return result
        }

        this.#fields = this.#fields.sort((a, b) => {
            let aIndex = getPropertyIndex(a)
            let bIndex = getPropertyIndex(b)

            if (aIndex != bIndex) {
                return aIndex - bIndex
            }

            if (aIndex == bIndex) {
                // Extract the numeric parts (if any)
                const aNum = parseInt(a.name.match(/\d+/), 10) || 0;
                const bNum = parseInt(b.name.match(/\d+/), 10) || 0;
                // Compare the numeric parts
                if (aNum !== bNum) {
                    return aNum - bNum;
                }

                // Compare sub properties
                aIndex = getSubPropertyIndex(a)
                bIndex = getSubPropertyIndex(b)
                if (aIndex != bIndex) {
                    return aIndex - bIndex
                }

                // Compare the full strings
                return a.name.localeCompare(b.name)
            }

            return aIndex - bIndex
        })
    }

    #initializeMap() {
        for (const e of this.#fields) {
            this.#fieldsMap[e.name] = e.value
        }
    }

    constructor(data) {
        this.#import(data)
        this.#patchData()
        this.#reorderFields()
        this.#initializeMap()
    }

    *[Symbol.iterator]() {
        for (const field of this.#fields) {
            yield field;
        }
    }

    HumanReadable(filterCallback) {
        class HumanReadableObj {
            constructor(fields, filterCallback) {
                this.fields = fields;
                this.filterCallback = filterCallback;
            }

            *[Symbol.iterator]() {
                for (const field of this.fields) {
                    if (this.filterCallback(field.name, field.value)) {
                        yield { name: humanReadableName, value: humanReadableValue }
                    }
                }
            }
        }

        return new HumanReadableObj(this.#fields, filterCallback);
    }

    GetField(field) {
        return this.#fieldsMap[field]
    }

    GetOriginalReport() {
        return this.#originalReport
    }
}

function ClearElement(element) {
    while (element.lastElementChild) {
        element.removeChild(element.lastElementChild)
    }
}

function FilterField(name, value) {
    humanReadableName = MakeHumanReadableProperty(name)
    humanReadableValue = MakeHumanReadable(name, value)
    let filterString = PropertiesSearchString.toLocaleLowerCase()
    return filterString == ""
        || PropertiesFilterWhitelist.has(name)
        || name.toString().toLowerCase().includes(filterString)
        || humanReadableName.toString().toLowerCase().includes(filterString)
        || value.toString().toLowerCase().includes(filterString)
        || humanReadableValue.toString().toLowerCase().includes(filterString)
}

// End of shared between GUI and website code

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

let PropertiesSearchString = ""

const ListHeader = [
    "ID",
    "DXGI_ADAPTER_DESC3.Description",
    "DXGI_ADAPTER_DESC3.VendorId",
    "DXGI_ADAPTER_DESC3.DedicatedVideoMemory",
    "CheckInterfaceSupport.UMDVersion",
    "Header.Version",
    "Header.Using preview Agility SDK"
]

const FilterMultichoiceFields = [
    "DXGI_ADAPTER_DESC3.VendorId",
    "Header.Using preview Agility SDK"
]

function FilterSingleReport(wrappedReport) {
    let report = wrappedReport.value
    let adaptersSearchString = AdaptersSearchString.toLowerCase()
    let searchTest = adaptersSearchString == ""
        || ListHeader.some(collumn => {
            let value = report.GetField(collumn)
            let humanReadableValue = MakeHumanReadable(collumn, value).toString().toLowerCase()
            value = value.toString().toLowerCase()
            return value.includes(adaptersSearchString)
                || humanReadableValue.includes(adaptersSearchString)
        })
    let filterTest = FilterMultichoiceFields.every(filter => {
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

    ClearElement(searchBarContainer)

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
    filterLegend.appendChild(document.createTextNode(MakeHumanReadableProperty(property)))
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
        checkboxLabel.appendChild(document.createTextNode(MakeHumanReadable(property, e)))
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
    filterLegend.appendChild(document.createTextNode(MakeHumanReadableProperty(property)))
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
        checkboxLabel.appendChild(document.createTextNode(MakeHumanReadable(property, e)))
        filterFieldSet.appendChild(checkboxLabel)
        filterFieldSet.appendChild(document.createElement("br"))
    })

    filterFieldSet.appendChild(filterLegend)
    container.appendChild(filterFieldSet)
}

function UpdateAdaptersFilter() {
    const adapterFilterContainer = document.getElementById("AdaptersFilterContainer")

    ClearElement(adapterFilterContainer)

    FilterMultichoiceFields.forEach(e => AddFilterMultichoice(adapterFilterContainer, e))
    AddFilterAdapterType(adapterFilterContainer)
}

function UpdateSearchBarProperties() {
    const searchBarContainer = document.getElementById("SearchBarPropertiesContainer")

    ClearElement(searchBarContainer)

    const searchBar = document.createElement("input")
    searchBar.type = "search"
    searchBar.placeholder = "Search Properties"
    searchBar.classList.add("searchBar")
    searchBar.addEventListener('input', function (e) {
        PropertiesSearchString = searchBar.value
        UpdateReport()
    })
    searchBarContainer.appendChild(searchBar)
}

function UpdateList() {
    const listContainer = document.getElementById("ListContainer")

    ClearElement(listContainer)

    const table = document.createElement("table")
    const tableBody = document.createElement("tbody")

    const firstRow = document.createElement("tr")
    tableBody.appendChild(firstRow)


    {
        const secondRow = document.createElement("tr")
        const secondRowCell = document.createElement("td")
        secondRowCell.colSpan = ListHeader.length
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
        ListHeader.forEach(collumn => {
            const cell = document.createElement("td")
            cell.classList.add("clickableCell")
            const sortMarket = collumn == SortProperty ? (SortInverse ? " ▼" : " ▲") : ""
            const cellText = document.createTextNode(MakeHumanReadableProperty(collumn) + sortMarket)
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
        ListHeader.forEach(collumn => {
            const cell = document.createElement("td")
            let value = adapter.GetField(collumn)
            let cellText = document.createTextNode(MakeHumanReadable(collumn, value))
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

function AddTooltip(field, cell)
{
    const tooltipText = PropertyTooltips[field]
    if (tooltipText == null)
    {
        return
    }

    cell.className = "tooltip";
    const tooltipTextElement = document.createElement("span")
    tooltipTextElement.className = "tooltiptext";
    tooltipTextElement.textContent = tooltipText;
    cell.appendChild(tooltipTextElement)
}

function AddTooltipIcon(field, cell)
{
    if (PropertyTooltips[field] == null)
    {
        return
    }

    const tooltipIcon = document.createElement("img")
    tooltipIcon.src = "Info.svg"
    tooltipIcon.alt = "Info"
    tooltipIcon.className = "tooltipicon"
    cell.appendChild(tooltipIcon)
}

function UpdateReport() {
    const report = Reports[ReportIndex]

    const tableContainer = document.getElementById("TableContainer")

    ClearElement(tableContainer)

    const table = document.createElement("table")
    const tableBody = document.createElement("tbody")

    {
        const firstRow = document.createElement("tr")
        tableBody.appendChild(firstRow)
    }

    for (const e of report.HumanReadable(FilterField)) {
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

function OnLoad() {
    const tableContainer = document.getElementById("TableContainer")
    const textContainer = document.createElement("div")
    const loadingText = document.createTextNode("Loading. Please wait.")
    textContainer.appendChild(loadingText)
    tableContainer.appendChild(textContainer)

    const queryParams = (new URL(document.location)).searchParams
    let specifiedID = null
    if (queryParams.has('ID')) {
        specifiedID = queryParams.get('ID')
    }

    let xhr = new XMLHttpRequest()
    xhr.open("GET", apiAddress + "/get_all_submissions")
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            Reports = JSON.parse(xhr.responseText).map(e => new ReportContainer(e))
                
            let queryParams = (new URL(document.location)).searchParams
            if (queryParams.has('ID')) {
                let specifiedID = queryParams.get('ID')
                ReportIndex = Reports.findIndex(e => e.GetField("ID") == specifiedID)
                if (ReportIndex == -1) {
                    ReportIndex = Reports.length - 1
                }
            }
            else {
                ReportIndex = Reports.length - 1
            }
            
            UpdateOutput()
        }
    }
    xhr.send()
}

function OnLoadID() {
    SingleReport = true

    const tableContainer = document.getElementById("TableContainer")
    const textContainer = document.createElement("div")
    const loadingText = document.createTextNode("Loading. Please wait.")
    textContainer.appendChild(loadingText)
    tableContainer.appendChild(textContainer)

    const queryParams = (new URL(document.location)).searchParams
    if (!queryParams.has('ID')) {
        loadingText.textContent = "Missing ID parameter."
        return
    }

    let xhr = new XMLHttpRequest()
    xhr.open("GET", apiAddress + "/get_submission?ID=" + queryParams.get('ID'))
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            Reports = JSON.parse(xhr.responseText).map(e => new ReportContainer(e))
            UpdateOutput()
        }
    }
    xhr.send()
}