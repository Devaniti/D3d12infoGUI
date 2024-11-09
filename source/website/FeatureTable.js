const TableTrueFalseMapping =
{
    "0": "❌",
    "1": "✅"
}

// TODO: sort features by importance
// TODO: some things could be consolidated? e.g. D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY, WaveLaneCountMin/Max
const TableFeaturesShortNames = {
    "TableNumReports": "Number of reports",
    "TableLatestReportDate": "Latest report date",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.DoublePrecisionFloatShaderOps": "FP64 shader ops",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.OutputMergerLogicOp": "Output merger logic ops",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.MinPrecisionSupport": "Min-precision support",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.TiledResourcesTier": "Tiled resources",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceBindingTier": "Resource binding",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.PSSpecifiedStencilRefSupported": "PS-specified StencilRef",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.TypedUAVLoadAdditionalFormats": "Typed UAV loads for additional formats",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ROVsSupported": "Rasterizer-ordered views",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ConservativeRasterizationTier": "Conservative rasterization",
    //"D3D12_FEATURE_DATA_D3D12_OPTIONS.MaxGPUVirtualAddressBitsPerResource": "Per-resource virtual addressing", // see D3D12_FEATURE_DATA_GPU_VIRTUAL_ADDRESS_SUPPORT below
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.StandardSwizzle64KBSupported": "64KB standard swizzle textures",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.CrossNodeSharingTier": "Cross node sharing",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.CrossAdapterRowMajorTextureSupported": "Cross-adapter row-major textures",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.VPAndRTArrayIndexFromAnyShaderFeedingRasterizerSupportedWithoutGSEmulation": "VP & RT array index without GS emulation",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceHeapTier": "Resource heap",
    "D3D12_FEATURE_DATA_GPU_VIRTUAL_ADDRESS_SUPPORT.MaxGPUVirtualAddressBitsPerResource": "Per-resource virtual addressing",
    "D3D12_FEATURE_DATA_GPU_VIRTUAL_ADDRESS_SUPPORT.MaxGPUVirtualAddressBitsPerProcess": "Per-process virtual addressing",
    "D3D12_FEATURE_DATA_SHADER_MODEL.HighestShaderModel": "Shader model",
    "D3D12_FEATURE_DATA_ROOT_SIGNATURE.HighestVersion": "Root signature version",
    //"D3D12_FEATURE_DATA_ARCHITECTURE1.NodeIndex": "Node index", // not useful
    "D3D12_FEATURE_DATA_ARCHITECTURE1.TileBasedRenderer": "Tile-based renderer",
    //"D3D12_FEATURE_DATA_ARCHITECTURE1.UMA": "Unified memory architecture (UMA)", // iGPU and dGPU can be the same architecture, so this is not useful
    //"D3D12_FEATURE_DATA_ARCHITECTURE1.CacheCoherentUMA": "Cache-coherent UMA",
    "D3D12_FEATURE_DATA_ARCHITECTURE1.IsolatedMMU": "Isolated MMU",
    "D3D12_FEATURE_DATA_FEATURE_LEVELS.MaxSupportedFeatureLevel": "Feature level",
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
    "D3D12_FEATURE_DATA_SERIALIZATION.HeapSerializationTier": "Heap serialization",
    "D3D12_FEATURE_DATA_CROSS_NODE.SharingTier": "Cross-node sharing",
    "D3D12_FEATURE_DATA_CROSS_NODE.AtomicShaderInstructions": "Cross-node atomics",
    //"D3D12_FEATURE_DATA_D3D12_OPTIONS_EXPERIMENTAL.WorkGraphsTier" : "Work graphs", // should use OPTIONS21 instead, but for some reports this is the right one...
    "D3D12_FEATURE_DATA_PREDICATION.Supported": "Predication",
    "D3D12_FEATURE_DATA_HARDWARE_COPY.Supported": "Hardware copy",
    //"D3D12_FEATURE_DATA_APPLICATION_SPECIFIC_DRIVER_STATE.Supported": "App specific driver state", // Preview agility SDK specific. Not using preview reports for now
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveOps": "Wave ops",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveLaneCountMin": "Wave lane count min",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveLaneCountMax": "Wave lane count max",
    //"D3D12_FEATURE_DATA_D3D12_OPTIONS1.TotalLaneCount": "Total lane count", // not arch specific
    //"D3D12_FEATURE_DATA_D3D12_OPTIONS1.ExpandedComputeResourceStates" : "Expanded compute resource states", // always true
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.Int64ShaderOps": "Int64 shader ops",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS2.DepthBoundsTestSupported": "Depth-bounds test",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS2.ProgrammableSamplePositionsTier": "Programmable sample positions",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.CopyQueueTimestampQueriesSupported": "Copy queue timestamp queries",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.CastingFullyTypedFormatSupported": "Casting fully typed formats",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.WriteBufferImmediateSupportFlags": "WriteBufferImmediate command list support",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.ViewInstancingTier": "View instancing",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.BarycentricsSupported": "Barycentrics",
    "D3D12_FEATURE_DATA_EXISTING_HEAPS.Supported": "Heaps from existing memory",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS4.MSAA64KBAlignedTextureSupported": "64KB-aligned MSAA textures",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS4.SharedResourceCompatibilityTier": "Shared resources compatibility",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS4.Native16BitShaderOpsSupported": "Native 16-bit shader ops",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS5.SRVOnlyTiledResourceTier3": "SRV-only tiled resource tier 3",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS5.RenderPassesTier": "Render passes",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS5.RaytracingTier": "Raytracing",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.AdditionalShadingRatesSupported": "Additional shading rates",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.PerPrimitiveShadingRateSupportedWithViewportIndexing": "Per-primitive shading rate with viewport indexing",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.VariableShadingRateTier": "Variable-rate shading",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.ShadingRateImageTileSize": "Shading-rate image tile size",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.BackgroundProcessingSupported": "Background processing",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS7.MeshShaderTier": "Mesh shaders",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS7.SamplerFeedbackTier": "Sampler feedback",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS8.UnalignedBlockTexturesSupported": "Unaligned block textures",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.MeshShaderPipelineStatsSupported": "Mesh shader pipeline stats",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.MeshShaderSupportsFullRangeRenderTargetArrayIndex": "Mesh shader full range RT array index",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.AtomicInt64OnTypedResourceSupported": "64-bit int atomics on typed resource",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.AtomicInt64OnGroupSharedSupported": "64-bit int atomics on group shared",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.DerivativesInMeshAndAmplificationShadersSupported": "Derivatives in mesh and amplification shaders",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.WaveMMATier": "WaveMMA (wave_matrix)",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS10.VariableRateShadingSumCombinerSupported": "VRS sum combiner",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS10.MeshShaderPerPrimitiveShadingRateSupported": "Mesh shader per-primitive shading rate",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS11.AtomicInt64OnDescriptorHeapResourceSupported": "64-bit int atomics on descriptor heap resources",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS12.MSPrimitivesPipelineStatisticIncludesCulledPrimitives": "MSPrimitives pipeline statistic includes culled primitives",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS12.EnhancedBarriersSupported": "Enhanced barriers",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS12.RelaxedFormatCastingSupported": "Relaxed format casting",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.UnrestrictedBufferTextureCopyPitchSupported": "Unrestricted buffer-texture copy pitch",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.UnrestrictedVertexElementAlignmentSupported": "Unrestricted vertex element alignment",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.InvertedViewportHeightFlipsYSupported": "Inverted viewport height flips Y",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.InvertedViewportDepthFlipsZSupported": "Inverted viewport depth flips Z",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.TextureCopyBetweenDimensionsSupported": "Texture copy between dimensions",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.AlphaBlendFactorSupported": "Alpha blend factor",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS14.AdvancedTextureOpsSupported": "Advanced texture ops",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS14.WriteableMSAATexturesSupported": "Writeable MSAA textures",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS14.IndependentFrontAndBackStencilRefMaskSupported": "Independent front & back StencilRef mask",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS15.TriangleFanSupported": "Triangle fans",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS15.DynamicIndexBufferStripCutSupported": "Dynamic index buffer strip cut",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS16.DynamicDepthBiasSupported": "Dynamic depth bias",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS16.GPUUploadHeapSupported": "GPU upload heaps",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS17.NonNormalizedCoordinateSamplersSupported": "Non-normalized coordinate samplers",
    //"D3D12_FEATURE_DATA_D3D12_OPTIONS17.ManualWriteTrackingResourceSupported": "Manual write tracking", // PIX tooling stuff
    //"D3D12_FEATURE_DATA_D3D12_OPTIONS18.RenderPassesValid" : "Render passes valid", // this essentially indicates whether render passes in the D3D runtime actually work
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.MismatchingOutputDimensionsSupported": "Mismatching output dimensions",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.SupportedSampleCountsWithNoOutputs": "MSAA sample counts with no outputs",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.PointSamplingAddressesNeverRoundUp": "Point sampling addresses never round up",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.RasterizerDesc2Supported": "RASTERIZER_DESC2 supported",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.NarrowQuadrilateralLinesSupported": "Narrow quadrilateral lines",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.AnisoFilterWithPointMipSupported": "Aniso filter with point mip",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.MaxSamplerDescriptorHeapSize": "Max sampler heap size",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.MaxSamplerDescriptorHeapSizeWithStaticSamplers": "Max sampler heap size with static samplers",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.MaxViewDescriptorHeapSize": "Max view descriptor heap size",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.ComputeOnlyCustomHeapSupported": "Compute-only custom heap",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS20.ComputeOnlyWriteWatchSupported": "Compute-only write watch",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS20.RecreateAtTier": "Recreate resource at pointer",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.WorkGraphsTier": "Work graphs",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.ExecuteIndirectTier": "Execute indirect",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.SampleCmpGradientAndBiasSupported": "SampleCmp gradient and bias",
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.ExtendedCommandInfoSupported": "Extended command info",
    // "D3D12_FEATURE_DATA_D3D12_OPTIONS22.TightAlignmentSupported": "Tight alignment", // Preview agility SDK specific. Not using preview reports for now
};

const TableBitFlagsMappings =
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

const TableEnumMappings =
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
        "0": "Tier 0",
        "10": "Tier 1.0"
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
        "10": "Tier 1"
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
        "10": "Tier 1.0"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS12.MSPrimitivesPipelineStatisticIncludesCulledPrimitives":
    {
        "-1": "❔",
        "0": "❌",
        "1": "✅"
    },
    "D3D12_FEATURE_DATA_D3D12_OPTIONS20.RecreateAtTier":
    {
        "0": "❌",
        "1": "Tier 1"
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
    "D3D12_FEATURE_DATA_D3D12_OPTIONS22.TightAlignmentSupported": TableTrueFalseMapping
}

function MakeHumanReadableForTable(property, value) {
    let effectiveProperty = RemoveArrayIndex(property)

    if (value == null) return "❔";

    if (effectiveProperty in TableEnumMappings) {
        return TableEnumMappings[effectiveProperty][value] ?? `❔(${value})`
    }

    if (effectiveProperty in TableBitFlagsMappings) {
        let result = ''
        let bitCount = 0
        for (let i = 1; i <= value; i = i << 1) {
            if (value & i) {
                bitCount++
                result += (TableBitFlagsMappings[effectiveProperty][i] ?? `❔(${i})`) + "\n"
            }
        }
        if (result == '') {
            result = TableBitFlagsMappings[effectiveProperty][0] ?? "❔"
        }
        else {
            result = result.substring(0, result.length - 1)
        }
        return result
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
                    return `❔ (${decodedValue})`
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
        // 64 bit encoded version
        case "CheckInterfaceSupport.UMDVersion":
            {
                let a = BigInt(value)
                return `${(a >> 48n) & 65535n}.${(a >> 32n) & 65535n}.${(a >> 16n) & 65535n}.${a & 65535n}`
            }
    }

    if (Array.isArray(value))
        return value.join(", ")

    return value
}


let ArchsPerVendor = {
    Microsoft: new Set(),
    AMD: new Set(),
    Nvidia: new Set(),
    Intel: new Set(),
    Qualcomm: new Set(),
};
let ReportsPerArch = new Map();
let UndefinedReports = [];

function ClearTableReportData() {
    ArchsPerVendor.Microsoft.clear();
    ArchsPerVendor.AMD.clear();
    ArchsPerVendor.Nvidia.clear();
    ArchsPerVendor.Intel.clear();
    ArchsPerVendor.Qualcomm.clear();
    ReportsPerArch.clear();
    UndefinedReports = [];
}

function SpliceReportByArchAndVendor(reportContainer)
{
    let report = reportContainer.GetOriginalReport();

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
        ];
        // TODO: unknown asic reports could be assigned by device ID lists
        if (report.AGSDeviceInfo.asicFamily != 0) {
            arch = AMDArchitectures[report.AGSDeviceInfo.asicFamily];

            // filter out RDNA2 iGPUs with 1 WGP because those don't support mesh shaders unlike all the others (TODO: should we handle this differently?)
            if (arch == "RDNA2" && report.AGSDeviceInfo.numWGPs == 1 && report.D3D12_FEATURE_DATA_D3D12_OPTIONS7.MeshShaderTier == 0)
                return;

            ArchsPerVendor.AMD.add(arch);
        }
    }
    else if (report["Intel GPUDetect::GPUData"]) {
        // NOTE: Intel has this handy table in case we ever need to match device IDs https://dgpu-docs.intel.com/devices/hardware-table.html
        // TODO: both GPUArchitecture and GraphicsGeneration are inconsistent, we need to make a manual table mapping everything together...
        arch = report["Intel GPUDetect::GPUData"].GPUArchitecture;
        if (arch == undefined && report.DXGI_ADAPTER_DESC3.Description == "Intel(R) UHD Graphics 630")
            arch = "Coffeelake";
        if (arch == "Unknown (37)" && report.DXGI_ADAPTER_DESC3.Description == "Intel(R) Iris(R) Xe Graphics") // integrated Xe-LP, Alder/Rocket Lake
            arch = "Xe-LP";
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
        };

        function GetKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
        }
        arch = GetKeyByValue(NvidiaArchitectures, report.NvPhysicalGpuHandle["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id"]);

        // filter variants except Maxwell, should have same D3D12 features (though not CUDA features)
        if (arch) {
            if (arch == "Kepler2" || arch == "Kepler1")
                arch = "Kepler";
            else if (arch == "Fermi1")
                arch = "Fermi"; // unconfirmed
            else if (arch == "Volta1")
                arch = "Volta"; // unconfirmed
        }

        ArchsPerVendor.Nvidia.add(arch ? arch : report.NvPhysicalGpuHandle["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id"].toString());
    }
    else if (MakeHumanReadableForTable("DXGI_ADAPTER_DESC3.VendorId", report.DXGI_ADAPTER_DESC3.VendorId).startsWith("Qualcomm")) {

        if (/Snapdragon\(R\) X (Plus)|(Elite) - X1.*/.test(report.DXGI_ADAPTER_DESC3.Description))
            arch = "X Elite";
        else if (report.DXGI_ADAPTER_DESC3.Description.includes("8cx"))
            arch = report.DXGI_ADAPTER_DESC3.Description.slice(report.DXGI_ADAPTER_DESC3.Description.search(/8cx.*/));

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
    }
}

function PrepareReportsForTable() {

    ClearTableReportData();

    for (let report of Reports) {
        if (!report.GetField("Header.Using preview Agility SDK"))
            SpliceReportByArchAndVendor(report);
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
    function DeviceIdCompare(a, b) {
        let ra = ReportsPerArch.get(a)[0];
        let na = Number(ra.DXGI_ADAPTER_DESC3.DeviceId);
        let rb = ReportsPerArch.get(b)[0];
        let nb = Number(rb.DXGI_ADAPTER_DESC3.DeviceId);
        return na - nb;
    }
    function AMDAsicFamilyCompare(a, b) {
        let ra = ReportsPerArch.get(a)[0];
        let na = Number(ra.AGSDeviceInfo.asicFamily);
        let rb = ReportsPerArch.get(b)[0];
        let nb = Number(rb.AGSDeviceInfo.asicFamily);
        return na - nb;
    }
    function NvidiaArchIdCompare(a, b) {
        let ra = ReportsPerArch.get(a)[0];
        let na = Number(ra.NvPhysicalGpuHandle["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id"]);
        let rb = ReportsPerArch.get(b)[0];
        let nb = Number(rb.NvPhysicalGpuHandle["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id"]);
        return na - nb;
    }
    function IntelCompare(a, b) {
        // NOTE: many of these are untested / not in the database yet
        // Also a lot are the same architecture or pretty much the same, Intel is horribly inconsistent
        const IntelArchList = ["Haswell", "Broadwell", "Skylake", "Apollolake", "Geminilake", "Kabylake",
            "Coffeelake", "Icelake", "Tigerlake LP", "Elkhartlake", "Jasperlake", "Rocketlake", "Alderlake",
            "Xe-LP", "Meteorlake", "Arrowlake", "Alchemist", "Lunarlake", "Battlemage", "Celestial", "Druid"];

        let na = IntelArchList.indexOf(a);
        let nb = IntelArchList.indexOf(b);
        if (na < 0 && nb < 0) {
            return DeviceIdCompare(a, b);
        }
        return na - nb;
    }
    SortSet(ArchsPerVendor.AMD, AMDAsicFamilyCompare);
    SortSet(ArchsPerVendor.Nvidia, NvidiaArchIdCompare);
    SortSet(ArchsPerVendor.Intel, IntelCompare);
    SortSet(ArchsPerVendor.Qualcomm, DeviceIdCompare);
}

function UpdateTable() {

    let table = document.getElementById("archtable");
    ClearElement(table);

    // construct table header with vendor name in the first row and arch name in the second row
    {
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

            let thVendor = document.createElement("th");
            thVendor.append(vendor);
            thVendor.className = vendor;
            thVendor.scope = "colgroup";
            thVendor.colSpan = archs.size;
            headerRowVendor.appendChild(thVendor);

            let colGroupVendor = document.createElement("colgroup");
            colGroupVendor.span = archs.size;
            table.appendChild(colGroupVendor);

            for (let a of archs) {
                let thArch = document.createElement("th");
                thArch.append(a);
                thArch.className = vendor;
                thArch.scope = "col";
                headerRowArch.appendChild(thArch);
            }
        }
               
        thead.appendChild(headerRowVendor);
        thead.appendChild(headerRowArch);
        table.appendChild(thead);
    }

    // construct table body with all the features
    {
        let tbody = document.createElement("tbody");

        for (let [featureName, featureShortName] of Object.entries(TableFeaturesShortNames)) {
            // TODO: add tooltips with the full D3D feature field name?
            let featureRow = document.createElement("tr");
            let featureHeader = document.createElement("th");
            featureHeader.append(TableShowAPIFeatureNames.checked ? featureName : featureShortName);
            featureHeader.scope = "row";
            featureRow.appendChild(featureHeader);
            // TODO: merge columns that are the same across GPUs for the same vendor? maybe a bit too much
            for (let [vendor, archs] of Object.entries(ArchsPerVendor)) {
                for (let archName of archs) {
                    if (featureName == "TableNumReports") { // hardcoded first row
                        let td = document.createElement("td");
                        td.append(ReportsPerArch.get(archName).length);
                        featureRow.appendChild(td);
                    }
                    else if (featureName == "TableLatestReportDate") { // hardcoded second row
                        let latestDate = Date.UTC(1970, 0);
                        for (let r of ReportsPerArch.get(archName)) {
                            let date = Date.parse(r.Header["Generated on"]);
                            if (date && latestDate < date) {
                                latestDate = date;
                            }
                        }
                        let td = document.createElement("td");
                        let dateString;
                        if (latestDate == Date.UTC(1970, 0)) {
                            dateString = "?";
                        }
                        else {
                            dateString = new Date(latestDate).toISOString();
                            dateString = dateString.substring(0, dateString.indexOf("T"))
                        }
                        td.append(dateString);
                        featureRow.appendChild(td);
                    }
                    else { // regular feature data
                        // TODO: report feature data more reliably, is this good enough?
                        // - we're currently searching the newest report again and again for every feature (doesn't seem to be a significant perf problem yet)
                        // - output something like "7/10" for boolean data?
                        // - enums could display highest value in any report
                        // - bisect by driver version?
                        // - how to handle preview vs non-preview features? sometimes the preview SDK does not have all the features of the non-preview SDK
                        let newestReport;
                        for (let r of ReportsPerArch.get(archName)) {
                            if (!newestReport)
                                newestReport = r;
                            else if (r.CheckInterfaceSupport.UMDVersion > newestReport.CheckInterfaceSupport.UMDVersion)
                                newestReport = r;
                        }

                        // NOTE: we need to get the matching ReportContainer that has all the fields mapped as strings
                        // TODO: could also redesign all of the code above to use ReportContainers, it's just slightly less nice to use
                        let newestReportContainer = Reports.find(r => r.GetField("ID") == newestReport.ID);
                        let td = document.createElement("td");

                        let featureValue = newestReportContainer.GetField(featureName);

                        // fix up reports with preview SDK that use the experimental options field instead of OPTIONS12 for work graphs
                        if (featureName == "D3D12_FEATURE_DATA_D3D12_OPTIONS21.WorkGraphsTier" && featureValue == undefined) {
                            featureValue = newestReportContainer.GetField("D3D12_FEATURE_DATA_D3D12_OPTIONS_EXPERIMENTAL.WorkGraphsTier");
                        }

                        td.append(MakeHumanReadableForTable(featureName, featureValue));
                        featureRow.appendChild(td);
                    }
                }
                tbody.appendChild(featureRow);
            }
        }
        table.appendChild(tbody);
    }
}