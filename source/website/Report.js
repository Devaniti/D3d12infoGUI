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

const VendorIDs =
{
    "4098": "AMD/ATI",
    "4130": "AMD",
    "4318": "NVIDIA",
    "5140": "Microsoft",
    "5692": "Intel",
    "32902": "Intel",
    "32903": "Intel",
    "877417040": "Parallels",
    "1297040209": "Qualcomm"
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
    "Header.D3D12_SDK_VERSION": "Agility SDK Version",
    "Header.NvAPI compiled version": "NVAPI library version",
    "Header.NvAPI_GetInterfaceVersionString": "NVAPI interface version",
    "Header.AMD_AGS_VERSION": "AMD AGS library version",
    "Header.agsGetVersionNumber": "AMD AGS interface version",
    "Header.Intel GPU Detect compiled version": "Intel GPU Detect library version",
    "SystemInfo.OS Info.Windows version": "Windows version",
    "SystemInfo.System memory.GetPhysicallyInstalledSystemMemory": "Phisically installed RAM",
    "SystemInfo.System memory.MEMORYSTATUSEX::ullTotalPhys": "Actually available RAM",
    "SystemInfo.System memory.MEMORYSTATUSEX::ullTotalPageFile": "Current page file size",
    "SystemInfo.System memory.MEMORYSTATUSEX::ullTotalVirtual": "Total virtual adress space size",
    "SystemInfo.DXGI_FEATURE.DXGI_FEATURE_PRESENT_ALLOW_TEARING": "DXGI_FEATURE_PRESENT_ALLOW_TEARING",
    "SystemInfo.NvAPI_SYS_GetDriverAndBranchVersion.pDriverVersion": "NVAPI Driver version",
    "SystemInfo.NvAPI_SYS_GetDriverAndBranchVersion.szBuildBranchString": "NVAPI Driver branch name",
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.driverVersion": "NVAPI Display driver version",
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.szBuildBranch": "NVAPI Display driver branch name",
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsDCHDriver": "NVAPI is DCH Driver",
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIAStudioPackage": "NVAPI is Studio Driver",
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIAGameReadyPackage": "NVAPI is Game Ready Driver",
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIARTXProductionBranchPackage": "NVAPI is RTX Production Branch Driver",
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIARTXNewFeatureBranchPackage": "NVAPI is RTX New Feature Branch Driver",
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.szBuildBaseBranch": "NVAPI Driver base branch",
    "SystemInfo.D3D12EnableExperimentalFeatures": "Available Experimental features",
    "AdapterIndex": "Adapter Index",
    "CheckInterfaceSupport.UMDVersion": "User Mode Driver Version"
}

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
        for (let i = 1; i < value; i = i << 1) {
            if (value & i) {
                result += (BitFlagsMappings[property][i] ?? `Unknown(${i})`) + " | "
            }
        }
        if (result == '') {
            result = BitFlagsMappings[property][0] ?? `Unknown(0)`
        }
        else {
            result = result.substring(0, result.length - 3)
        }
        return result
    }

    switch (property) {
        case "SystemInfo.NvAPI_SYS_GetDriverAndBranchVersion.pDriverVersion":
        case "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.driverVersion":
            {
                return value / 100
            }
        // WORD sized hex number
        case "DXGI_ADAPTER_DESC3.VendorId":
        case "VkPhysicalDeviceProperties.vendorID":
        case "Intel GPUDetect::GPUData.VendorId":
            {
                let ZeroPad = (e, pad) => e.length >= pad ? e : "0".repeat(pad - e.length) + e
                let hexValue = "0x" + ZeroPad(Number(value).toString(16), 4)
                if (VendorIDs[value])
                    return `${hexValue} (${VendorIDs[value]})`
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
        case "Intel GPUDetect::GPUData.deviceID":
        case "VkPhysicalDeviceProperties.driverVersion":
        case "VkPhysicalDeviceProperties.deviceID":
            {
                let ZeroPad = (e, pad) => e.length >= pad ? e : "0".repeat(pad - e.length) + e
                return "0x" + ZeroPad(Number(value).toString(16), 4)
            }
        // DWORD sized hex number
        case "DXGI_ADAPTER_DESC3.SubSysId":
        case "NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pDeviceID":
        case "NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pSubSystemId":
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
        case "Intel GPUDetect::GPUData.videoMemory":
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
                dest.push({name:prefix, value:obj.join(", ")})
            }
            else if (typeof obj == "boolean") {
                dest.push({name:prefix, value:+obj})
            }
            else {
                dest.push({name:prefix, value:obj})
            }
        }
        flatten(data, "")
    }

    #patchData() {
        for (const e of this.#fields) {
            if (ReportContainer.#renameList.has(e.name))
            {
                e.name = ReportContainer.#renameList.get(e.name)
            }
        }

        for (const e of this.#fields) {
            switch (e.name)
            {
                case "NvPhysicalGpuHandle.NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::implementation_id":
                    {
                        for (const e2 of this.#fields) {
                            if (e2.name == "NvPhysicalGpuHandle.NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id")
                            {
                                e.value += e2.value
                                break
                            }
                        }
                    }
                    break
            }
        }
    }

    constructor(data) {
        this.#import(data)
        this.#patchData()
    }
    
    *[Symbol.iterator]() {
        for (const field of this.#fields) {
            yield field;
        }
    }

    HumanReadable() {
        class HumanReadableObj {
            constructor(fields) {
                this.fields = fields;
            }

            *[Symbol.iterator]() {
                for (const field of this.fields) {
                    yield {name: MakeHumanReadableProperty(field.name), value:MakeHumanReadable(field.name, field.value)}
                }
            }
        }

        return new HumanReadableObj(this.#fields);
    }
}

let SingleReport = false
let Reports = []
let ReportIndex = 0

function UpdateOutput() {
    const report = Reports[ReportIndex]

    const tableContainer = document.getElementById("TableContainer")

    while (tableContainer.lastElementChild) {
        tableContainer.removeChild(tableContainer.lastElementChild)
    }

    const table = document.createElement("table")
    const tableBody = document.createElement("tbody")

    {
        const firstRow = document.createElement("tr")
        if (!SingleReport)
        {
            const cell = document.createElement("td")
            cell.colSpan = 2
            {
                let button = document.createElement("button")
                button.onclick = () => {
                    --ReportIndex
                    UpdateOutput()
                }
                button.disabled = ReportIndex == 0
                const buttonText = document.createTextNode("Previous report")
                button.appendChild(buttonText)
                cell.appendChild(button)
            }
            {
                let button = document.createElement("button")
                button.onclick = () => {
                    ++ReportIndex
                    UpdateOutput()
                }
                button.disabled = ReportIndex >= Reports.length - 1
                const buttonText = document.createTextNode("Next report")
                button.appendChild(buttonText)
                cell.appendChild(button)
            }
            firstRow.appendChild(cell)
        }
        tableBody.appendChild(firstRow)
    }

    for (const e of report.HumanReadable()) {
        const row = document.createElement("tr")

        const cell0 = document.createElement("td")
        const cell0Text = document.createTextNode(e.name)
        cell0.appendChild(cell0Text)
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

function OnLoad() {
    const tableContainer = document.getElementById("TableContainer")
    const textContainer = document.createElement("div")
    const loadingText = document.createTextNode("Loading. Please wait.")
    textContainer.appendChild(loadingText)
    tableContainer.appendChild(textContainer)

    let xhr = new XMLHttpRequest()
    xhr.open("GET", apiAddress + "/get_all_submissions")
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            Reports = JSON.parse(xhr.responseText).map(e => new ReportContainer(e))
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