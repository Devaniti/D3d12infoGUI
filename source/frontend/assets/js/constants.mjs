export const WebsiteAddress = "https://d3d12infodb.boolka.dev"
export const APIAddress = "https://d3d12infodbapi.boolka.dev"

export const TrueFalseMapping =
{
    "0": "false",
    "1": "true"
}

export const TrueFalseMappingShort =
{
    "0": "❌",
    "1": "✅"
}

export const NVAPI_Status =
{
    "0": "OK",
    "-3": "NO_IMPLEMENTATION",
    "-8": "INVALID_HANDLE",
    "-104": "NOT_SUPPORTED",
    "-160": "SETTING_NOT_FOUND",
}

export const NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE =
{
    "0": "NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE_FLOAT16",
    "1": "NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE_FLOAT32",
    "2": "NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE_FLOAT64",
    "3": "NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE_SINT8",
    "4": "NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE_SINT16",
    "5": "NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE_SINT32",
    "6": "NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE_SINT64",
    "7": "NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE_UINT8",
    "8": "NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE_UINT16",
    "9": "NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE_UINT32",
    "10": "NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE_UINT64",
    "11": "NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE_SINT8_PACKED",
    "12": "NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE_UINT8_PACKED",
    "13": "NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE_FLOAT_E4M3",
    "14": "NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE_FLOAT_E5M2",
    "2147483647": "NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE_INVALID"
}

export const DXGI_FORMAT =
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
    "189": "DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE",
    "190": "DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE",
    "191": "DXGI_FORMAT_A4B4G4R4_UNORM",
}

export const D3D12_LINEAR_ALGEBRA_DATATYPE =
{
    "2": "D3D12_LINEAR_ALGEBRA_DATATYPE_SINT16",
    "3": "D3D12_LINEAR_ALGEBRA_DATATYPE_UINT16",
    "4": "D3D12_LINEAR_ALGEBRA_DATATYPE_SINT32",
    "5": "D3D12_LINEAR_ALGEBRA_DATATYPE_UINT32",
    "7": "D3D12_LINEAR_ALGEBRA_DATATYPE_FLOAT16",
    "8": "D3D12_LINEAR_ALGEBRA_DATATYPE_FLOAT32",
    "16": "D3D12_LINEAR_ALGEBRA_DATATYPE_SINT8_T4_PACKED",
    "17": "D3D12_LINEAR_ALGEBRA_DATATYPE_UINT8_T4_PACKED",
    "18": "D3D12_LINEAR_ALGEBRA_DATATYPE_UINT8",
    "19": "D3D12_LINEAR_ALGEBRA_DATATYPE_SINT8",
    "20": "D3D12_LINEAR_ALGEBRA_DATATYPE_FLOAT_E4M3",
    "21": "D3D12_LINEAR_ALGEBRA_DATATYPE_FLOAT_E5M2",
}

export const EnumMappings =
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
    "D3D12_FEATURE_DATA_D3D12_OPTIONS_EXPERIMENTAL.CooperativeVectorTier":
    {
        "0": "D3D12_COOPERATIVE_VECTOR_TIER_NOT_SUPPORTED",
        "16": "D3D12_COOPERATIVE_VECTOR_TIER_1_0",
        "17": "D3D12_COOPERATIVE_VECTOR_TIER_1_1"
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
        "11": "D3D12_RAYTRACING_TIER_1_1",
        "12": "D3D12_RAYTRACING_TIER_1_2",
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
    "D3D12_FEATURE_DATA_TIGHT_ALIGNMENT.SupportTier":
    {
        "0": "D3D12_TIGHT_ALIGNMENT_TIER_NOT_SUPPORTED",
        "1": "D3D12_TIGHT_ALIGNMENT_TIER_1"
    },
    "DirectSR.VariantId":
    {
        "{BCC8A605-FEF7-4089-948F-2796A9D54497}": "AMD FidelityFX Super Resolution 2.2 (BCC8A605-FEF7-4089-948F-2796A9D54497)",
        "{9578D791-9494-4707-8C35-4AF6D58F1DB9}": "AMD FidelityFX Super Resolution 3.1 (9578D791-9494-4707-8C35-4AF6D58F1DB9)",
        "{8A17AE4B-B5F6-11EE-BAAF-00E1110012F6}": "Intel(R) Xe Super Sampling (XeSS) (8A17AE4B-B5F6-11EE-BAAF-00E1110012F6)",
        "{9C01B751-23ED-4620-B99F-980F2AFE0C97}": "DLSS (9C01B751-23ED-4620-B99F-980F2AFE0C97)"
    },
    "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pMatrixVectorMulAddProperties.InputType" : D3D12_LINEAR_ALGEBRA_DATATYPE,
    "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pMatrixVectorMulAddProperties.InputInterpretation" : D3D12_LINEAR_ALGEBRA_DATATYPE,
    "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pMatrixVectorMulAddProperties.MatrixInterpretation" : D3D12_LINEAR_ALGEBRA_DATATYPE,
    "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pMatrixVectorMulAddProperties.BiasInterpretation" : D3D12_LINEAR_ALGEBRA_DATATYPE,
    "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pMatrixVectorMulAddProperties.OutputType" : D3D12_LINEAR_ALGEBRA_DATATYPE,
    "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pMatrixVectorMulAddProperties.TransposeSupported" : TrueFalseMapping,
    "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pOuterProductAccumulateProperties.InputType" : D3D12_LINEAR_ALGEBRA_DATATYPE,
    "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pOuterProductAccumulateProperties.AccumulationType" : D3D12_LINEAR_ALGEBRA_DATATYPE,
    "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pVectorAccumulateProperties.InputType" : D3D12_LINEAR_ALGEBRA_DATATYPE,
    "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pVectorAccumulateProperties.AccumulationType" : D3D12_LINEAR_ALGEBRA_DATATYPE,
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
        "400": "AD100",
        "432": "GB200"
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

        "434": "GB202",
    },
    "NvPhysicalGpuHandle.NvAPI_GPU_QueryWorkstationFeatureSupport(NV_GPU_WORKSTATION_FEATURE_TYPE_NVIDIA_RTX_VR_READY)": NVAPI_Status,
    "NvPhysicalGpuHandle.NvAPI_GPU_QueryWorkstationFeatureSupport(NV_GPU_WORKSTATION_FEATURE_TYPE_PROVIZ)": NVAPI_Status,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::configurationOptions":
    {
        "0": "NOT_SUPPORTED",
        "1": "DEFERRED",
        "2": "IMMEDIATE"
    },
    "NvAPI_D3D12_GetPhysicalDeviceCooperativeVectorProperties.inputType": NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE,
    "NvAPI_D3D12_GetPhysicalDeviceCooperativeVectorProperties.inputInterpretation": NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE,
    "NvAPI_D3D12_GetPhysicalDeviceCooperativeVectorProperties.matrixInterpretation": NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE,
    "NvAPI_D3D12_GetPhysicalDeviceCooperativeVectorProperties.biasInterpretation": NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE,
    "NvAPI_D3D12_GetPhysicalDeviceCooperativeVectorProperties.resultType": NVAPI_COOPERATIVE_VECTOR_COMPONENT_TYPE,
    "AGSDeviceInfo.asicFamily":
    {
        "0": "UNKNOWN",
        "1": "Pre GCN",
        "2": "GCN1",
        "3": "GCN2",
        "4": "GCN3",
        "5": "GCN4",
        "6": "Vega",
        "7": "RDNA",
        "8": "RDNA2",
        "9": "RDNA3",
        "10": "RDNA4"
    },
    "AMD GDT_GfxCardInfo.asicType":
    {
        "-1": "GDT_ASIC_TYPE_NONE",
        "0": "GDT_TAHITI_PRO",
        "1": "GDT_TAHITI_XT",
        "2": "GDT_PITCAIRN_PRO",
        "3": "GDT_PITCAIRN_XT",
        "4": "GDT_CAPEVERDE_PRO",
        "5": "GDT_CAPEVERDE_XT",
        "6": "GDT_OLAND",
        "7": "GDT_HAINAN",
        "8": "GDT_BONAIRE",
        "9": "GDT_HAWAII",
        "10": "GDT_KALINDI",
        "11": "GDT_SPECTRE",
        "12": "GDT_SPECTRE_SL",
        "13": "GDT_SPECTRE_LITE",
        "14": "GDT_SPOOKY",
        "15": "GDT_ICELAND",
        "16": "GDT_TONGA",
        "17": "GDT_CARRIZO",
        "18": "GDT_CARRIZO_EMB",
        "19": "GDT_FIJI",
        "20": "GDT_STONEY",
        "21": "GDT_ELLESMERE",
        "22": "GDT_BAFFIN",
        "23": "GDT_GFX8_0_4",
        "24": "GDT_VEGAM1",
        "25": "GDT_VEGAM2",
        "26": "GDT_GFX9_0_0",
        "27": "GDT_GFX9_0_2",
        "28": "GDT_GFX9_0_4",
        "29": "GDT_GFX9_0_6",
        "20": "GDT_GFX9_0_9",
        "31": "GDT_GFX9_0_A",
        "32": "GDT_GFX9_0_C",
        "33": "GDT_GFX9_4_2",
        "34": "GDT_GFX10_1_0",
        "35": "GDT_GFX10_1_0_XL",
        "36": "GDT_GFX10_1_2",
        "37": "GDT_GFX10_1_1",
        "38": "GDT_GFX10_3_0",
        "39": "GDT_GFX10_3_1",
        "30": "GDT_GFX10_3_2",
        "41": "GDT_GFX10_3_3",
        "42": "GDT_GFX10_3_4",
        "43": "GDT_GFX10_3_5",
        "44": "GDT_GFX11_0_0",
        "45": "GDT_GFX11_0_1",
        "46": "GDT_GFX11_0_2",
        "47": "GDT_GFX11_0_3",
        "48": "GDT_GFX11_0_3B",
        "49": "GDT_GFX11_5_0",
        "50": "GDT_GFX11_5_1",
        "51": "GDT_GFX11_5_2",
        "52": "GDT_GFX12_0_1",
        "53": "GDT_LAST"
    },
    "AMD GDT_GfxCardInfo.generation": {
        "0": "GDT_HW_GENERATION_NONE",
        "1": "GDT_HW_GENERATION_NVIDIA",
        "2": "GDT_HW_GENERATION_INTEL",
        "3": "GDT_HW_GENERATION_SOUTHERNISLAND",
        "4": "GDT_HW_GENERATION_FIRST_AMD=GDT_HW_GENERATION_SOUTHERNISLAND",
        "5": "GDT_HW_GENERATION_SEAISLAND",
        "6": "GDT_HW_GENERATION_VOLCANICISLAND",
        "7": "GDT_HW_GENERATION_GFX9",
        "8": "GDT_HW_GENERATION_GFX10",
        "9": "GDT_HW_GENERATION_GFX103",
        "10": "GDT_HW_GENERATION_GFX11",
        "11": "GDT_HW_GENERATION_CDNA",
        "12": "GDT_HW_GENERATION_CDNA2",
        "13": "GDT_HW_GENERATION_CDNA3",
        "14": "GDT_HW_GENERATION_GFX12",
        "15": "GDT_HW_GENERATION_LAST"
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
    "TranslationLayerDetection.ID3D12DXVKInteropDevice": TrueFalseMapping,
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
    "NvAPI_D3D12_GetPhysicalDeviceCooperativeVectorProperties.transpose": TrueFalseMapping,
    "AGSDeviceInfo.isAPU": TrueFalseMapping,
    "AGSDeviceInfo.isExternal": TrueFalseMapping,
    "AMD GDT_GfxCardInfo.APU": TrueFalseMapping,
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
    "AGSDX12ExtensionsSupported.intrinsics16": TrueFalseMapping,
    "AGSDX12ExtensionsSupported.intrinsics17": TrueFalseMapping,
    "AGSDX12ExtensionsSupported.userMarkers": TrueFalseMapping,
    "AGSDX12ExtensionsSupported.appRegistration": TrueFalseMapping,
    "AGSDX12ExtensionsSupported.UAVBindSlot": TrueFalseMapping,
    "AGSDX12ExtensionsSupported.intrinsics19": TrueFalseMapping,
    "AGSDX12ExtensionsSupported.baseVertex": TrueFalseMapping,
    "AGSDX12ExtensionsSupported.baseInstance": TrueFalseMapping,
    "AGSDX12ExtensionsSupported.getWaveSize": TrueFalseMapping,
    "AGSDX12ExtensionsSupported.floatConversion": TrueFalseMapping,
    "AGSDX12ExtensionsSupported.readLaneAt": TrueFalseMapping,
    "AGSDX12ExtensionsSupported.rayHitToken": TrueFalseMapping,
    "AGSDX12ExtensionsSupported.shaderClock": TrueFalseMapping,
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
    "D3D12_FEATURE_DATA_D3D12_OPTIONS22.TightAlignmentSupported": TrueFalseMapping,
    "D3D12_FEATURE_DATA_BYTECODE_BYPASS_HASH_SUPPORTED.Supported": TrueFalseMapping
}

export const EnumMappingsShort =
{
    "DXGI_ADAPTER_DESC3.GraphicsPreemptionGranularity":
    {
        "0": "DMA_BUFFER",
        "1": "PRIMITIVE",
        "2": "TRIANGLE",
        "3": "PIXEL",
        "4": "INSTRUCTION",
    },
    "DXGI_ADAPTER_DESC3.ComputePreemptionGranularity":
    {
        "0": "DMA_BUFFER",
        "1": "DISPATCH",
        "2": "THREAD_GROUP",
        "3": "THREAD",
        "4": "INSTRUCTION",
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.TiledResourcesTier":
    {
        "0": "❌",
        "1": "Tier 1",
        "2": "Tier 2",
        "3": "Tier 3",
        "4": "Tier 4",
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceBindingTier":
    {
        "1": "Tier 1",
        "2": "Tier 2",
        "3": "Tier 3"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ConservativeRasterizationTier":
    {
        "0": "❌",
        "1": "Tier 1",
        "2": "Tier 2",
        "3": "Tier 3"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.CrossNodeSharingTier":
    {
        "0": "❌",
        "1": "Tier 1 (emulated)",
        "2": "Tier 1",
        "3": "Tier 2",
        "4": "Tier 3"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceHeapTier":
    {
        "1": "Tier 1",
        "2": "Tier 2"
    },
    "D3D12_FEATURE_DATA_FEATURE_LEVELS.MaxSupportedFeatureLevel":
    {
        "37120": "9_1",
        "37376": "9_2",
        "37632": "9_3",
        "40960": "10_0",
        "41216": "10_1",
        "45056": "11_0",
        "45312": "11_1",
        "49152": "12_0",
        "49408": "12_1",
        "49664": "12_2"
    },
    "D3D12_FEATURE_DATA_SHADER_MODEL.HighestShaderModel":
    {
        "81": "5.1",
        "96": "6.0",
        "97": "6.1",
        "98": "6.2",
        "99": "6.3",
        "100": "6.4",
        "101": "6.5",
        "102": "6.6",
        "103": "6.7",
        "104": "6.8",
        "105": "6.9"
    },
    "D3D12_FEATURE_DATA_ROOT_SIGNATURE.HighestVersion":
    {
        "1": "1.0",
        "2": "1.1",
        "3": "1.2"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS2.ProgrammableSamplePositionsTier":
    {
        "0": "❌",
        "1": "Tier 1",
        "2": "Tier 2"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.ViewInstancingTier":
    {
        "0": "❌",
        "1": "Tier 1",
        "2": "Tier 2",
        "3": "Tier 3"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS4.SharedResourceCompatibilityTier":
    {
        "0": "Tier 0",
        "1": "Tier 1",
        "2": "Tier 2"
    },
    "D3D12_FEATURE_DATA_SERIALIZATION.HeapSerializationTier":
    {
        "0": "❌",
        "10": "✅"
    },
    "D3D12_FEATURE_DATA_CROSS_NODE.SharingTier":
    {
        "0": "❌",
        "1": "Tier 1 (emulated)",
        "2": "Tier 1",
        "3": "Tier 2",
        "4": "Tier 3"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS_EXPERIMENTAL.WorkGraphsTier":
    {
        "0": "❌",
        "1": "Tier 0.1",
        "10": "Tier 1.0",
        "11": "Tier 1.1"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS5.RenderPassesTier":
    {
        "0": "Tier 0",
        "1": "Tier 1",
        "2": "Tier 2"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS5.RaytracingTier":
    {
        "0": "❌",
        "10": "Tier 1.0",
        "11": "Tier 1.1",
        "12": "Tier 1.2"
    },
    "D3D12_FEATURE_DATA_DISPLAYABLE.SharedResourceCompatibilityTier":
    {
        "0": "Tier 0",
        "1": "Tier 1",
        "2": "Tier 2"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.VariableShadingRateTier":
    {
        "0": "❌",
        "1": "Tier 1",
        "2": "Tier 2"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS7.MeshShaderTier":
    {
        "0": "❌",
        "10": "✅"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS7.SamplerFeedbackTier":
    {
        "0": "❌",
        "90": "Tier 0.9",
        "100": "Tier 1.0"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.WaveMMATier":
    {
        "0": "❌",
        "10": "✅"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS12.MSPrimitivesPipelineStatisticIncludesCulledPrimitives":
    {
        "-1": "❓",
        "0": "❌",
        "1": "✅"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS20.RecreateAtTier":
    {
        "0": "❌",
        "1": "✅"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.WorkGraphsTier":
    {
        "0": "❌",
        "10": "Tier 1.0",
        "11": "Tier 1.1"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.ExecuteIndirectTier":
    {
        "10": "Tier 1.0",
        "11": "Tier 1.1"
    },

    "D3D12_FEATURE_DATA_D3D12_OPTIONS.DoublePrecisionFloatShaderOps": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.OutputMergerLogicOp": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.PSSpecifiedStencilRefSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.TypedUAVLoadAdditionalFormats": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ROVsSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.StandardSwizzle64KBSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.CrossAdapterRowMajorTextureSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.VPAndRTArrayIndexFromAnyShaderFeedingRasterizerSupportedWithoutGSEmulation": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_ARCHITECTURE1.TileBasedRenderer": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_ARCHITECTURE1.UMA": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_ARCHITECTURE1.CacheCoherentUMA": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_ARCHITECTURE1.IsolatedMMU": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_NORMAL.PriorityForTypeIsSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_HIGH.PriorityForTypeIsSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_NORMAL.PriorityForTypeIsSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_HIGH.PriorityForTypeIsSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_NORMAL.PriorityForTypeIsSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_HIGH.PriorityForTypeIsSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_CROSS_NODE.AtomicShaderInstructions": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_PREDICATION.Supported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_HARDWARE_COPY.Supported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_APPLICATION_SPECIFIC_DRIVER_STATE.Supported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveOps": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.ExpandedComputeResourceStates": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.Int64ShaderOps": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS2.DepthBoundsTestSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.CopyQueueTimestampQueriesSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.CastingFullyTypedFormatSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.BarycentricsSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_EXISTING_HEAPS.Supported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS4.MSAA64KBAlignedTextureSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS4.Native16BitShaderOpsSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS5.SRVOnlyTiledResourceTier3": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.AdditionalShadingRatesSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.PerPrimitiveShadingRateSupportedWithViewportIndexing": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.BackgroundProcessingSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS8.UnalignedBlockTexturesSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.MeshShaderPipelineStatsSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.MeshShaderSupportsFullRangeRenderTargetArrayIndex": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.AtomicInt64OnTypedResourceSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.AtomicInt64OnGroupSharedSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.DerivativesInMeshAndAmplificationShadersSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS10.VariableRateShadingSumCombinerSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS10.MeshShaderPerPrimitiveShadingRateSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS11.AtomicInt64OnDescriptorHeapResourceSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS12.EnhancedBarriersSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS12.RelaxedFormatCastingSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.UnrestrictedBufferTextureCopyPitchSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.UnrestrictedVertexElementAlignmentSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.InvertedViewportHeightFlipsYSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.InvertedViewportDepthFlipsZSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.TextureCopyBetweenDimensionsSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.AlphaBlendFactorSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS14.AdvancedTextureOpsSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS14.WriteableMSAATexturesSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS14.IndependentFrontAndBackStencilRefMaskSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS15.TriangleFanSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS15.DynamicIndexBufferStripCutSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS16.DynamicDepthBiasSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS16.GPUUploadHeapSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS17.NonNormalizedCoordinateSamplersSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS17.ManualWriteTrackingResourceSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS18.RenderPassesValid": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.MismatchingOutputDimensionsSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.PointSamplingAddressesNeverRoundUp": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.RasterizerDesc2Supported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.NarrowQuadrilateralLinesSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.AnisoFilterWithPointMipSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.ComputeOnlyCustomHeapSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS20.ComputeOnlyWriteWatchSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.SampleCmpGradientAndBiasSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.ExtendedCommandInfoSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS22.TightAlignmentSupported": TrueFalseMappingShort,
    "D3D12_FEATURE_DATA_BYTECODE_BYPASS_HASH_SUPPORTED.Supported": TrueFalseMappingShort
}

export const RenameList = {
    "Header.D3D12_PREVIEW_SDK_VERSION": "Header.D3D12_SDK_VERSION"
}

export const ListHeader = [
    "ID",
    "DXGI_ADAPTER_DESC3.Description",
    "DXGI_ADAPTER_DESC3.VendorId",
    "DXGI_ADAPTER_DESC3.DedicatedVideoMemory",
    "CheckInterfaceSupport.UMDVersion",
    "Header.Version",
    "Header.Using preview Agility SDK"
]

export const ListHeaderSpecial = [
    "Action"
]

export const FilterMultichoiceFields = [
    "DXGI_ADAPTER_DESC3.VendorId",
    "Header.Using preview Agility SDK"
]

export const BitFlagsMappings =
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
    "NvPhysicalGpuHandle.adapterType":
    {
        "0": "NV_ADAPTER_TYPE_UNKNOWN",
        "1": "NV_ADAPTER_TYPE_WDDM",
        "2": "NV_ADAPTER_TYPE_SLI",
        "4": "NV_ADAPTER_TYPE_TCC",
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
    },
    "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_CLUSTER_OPERATIONS":
    {
        "0": "NVAPI_D3D12_RAYTRACING_CLUSTER_OPERATIONS_CAP_NONE",
        "1": "NVAPI_D3D12_RAYTRACING_CLUSTER_OPERATIONS_CAP_STANDARD"
    },
    "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_PARTITIONED_TLAS":
    {
        "0": "NVAPI_D3D12_RAYTRACING_PARTITIONED_TLAS_CAP_NONE",
        "1": "NVAPI_D3D12_RAYTRACING_PARTITIONED_TLAS_CAP_STANDARD"
    },
    "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_SPHERES":
    {
        "0": "NVAPI_D3D12_RAYTRACING_SPHERES_CAP_NONE",
        "1": "NVAPI_D3D12_RAYTRACING_SPHERES_CAP_STANDARD"
    },
    "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_LINEAR_SWEPT_SPHERES":
    {
        "0": "NVAPI_D3D12_RAYTRACING_LINEAR_SWEPT_SPHERES_CAP_NONE",
        "1": "NVAPI_D3D12_RAYTRACING_LINEAR_SWEPT_SPHERES_CAP_STANDARD"
    }
}

export const BitFlagsMappingsShort =
{
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.MinPrecisionSupport":
    {
        "0": "❌",
        "1": "10-bit",
        "2": "16-bit"
    },
    "D3D12_FEATURE_DATA_SHADER_CACHE.SupportFlags":
    {
        "0": "NONE",
        "1": "SINGLE_PSO",
        "2": "LIBRARY",
        "4": "AUTOMATIC_INPROC_CACHE",
        "8": "AUTOMATIC_DISK_CACHE",
        "16": "DRIVER_MANAGED_CACHE",
        "32": "SHADER_CONTROL_CLEAR",
        "64": "SHADER_SESSION_DELETE"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.WriteBufferImmediateSupportFlags":
    {
        "0": "❌",
        "1": "Direct",
        "2": "Bundle",
        "4": "Compute",
        "8": "Copy",
        "16": "Video Decode",
        "32": "Video Process",
        "64": "Video Encode"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.SupportedSampleCountsWithNoOutputs":
    {
        "1": "1",
        "2": "2",
        "4": "4",
        "8": "8",
        "16": "16",
        "32": "32",
        "64": "64"
    }
}

export const SuffixMappings =
{
    "AGSDeviceInfo.coreClock": "MHz",
    "AGSDeviceInfo.memoryClock": "MHz",
    "AGSDeviceInfo.memoryBandwidth": "MB/s",
}

export const VendorIDs =
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

export const SubsystemVendorIDs =
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

export const PropertyHumanReadableNames =
{
    "Header.Program": "Program",
    "Header.Version": "D3d12info Version",
    "Header.Build Date": "Program Build Date",
    "Header.Configuration": "Program Configuration",
    "Header.Configuration bits": "Program Architecture",
    "Header.Generated on": "Report generated on",
    "Header.Using preview Agility SDK": "Using preview Agility SDK",
    "Header.D3D12_SDK_VERSION": "D3D12_SDK_VERSION",
    "Header.NvAPI compiled version": "Compile time NVAPI library version",
    "Header.NVAPI_SDK_VERSION": "Compile time NVAPI_SDK_VERSION",
    "Header.NvAPI_GetInterfaceVersionString": "NVAPI interface version",
    "Header.AMD_AGS_VERSION": "AMD_AGS_VERSION",
    "Header.agsGetVersionNumber": "AMD AGS agsGetVersionNumber",
    "Header.AMD device_info compiled version": "AMD device_info library version",
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
    "SystemInfo.TranslationLayerDetection.wine_get_version": "Wine version",
    "AdapterIndex": "Adapter Index",
    "TranslationLayerDetection.ID3D12DXVKInteropDevice": "vkd3d-proton detected",
    "CheckInterfaceSupport.UMDVersion": "Driver Version",
}

export const PropertyTooltips = {
    "D3D12_SDK_VERSION": "Version of agility SDK used to generate the report",
    "DXGI_FEATURE_PRESENT_ALLOW_TEARING": "Whether OS supports swapchain presentation with tearing. This is not a GPU capability.",
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
        "Header.NVAPI_SDK_VERSION",
        "Header.NvAPI_GetInterfaceVersionString",
        "Header.AMD_AGS_VERSION",
        "Header.agsGetVersionNumber",
        "Header.AMD device_info compiled version",
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
        "SystemInfo.TranslationLayerDetection.wine_get_version",
        "AdapterIndex",
        "TranslationLayerDetection.ID3D12DXVKInteropDevice",
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
        "NvPhysicalGpuHandle.adapterType",
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
        "AMD GDT_GfxCardInfo.asicType",
        "AMD GDT_GfxCardInfo.generation",
        "AMD GDT_GfxCardInfo.APU",
        "AMD GDT_GfxCardInfo.CALName",
        "AMD GDT_GfxCardInfo.MarketingName",
        "AMD GDT_DeviceInfo.NumShaderEngines",
        "AMD GDT_DeviceInfo.MaxWavePerSIMD",
        "AMD GDT_DeviceInfo.ClocksPrim",
        "AMD GDT_DeviceInfo.NumSQMaxCounters",
        "AMD GDT_DeviceInfo.NumPrimPipes",
        "AMD GDT_DeviceInfo.WaveSize",
        "AMD GDT_DeviceInfo.NumSHPerSE",
        "AMD GDT_DeviceInfo.NumCUPerSH",
        "AMD GDT_DeviceInfo.NumSIMDPerCU",
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
        "AGSDX12ExtensionsSupported.intrinsics16",
        "AGSDX12ExtensionsSupported.intrinsics17",
        "AGSDX12ExtensionsSupported.userMarkers",
        "AGSDX12ExtensionsSupported.appRegistration",
        "AGSDX12ExtensionsSupported.UAVBindSlot",
        "AGSDX12ExtensionsSupported.intrinsics19",
        "AGSDX12ExtensionsSupported.baseVertex",
        "AGSDX12ExtensionsSupported.baseInstance",
        "AGSDX12ExtensionsSupported.getWaveSize",
        "AGSDX12ExtensionsSupported.floatConversion",
        "AGSDX12ExtensionsSupported.readLaneAt",
        "AGSDX12ExtensionsSupported.rayHitToken",
        "AGSDX12ExtensionsSupported.shaderClock",
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
        "D3D12_FEATURE_DATA_BYTECODE_BYPASS_HASH_SUPPORTED.Supported",
        "D3D12_FEATURE_DATA_TIGHT_ALIGNMENT.SupportTier",
        "D3D12_FEATURE_DATA_HARDWARE_SCHEDULING_QUEUE_GROUPINGS.ComputeQueuesPer3DQueue",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS_EXPERIMENTAL.CooperativeVectorTier",
        "DirectSR",
        "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pMatrixVectorMulAddProperties",
        "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pOuterProductAccumulateProperties",
        "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pVectorAccumulateProperties",
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
        "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_CLUSTER_OPERATIONS",
        "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_PARTITIONED_TLAS",
        "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_SPHERES",
        "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_LINEAR_SWEPT_SPHERES",
        "NvAPI_D3D12_QueryWorkstationFeatureProperties.NV_D3D12_WORKSTATION_FEATURE_TYPE_PRESENT_BARRIER - supported",
        "NvAPI_D3D12_QueryWorkstationFeatureProperties.NV_D3D12_WORKSTATION_FEATURE_TYPE_RDMA_BAR1_SUPPORT - supported",
        "NvAPI_D3D12_QueryWorkstationFeatureProperties.NV_D3D12_WORKSTATION_FEATURE_TYPE_RDMA_BAR1_SUPPORT - rdmaHeapSize",
        "NvAPI_D3D12_GetNeedsAppFPBlendClamping.pAppClampNeeded",
        "NvAPI_D3D12_GetPhysicalDeviceCooperativeVectorProperties"
    ]

const SubPropertiesOrder =
    [
        "DirectSR.VariantId",
        "DirectSR.VariantName",
        "DirectSR.Flags",
        "DirectSR.OptimizationRankings",
        "DirectSR.OptimalTargetFormat",
        "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pMatrixVectorMulAddProperties.InputType",
        "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pMatrixVectorMulAddProperties.InputInterpretation",
        "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pMatrixVectorMulAddProperties.MatrixInterpretation",
        "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pMatrixVectorMulAddProperties.BiasInterpretation",
        "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pMatrixVectorMulAddProperties.OutputType",
        "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pMatrixVectorMulAddProperties.TransposeSupported",
        "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pOuterProductAccumulateProperties.InputType",
        "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pOuterProductAccumulateProperties.AccumulationType",
        "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pVectorAccumulateProperties.InputType",
        "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR.pVectorAccumulateProperties.AccumulationType",
        "NvAPI_D3D12_GetPhysicalDeviceCooperativeVectorProperties.version",
        "NvAPI_D3D12_GetPhysicalDeviceCooperativeVectorProperties.inputType",
        "NvAPI_D3D12_GetPhysicalDeviceCooperativeVectorProperties.inputInterpretation",
        "NvAPI_D3D12_GetPhysicalDeviceCooperativeVectorProperties.matrixInterpretation",
        "NvAPI_D3D12_GetPhysicalDeviceCooperativeVectorProperties.biasInterpretation",
        "NvAPI_D3D12_GetPhysicalDeviceCooperativeVectorProperties.resultType",
        "NvAPI_D3D12_GetPhysicalDeviceCooperativeVectorProperties.transpose"
    ]

const VendorSpecificProperties = [
    "SystemInfo.NvAPI_SYS_GetDriverAndBranchVersion.pDriverVersion",
    "SystemInfo.AGSGPUInfo.driverVersion",
    "Header.NvAPI compiled version",
    "Header.NVAPI_SDK_VERSION",
    "Header.NvAPI_GetInterfaceVersionString",
    "Header.AMD_AGS_VERSION",
    "Header.agsGetVersionNumber",
    "Header.AMD device_info compiled version",
    "Header.Intel GPU Detect compiled version",
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
    "NvPhysicalGpuHandle.adapterType",
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
    "AMD GDT_GfxCardInfo.asicType",
    "AMD GDT_GfxCardInfo.generation",
    "AMD GDT_GfxCardInfo.APU",
    "AMD GDT_GfxCardInfo.CALName",
    "AMD GDT_GfxCardInfo.MarketingName",
    "AMD GDT_DeviceInfo.NumShaderEngines",
    "AMD GDT_DeviceInfo.MaxWavePerSIMD",
    "AMD GDT_DeviceInfo.ClocksPrim",
    "AMD GDT_DeviceInfo.NumSQMaxCounters",
    "AMD GDT_DeviceInfo.NumPrimPipes",
    "AMD GDT_DeviceInfo.WaveSize",
    "AMD GDT_DeviceInfo.NumSHPerSE",
    "AMD GDT_DeviceInfo.NumCUPerSH",
    "AMD GDT_DeviceInfo.NumSIMDPerCU",
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
    "AGSDX12ExtensionsSupported.intrinsics16",
    "AGSDX12ExtensionsSupported.intrinsics17",
    "AGSDX12ExtensionsSupported.userMarkers",
    "AGSDX12ExtensionsSupported.appRegistration",
    "AGSDX12ExtensionsSupported.UAVBindSlot",
    "AGSDX12ExtensionsSupported.intrinsics19",
    "AGSDX12ExtensionsSupported.baseVertex",
    "AGSDX12ExtensionsSupported.baseInstance",
    "AGSDX12ExtensionsSupported.getWaveSize",
    "AGSDX12ExtensionsSupported.floatConversion",
    "AGSDX12ExtensionsSupported.readLaneAt",
    "AGSDX12ExtensionsSupported.rayHitToken",
    "AGSDX12ExtensionsSupported.shaderClock",
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
    "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_CLUSTER_OPERATIONS",
    "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_PARTITIONED_TLAS",
    "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_SPHERES",
    "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_LINEAR_SWEPT_SPHERES",
    "NvAPI_D3D12_QueryWorkstationFeatureProperties.NV_D3D12_WORKSTATION_FEATURE_TYPE_PRESENT_BARRIER - supported",
    "NvAPI_D3D12_QueryWorkstationFeatureProperties.NV_D3D12_WORKSTATION_FEATURE_TYPE_RDMA_BAR1_SUPPORT - supported",
    "NvAPI_D3D12_QueryWorkstationFeatureProperties.NV_D3D12_WORKSTATION_FEATURE_TYPE_RDMA_BAR1_SUPPORT - rdmaHeapSize",
    "NvAPI_D3D12_GetNeedsAppFPBlendClamping.pAppClampNeeded",
    "NvAPI_D3D12_GetPhysicalDeviceCooperativeVectorProperties"
]

export const PropertiesFilterWhitelist = new Set([
    "ID",
    "DXGI_ADAPTER_DESC3.Description",
    "AdapterIndex"
])

export const PureFeatureList = [
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.DoublePrecisionFloatShaderOps",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.OutputMergerLogicOp",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.TiledResourcesTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceBindingTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.PSSpecifiedStencilRefSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.TypedUAVLoadAdditionalFormats",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.ROVsSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.ConservativeRasterizationTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.StandardSwizzle64KBSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.CrossAdapterRowMajorTextureSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.VPAndRTArrayIndexFromAnyShaderFeedingRasterizerSupportedWithoutGSEmulation",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceHeapTier",
        "D3D12_FEATURE_DATA_SHADER_MODEL.HighestShaderModel",
        "D3D12_FEATURE_DATA_ROOT_SIGNATURE.HighestVersion",
        "D3D12_FEATURE_DATA_ARCHITECTURE1.IsolatedMMU",
        "D3D12_FEATURE_DATA_FEATURE_LEVELS.MaxSupportedFeatureLevel",
        "D3D12_FEATURE_DATA_SERIALIZATION.HeapSerializationTier",
        "D3D12_FEATURE_DATA_APPLICATION_SPECIFIC_DRIVER_STATE.Supported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveOps",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS1.ExpandedComputeResourceStates",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS1.Int64ShaderOps",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS2.DepthBoundsTestSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS2.ProgrammableSamplePositionsTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS3.CopyQueueTimestampQueriesSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS3.CastingFullyTypedFormatSupported",
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
        "D3D12_FEATURE_DATA_D3D12_OPTIONS19.PointSamplingAddressesNeverRoundUp",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS19.RasterizerDesc2Supported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS19.NarrowQuadrilateralLinesSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS19.AnisoFilterWithPointMipSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS19.ComputeOnlyCustomHeapSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS20.ComputeOnlyWriteWatchSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS20.RecreateAtTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS21.WorkGraphsTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS21.ExecuteIndirectTier",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS21.SampleCmpGradientAndBiasSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS21.ExtendedCommandInfoSupported",
        "D3D12_FEATURE_DATA_D3D12_OPTIONS22.TightAlignmentSupported",
        "D3D12_FEATURE_DATA_BYTECODE_BYPASS_HASH_SUPPORTED.Supported",
        "D3D12_FEATURE_DATA_TIGHT_ALIGNMENT.SupportTier"
]

export const ArchReleaseDates = {
    // Microsoft
    "WARP": "9999", // Won't be shown in the table

    // AMD
    "GCN1": "2012",
    "GCN2": "2013",
    "GCN3": "2015",
    "GCN4": "2016",
    "Vega": "2017",
    "RDNA": "2019",
    "RDNA2": "2020",
    "RDNA3": "2022",
    "RDNA4": "2025",

    // Nvidia
    "Fermi": "2010",
    "Fermi2": "2010",
    "Kepler": "2012",
    "Maxwell1": "2014",
    "Maxwell2": "2015",
    "Pascal": "2016",
    "Volta": "2017",
    "Turing": "2018",
    "Ampere": "2020",
    "Ada": "2022",
    "Blackwell": "2025",
    
    // Intel
    "Gen7.5": "2013",
    "Gen8": "2014",
    "Gen9": "2015",
    "Gen9.5": "2016",
    "Gen11": "2019",
    "Xe": "2020",
    "Xe-HPG": "2022",
    "Xe-HPC": "2023",
    "Xe-LPG": "2023",
    "Xe2-HPG": "2024",

    // Qualcomm
    "8cx 3": "2021",
    "X1": "2024",
}

function MakeMap(order) {
    let result = new Map()
    for (let i = 0; i < order.length; ++i) {
        result.set(order[i], i);
    }
    return result;
}

function MakeSet(arr) {
    let result = new Set()
    for (let i = 0; i < arr.length; ++i) {
        result.add(arr[i]);
    }
    return result;
}

export const PropertiesOrderMap = MakeMap(PropertiesOrder)
export const SubPropertiesOrderMap = MakeMap(SubPropertiesOrder)
export const VendorSpecificPropertiesSet = MakeSet(VendorSpecificProperties)
