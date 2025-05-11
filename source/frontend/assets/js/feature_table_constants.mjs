export const TableTrueFalseMapping =
{
    "0": "❌",
    "1": "✅"
}

// TODO: some things could be consolidated? e.g. D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY, WaveLaneCountMin/Max
export const TableFeaturesShortNames = {
    "TableReleaseDate": "Release Date",
    "TableMarketShare": "Market Share",
    "TableNumReports": "Number of reports",
    "TableReportUsed": "Report used for feature data",
    "TableD3d12InfoVersion": "D3d12info version",

    // Sorted based on importance
    "D3D12_FEATURE_DATA_FEATURE_LEVELS.MaxSupportedFeatureLevel": "Feature level",
    "D3D12_FEATURE_DATA_SHADER_MODEL.HighestShaderModel": "Shader model",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS5.RaytracingTier": "Raytracing",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS7.MeshShaderTier": "Mesh shaders",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.WorkGraphsTier": "Work graphs",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS7.SamplerFeedbackTier": "Sampler feedback",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.ExecuteIndirectTier": "Execute indirect",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ConservativeRasterizationTier": "Conservative rasterization",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS16.GPUUploadHeapSupported": "GPU upload heaps",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS12.EnhancedBarriersSupported": "Enhanced barriers",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.VariableShadingRateTier": "Variable-rate shading",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.AdditionalShadingRatesSupported": "Additional shading rates",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.ShadingRateImageTileSize": "Shading-rate image tile size",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.PerPrimitiveShadingRateSupportedWithViewportIndexing": "Per-primitive shading rate with viewport indexing",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS10.VariableRateShadingSumCombinerSupported": "VRS sum combiner",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS10.MeshShaderPerPrimitiveShadingRateSupported": "Mesh shader per-primitive shading rate",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.BarycentricsSupported": "Barycentrics",
    "Table_R9G9B9E5_RTV_UAV": "R9G9B9E5 RTV/UAV support",
    "Table_R9G9B9E5_Display": "R9G9B9E5 Display support",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.WaveMMATier": "WaveMMA (wave_matrix)",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveLaneCountMin": "Wave lane count min",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveLaneCountMax": "Wave lane count max",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS14.WriteableMSAATexturesSupported": "Writeable MSAA textures",
    "D3D12_FEATURE_DATA_GPU_VIRTUAL_ADDRESS_SUPPORT.MaxGPUVirtualAddressBitsPerResource": "Per-resource virtual addressing",
    "D3D12_FEATURE_DATA_GPU_VIRTUAL_ADDRESS_SUPPORT.MaxGPUVirtualAddressBitsPerProcess": "Per-process virtual addressing",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS5.RenderPassesTier": "Render passes",
    "D3D12_FEATURE_DATA_ARCHITECTURE1.TileBasedRenderer": "Tile-based renderer", // relevant to render passes
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceHeapTier": "Resource heap",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceBindingTier": "Resource binding",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.TiledResourcesTier": "Tiled resources",
    // This is supposed to mean that tier 3 is only supported for SRVs, but unfortunately is always true when fully-featured tier 3 is reported, we fix that up later
    "D3D12_FEATURE_DATA_D3D12_OPTIONS5.SRVOnlyTiledResourceTier3": "SRV-only tiled resource tier 3",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.MinPrecisionSupport": "Min-precision support",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS4.Native16BitShaderOpsSupported": "Native 16-bit shader ops",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.DoublePrecisionFloatShaderOps": "64-bit float shader ops",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.Int64ShaderOps": "64-bit int shader ops",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.AtomicInt64OnTypedResourceSupported": "64-bit int atomics on typed resource",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.AtomicInt64OnGroupSharedSupported": "64-bit int atomics on group shared",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS11.AtomicInt64OnDescriptorHeapResourceSupported": "64-bit int atomics on descriptor heap resources",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.DerivativesInMeshAndAmplificationShadersSupported": "Derivatives in mesh and amplification shaders",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.BackgroundProcessingSupported": "Background processing",
    "D3D12_FEATURE_DATA_BYTECODE_BYPASS_HASH_SUPPORTED.Supported": "Bytecode bypass hash",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.MaxSamplerDescriptorHeapSize": "Max sampler heap size",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.MaxSamplerDescriptorHeapSizeWithStaticSamplers": "Max sampler heap size with static samplers",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.MaxViewDescriptorHeapSize": "Max view descriptor heap size",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS8.UnalignedBlockTexturesSupported": "Unaligned block textures",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS12.MSPrimitivesPipelineStatisticIncludesCulledPrimitives": "MSPrimitives pipeline statistic includes culled primitives",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS12.RelaxedFormatCastingSupported": "Relaxed format casting",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.PSSpecifiedStencilRefSupported": "PS-specified StencilRef",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS2.ProgrammableSamplePositionsTier": "Programmable sample positions",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.AlphaBlendFactorSupported": "Alpha blend factor",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS14.IndependentFrontAndBackStencilRefMaskSupported": "Independent front & back StencilRef mask",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS17.NonNormalizedCoordinateSamplersSupported": "Non-normalized coordinate samplers",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.ViewInstancingTier": "View instancing",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.SupportedSampleCountsWithNoOutputs": "MSAA sample counts with no outputs",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.SampleCmpGradientAndBiasSupported": "SampleCmp gradient and bias",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.ExtendedCommandInfoSupported": "Extended command info",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ROVsSupported": "Rasterizer-ordered views",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS2.DepthBoundsTestSupported": "Depth-bounds test",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.CopyQueueTimestampQueriesSupported": "Copy queue timestamp queries",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.WriteBufferImmediateSupportFlags": "WriteBufferImmediate command list support",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.MeshShaderSupportsFullRangeRenderTargetArrayIndex": "Mesh shader full range RT array index",    
    // VulkanOn12 compatibility stuff, see https://microsoft.github.io/DirectX-Specs/d3d/VulkanOn12.html
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.UnrestrictedBufferTextureCopyPitchSupported": "Unrestricted buffer-texture copy pitch",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.UnrestrictedVertexElementAlignmentSupported": "Unrestricted vertex element alignment",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.InvertedViewportHeightFlipsYSupported": "Inverted viewport height flips Y",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.InvertedViewportDepthFlipsZSupported": "Inverted viewport depth flips Z",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.TextureCopyBetweenDimensionsSupported": "Texture copy between dimensions",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS14.AdvancedTextureOpsSupported": "Advanced texture ops",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS15.TriangleFanSupported": "Triangle fans",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS15.DynamicIndexBufferStripCutSupported": "Dynamic index buffer strip cut",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS16.DynamicDepthBiasSupported": "Dynamic depth bias",

    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.MismatchingOutputDimensionsSupported": "Mismatching output dimensions",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.PointSamplingAddressesNeverRoundUp": "Point sampling addresses never round up",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.NarrowQuadrilateralLinesSupported": "Narrow quadrilateral lines",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.AnisoFilterWithPointMipSupported": "Aniso filter with point mip",
    "D3D12_FEATURE_DATA_ARCHITECTURE1.IsolatedMMU": "Isolated MMU",
    "D3D12_FEATURE_DATA_SERIALIZATION.HeapSerializationTier": "Heap serialization",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.StandardSwizzle64KBSupported": "64KB standard swizzle textures",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.CrossAdapterRowMajorTextureSupported": "Cross-adapter row-major textures",

    // Features that are consistent across all GPUs of last 10 years
    "D3D12_FEATURE_DATA_CROSS_NODE.SharingTier": "Cross-node sharing",
    "D3D12_FEATURE_DATA_CROSS_NODE.AtomicShaderInstructions": "Cross-node atomics",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveOps": "Wave ops",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.OutputMergerLogicOp": "Output merger logic ops",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.CastingFullyTypedFormatSupported": "Casting fully typed formats",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.TypedUAVLoadAdditionalFormats": "Typed UAV loads for additional formats",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.VPAndRTArrayIndexFromAnyShaderFeedingRasterizerSupportedWithoutGSEmulation": "VP & RT array index without GS emulation",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS4.MSAA64KBAlignedTextureSupported": "64KB-aligned MSAA textures",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS4.SharedResourceCompatibilityTier": "Shared resources compatibility",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.MeshShaderPipelineStatsSupported": "Mesh shader pipeline stats",
    
    // Features that seem to only be used for debugging
    "D3D12_FEATURE_DATA_EXISTING_HEAPS.Supported": "Heaps from existing memory",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS20.RecreateAtTier": "Recreate resource at pointer",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS20.ComputeOnlyWriteWatchSupported": "Compute-only write watch",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.ComputeOnlyCustomHeapSupported": "Compute-only custom heap",

    // Things that literally can not be unsupported given new enough Agility SDK/OS
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.RasterizerDesc2Supported": "RASTERIZER_DESC2 supported",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS18.RenderPassesValid" : "Render passes valid",
    "D3D12_FEATURE_DATA_ROOT_SIGNATURE.HighestVersion": "Root signature version",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.ExpandedComputeResourceStates" : "Expanded compute resource states",

    // Not in retail yet
    //"D3D12_FEATURE_DATA_D3D12_OPTIONS22.TightAlignmentSupported": "Tight alignment",

    // Irrelevant for GPUs, all GPUs support these features
    //"D3D12_FEATURE_DATA_PREDICATION.Supported": "Predication",
    //"D3D12_FEATURE_DATA_HARDWARE_COPY.Supported": "Hardware copy",

    // Non arch specific features
    //"D3D12_FEATURE_DATA_D3D12_OPTIONS.MaxGPUVirtualAddressBitsPerResource": "Per-resource virtual addressing", // see D3D12_FEATURE_DATA_GPU_VIRTUAL_ADDRESS_SUPPORT
    //"D3D12_FEATURE_DATA_D3D12_OPTIONS.CrossNodeSharingTier": "Cross node sharing", // see D3D12_FEATURE_DATA_CROSS_NODE.SharingTier
    //"D3D12_FEATURE_DATA_ARCHITECTURE1.NodeIndex": "Node index", // not useful
    //"D3D12_FEATURE_DATA_ARCHITECTURE1.UMA": "Unified memory architecture (UMA)", // iGPU and dGPU can be the same architecture, so this is not useful
    //"D3D12_FEATURE_DATA_ARCHITECTURE1.CacheCoherentUMA": "Cache-coherent UMA",
    //"D3D12_FEATURE_DATA_SHADER_CACHE.SupportFlags" : "Shader cache support", // too long for table and probably uninteresting
    //"D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_NORMAL.PriorityForTypeIsSupported", // TODO: if we want to report this, it should be handled like a bit flag
    //"D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_HIGH.PriorityForTypeIsSupported",
    //"D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported",
    //"D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_NORMAL.PriorityForTypeIsSupported",
    //"D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_HIGH.PriorityForTypeIsSupported",
    //"D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported",
    //"D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_NORMAL.PriorityForTypeIsSupported",
    //"D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_HIGH.PriorityForTypeIsSupported",
    //"D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported",
    //"D3D12_FEATURE_DATA_D3D12_OPTIONS_EXPERIMENTAL.WorkGraphsTier" : "Work graphs", // should use OPTIONS21 instead, but for some reports this is the right one...
    //"D3D12_FEATURE_DATA_APPLICATION_SPECIFIC_DRIVER_STATE.Supported": "App specific driver state", // Preview agility SDK specific. Not using preview reports for now
    //"D3D12_FEATURE_DATA_D3D12_OPTIONS1.TotalLaneCount": "Total lane count", // not arch specific
    //"D3D12_FEATURE_DATA_D3D12_OPTIONS17.ManualWriteTrackingResourceSupported": "Manual write tracking", // PIX tooling stuff
    //"D3D12_FEATURE_DATA_D3D12_OPTIONS18.RenderPassesValid" : "Render passes valid", // this essentially indicates whether render passes in the D3D runtime actually work
};

export const TableBitFlagsMappings =
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
    },
}

export const TableEnumMappings =
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
        "11": "Tier 1.1"
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

    "D3D12_FEATURE_DATA_D3D12_OPTIONS.DoublePrecisionFloatShaderOps": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.OutputMergerLogicOp": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.PSSpecifiedStencilRefSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.TypedUAVLoadAdditionalFormats": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ROVsSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.StandardSwizzle64KBSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.CrossAdapterRowMajorTextureSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.VPAndRTArrayIndexFromAnyShaderFeedingRasterizerSupportedWithoutGSEmulation": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_ARCHITECTURE1.TileBasedRenderer": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_ARCHITECTURE1.UMA": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_ARCHITECTURE1.CacheCoherentUMA": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_ARCHITECTURE1.IsolatedMMU": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_NORMAL.PriorityForTypeIsSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_HIGH.PriorityForTypeIsSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_NORMAL.PriorityForTypeIsSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_HIGH.PriorityForTypeIsSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_NORMAL.PriorityForTypeIsSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_HIGH.PriorityForTypeIsSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_CROSS_NODE.AtomicShaderInstructions": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_PREDICATION.Supported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_HARDWARE_COPY.Supported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_APPLICATION_SPECIFIC_DRIVER_STATE.Supported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveOps": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.ExpandedComputeResourceStates": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.Int64ShaderOps": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS2.DepthBoundsTestSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.CopyQueueTimestampQueriesSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.CastingFullyTypedFormatSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.BarycentricsSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_EXISTING_HEAPS.Supported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS4.MSAA64KBAlignedTextureSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS4.Native16BitShaderOpsSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS5.SRVOnlyTiledResourceTier3": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.AdditionalShadingRatesSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.PerPrimitiveShadingRateSupportedWithViewportIndexing": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.BackgroundProcessingSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS8.UnalignedBlockTexturesSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.MeshShaderPipelineStatsSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.MeshShaderSupportsFullRangeRenderTargetArrayIndex": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.AtomicInt64OnTypedResourceSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.AtomicInt64OnGroupSharedSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.DerivativesInMeshAndAmplificationShadersSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS10.VariableRateShadingSumCombinerSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS10.MeshShaderPerPrimitiveShadingRateSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS11.AtomicInt64OnDescriptorHeapResourceSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS12.EnhancedBarriersSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS12.RelaxedFormatCastingSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.UnrestrictedBufferTextureCopyPitchSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.UnrestrictedVertexElementAlignmentSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.InvertedViewportHeightFlipsYSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.InvertedViewportDepthFlipsZSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.TextureCopyBetweenDimensionsSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.AlphaBlendFactorSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS14.AdvancedTextureOpsSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS14.WriteableMSAATexturesSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS14.IndependentFrontAndBackStencilRefMaskSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS15.TriangleFanSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS15.DynamicIndexBufferStripCutSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS16.DynamicDepthBiasSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS16.GPUUploadHeapSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS17.NonNormalizedCoordinateSamplersSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS17.ManualWriteTrackingResourceSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS18.RenderPassesValid": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.MismatchingOutputDimensionsSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.PointSamplingAddressesNeverRoundUp": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.RasterizerDesc2Supported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.NarrowQuadrilateralLinesSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.AnisoFilterWithPointMipSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.ComputeOnlyCustomHeapSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS20.ComputeOnlyWriteWatchSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.SampleCmpGradientAndBiasSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.ExtendedCommandInfoSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS22.TightAlignmentSupported": TableTrueFalseMapping,
    "D3D12_FEATURE_DATA_BYTECODE_BYPASS_HASH_SUPPORTED.Supported": TableTrueFalseMapping,
}

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