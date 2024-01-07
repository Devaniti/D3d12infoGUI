const reports = [{
    "Header": {
        "Program": "D3d12info",
        "Version": "2.2.0",
        "Build Date": "Jan  7 2024, 15:36:34",
        "Configuration": "Debug",
        "Configuration bits": "64-bit",
        "Generated on": "2024-01-07",
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
        "DXGI_FEATURE": {
            "DXGI_FEATURE_PRESENT_ALLOW_TEARING": true
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
                "Description": "Intel(R) Arc(TM) A770 Graphics",
                "VendorId": 32902,
                "DeviceId": 22176,
                "SubSysId": 270565510,
                "Revision": 8,
                "DedicatedVideoMemory": 17045651456,
                "DedicatedSystemMemory": 0,
                "SharedSystemMemory": 34320400384,
                "AdapterLuid": "00000000-00011797",
                "Flags": 44,
                "GraphicsPreemptionGranularity": 2,
                "ComputePreemptionGranularity": 2
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_LOCAL]": {
                "Budget": 16239296512,
                "AvailableForReservation": 8253865984
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_NON_LOCAL]": {
                "Budget": 33515094016,
                "AvailableForReservation": 16891764736
            },
            "CheckInterfaceSupport": {
                "UMDVersion": 8725724284654556
            },
            "VkPhysicalDeviceProperties": {
                "apiVersion": "1.3.267",
                "driverVersion": 1659868,
                "vendorID": 32902,
                "deviceID": 22176,
                "deviceType": 2,
                "deviceName": "Intel(R) Arc(TM) A770 Graphics"
            },
            "VkPhysicalDeviceIDProperties": {
                "deviceUUID": "8680A056080000002F00000000000000",
                "driverUUID": "33312E302E3130312E35303834000000",
                "deviceLUID": "9717010000000000"
            },
            "VkPhysicalDeviceVulkan12Properties": {
                "driverID": 5,
                "driverName": "Intel Corporation",
                "driverInfo": "Intel driver"
            },
            "Intel GPUDetect::GPUData": {
                "VendorId": 32902,
                "deviceID": 22176,
                "isUMAArchitecture": false,
                "videoMemory": 17045651456,
                "description": "Intel(R) Arc(TM) A770 Graphics",
                "extensionVersion": 458752,
                "intelExtensionAvailability": true,
                "dxDriverVersion": "31.0.101.5084",
                "driverInfo.driverReleaseRevision": 101,
                "driverInfo.driverBuildNumber": 5084,
                "DefaultFidelityPreset": 4,
                "GPUArchitecture": "Alchemist",
                "GraphicsGeneration": "Xe High Performance Graphics",
                "euCount": 512,
                "packageTDP": 0,
                "maxFillRate": 128,
                "maxFrequency": 2400,
                "minFrequency": 300
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS": {
                "DoublePrecisionFloatShaderOps": false,
                "OutputMergerLogicOp": true,
                "MinPrecisionSupport": 2,
                "TiledResourcesTier": 3,
                "ResourceBindingTier": 3,
                "PSSpecifiedStencilRefSupported": true,
                "TypedUAVLoadAdditionalFormats": true,
                "ROVsSupported": true,
                "ConservativeRasterizationTier": 3,
                "MaxGPUVirtualAddressBitsPerResource": 44,
                "StandardSwizzle64KBSupported": false,
                "CrossNodeSharingTier": 0,
                "CrossAdapterRowMajorTextureSupported": true,
                "VPAndRTArrayIndexFromAnyShaderFeedingRasterizerSupportedWithoutGSEmulation": true,
                "ResourceHeapTier": 1
            },
            "D3D12_FEATURE_DATA_GPU_VIRTUAL_ADDRESS_SUPPORT": {
                "MaxGPUVirtualAddressBitsPerResource": 44,
                "MaxGPUVirtualAddressBitsPerProcess": 48
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
                "SupportFlags": 111
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
                "WaveLaneCountMin": 8,
                "WaveLaneCountMax": 32,
                "TotalLaneCount": 16384,
                "ExpandedComputeResourceStates": true,
                "Int64ShaderOps": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS2": {
                "DepthBoundsTestSupported": true,
                "ProgrammableSamplePositionsTier": 1
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS3": {
                "CopyQueueTimestampQueriesSupported": true,
                "CastingFullyTypedFormatSupported": true,
                "WriteBufferImmediateSupportFlags": 15,
                "ViewInstancingTier": 2,
                "BarycentricsSupported": false
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
                "RenderPassesTier": 2,
                "RaytracingTier": 11
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS6": {
                "AdditionalShadingRatesSupported": true,
                "PerPrimitiveShadingRateSupportedWithViewportIndexing": true,
                "VariableShadingRateTier": 2,
                "ShadingRateImageTileSize": 8,
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
                "AtomicInt64OnTypedResourceSupported": false,
                "AtomicInt64OnGroupSharedSupported": false,
                "DerivativesInMeshAndAmplificationShadersSupported": false,
                "WaveMMATier": 0
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
                "AdvancedTextureOpsSupported": false,
                "WriteableMSAATexturesSupported": false,
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
                "SupportedSampleCountsWithNoOutputs": 29,
                "PointSamplingAddressesNeverRoundUp": true,
                "RasterizerDesc2Supported": true,
                "NarrowQuadrilateralLinesSupported": true,
                "AnisoFilterWithPointMipSupported": true,
                "MaxSamplerDescriptorHeapSize": 4000,
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
                "D3D12_DESCRIPTOR_HEAP_TYPE_SAMPLER": 16,
                "D3D12_DESCRIPTOR_HEAP_TYPE_RTV": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_DSV": 144
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
                "AdapterLuid": "00000000-00012D40",
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
            "CheckInterfaceSupport": {
                "UMDVersion": 2814751249598922
            },
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
}]