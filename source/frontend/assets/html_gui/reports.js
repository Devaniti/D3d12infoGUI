const reports = [{
    "Header": {
        "Program": "D3d12info",
        "Version": "3.10.1",
        "Build Date": "Jun  3 2025 18:54:08",
        "Configuration": "Debug",
        "Configuration bits": "64-bit",
        "Generated on": "2025-06-03",
        "Using preview Agility SDK": true,
        "D3D12_PREVIEW_SDK_VERSION": 717,
        "NvAPI compiled version": "R575",
        "NVAPI_SDK_VERSION": 57594,
        "NvAPI_GetInterfaceVersionString": "NVidia Complete Version 1.10",
        "AMD_AGS_VERSION": "6.2.0",
        "agsGetVersionNumber": 25174016,
        "AMD device_info compiled version": "2025-03-11",
        "Intel GPU Detect compiled version": "2025-04-28"
    },
    "SystemInfo": {
        "OS Info": {
            "Windows version": "10.0.26100"
        },
        "System memory": {
            "GetPhysicallyInstalledSystemMemory": 67108864,
            "MEMORYSTATUSEX::ullTotalPhys": 67737919488,
            "MEMORYSTATUSEX::ullTotalPageFile": 72032886784,
            "MEMORYSTATUSEX::ullTotalVirtual": 140737488224256
        },
        "DXGI_FEATURE": {
            "DXGI_FEATURE_PRESENT_ALLOW_TEARING": true
        },
        "NvAPI_SYS_GetDriverAndBranchVersion": {
            "pDriverVersion": 59010,
            "szBuildBranchString": "bugfix_main"
        },
        "NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO": {
            "driverVersion": 59010,
            "szBuildBranch": "bugfix_main",
            "bIsDCHDriver": true,
            "bIsNVIDIAStudioPackage": false,
            "bIsNVIDIAGameReadyPackage": true,
            "bIsNVIDIARTXProductionBranchPackage": false,
            "bIsNVIDIARTXNewFeatureBranchPackage": false,
            "szBuildBaseBranch": "R590"
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
                "Description": "NVIDIA GeForce RTX 4090",
                "VendorId": 4318,
                "DeviceId": 9860,
                "SubSysId": 2291863619,
                "Revision": 161,
                "DedicatedVideoMemory": 25314721792,
                "DedicatedSystemMemory": 0,
                "SharedSystemMemory": 33868959744,
                "AdapterLuid": "00000000-00010EDD",
                "Flags": 44,
                "GraphicsPreemptionGranularity": 3,
                "ComputePreemptionGranularity": 1
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_LOCAL]": {
                "Budget": 24509415424,
                "AvailableForReservation": 12388925440
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_NON_LOCAL]": {
                "Budget": 33063653376,
                "AvailableForReservation": 16666044416
            },
            "CheckInterfaceSupport": {
                "UMDVersion": 9007199255733042
            },
            "NvPhysicalGpuHandle": {
                "adapterType": 1,
                "NvAPI_GPU_GetSystemType": 2,
                "NvAPI_GPU_GetFullName": "NVIDIA GeForce RTX 4090",
                "NvAPI_GPU_GetPCIIdentifiers - pDeviceID": 646189278,
                "NvAPI_GPU_GetPCIIdentifiers - pSubSystemId": 2291863619,
                "NvAPI_GPU_GetPCIIdentifiers - pRevisionId": 161,
                "NvAPI_GPU_GetPCIIdentifiers - pExtDeviceId": 9860,
                "NvAPI_GPU_GetGPUType": 2,
                "NvAPI_GPU_GetBusType": 3,
                "NvAPI_GPU_GetVbiosRevision": 2499942400,
                "NvAPI_GPU_GetVbiosOEMRevision": 96,
                "NvAPI_GPU_GetVbiosVersionString": "95.02.18.00.60",
                "NvAPI_GPU_GetPhysicalFrameBufferSize": 25153024,
                "NvAPI_GPU_GetVirtualFrameBufferSize": 25153536,
                "NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id": 400,
                "NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::implementation_id": 2,
                "NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::revision_id": 161,
                "NvAPI_GPU_GetVRReadyData - NV_GPU_VR_READY::isVRReady": true,
                "NvAPI_GPU_QueryIlluminationSupport(NV_GPU_IA_LOGO_BRIGHTNESS)": false,
                "NvAPI_GPU_QueryIlluminationSupport(NV_GPU_IA_SLI_BRIGHTNESS)": false,
                "NvAPI_GPU_QueryWorkstationFeatureSupport(NV_GPU_WORKSTATION_FEATURE_TYPE_NVIDIA_RTX_VR_READY)": -104,
                "NvAPI_GPU_QueryWorkstationFeatureSupport(NV_GPU_WORKSTATION_FEATURE_TYPE_PROVIZ)": -104,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemory": 25757220864,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::availableDedicatedVideoMemory": 25314721792,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::systemVideoMemory": 0,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::sharedSystemMemory": 33868959744,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::curAvailableDedicatedVideoMemory": 24553148416,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryEvictionsSize": 0,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryEvictionCount": 0,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryPromotionsSize": 655360,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryPromotionCount": 7,
                "NvAPI_GPU_GetShaderSubPipeCount": 64,
                "NvAPI_GPU_GetGpuCoreCount": 16384,
                "NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::isSupported": true,
                "NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::configurationOptions": 1,
                "NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::isEnabled": false,
                "NvAPI_GPU_GetRamBusWidth": 384,
                "NvAPI_GPU_GetGPUInfo - NV_GPU_INFO::bIsExternalGpu": false,
                "NvAPI_GPU_GetGPUInfo - NV_GPU_INFO::rayTracingCores": 128,
                "NvAPI_GPU_GetGPUInfo - NV_GPU_INFO::tensorCores": 512
            },
            "VkPhysicalDeviceProperties": {
                "apiVersion": "1.4.315",
                "driverVersion": 2474803200,
                "vendorID": 4318,
                "deviceID": 9860,
                "deviceType": 2,
                "deviceName": "NVIDIA GeForce RTX 4090"
            },
            "VkPhysicalDeviceIDProperties": {
                "deviceUUID": "514DCA24A29BA21F560648ADD052AFE5",
                "driverUUID": "C85AB35C00F35592AAEB97B4BF606649",
                "deviceLUID": "DD0E010000000000"
            },
            "VkPhysicalDeviceVulkan12Properties": {
                "driverID": 4,
                "driverName": "NVIDIA",
                "driverInfo": "590.10"
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
                "HighestShaderModel": 105
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
            "D3D12_FEATURE_DATA_APPLICATION_SPECIFIC_DRIVER_STATE": {
                "Supported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS1": {
                "WaveOps": true,
                "WaveLaneCountMin": 32,
                "WaveLaneCountMax": 32,
                "TotalLaneCount": 16384,
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
                "RaytracingTier": 12
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
                "RecreateAtTier": 1
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS21": {
                "WorkGraphsTier": 10,
                "ExecuteIndirectTier": 11,
                "SampleCmpGradientAndBiasSupported": true,
                "ExtendedCommandInfoSupported": true
            },
            "D3D12_FEATURE_DATA_BYTECODE_BYPASS_HASH_SUPPORTED": {
                "Supported": true
            },
            "D3D12_FEATURE_DATA_TIGHT_ALIGNMENT": {
                "SupportTier": 1
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS_EXPERIMENTAL": {
                "CooperativeVectorTier": 17
            },
            "D3D12_FEATURE_DATA_HARDWARE_SCHEDULING_QUEUE_GROUPINGS": {
                "ComputeQueuesPer3DQueue": 16
            },
            "D3D12_FEATURE_DATA_COOPERATIVE_VECTOR": {
                "pMatrixVectorMulAddProperties": [
                    {
                        "InputType": 7,
                        "InputInterpretation": 7,
                        "MatrixInterpretation": 7,
                        "BiasInterpretation": 7,
                        "OutputType": 7,
                        "TransposeSupported": true
                    },
                    {
                        "InputType": 19,
                        "InputInterpretation": 19,
                        "MatrixInterpretation": 19,
                        "BiasInterpretation": 4,
                        "OutputType": 4,
                        "TransposeSupported": false
                    },
                    {
                        "InputType": 4,
                        "InputInterpretation": 19,
                        "MatrixInterpretation": 19,
                        "BiasInterpretation": 4,
                        "OutputType": 4,
                        "TransposeSupported": false
                    },
                    {
                        "InputType": 8,
                        "InputInterpretation": 19,
                        "MatrixInterpretation": 19,
                        "BiasInterpretation": 4,
                        "OutputType": 4,
                        "TransposeSupported": false
                    },
                    {
                        "InputType": 5,
                        "InputInterpretation": 16,
                        "MatrixInterpretation": 19,
                        "BiasInterpretation": 4,
                        "OutputType": 4,
                        "TransposeSupported": false
                    },
                    {
                        "InputType": 16,
                        "InputInterpretation": 16,
                        "MatrixInterpretation": 19,
                        "BiasInterpretation": 4,
                        "OutputType": 4,
                        "TransposeSupported": false
                    },
                    {
                        "InputType": 18,
                        "InputInterpretation": 18,
                        "MatrixInterpretation": 19,
                        "BiasInterpretation": 4,
                        "OutputType": 4,
                        "TransposeSupported": false
                    },
                    {
                        "InputType": 4,
                        "InputInterpretation": 18,
                        "MatrixInterpretation": 19,
                        "BiasInterpretation": 4,
                        "OutputType": 4,
                        "TransposeSupported": false
                    },
                    {
                        "InputType": 5,
                        "InputInterpretation": 17,
                        "MatrixInterpretation": 19,
                        "BiasInterpretation": 4,
                        "OutputType": 4,
                        "TransposeSupported": false
                    },
                    {
                        "InputType": 18,
                        "InputInterpretation": 18,
                        "MatrixInterpretation": 18,
                        "BiasInterpretation": 4,
                        "OutputType": 4,
                        "TransposeSupported": false
                    },
                    {
                        "InputType": 4,
                        "InputInterpretation": 18,
                        "MatrixInterpretation": 18,
                        "BiasInterpretation": 4,
                        "OutputType": 4,
                        "TransposeSupported": false
                    },
                    {
                        "InputType": 5,
                        "InputInterpretation": 17,
                        "MatrixInterpretation": 18,
                        "BiasInterpretation": 4,
                        "OutputType": 4,
                        "TransposeSupported": false
                    },
                    {
                        "InputType": 19,
                        "InputInterpretation": 19,
                        "MatrixInterpretation": 18,
                        "BiasInterpretation": 4,
                        "OutputType": 4,
                        "TransposeSupported": false
                    },
                    {
                        "InputType": 4,
                        "InputInterpretation": 19,
                        "MatrixInterpretation": 18,
                        "BiasInterpretation": 4,
                        "OutputType": 4,
                        "TransposeSupported": false
                    },
                    {
                        "InputType": 5,
                        "InputInterpretation": 16,
                        "MatrixInterpretation": 18,
                        "BiasInterpretation": 4,
                        "OutputType": 4,
                        "TransposeSupported": false
                    },
                    {
                        "InputType": 16,
                        "InputInterpretation": 16,
                        "MatrixInterpretation": 18,
                        "BiasInterpretation": 4,
                        "OutputType": 4,
                        "TransposeSupported": false
                    },
                    {
                        "InputType": 7,
                        "InputInterpretation": 20,
                        "MatrixInterpretation": 20,
                        "BiasInterpretation": 7,
                        "OutputType": 7,
                        "TransposeSupported": false
                    },
                    {
                        "InputType": 7,
                        "InputInterpretation": 21,
                        "MatrixInterpretation": 21,
                        "BiasInterpretation": 7,
                        "OutputType": 7,
                        "TransposeSupported": false
                    }
                ],
                "pOuterProductAccumulateProperties": [
                    {
                        "InputType": 7,
                        "AccumulationType": 7
                    },
                    {
                        "InputType": 7,
                        "AccumulationType": 8
                    }
                ],
                "pVectorAccumulateProperties": [
                    {
                        "InputType": 7,
                        "AccumulationType": 7
                    }
                ]
            },
            "GetDescriptorHandleIncrementSize": {
                "D3D12_DESCRIPTOR_HEAP_TYPE_CBV_SRV_UAV": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_SAMPLER": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_RTV": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_DSV": 8
            },
            "NvAPI_D3D12_QueryCpuVisibleVidmem": {
                "pTotalBytes": 34326183936
            },
            "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported": {
                "NV_EXTN_OP_SHFL": true,
                "NV_EXTN_OP_SHFL_UP": true,
                "NV_EXTN_OP_SHFL_DOWN": true,
                "NV_EXTN_OP_SHFL_XOR": true,
                "NV_EXTN_OP_VOTE_ALL": true,
                "NV_EXTN_OP_VOTE_ANY": true,
                "NV_EXTN_OP_VOTE_BALLOT": true,
                "NV_EXTN_OP_GET_LANE_ID": true,
                "NV_EXTN_OP_FP16_ATOMIC": true,
                "NV_EXTN_OP_FP32_ATOMIC": true,
                "NV_EXTN_OP_UINT64_ATOMIC": true,
                "NV_EXTN_OP_GET_SHADING_RATE": true,
                "NV_EXTN_OP_VPRS_EVAL_ATTRIB_AT_SAMPLE": true
            },
            "NvAPI_D3D12_GetOptimalThreadCountForMesh": {
                "pThreadCount": 32
            },
            "NvAPI_D3D12_GetRaytracingCaps": {
                "NVAPI_D3D12_RAYTRACING_CAPS_TYPE_THREAD_REORDERING": 1,
                "NVAPI_D3D12_RAYTRACING_CAPS_TYPE_OPACITY_MICROMAP": 1,
                "NVAPI_D3D12_RAYTRACING_CAPS_TYPE_DISPLACEMENT_MICROMAP": 0,
                "NVAPI_D3D12_RAYTRACING_CAPS_TYPE_CLUSTER_OPERATIONS": 1,
                "NVAPI_D3D12_RAYTRACING_CAPS_TYPE_PARTITIONED_TLAS": 1,
                "NVAPI_D3D12_RAYTRACING_CAPS_TYPE_SPHERES": 0,
                "NVAPI_D3D12_RAYTRACING_CAPS_TYPE_LINEAR_SWEPT_SPHERES": 0
            },
            "NvAPI_D3D12_QueryWorkstationFeatureProperties": {
                "NV_D3D12_WORKSTATION_FEATURE_TYPE_PRESENT_BARRIER - supported": false,
                "NV_D3D12_WORKSTATION_FEATURE_TYPE_RDMA_BAR1_SUPPORT - supported": false
            },
            "NvAPI_D3D12_GetNeedsAppFPBlendClamping": {
                "pAppClampNeeded": false
            },
            "NvAPI_D3D12_GetPhysicalDeviceCooperativeVectorProperties": [
                {
                    "version": 65564,
                    "inputType": 0,
                    "inputInterpretation": 0,
                    "matrixInterpretation": 0,
                    "biasInterpretation": 0,
                    "resultType": 0,
                    "transpose": true
                },
                {
                    "version": 65564,
                    "inputType": 3,
                    "inputInterpretation": 3,
                    "matrixInterpretation": 3,
                    "biasInterpretation": 5,
                    "resultType": 5,
                    "transpose": false
                },
                {
                    "version": 65564,
                    "inputType": 5,
                    "inputInterpretation": 3,
                    "matrixInterpretation": 3,
                    "biasInterpretation": 5,
                    "resultType": 5,
                    "transpose": false
                },
                {
                    "version": 65564,
                    "inputType": 1,
                    "inputInterpretation": 3,
                    "matrixInterpretation": 3,
                    "biasInterpretation": 5,
                    "resultType": 5,
                    "transpose": false
                },
                {
                    "version": 65564,
                    "inputType": 9,
                    "inputInterpretation": 11,
                    "matrixInterpretation": 3,
                    "biasInterpretation": 5,
                    "resultType": 5,
                    "transpose": false
                },
                {
                    "version": 65564,
                    "inputType": 7,
                    "inputInterpretation": 7,
                    "matrixInterpretation": 3,
                    "biasInterpretation": 5,
                    "resultType": 5,
                    "transpose": false
                },
                {
                    "version": 65564,
                    "inputType": 5,
                    "inputInterpretation": 7,
                    "matrixInterpretation": 3,
                    "biasInterpretation": 5,
                    "resultType": 5,
                    "transpose": false
                },
                {
                    "version": 65564,
                    "inputType": 9,
                    "inputInterpretation": 12,
                    "matrixInterpretation": 3,
                    "biasInterpretation": 5,
                    "resultType": 5,
                    "transpose": false
                },
                {
                    "version": 65564,
                    "inputType": 7,
                    "inputInterpretation": 7,
                    "matrixInterpretation": 7,
                    "biasInterpretation": 5,
                    "resultType": 5,
                    "transpose": false
                },
                {
                    "version": 65564,
                    "inputType": 5,
                    "inputInterpretation": 7,
                    "matrixInterpretation": 7,
                    "biasInterpretation": 5,
                    "resultType": 5,
                    "transpose": false
                },
                {
                    "version": 65564,
                    "inputType": 9,
                    "inputInterpretation": 12,
                    "matrixInterpretation": 7,
                    "biasInterpretation": 5,
                    "resultType": 5,
                    "transpose": false
                },
                {
                    "version": 65564,
                    "inputType": 3,
                    "inputInterpretation": 3,
                    "matrixInterpretation": 7,
                    "biasInterpretation": 5,
                    "resultType": 5,
                    "transpose": false
                },
                {
                    "version": 65564,
                    "inputType": 5,
                    "inputInterpretation": 3,
                    "matrixInterpretation": 7,
                    "biasInterpretation": 5,
                    "resultType": 5,
                    "transpose": false
                },
                {
                    "version": 65564,
                    "inputType": 9,
                    "inputInterpretation": 11,
                    "matrixInterpretation": 7,
                    "biasInterpretation": 5,
                    "resultType": 5,
                    "transpose": false
                },
                {
                    "version": 65564,
                    "inputType": 0,
                    "inputInterpretation": 13,
                    "matrixInterpretation": 13,
                    "biasInterpretation": 0,
                    "resultType": 0,
                    "transpose": false
                },
                {
                    "version": 65564,
                    "inputType": 0,
                    "inputInterpretation": 14,
                    "matrixInterpretation": 14,
                    "biasInterpretation": 0,
                    "resultType": 0,
                    "transpose": false
                }
            ]
        }
    ]
}]