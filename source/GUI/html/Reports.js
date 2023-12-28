// Sample report for UI development
const reports = [{
    "Header": {
        "Program": "D3d12info",
        "Version": "2.2.0",
        "Build Date": "Dec 27 2023, 00:41:26",
        "Configuration": "Debug",
        "Configuration bits": "64-bit",
        "Generated on": "2023-12-28",
        "Using preview Agility SDK": false,
        "D3D12_SDK_VERSION": 611,
        "Intel GPU Detect compiled version": "2023-07-18"
    },
    "SystemInfo": {
        "OS Info": {
            "Windows version": "10.0.22631"
        },
        "System memory": {
            "GetPhysicallyInstalledSystemMemory": 67108864,
            "MEMORYSTATUSEX::ullTotalPhys": 68640800768,
            "MEMORYSTATUSEX::ullTotalPageFile": 78841348096,
            "MEMORYSTATUSEX::ullTotalVirtual": 140737488224256
        },
        "D3D12EnableExperimentalFeatures": [
            "D3D12ExperimentalShaderModels",
            "D3D12TiledResourceTier4"
        ]
    },
    "Adapters": [
        {
            "AdapterIndex": 0,
            "DXGI_ADAPTER_DESC3": {
                "Description": "NVIDIA GeForce RTX 3080 Ti",
                "VendorId": 4318,
                "DeviceId": 8712,
                "SubSysId": 570955113,
                "Revision": 161,
                "DedicatedVideoMemory": 12687769600,
                "DedicatedSystemMemory": 0,
                "SharedSystemMemory": 34320400384,
                "AdapterLuid": "00000000-176E11BD",
                "Flags": 44,
                "GraphicsPreemptionGranularity": 3,
                "ComputePreemptionGranularity": 1
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_LOCAL]": {
                "Budget": 11882463232,
                "AvailableForReservation": 6075449344
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_NON_LOCAL]": {
                "Budget": 33515094016,
                "AvailableForReservation": 16891764736
            },
            "UMDVersion": "31.0.15.4633",
            "VkPhysicalDeviceProperties": {
                "apiVersion": "1.3.260",
                "driverVersion": 2290630656,
                "vendorID": 4318,
                "deviceID": 8712,
                "deviceType": 2,
                "deviceName": "NVIDIA GeForce RTX 3080 Ti"
            },
            "VkPhysicalDeviceIDProperties": {
                "deviceUUID": "FC4F457CBA3A2DDEF06E6B6E0B6608D4",
                "driverUUID": "C2A04F03A27E5FB3A136DD945528780D",
                "deviceLUID": "BD116E1700000000"
            },
            "VkPhysicalDeviceVulkan12Properties": {
                "driverID": 4,
                "driverName": "NVIDIA",
                "driverInfo": "546.33"
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS": {
                "DoublePrecisionFloatShaderOps": true,
                "OutputMergerLogicOp": true,
                "MinPrecisionSupport": 2,
                "TiledResourcesTier": 4,
                "ResourceBindingTier": 3,
                "PSSpecifiedStencilRefSupported": false,
                "TypedUAVLoadAdditionalFormats": true,
                "ROVsSupported": true,
                "ConservativeRasterizationTier": 3,
                "MaxGPUVirtualAddressBitsPerResource": 40,
                "StandardSwizzle64KBSupported": false,
                "CrossNodeSharingTier": 0,
                "CrossAdapterRowMajorTextureSupported": false,
                "VPAndRTArrayIndexFromAnyShaderFeedingRasterizerSupportedWithoutGSEmulation": true,
                "ResourceHeapTier": 2
            },
            "D3D12_FEATURE_DATA_GPU_VIRTUAL_ADDRESS_SUPPORT": {
                "MaxGPUVirtualAddressBitsPerResource": 40,
                "MaxGPUVirtualAddressBitsPerProcess": 40
            },
            "D3D12_FEATURE_DATA_SHADER_MODEL": {
                "HighestShaderModel": 104
            },
            "D3D12_FEATURE_DATA_ROOT_SIGNATURE": {
                "HighestVersion": 3
            },
            "D3D12_FEATURE_DATA_ARCHITECTURE1": {
                "NodeIndex": 0,
                "TileBasedRenderer": false,
                "UMA": false,
                "CacheCoherentUMA": false,
                "IsolatedMMU": true
            },
            "D3D12_FEATURE_DATA_FEATURE_LEVELS": {
                "MaxSupportedFeatureLevel": 49664
            },
            "D3D12_FEATURE_DATA_SHADER_CACHE": {
                "SupportFlags": 115
            },
            "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY": {
                "TYPE_DIRECT.PRIORITY_NORMAL.PriorityForTypeIsSupported": true,
                "TYPE_DIRECT.PRIORITY_HIGH.PriorityForTypeIsSupported": true,
                "TYPE_DIRECT.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": true,
                "TYPE_COMPUTE.PRIORITY_NORMAL.PriorityForTypeIsSupported": true,
                "TYPE_COMPUTE.PRIORITY_HIGH.PriorityForTypeIsSupported": true,
                "TYPE_COMPUTE.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": true,
                "TYPE_COPY.PRIORITY_NORMAL.PriorityForTypeIsSupported": true,
                "TYPE_COPY.PRIORITY_HIGH.PriorityForTypeIsSupported": true,
                "TYPE_COPY.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": true
            },
            "D3D12_FEATURE_DATA_SERIALIZATION": {
                "HeapSerializationTier": 0
            },
            "D3D12_FEATURE_DATA_CROSS_NODE": {
                "SharingTier": 0,
                "AtomicShaderInstructions": false
            },
            "D3D12_FEATURE_DATA_PREDICATION": {
                "Supported": true
            },
            "D3D12_FEATURE_DATA_HARDWARE_COPY": {
                "Supported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS1": {
                "WaveOps": true,
                "WaveLaneCountMin": 32,
                "WaveLaneCountMax": 32,
                "TotalLaneCount": 10240,
                "ExpandedComputeResourceStates": true,
                "Int64ShaderOps": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS2": {
                "DepthBoundsTestSupported": true,
                "ProgrammableSamplePositionsTier": 2
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS3": {
                "CopyQueueTimestampQueriesSupported": true,
                "CastingFullyTypedFormatSupported": true,
                "WriteBufferImmediateSupportFlags": 127,
                "ViewInstancingTier": 3,
                "BarycentricsSupported": true
            },
            "D3D12_FEATURE_DATA_EXISTING_HEAPS": {
                "Supported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS4": {
                "MSAA64KBAlignedTextureSupported": true,
                "SharedResourceCompatibilityTier": 2,
                "Native16BitShaderOpsSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS5": {
                "SRVOnlyTiledResourceTier3": true,
                "RenderPassesTier": 0,
                "RaytracingTier": 11
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS6": {
                "AdditionalShadingRatesSupported": true,
                "PerPrimitiveShadingRateSupportedWithViewportIndexing": true,
                "VariableShadingRateTier": 2,
                "ShadingRateImageTileSize": 16,
                "BackgroundProcessingSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS7": {
                "MeshShaderTier": 10,
                "SamplerFeedbackTier": 90
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS8": {
                "UnalignedBlockTexturesSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS9": {
                "MeshShaderPipelineStatsSupported": true,
                "MeshShaderSupportsFullRangeRenderTargetArrayIndex": true,
                "AtomicInt64OnTypedResourceSupported": true,
                "AtomicInt64OnGroupSharedSupported": true,
                "DerivativesInMeshAndAmplificationShadersSupported": false,
                "WaveMMATier": 10
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS10": {
                "VariableRateShadingSumCombinerSupported": true,
                "MeshShaderPerPrimitiveShadingRateSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS11": {
                "AtomicInt64OnDescriptorHeapResourceSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS12": {
                "MSPrimitivesPipelineStatisticIncludesCulledPrimitives": 1,
                "EnhancedBarriersSupported": true,
                "RelaxedFormatCastingSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS13": {
                "UnrestrictedBufferTextureCopyPitchSupported": true,
                "UnrestrictedVertexElementAlignmentSupported": true,
                "InvertedViewportHeightFlipsYSupported": true,
                "InvertedViewportDepthFlipsZSupported": true,
                "TextureCopyBetweenDimensionsSupported": true,
                "AlphaBlendFactorSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS14": {
                "AdvancedTextureOpsSupported": true,
                "WriteableMSAATexturesSupported": true,
                "IndependentFrontAndBackStencilRefMaskSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS15": {
                "TriangleFanSupported": true,
                "DynamicIndexBufferStripCutSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS16": {
                "DynamicDepthBiasSupported": true,
                "GPUUploadHeapSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS17": {
                "NonNormalizedCoordinateSamplersSupported": true,
                "ManualWriteTrackingResourceSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS18": {
                "RenderPassesValid": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS19": {
                "MismatchingOutputDimensionsSupported": true,
                "SupportedSampleCountsWithNoOutputs": 31,
                "PointSamplingAddressesNeverRoundUp": true,
                "RasterizerDesc2Supported": true,
                "NarrowQuadrilateralLinesSupported": true,
                "AnisoFilterWithPointMipSupported": true,
                "MaxSamplerDescriptorHeapSize": 4080,
                "MaxSamplerDescriptorHeapSizeWithStaticSamplers": 2048,
                "MaxViewDescriptorHeapSize": 1000000,
                "ComputeOnlyCustomHeapSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS20": {
                "ComputeOnlyWriteWatchSupported": true,
                "RecreateAtTier": 0
            },
            "GetDescriptorHandleIncrementSize": {
                "D3D12_DESCRIPTOR_HEAP_TYPE_CBV_SRV_UAV": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_SAMPLER": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_RTV": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_DSV": 8
            }
        },
        {
            "AdapterIndex": 1,
            "DXGI_ADAPTER_DESC3": {
                "Description": "Microsoft Basic Render Driver",
                "VendorId": 5140,
                "DeviceId": 140,
                "SubSysId": 0,
                "Revision": 0,
                "DedicatedVideoMemory": 0,
                "DedicatedSystemMemory": 0,
                "SharedSystemMemory": 34320400384,
                "AdapterLuid": "00000000-0000FB78",
                "Flags": 46,
                "GraphicsPreemptionGranularity": 4,
                "ComputePreemptionGranularity": 4
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_LOCAL]": {
                "Budget": 33515094016,
                "AvailableForReservation": 16891764736
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_NON_LOCAL]": {
                "Budget": 0,
                "AvailableForReservation": 0
            },
            "UMDVersion": "10.0.22621.2506",
            "D3D12_FEATURE_DATA_D3D12_OPTIONS": {
                "DoublePrecisionFloatShaderOps": true,
                "OutputMergerLogicOp": true,
                "MinPrecisionSupport": 3,
                "TiledResourcesTier": 4,
                "ResourceBindingTier": 3,
                "PSSpecifiedStencilRefSupported": true,
                "TypedUAVLoadAdditionalFormats": true,
                "ROVsSupported": true,
                "ConservativeRasterizationTier": 3,
                "MaxGPUVirtualAddressBitsPerResource": 32,
                "StandardSwizzle64KBSupported": true,
                "CrossNodeSharingTier": 0,
                "CrossAdapterRowMajorTextureSupported": true,
                "VPAndRTArrayIndexFromAnyShaderFeedingRasterizerSupportedWithoutGSEmulation": true,
                "ResourceHeapTier": 2
            },
            "D3D12_FEATURE_DATA_GPU_VIRTUAL_ADDRESS_SUPPORT": {
                "MaxGPUVirtualAddressBitsPerResource": 32,
                "MaxGPUVirtualAddressBitsPerProcess": 47
            },
            "D3D12_FEATURE_DATA_SHADER_MODEL": {
                "HighestShaderModel": 98
            },
            "D3D12_FEATURE_DATA_ROOT_SIGNATURE": {
                "HighestVersion": 3
            },
            "D3D12_FEATURE_DATA_ARCHITECTURE1": {
                "NodeIndex": 0,
                "TileBasedRenderer": false,
                "UMA": true,
                "CacheCoherentUMA": true,
                "IsolatedMMU": false
            },
            "D3D12_FEATURE_DATA_FEATURE_LEVELS": {
                "MaxSupportedFeatureLevel": 49408
            },
            "D3D12_FEATURE_DATA_SHADER_CACHE": {
                "SupportFlags": 99
            },
            "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY": {
                "TYPE_DIRECT.PRIORITY_NORMAL.PriorityForTypeIsSupported": true,
                "TYPE_DIRECT.PRIORITY_HIGH.PriorityForTypeIsSupported": true,
                "TYPE_DIRECT.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": true,
                "TYPE_COMPUTE.PRIORITY_NORMAL.PriorityForTypeIsSupported": true,
                "TYPE_COMPUTE.PRIORITY_HIGH.PriorityForTypeIsSupported": true,
                "TYPE_COMPUTE.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": true,
                "TYPE_COPY.PRIORITY_NORMAL.PriorityForTypeIsSupported": true,
                "TYPE_COPY.PRIORITY_HIGH.PriorityForTypeIsSupported": true,
                "TYPE_COPY.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": true
            },
            "D3D12_FEATURE_DATA_SERIALIZATION": {
                "HeapSerializationTier": 10
            },
            "D3D12_FEATURE_DATA_CROSS_NODE": {
                "SharingTier": 0,
                "AtomicShaderInstructions": false
            },
            "D3D12_FEATURE_DATA_PREDICATION": {
                "Supported": true
            },
            "D3D12_FEATURE_DATA_HARDWARE_COPY": {
                "Supported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS1": {
                "WaveOps": true,
                "WaveLaneCountMin": 4,
                "WaveLaneCountMax": 4,
                "TotalLaneCount": 96,
                "ExpandedComputeResourceStates": true,
                "Int64ShaderOps": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS2": {
                "DepthBoundsTestSupported": true,
                "ProgrammableSamplePositionsTier": 2
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS3": {
                "CopyQueueTimestampQueriesSupported": true,
                "CastingFullyTypedFormatSupported": true,
                "WriteBufferImmediateSupportFlags": 15,
                "ViewInstancingTier": 1,
                "BarycentricsSupported": true
            },
            "D3D12_FEATURE_DATA_EXISTING_HEAPS": {
                "Supported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS4": {
                "MSAA64KBAlignedTextureSupported": true,
                "SharedResourceCompatibilityTier": 2,
                "Native16BitShaderOpsSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS5": {
                "SRVOnlyTiledResourceTier3": true,
                "RenderPassesTier": 0,
                "RaytracingTier": 0
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS6": {
                "AdditionalShadingRatesSupported": true,
                "PerPrimitiveShadingRateSupportedWithViewportIndexing": false,
                "VariableShadingRateTier": 1,
                "ShadingRateImageTileSize": 0,
                "BackgroundProcessingSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS7": {
                "MeshShaderTier": 0,
                "SamplerFeedbackTier": 0
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS8": {
                "UnalignedBlockTexturesSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS9": {
                "MeshShaderPipelineStatsSupported": false,
                "MeshShaderSupportsFullRangeRenderTargetArrayIndex": false,
                "AtomicInt64OnTypedResourceSupported": false,
                "AtomicInt64OnGroupSharedSupported": false,
                "DerivativesInMeshAndAmplificationShadersSupported": false,
                "WaveMMATier": 0
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS10": {
                "VariableRateShadingSumCombinerSupported": false,
                "MeshShaderPerPrimitiveShadingRateSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS11": {
                "AtomicInt64OnDescriptorHeapResourceSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS12": {
                "MSPrimitivesPipelineStatisticIncludesCulledPrimitives": 0,
                "EnhancedBarriersSupported": false,
                "RelaxedFormatCastingSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS13": {
                "UnrestrictedBufferTextureCopyPitchSupported": true,
                "UnrestrictedVertexElementAlignmentSupported": true,
                "InvertedViewportHeightFlipsYSupported": false,
                "InvertedViewportDepthFlipsZSupported": false,
                "TextureCopyBetweenDimensionsSupported": true,
                "AlphaBlendFactorSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS14": {
                "AdvancedTextureOpsSupported": false,
                "WriteableMSAATexturesSupported": false,
                "IndependentFrontAndBackStencilRefMaskSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS15": {
                "TriangleFanSupported": false,
                "DynamicIndexBufferStripCutSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS16": {
                "DynamicDepthBiasSupported": false,
                "GPUUploadHeapSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS17": {
                "NonNormalizedCoordinateSamplersSupported": false,
                "ManualWriteTrackingResourceSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS18": {
                "RenderPassesValid": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS19": {
                "MismatchingOutputDimensionsSupported": false,
                "SupportedSampleCountsWithNoOutputs": 1,
                "PointSamplingAddressesNeverRoundUp": false,
                "RasterizerDesc2Supported": true,
                "NarrowQuadrilateralLinesSupported": false,
                "AnisoFilterWithPointMipSupported": false,
                "MaxSamplerDescriptorHeapSize": 2048,
                "MaxSamplerDescriptorHeapSizeWithStaticSamplers": 2048,
                "MaxViewDescriptorHeapSize": 1000000,
                "ComputeOnlyCustomHeapSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS20": {
                "ComputeOnlyWriteWatchSupported": true,
                "RecreateAtTier": 0
            },
            "GetDescriptorHandleIncrementSize": {
                "D3D12_DESCRIPTOR_HEAP_TYPE_CBV_SRV_UAV": 64,
                "D3D12_DESCRIPTOR_HEAP_TYPE_SAMPLER": 64,
                "D3D12_DESCRIPTOR_HEAP_TYPE_RTV": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_DSV": 8
            }
        }
    ]
},{
    "Header": {
        "Program": "D3d12info",
        "Version": "2.2.0",
        "Build Date": "Dec 27 2023, 00:58:26",
        "Configuration": "Debug",
        "Configuration bits": "64-bit",
        "Generated on": "2023-12-28",
        "Using preview Agility SDK": true,
        "D3D12_SDK_VERSION": 711,
        "Intel GPU Detect compiled version": "2023-07-18"
    },
    "SystemInfo": {
        "OS Info": {
            "Windows version": "10.0.22631"
        },
        "System memory": {
            "GetPhysicallyInstalledSystemMemory": 67108864,
            "MEMORYSTATUSEX::ullTotalPhys": 68640800768,
            "MEMORYSTATUSEX::ullTotalPageFile": 78841348096,
            "MEMORYSTATUSEX::ullTotalVirtual": 140737488224256
        },
        "D3D12EnableExperimentalFeatures": [
            "D3D12ExperimentalShaderModels",
            "D3D12TiledResourceTier4",
            "D3D12StateObjectsExperiment"
        ]
    },
    "Adapters": [
        {
            "AdapterIndex": 0,
            "DXGI_ADAPTER_DESC3": {
                "Description": "NVIDIA GeForce RTX 3080 Ti",
                "VendorId": 4318,
                "DeviceId": 8712,
                "SubSysId": 570955113,
                "Revision": 161,
                "DedicatedVideoMemory": 12687769600,
                "DedicatedSystemMemory": 0,
                "SharedSystemMemory": 34320400384,
                "AdapterLuid": "00000000-176E11BD",
                "Flags": 44,
                "GraphicsPreemptionGranularity": 3,
                "ComputePreemptionGranularity": 1
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_LOCAL]": {
                "Budget": 11882463232,
                "AvailableForReservation": 6075449344
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_NON_LOCAL]": {
                "Budget": 33515094016,
                "AvailableForReservation": 16891764736
            },
            "UMDVersion": "31.0.15.4633",
            "VkPhysicalDeviceProperties": {
                "apiVersion": "1.3.260",
                "driverVersion": 2290630656,
                "vendorID": 4318,
                "deviceID": 8712,
                "deviceType": 2,
                "deviceName": "NVIDIA GeForce RTX 3080 Ti"
            },
            "VkPhysicalDeviceIDProperties": {
                "deviceUUID": "FC4F457CBA3A2DDEF06E6B6E0B6608D4",
                "driverUUID": "C2A04F03A27E5FB3A136DD945528780D",
                "deviceLUID": "BD116E1700000000"
            },
            "VkPhysicalDeviceVulkan12Properties": {
                "driverID": 4,
                "driverName": "NVIDIA",
                "driverInfo": "546.33"
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS": {
                "DoublePrecisionFloatShaderOps": true,
                "OutputMergerLogicOp": true,
                "MinPrecisionSupport": 2,
                "TiledResourcesTier": 4,
                "ResourceBindingTier": 3,
                "PSSpecifiedStencilRefSupported": false,
                "TypedUAVLoadAdditionalFormats": true,
                "ROVsSupported": true,
                "ConservativeRasterizationTier": 3,
                "MaxGPUVirtualAddressBitsPerResource": 40,
                "StandardSwizzle64KBSupported": false,
                "CrossNodeSharingTier": 0,
                "CrossAdapterRowMajorTextureSupported": false,
                "VPAndRTArrayIndexFromAnyShaderFeedingRasterizerSupportedWithoutGSEmulation": true,
                "ResourceHeapTier": 2
            },
            "D3D12_FEATURE_DATA_GPU_VIRTUAL_ADDRESS_SUPPORT": {
                "MaxGPUVirtualAddressBitsPerResource": 40,
                "MaxGPUVirtualAddressBitsPerProcess": 40
            },
            "D3D12_FEATURE_DATA_SHADER_MODEL": {
                "HighestShaderModel": 104
            },
            "D3D12_FEATURE_DATA_ROOT_SIGNATURE": {
                "HighestVersion": 3
            },
            "D3D12_FEATURE_DATA_ARCHITECTURE1": {
                "NodeIndex": 0,
                "TileBasedRenderer": false,
                "UMA": false,
                "CacheCoherentUMA": false,
                "IsolatedMMU": true
            },
            "D3D12_FEATURE_DATA_FEATURE_LEVELS": {
                "MaxSupportedFeatureLevel": 49664
            },
            "D3D12_FEATURE_DATA_SHADER_CACHE": {
                "SupportFlags": 115
            },
            "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY": {
                "TYPE_DIRECT.PRIORITY_NORMAL.PriorityForTypeIsSupported": true,
                "TYPE_DIRECT.PRIORITY_HIGH.PriorityForTypeIsSupported": true,
                "TYPE_DIRECT.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": true,
                "TYPE_COMPUTE.PRIORITY_NORMAL.PriorityForTypeIsSupported": true,
                "TYPE_COMPUTE.PRIORITY_HIGH.PriorityForTypeIsSupported": true,
                "TYPE_COMPUTE.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": true,
                "TYPE_COPY.PRIORITY_NORMAL.PriorityForTypeIsSupported": true,
                "TYPE_COPY.PRIORITY_HIGH.PriorityForTypeIsSupported": true,
                "TYPE_COPY.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": true
            },
            "D3D12_FEATURE_DATA_SERIALIZATION": {
                "HeapSerializationTier": 0
            },
            "D3D12_FEATURE_DATA_CROSS_NODE": {
                "SharingTier": 0,
                "AtomicShaderInstructions": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS_EXPERIMENTAL": {
                "WorkGraphsTier": 1
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS1": {
                "WaveOps": true,
                "WaveLaneCountMin": 32,
                "WaveLaneCountMax": 32,
                "TotalLaneCount": 10240,
                "ExpandedComputeResourceStates": true,
                "Int64ShaderOps": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS2": {
                "DepthBoundsTestSupported": true,
                "ProgrammableSamplePositionsTier": 2
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS3": {
                "CopyQueueTimestampQueriesSupported": true,
                "CastingFullyTypedFormatSupported": true,
                "WriteBufferImmediateSupportFlags": 127,
                "ViewInstancingTier": 3,
                "BarycentricsSupported": true
            },
            "D3D12_FEATURE_DATA_EXISTING_HEAPS": {
                "Supported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS4": {
                "MSAA64KBAlignedTextureSupported": true,
                "SharedResourceCompatibilityTier": 2,
                "Native16BitShaderOpsSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS5": {
                "SRVOnlyTiledResourceTier3": true,
                "RenderPassesTier": 0,
                "RaytracingTier": 11
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS6": {
                "AdditionalShadingRatesSupported": true,
                "PerPrimitiveShadingRateSupportedWithViewportIndexing": true,
                "VariableShadingRateTier": 2,
                "ShadingRateImageTileSize": 16,
                "BackgroundProcessingSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS7": {
                "MeshShaderTier": 10,
                "SamplerFeedbackTier": 90
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS8": {
                "UnalignedBlockTexturesSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS9": {
                "MeshShaderPipelineStatsSupported": true,
                "MeshShaderSupportsFullRangeRenderTargetArrayIndex": true,
                "AtomicInt64OnTypedResourceSupported": true,
                "AtomicInt64OnGroupSharedSupported": true,
                "DerivativesInMeshAndAmplificationShadersSupported": false,
                "WaveMMATier": 10
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS10": {
                "VariableRateShadingSumCombinerSupported": true,
                "MeshShaderPerPrimitiveShadingRateSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS11": {
                "AtomicInt64OnDescriptorHeapResourceSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS12": {
                "MSPrimitivesPipelineStatisticIncludesCulledPrimitives": 1,
                "EnhancedBarriersSupported": true,
                "RelaxedFormatCastingSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS13": {
                "UnrestrictedBufferTextureCopyPitchSupported": true,
                "UnrestrictedVertexElementAlignmentSupported": true,
                "InvertedViewportHeightFlipsYSupported": true,
                "InvertedViewportDepthFlipsZSupported": true,
                "TextureCopyBetweenDimensionsSupported": true,
                "AlphaBlendFactorSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS14": {
                "AdvancedTextureOpsSupported": true,
                "WriteableMSAATexturesSupported": true,
                "IndependentFrontAndBackStencilRefMaskSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS15": {
                "TriangleFanSupported": true,
                "DynamicIndexBufferStripCutSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS16": {
                "DynamicDepthBiasSupported": true,
                "GPUUploadHeapSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS17": {
                "NonNormalizedCoordinateSamplersSupported": true,
                "ManualWriteTrackingResourceSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS18": {
                "RenderPassesValid": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS19": {
                "MismatchingOutputDimensionsSupported": true,
                "SupportedSampleCountsWithNoOutputs": 31,
                "PointSamplingAddressesNeverRoundUp": true,
                "RasterizerDesc2Supported": true,
                "NarrowQuadrilateralLinesSupported": true,
                "AnisoFilterWithPointMipSupported": true,
                "MaxSamplerDescriptorHeapSize": 4080,
                "MaxSamplerDescriptorHeapSizeWithStaticSamplers": 2048,
                "MaxViewDescriptorHeapSize": 1000000,
                "ComputeOnlyCustomHeapSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS20": {
                "ComputeOnlyWriteWatchSupported": true
            },
            "D3D12_FEATURE_DATA_WAVE_MMA": [
                {
                    "InputDataType": 1,
                    "M": 1,
                    "N": 1,
                    "Supported": true,
                    "K": 16,
                    "AccumDataTypes": 1,
                    "RequiredWaveLaneCountMin": 32,
                    "RequiredWaveLaneCountMax": 32
                },
                {
                    "InputDataType": 1,
                    "M": 1,
                    "N": 2,
                    "Supported": true,
                    "K": 16,
                    "AccumDataTypes": 1,
                    "RequiredWaveLaneCountMin": 32,
                    "RequiredWaveLaneCountMax": 32
                },
                {
                    "InputDataType": 1,
                    "M": 2,
                    "N": 1,
                    "Supported": true,
                    "K": 16,
                    "AccumDataTypes": 1,
                    "RequiredWaveLaneCountMin": 32,
                    "RequiredWaveLaneCountMax": 32
                },
                {
                    "InputDataType": 1,
                    "M": 2,
                    "N": 2,
                    "Supported": true,
                    "K": 16,
                    "AccumDataTypes": 1,
                    "RequiredWaveLaneCountMin": 32,
                    "RequiredWaveLaneCountMax": 32
                },
                {
                    "InputDataType": 2,
                    "M": 1,
                    "N": 1,
                    "Supported": true,
                    "K": 16,
                    "AccumDataTypes": 6,
                    "RequiredWaveLaneCountMin": 32,
                    "RequiredWaveLaneCountMax": 32
                },
                {
                    "InputDataType": 2,
                    "M": 1,
                    "N": 2,
                    "Supported": true,
                    "K": 16,
                    "AccumDataTypes": 6,
                    "RequiredWaveLaneCountMin": 32,
                    "RequiredWaveLaneCountMax": 32
                },
                {
                    "InputDataType": 2,
                    "M": 2,
                    "N": 1,
                    "Supported": true,
                    "K": 16,
                    "AccumDataTypes": 6,
                    "RequiredWaveLaneCountMin": 32,
                    "RequiredWaveLaneCountMax": 32
                },
                {
                    "InputDataType": 2,
                    "M": 2,
                    "N": 2,
                    "Supported": true,
                    "K": 16,
                    "AccumDataTypes": 6,
                    "RequiredWaveLaneCountMin": 32,
                    "RequiredWaveLaneCountMax": 32
                }
            ],
            "GetDescriptorHandleIncrementSize": {
                "D3D12_DESCRIPTOR_HEAP_TYPE_CBV_SRV_UAV": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_SAMPLER": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_RTV": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_DSV": 8
            }
        },
        {
            "AdapterIndex": 1,
            "DXGI_ADAPTER_DESC3": {
                "Description": "Microsoft Basic Render Driver",
                "VendorId": 5140,
                "DeviceId": 140,
                "SubSysId": 0,
                "Revision": 0,
                "DedicatedVideoMemory": 0,
                "DedicatedSystemMemory": 0,
                "SharedSystemMemory": 34320400384,
                "AdapterLuid": "00000000-0000FB78",
                "Flags": 46,
                "GraphicsPreemptionGranularity": 4,
                "ComputePreemptionGranularity": 4
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_LOCAL]": {
                "Budget": 33515094016,
                "AvailableForReservation": 16891764736
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_NON_LOCAL]": {
                "Budget": 0,
                "AvailableForReservation": 0
            },
            "UMDVersion": "10.0.22621.2506",
            "D3D12_FEATURE_DATA_D3D12_OPTIONS": {
                "DoublePrecisionFloatShaderOps": true,
                "OutputMergerLogicOp": true,
                "MinPrecisionSupport": 3,
                "TiledResourcesTier": 4,
                "ResourceBindingTier": 3,
                "PSSpecifiedStencilRefSupported": true,
                "TypedUAVLoadAdditionalFormats": true,
                "ROVsSupported": true,
                "ConservativeRasterizationTier": 3,
                "MaxGPUVirtualAddressBitsPerResource": 32,
                "StandardSwizzle64KBSupported": true,
                "CrossNodeSharingTier": 0,
                "CrossAdapterRowMajorTextureSupported": true,
                "VPAndRTArrayIndexFromAnyShaderFeedingRasterizerSupportedWithoutGSEmulation": true,
                "ResourceHeapTier": 2
            },
            "D3D12_FEATURE_DATA_GPU_VIRTUAL_ADDRESS_SUPPORT": {
                "MaxGPUVirtualAddressBitsPerResource": 32,
                "MaxGPUVirtualAddressBitsPerProcess": 47
            },
            "D3D12_FEATURE_DATA_SHADER_MODEL": {
                "HighestShaderModel": 98
            },
            "D3D12_FEATURE_DATA_ROOT_SIGNATURE": {
                "HighestVersion": 3
            },
            "D3D12_FEATURE_DATA_ARCHITECTURE1": {
                "NodeIndex": 0,
                "TileBasedRenderer": false,
                "UMA": true,
                "CacheCoherentUMA": true,
                "IsolatedMMU": false
            },
            "D3D12_FEATURE_DATA_FEATURE_LEVELS": {
                "MaxSupportedFeatureLevel": 49408
            },
            "D3D12_FEATURE_DATA_SHADER_CACHE": {
                "SupportFlags": 99
            },
            "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY": {
                "TYPE_DIRECT.PRIORITY_NORMAL.PriorityForTypeIsSupported": true,
                "TYPE_DIRECT.PRIORITY_HIGH.PriorityForTypeIsSupported": true,
                "TYPE_DIRECT.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": true,
                "TYPE_COMPUTE.PRIORITY_NORMAL.PriorityForTypeIsSupported": true,
                "TYPE_COMPUTE.PRIORITY_HIGH.PriorityForTypeIsSupported": true,
                "TYPE_COMPUTE.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": true,
                "TYPE_COPY.PRIORITY_NORMAL.PriorityForTypeIsSupported": true,
                "TYPE_COPY.PRIORITY_HIGH.PriorityForTypeIsSupported": true,
                "TYPE_COPY.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": true
            },
            "D3D12_FEATURE_DATA_SERIALIZATION": {
                "HeapSerializationTier": 10
            },
            "D3D12_FEATURE_DATA_CROSS_NODE": {
                "SharingTier": 0,
                "AtomicShaderInstructions": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS_EXPERIMENTAL": {
                "WorkGraphsTier": 0
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS1": {
                "WaveOps": true,
                "WaveLaneCountMin": 4,
                "WaveLaneCountMax": 4,
                "TotalLaneCount": 96,
                "ExpandedComputeResourceStates": true,
                "Int64ShaderOps": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS2": {
                "DepthBoundsTestSupported": true,
                "ProgrammableSamplePositionsTier": 2
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS3": {
                "CopyQueueTimestampQueriesSupported": true,
                "CastingFullyTypedFormatSupported": true,
                "WriteBufferImmediateSupportFlags": 15,
                "ViewInstancingTier": 1,
                "BarycentricsSupported": true
            },
            "D3D12_FEATURE_DATA_EXISTING_HEAPS": {
                "Supported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS4": {
                "MSAA64KBAlignedTextureSupported": true,
                "SharedResourceCompatibilityTier": 2,
                "Native16BitShaderOpsSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS5": {
                "SRVOnlyTiledResourceTier3": true,
                "RenderPassesTier": 0,
                "RaytracingTier": 0
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS6": {
                "AdditionalShadingRatesSupported": true,
                "PerPrimitiveShadingRateSupportedWithViewportIndexing": false,
                "VariableShadingRateTier": 1,
                "ShadingRateImageTileSize": 0,
                "BackgroundProcessingSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS7": {
                "MeshShaderTier": 0,
                "SamplerFeedbackTier": 0
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS8": {
                "UnalignedBlockTexturesSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS9": {
                "MeshShaderPipelineStatsSupported": false,
                "MeshShaderSupportsFullRangeRenderTargetArrayIndex": false,
                "AtomicInt64OnTypedResourceSupported": false,
                "AtomicInt64OnGroupSharedSupported": false,
                "DerivativesInMeshAndAmplificationShadersSupported": false,
                "WaveMMATier": 0
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS10": {
                "VariableRateShadingSumCombinerSupported": false,
                "MeshShaderPerPrimitiveShadingRateSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS11": {
                "AtomicInt64OnDescriptorHeapResourceSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS12": {
                "MSPrimitivesPipelineStatisticIncludesCulledPrimitives": 0,
                "EnhancedBarriersSupported": true,
                "RelaxedFormatCastingSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS13": {
                "UnrestrictedBufferTextureCopyPitchSupported": true,
                "UnrestrictedVertexElementAlignmentSupported": true,
                "InvertedViewportHeightFlipsYSupported": false,
                "InvertedViewportDepthFlipsZSupported": false,
                "TextureCopyBetweenDimensionsSupported": true,
                "AlphaBlendFactorSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS14": {
                "AdvancedTextureOpsSupported": false,
                "WriteableMSAATexturesSupported": false,
                "IndependentFrontAndBackStencilRefMaskSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS15": {
                "TriangleFanSupported": false,
                "DynamicIndexBufferStripCutSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS16": {
                "DynamicDepthBiasSupported": false,
                "GPUUploadHeapSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS17": {
                "NonNormalizedCoordinateSamplersSupported": false,
                "ManualWriteTrackingResourceSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS18": {
                "RenderPassesValid": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS19": {
                "MismatchingOutputDimensionsSupported": false,
                "SupportedSampleCountsWithNoOutputs": 1,
                "PointSamplingAddressesNeverRoundUp": false,
                "RasterizerDesc2Supported": true,
                "NarrowQuadrilateralLinesSupported": false,
                "AnisoFilterWithPointMipSupported": false,
                "MaxSamplerDescriptorHeapSize": 2048,
                "MaxSamplerDescriptorHeapSizeWithStaticSamplers": 2048,
                "MaxViewDescriptorHeapSize": 1000000,
                "ComputeOnlyCustomHeapSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS20": {
                "ComputeOnlyWriteWatchSupported": true
            },
            "GetDescriptorHandleIncrementSize": {
                "D3D12_DESCRIPTOR_HEAP_TYPE_CBV_SRV_UAV": 64,
                "D3D12_DESCRIPTOR_HEAP_TYPE_SAMPLER": 64,
                "D3D12_DESCRIPTOR_HEAP_TYPE_RTV": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_DSV": 8
            }
        }
    ]
}]