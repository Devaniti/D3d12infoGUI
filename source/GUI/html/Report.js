const isLocalReport = true

const apiAddress = "https://d3d12infodb.boolka.dev:50854"
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
        "104": "D3D_SHADER_MODEL_6_8"
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
        "1": "D3D12_WORK_GRAPHS_TIER_0_1"
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
    "D3D12_FEATURE_DATA_D3D12_OPTIONS20.ComputeOnlyWriteWatchSupported": TrueFalseMapping
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
    "0x1043": "ASUSTeK",
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
    "0x18bc": "GeCube",
    "0x196d": "Club 3D",
    "0x1ab8": "Parallels",
    "0x1da2": "Sapphire",
    "0x5143": "Qualcomm",
    "0x8086": "Intel",
}

const PropertyHumanReadableNames =
{
    "Header.Program": "Program",
    "Header.Version": "Program Version",
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

function MakeHumanReadableProperty(property) {
    if (property in PropertyHumanReadableNames) {
        return PropertyHumanReadableNames[property]
    }

    return property
}

function MakeHumanReadable(property, value) {
    if (value == null) return value

    if (property in EnumMappings) {
        return EnumMappings[property][value] ?? `Unknown(${value})`
    }

    if (property in BitFlagsMappings) {
        let result = ''
        let bitCount = 0
        for (let i = 1; i <= value; i = i << 1) {
            if (value & i) {
                bitCount++
                result += (BitFlagsMappings[property][i] ?? `Unknown(${i})`) + " |\n"
            }
        }
        if (result == '') {
            result = BitFlagsMappings[property][0] ?? "Unknown"
        }
        else {
            result = result.substring(0, result.length - 3)
        }
        result += bitCount > 1 ? "\n" : " "
        result += `(0x${Number(value).toString(16)})`
        return result
    }

    if (property in SuffixMappings) {
        return value + SuffixMappings[property]
    }

    switch (property) {
        case "SystemInfo.NvAPI_SYS_GetDriverAndBranchVersion.pDriverVersion":
        case "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.driverVersion":
            {
                return value / 100
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
                    let ToTextID = (e) => String.fromCharCode(e & 0xFF, (e >> 8) & 0xFF, (e >> 16) & 0xFF, (e >> 24)  & 0xFF);
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
    }

    if (Array.isArray(value))
        return value.join(", ")

    return value
}

class ReportContainer {
    static #renameList = new Map([
        ["Header.D3D12_PREVIEW_SDK_VERSION", "Header.D3D12_SDK_VERSION"]
    ])

    #fields = []
    #fieldsMap = {}

    #import(data) {
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
                dest.push({ name: prefix, value: obj.join(", ") })
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

        if (isLocalReport)
        {
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
    }

    #reorderFields() {
        function getIndex(a) {
            return PropertiesOrderMap.get(a.name) ?? Infinity
        }
        this.#fields = this.#fields.sort((a, b) => {
            return getIndex(a) - getIndex(b);
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

const SubmissionIDs = [[], []]

// 0 - Retail, 1 - Preview
let RetailIndex = 0
let ReportIndex = 0

let PreviewAvailable = false
let Headers = []
let Adapters = []

let PropertiesSearchString = ""

function HaveUnsubmittedReports() {
    return SubmissionIDs.some(e => e.some(e => e == -1))
}

function IsPreviewAvailable() {
    return Adapters.length > 1
}

function IterateAdapters(callback) {
    for (let i = 0; i < Adapters.length; ++i) {
        for (let j = 0; j < Adapters[i].length; ++j) {
            callback(i, j, Adapters[i][j])
        }
    }
}

function InitReportData() {
    Headers = reports.map(e => {
        return new ReportContainer({ "Header": e.Header, "SystemInfo": e.SystemInfo })
    })
    Adapters = reports.map(e => e.Adapters.map(e => new ReportContainer(e)))
}

function WriteObjectToTable(obj, table) {
    for (const e of obj.HumanReadable(FilterField)) {
        const row = document.createElement("tr")

        const cell0 = document.createElement("td")
        const cell0Text = document.createTextNode(e.name)
        cell0.appendChild(cell0Text)
        row.appendChild(cell0)

        const cell1 = document.createElement("td")
        const cell1Text = document.createTextNode(e.value)
        cell1.appendChild(cell1Text)
        row.appendChild(cell1)

        table.appendChild(row)
    }
}

function PrepareReport(header, adapter) {
    let submission = {}
    for (const e of header) {
        submission[e.name] = e.value
    }
    for (const e of adapter) {
        submission[e.name] = e.value
    }
    for (const property in submission) {
        let propertyLower = property.toLowerCase()
        if (propertyLower.includes("uuid") || propertyLower.includes("luid")) {
            delete submission[property]
        }
    }
    return JSON.stringify(submission)
}

function SubmitReport(header, adapter, onSuccess) {
    let xhr = new XMLHttpRequest()
    xhr.open("POST", apiAddress + "/post_submission")
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = () => {
        if (xhr.readyState != 4)
            return;

        if (xhr.status == 200) {
            if (onSuccess != null)
                onSuccess(xhr.responseText)
        }
        else {
            console.log(xhr.responseText);
        }
    }
    xhr.send(PrepareReport(header, adapter))
}

function SubmitAllReports() {
    let adaptersMap = new Set();
    IterateAdapters((retailIndex, index, adapter) => {
        if (SubmissionIDs[retailIndex][index] >= 0)
            return

        let adapterKey = JSON.stringify([
            retailIndex,
            adapter.GetField("DXGI_ADAPTER_DESC3.Description"),
            adapter.GetField("DXGI_ADAPTER_DESC3.VendorId"),
            adapter.GetField("DXGI_ADAPTER_DESC3.DeviceId"),
            adapter.GetField("DXGI_ADAPTER_DESC3.SubSysId"),
            adapter.GetField("DXGI_ADAPTER_DESC3.Revision"),
            adapter.GetField("DXGI_ADAPTER_DESC3.DedicatedVideoMemory"),
            adapter.GetField("CheckInterfaceSupport.UMDVersion")
        ])
        if (adaptersMap.has(adapterKey)) {
            console.log(`Skipping ${retailIndex == 0 ? "retail" : "preview"} adapter ${adapter.GetField("DXGI_ADAPTER_DESC3.Description")} with index ${index}, as it is detected as duplicate`)
            return
        }
        adaptersMap.add(adapterKey);

        SubmissionIDs[retailIndex][index] = null
        SubmitReport(Headers[retailIndex], adapter, (ID) => {
            SubmissionIDs[retailIndex][index] = ID;
            UpdateList();
        })
    })
    UpdateList()
}

function UpdateList() {
    const listContainer = document.getElementById("ListContainer")

    ClearElement(listContainer)

    const table = document.createElement("table")
    const tableBody = document.createElement("tbody")

    const header = [
        "DXGI_ADAPTER_DESC3.Description",
        "DXGI_ADAPTER_DESC3.VendorId",
        "DXGI_ADAPTER_DESC3.DedicatedVideoMemory",
        "CheckInterfaceSupport.UMDVersion"
    ]

    if (IsPreviewAvailable())
        header.push("Header.Using preview Agility SDK")

    header.push("Online link")

    const firstRow = document.createElement("tr")
    const cell = document.createElement("td")
    cell.colSpan = header.length
    let submitButton = document.createElement("button")
    submitButton.disabled = !HaveUnsubmittedReports();
    submitButton.onclick = () => {
        SubmitAllReports()
    }
    const buttonText = document.createTextNode("Submit all reports")
    submitButton.appendChild(buttonText)
    cell.appendChild(submitButton)
    firstRow.appendChild(cell)
    tableBody.appendChild(firstRow)

    const secondRow = document.createElement("tr")
    header.forEach(collumn => {
        const cell = document.createElement("td")
        const cellText = document.createTextNode(MakeHumanReadableProperty(collumn))
        cell.appendChild(cellText)
        secondRow.appendChild(cell)
    })
    tableBody.appendChild(secondRow)

    IterateAdapters((retailIndex, index, adapter) => {
        const row = document.createElement("tr")
        header.forEach(collumn => {
            const cell = document.createElement("td")
            switch (collumn) {
                case "Online link":
                    switch (SubmissionIDs[retailIndex][index]) {
                        case null:
                            {
                                let cellText = document.createTextNode("Please wait...")
                                cell.appendChild(cellText)
                                break;
                            }
                        case -1:
                            {
                                let link = document.createElement("a")
                                link.href = "#"
                                link.textContent = "Submit"
                                link.onclick = () => {
                                    SubmissionIDs[retailIndex][index] = null;
                                    UpdateList();
                                    SubmitReport(Headers[retailIndex], adapter, (ID) => {
                                        SubmissionIDs[retailIndex][index] = ID;
                                        UpdateList();
                                    })
                                }
                                cell.appendChild(link)
                                break;
                            }
                        default:
                            {
                                let link = document.createElement("a")
                                link.href = `${siteAddress}/ID.html?ID=${SubmissionIDs[retailIndex][index]}`
                                link.textContent = "Open Online"
                                cell.appendChild(link)
                                break;
                            }
                    }
                    break
                default:
                    let value = adapter.GetField(collumn) ?? Headers[retailIndex].GetField(collumn)
                    let cellText = document.createTextNode(MakeHumanReadable(collumn, value))
                    cell.appendChild(cellText)
                    break
            }
            row.appendChild(cell)
        })
        row.addEventListener('click', function (e) {
            if (e.target.tagName.toLowerCase() === 'a') return;

            RetailIndex = retailIndex
            ReportIndex = index
            UpdateHeader()
            UpdateReport()
        })
        row.classList.add("clickableRow")
        tableBody.appendChild(row)
    });

    table.appendChild(tableBody)
    listContainer.appendChild(table)
}

function UpdateSearchBar() {
    const searchBarContainer = document.getElementById("SearchBarPropertiesContainer")

    ClearElement(searchBarContainer)

    const searchBar = document.createElement("input")
    searchBar.type = "search"
    searchBar.placeholder = "Search Properties"
    searchBar.classList.add("searchBar")
    searchBar.addEventListener('input', function (e) {
        PropertiesSearchString = searchBar.value
        UpdateHeader()
        UpdateReport()
    })
    searchBarContainer.appendChild(searchBar)
}

function UpdateHeader() {
    const headerContainer = document.getElementById("HeaderContainer")

    ClearElement(headerContainer)

    const table = document.createElement("table")
    const tableBody = document.createElement("tbody")

    // Empty first row to make automatic table size calculation consistent between tables
    const firstRow = document.createElement("tr")
    tableBody.appendChild(firstRow)

    WriteObjectToTable(Headers[RetailIndex], tableBody, "", false)

    table.appendChild(tableBody)
    headerContainer.appendChild(table)
}

function UpdateReport() {
    const report = Adapters[RetailIndex][ReportIndex]

    const reportContainer = document.getElementById("ReportContainer")

    ClearElement(reportContainer)

    const table = document.createElement("table")
    const tableBody = document.createElement("tbody")

    {
        const firstRow = document.createElement("tr")
        tableBody.appendChild(firstRow)
    }

    WriteObjectToTable(report, tableBody)

    table.appendChild(tableBody)
    reportContainer.appendChild(table)
}

function QueryReportIDs() {
    IterateAdapters((retailIndex, index, adapter) => {
        SubmissionIDs[retailIndex][index] = null;
        let xhr = new XMLHttpRequest()
        xhr.open("POST", apiAddress + "/is_submitted")
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.onloadend = () => {
            if (xhr.status == 200) {
                SubmissionIDs[retailIndex][index] = Number(xhr.responseText)
                UpdateList()
            }
            else {
                SubmissionIDs[retailIndex][index] = -1
                UpdateList()
            }
        }
        header = Headers[retailIndex]
        xhr.send(PrepareReport(header, adapter))
    })
}

function UpdateOutput() {
    if (Headers.length == 0) {
        const errorText = document.createTextNode("No reports generated")
        document.body.appendChild(errorText)
        return
    }

    UpdateList()
    UpdateSearchBar()
    UpdateHeader()
    UpdateReport()
}

function OnLoad() {
    InitReportData()
    QueryReportIDs()
    UpdateOutput()
}