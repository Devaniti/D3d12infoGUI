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
