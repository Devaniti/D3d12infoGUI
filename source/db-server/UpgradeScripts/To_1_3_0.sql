CREATE TABLE tmp(
    "ID" INTEGER PRIMARY KEY, -- This automatically becomes an alias for rowid in sqlite
    "Header.Program" TEXT NOT NULL,
    "Header.Version" TEXT NOT NULL,
    "Header.Build Date" TEXT NOT NULL,
    "Header.Configuration" TEXT NOT NULL,
    "Header.Configuration bits" TEXT NOT NULL,
    "Header.Using preview Agility SDK" INT NOT NULL,
    "Header.D3D12_SDK_VERSION" INT NOT NULL,
    "Header.NvAPI compiled version" TEXT NOT NULL,
    "Header.NvAPI_GetInterfaceVersionString" TEXT,
    "Header.AMD_AGS_VERSION" TEXT NOT NULL,
    "Header.agsGetVersionNumber" INT,
    "Header.Intel GPU Detect compiled version" TEXT NOT NULL,
    "SystemInfo.OS Info.Windows version" TEXT NOT NULL,
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.driverVersion" INT,
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.szBuildBranch" TEXT,
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsDCHDriver" INT,
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIAStudioPackage" INT,
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIAGameReadyPackage" INT,
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIARTXProductionBranchPackage" INT,
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIARTXNewFeatureBranchPackage" INT,
    "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.szBuildBaseBranch" TEXT,
    "SystemInfo.AGSGPUInfo.driverVersion" TEXT,
    "SystemInfo.AGSGPUInfo.radeonSoftwareVersion" TEXT,
    "SystemInfo.D3D12EnableExperimentalFeatures" TEXT,
    "DXGI_ADAPTER_DESC3.Description" TEXT NOT NULL,
    "DXGI_ADAPTER_DESC3.VendorId" INT NOT NULL,
    "DXGI_ADAPTER_DESC3.DeviceId" INT NOT NULL,
    "DXGI_ADAPTER_DESC3.SubSysId" INT NOT NULL,
    "DXGI_ADAPTER_DESC3.Revision" INT NOT NULL,
    "DXGI_ADAPTER_DESC3.DedicatedVideoMemory" INT NOT NULL,
    "CheckInterfaceSupport.UMDVersion" INT NOT NULL,
    "SystemInfo.DXGI_FEATURE.DXGI_FEATURE_PRESENT_ALLOW_TEARING" INT NOT NULL,
    "DXGI_ADAPTER_DESC3.DedicatedSystemMemory" INT NOT NULL,
    "DXGI_ADAPTER_DESC3.SharedSystemMemory" INT NOT NULL,
    "DXGI_ADAPTER_DESC3.GraphicsPreemptionGranularity" INT NOT NULL,
    "DXGI_ADAPTER_DESC3.ComputePreemptionGranularity" INT NOT NULL,
    "DXGI_ADAPTER_DESC3.Flags" INT NOT NULL,
    "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_LOCAL].Budget" INT NOT NULL,
    "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_LOCAL].AvailableForReservation" INT NOT NULL,
    "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_NON_LOCAL].Budget" INT NOT NULL,
    "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_NON_LOCAL].AvailableForReservation" INT NOT NULL,
    "GetDescriptorHandleIncrementSize.D3D12_DESCRIPTOR_HEAP_TYPE_CBV_SRV_UAV" INT NOT NULL,
    "GetDescriptorHandleIncrementSize.D3D12_DESCRIPTOR_HEAP_TYPE_SAMPLER" INT NOT NULL,
    "GetDescriptorHandleIncrementSize.D3D12_DESCRIPTOR_HEAP_TYPE_RTV" INT NOT NULL,
    "GetDescriptorHandleIncrementSize.D3D12_DESCRIPTOR_HEAP_TYPE_DSV" INT NOT NULL,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetSystemType" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetFullName" TEXT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pDeviceID" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pSubSystemId" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pRevisionId" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pExtDeviceId" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetGPUType" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetBusType" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetVbiosRevision" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetVbiosOEMRevision" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetVbiosVersionString" TEXT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetPhysicalFrameBufferSize" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetVirtualFrameBufferSize" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::implementation_id" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::revision_id" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetVRReadyData - NV_GPU_VR_READY::isVRReady" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_QueryIlluminationSupport(NV_GPU_IA_LOGO_BRIGHTNESS)" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_QueryIlluminationSupport(NV_GPU_IA_SLI_BRIGHTNESS)" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_QueryWorkstationFeatureSupport(NV_GPU_WORKSTATION_FEATURE_TYPE_NVIDIA_RTX_VR_READY)" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_QueryWorkstationFeatureSupport(NV_GPU_WORKSTATION_FEATURE_TYPE_PROVIZ)" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemory" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::availableDedicatedVideoMemory" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::systemVideoMemory" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::sharedSystemMemory" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::curAvailableDedicatedVideoMemory" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryEvictionsSize" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryEvictionCount" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryPromotionsSize" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryPromotionCount" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetShaderSubPipeCount" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetGpuCoreCount" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::isSupported" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::configurationOptions" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::isEnabled" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetRamBusWidth" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetGPUInfo - NV_GPU_INFO::bIsExternalGpu" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetGPUInfo - NV_GPU_INFO::rayTracingCores" INT,
    "NvPhysicalGpuHandle.NvAPI_GPU_GetGPUInfo - NV_GPU_INFO::tensorCores" INT,
    "AGSDeviceInfo.adapterString" TEXT,
    "AGSDeviceInfo.asicFamily" INT,
    "AGSDeviceInfo.isAPU" INT,
    "AGSDeviceInfo.isExternal" INT,
    "AGSDeviceInfo.vendorId" INT,
    "AGSDeviceInfo.deviceId" INT,
    "AGSDeviceInfo.revisionId" INT,
    "AGSDeviceInfo.numCUs" INT,
    "AGSDeviceInfo.numWGPs" INT,
    "AGSDeviceInfo.numROPs" INT,
    "AGSDeviceInfo.coreClock" INT,
    "AGSDeviceInfo.memoryClock" INT,
    "AGSDeviceInfo.memoryBandwidth" INT,
    "AGSDeviceInfo.teraFlops" REAL,
    "AGSDeviceInfo.localMemoryInBytes" INT,
    "AGSDeviceInfo.sharedMemoryInBytes" INT,
    "VkPhysicalDeviceProperties.apiVersion" TEXT,
    "VkPhysicalDeviceProperties.driverVersion" INT,
    "VkPhysicalDeviceProperties.vendorID" INT,
    "VkPhysicalDeviceProperties.deviceID" INT,
    "VkPhysicalDeviceProperties.deviceType" INT,
    "VkPhysicalDeviceProperties.deviceName" TEXT,
    "VkPhysicalDeviceVulkan12Properties.driverID" INT,
    "VkPhysicalDeviceVulkan12Properties.driverName" TEXT,
    "VkPhysicalDeviceVulkan12Properties.driverInfo" TEXT,
    "AGSDX12ReturnedParams::ExtensionsSupported.intrinsics16" INT,
    "AGSDX12ReturnedParams::ExtensionsSupported.intrinsics17" INT,
    "AGSDX12ReturnedParams::ExtensionsSupported.userMarkers" INT,
    "AGSDX12ReturnedParams::ExtensionsSupported.appRegistration" INT,
    "AGSDX12ReturnedParams::ExtensionsSupported.UAVBindSlot" INT,
    "AGSDX12ReturnedParams::ExtensionsSupported.intrinsics19" INT,
    "AGSDX12ReturnedParams::ExtensionsSupported.baseVertex" INT,
    "AGSDX12ReturnedParams::ExtensionsSupported.baseInstance" INT,
    "AGSDX12ReturnedParams::ExtensionsSupported.getWaveSize" INT,
    "AGSDX12ReturnedParams::ExtensionsSupported.floatConversion" INT,
    "AGSDX12ReturnedParams::ExtensionsSupported.readLaneAt" INT,
    "AGSDX12ReturnedParams::ExtensionsSupported.rayHitToken" INT,
    "AGSDX12ReturnedParams::ExtensionsSupported.shaderClock" INT,
    "Intel GPUDetect::GPUData.VendorId" INT,
    "Intel GPUDetect::GPUData.deviceID" INT,
    "Intel GPUDetect::GPUData.isUMAArchitecture" INT,
    "Intel GPUDetect::GPUData.videoMemory" INT,
    "Intel GPUDetect::GPUData.description" TEXT,
    "Intel GPUDetect::GPUData.extensionVersion" INT,
    "Intel GPUDetect::GPUData.intelExtensionAvailability" INT,
    "Intel GPUDetect::GPUData.dxDriverVersion" TEXT,
    "Intel GPUDetect::GPUData.driverInfo.driverReleaseRevision" INT,
    "Intel GPUDetect::GPUData.driverInfo.driverBuildNumber" INT,
    "Intel GPUDetect::GPUData.DefaultFidelityPreset" INT,
    "Intel GPUDetect::GPUData.GPUArchitecture" TEXT,
    "Intel GPUDetect::GPUData.GraphicsGeneration" TEXT,
    "Intel GPUDetect::GPUData.euCount" INT,
    "Intel GPUDetect::GPUData.packageTDP" INT,
    "Intel GPUDetect::GPUData.maxFillRate" INT,
    "Intel GPUDetect::GPUData.maxFrequency" INT,
    "Intel GPUDetect::GPUData.minFrequency" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.DoublePrecisionFloatShaderOps" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.OutputMergerLogicOp" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.MinPrecisionSupport" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.TiledResourcesTier" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceBindingTier" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.PSSpecifiedStencilRefSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.TypedUAVLoadAdditionalFormats" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ROVsSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ConservativeRasterizationTier" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.MaxGPUVirtualAddressBitsPerResource" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.StandardSwizzle64KBSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.CrossNodeSharingTier" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.CrossAdapterRowMajorTextureSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.VPAndRTArrayIndexFromAnyShaderFeedingRasterizerSupportedWithoutGSEmulation" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceHeapTier" INT,
    "D3D12_FEATURE_DATA_GPU_VIRTUAL_ADDRESS_SUPPORT.MaxGPUVirtualAddressBitsPerResource" INT, 
    "D3D12_FEATURE_DATA_GPU_VIRTUAL_ADDRESS_SUPPORT.MaxGPUVirtualAddressBitsPerProcess" INT,
    "D3D12_FEATURE_DATA_SHADER_MODEL.HighestShaderModel" INT,
    "D3D12_FEATURE_DATA_ROOT_SIGNATURE.HighestVersion" INT,
    "D3D12_FEATURE_DATA_ARCHITECTURE1.TileBasedRenderer" INT,
    "D3D12_FEATURE_DATA_ARCHITECTURE1.UMA" INT,
    "D3D12_FEATURE_DATA_ARCHITECTURE1.CacheCoherentUMA" INT,
    "D3D12_FEATURE_DATA_ARCHITECTURE1.IsolatedMMU" INT,
    "D3D12_FEATURE_DATA_FEATURE_LEVELS.MaxSupportedFeatureLevel" INT,
    "D3D12_FEATURE_DATA_SHADER_CACHE.SupportFlags" INT,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_NORMAL.PriorityForTypeIsSupported" INT,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_HIGH.PriorityForTypeIsSupported" INT,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported" INT,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_NORMAL.PriorityForTypeIsSupported" INT,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_HIGH.PriorityForTypeIsSupported" INT,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported" INT,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_NORMAL.PriorityForTypeIsSupported" INT,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_HIGH.PriorityForTypeIsSupported" INT,
    "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported" INT,
    "D3D12_FEATURE_DATA_SERIALIZATION.HeapSerializationTier" INT,
    "D3D12_FEATURE_DATA_CROSS_NODE.SharingTier" INT,
    "D3D12_FEATURE_DATA_CROSS_NODE.AtomicShaderInstructions" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS_EXPERIMENTAL.WorkGraphsTier" INT,
    "D3D12_FEATURE_DATA_PREDICATION.Supported" INT,
    "D3D12_FEATURE_DATA_HARDWARE_COPY.Supported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveOps" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveLaneCountMin" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveLaneCountMax" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.TotalLaneCount" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.ExpandedComputeResourceStates" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS1.Int64ShaderOps" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS2.DepthBoundsTestSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS2.ProgrammableSamplePositionsTier" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.CopyQueueTimestampQueriesSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.CastingFullyTypedFormatSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.WriteBufferImmediateSupportFlags" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.ViewInstancingTier" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS3.BarycentricsSupported" INT,
    "D3D12_FEATURE_DATA_EXISTING_HEAPS.Supported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS4.MSAA64KBAlignedTextureSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS4.SharedResourceCompatibilityTier" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS4.Native16BitShaderOpsSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS5.SRVOnlyTiledResourceTier3" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS5.RenderPassesTier" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS5.RaytracingTier" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.AdditionalShadingRatesSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.PerPrimitiveShadingRateSupportedWithViewportIndexing" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.VariableShadingRateTier" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.ShadingRateImageTileSize" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS6.BackgroundProcessingSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS7.MeshShaderTier" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS7.SamplerFeedbackTier" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS8.UnalignedBlockTexturesSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.MeshShaderPipelineStatsSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.MeshShaderSupportsFullRangeRenderTargetArrayIndex" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.AtomicInt64OnTypedResourceSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.AtomicInt64OnGroupSharedSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.DerivativesInMeshAndAmplificationShadersSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS9.WaveMMATier" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS10.VariableRateShadingSumCombinerSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS10.MeshShaderPerPrimitiveShadingRateSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS11.AtomicInt64OnDescriptorHeapResourceSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS12.MSPrimitivesPipelineStatisticIncludesCulledPrimitives" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS12.EnhancedBarriersSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS12.RelaxedFormatCastingSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.UnrestrictedBufferTextureCopyPitchSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.UnrestrictedVertexElementAlignmentSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.InvertedViewportHeightFlipsYSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.InvertedViewportDepthFlipsZSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.TextureCopyBetweenDimensionsSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS13.AlphaBlendFactorSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS14.AdvancedTextureOpsSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS14.WriteableMSAATexturesSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS14.IndependentFrontAndBackStencilRefMaskSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS15.TriangleFanSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS15.DynamicIndexBufferStripCutSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS16.DynamicDepthBiasSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS16.GPUUploadHeapSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS17.NonNormalizedCoordinateSamplersSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS17.ManualWriteTrackingResourceSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS18.RenderPassesValid" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.MismatchingOutputDimensionsSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.IndependentFrontAndBackStencilRefMaskSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.SupportedSampleCountsWithNoOutputs" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.PointSamplingAddressesNeverRoundUp" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.RasterizerDesc2Supported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.NarrowQuadrilateralLinesSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.AnisoFilterWithPointMipSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.MaxSamplerDescriptorHeapSize" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.MaxSamplerDescriptorHeapSizeWithStaticSamplers" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.MaxViewDescriptorHeapSize" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS19.ComputeOnlyCustomHeapSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS20.ComputeOnlyWriteWatchSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS20.RecreateAtTier" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.WorkGraphsTier" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.ExecuteIndirectTier" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.SampleCmpGradientAndBiasSupported" INT,
    "D3D12_FEATURE_DATA_D3D12_OPTIONS21.ExtendedCommandInfoSupported" INT,
    "NvAPI_D3D12_QueryCpuVisibleVidmem.pTotalBytes" INT,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_SHFL" INT,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_SHFL_UP" INT,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_SHFL_DOWN" INT,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_SHFL_XOR" INT,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_VOTE_ALL" INT,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_VOTE_ANY" INT,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_VOTE_BALLOT" INT,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_GET_LANE_ID" INT,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_FP16_ATOMIC" INT,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_FP32_ATOMIC" INT,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_UINT64_ATOMIC" INT,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_GET_SHADING_RATE" INT,
    "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_VPRS_EVAL_ATTRIB_AT_SAMPLE" INT,
    "NvAPI_D3D12_GetOptimalThreadCountForMesh.pThreadCount" INT,
    "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_THREAD_REORDERING" INT,
    "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_OPACITY_MICROMAP" INT,
    "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_DISPLACEMENT_MICROMAP" INT,
    "NvAPI_D3D12_QueryWorkstationFeatureProperties.NV_D3D12_WORKSTATION_FEATURE_TYPE_PRESENT_BARRIER - supported" INT,
    "NvAPI_D3D12_QueryWorkstationFeatureProperties.NV_D3D12_WORKSTATION_FEATURE_TYPE_RDMA_BAR1_SUPPORT - supported" INT,
    "NvAPI_D3D12_QueryWorkstationFeatureProperties.NV_D3D12_WORKSTATION_FEATURE_TYPE_RDMA_BAR1_SUPPORT - rdmaHeapSize" INT,
    "NvAPI_D3D12_GetNeedsAppFPBlendClamping.pAppClampNeeded" INT
) STRICT;

INSERT INTO tmp SELECT * FROM Submissions;

DROP INDEX UniqueSubmission;

DROP TABLE Submissions;
ALTER TABLE tmp RENAME TO Submissions;

CREATE UNIQUE INDEX UniqueSubmission on Submissions (
    "Header.Program",
    "Header.Version",
    "Header.Configuration bits",
    "Header.Using preview Agility SDK",
    "Header.D3D12_SDK_VERSION",
    "Header.NvAPI compiled version",
    "Header.AMD_AGS_VERSION",
    "Header.Intel GPU Detect compiled version",
    "SystemInfo.OS Info.Windows version",
    "SystemInfo.D3D12EnableExperimentalFeatures",
    "DXGI_ADAPTER_DESC3.Description",
    "DXGI_ADAPTER_DESC3.VendorId",
    "DXGI_ADAPTER_DESC3.DeviceId",
    "DXGI_ADAPTER_DESC3.SubSysId",
    "DXGI_ADAPTER_DESC3.Revision",
    "DXGI_ADAPTER_DESC3.DedicatedVideoMemory",
    "CheckInterfaceSupport.UMDVersion"
);

PRAGMA user_version=4;