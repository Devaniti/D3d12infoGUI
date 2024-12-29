const reports = [{
    "Header": {
        "Program": "D3d12info",
        "Version": "3.7.2",
        "Build Date": "Dec 29 2024, 22:39:03",
        "Configuration": "Debug",
        "Configuration bits": "64-bit",
        "Generated on": "2024-12-29",
        "Using preview Agility SDK": false,
        "D3D12_SDK_VERSION": 614,
        "NvAPI compiled version": "R535-developer",
        "NvAPI_GetInterfaceVersionString": "NVidia Complete Version 1.10",
        "AMD_AGS_VERSION": "6.2.0",
        "agsGetVersionNumber": 25174016,
        "Intel GPU Detect compiled version": "2023-07-18"
    },
    "SystemInfo": {
        "OS Info": {
            "Windows version": "10.0.26100"
        },
        "System memory": {
            "GetPhysicallyInstalledSystemMemory": 67108864,
            "MEMORYSTATUSEX::ullTotalPhys": 67927564288,
            "MEMORYSTATUSEX::ullTotalPageFile": 72222531584,
            "MEMORYSTATUSEX::ullTotalVirtual": 140737488224256
        },
        "DXGI_FEATURE": {
            "DXGI_FEATURE_PRESENT_ALLOW_TEARING": true
        },
        "NvAPI_SYS_GetDriverAndBranchVersion": {
            "pDriverVersion": 56614,
            "szBuildBranchString": "r565_00"
        },
        "NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO": {
            "driverVersion": 56614,
            "szBuildBranch": "r565_00",
            "bIsDCHDriver": true,
            "bIsNVIDIAStudioPackage": false,
            "bIsNVIDIAGameReadyPackage": true,
            "bIsNVIDIARTXProductionBranchPackage": false,
            "bIsNVIDIARTXNewFeatureBranchPackage": false,
            "szBuildBaseBranch": "R565"
        },
        "AGSGPUInfo": {
            "driverVersion": "",
            "radeonSoftwareVersion": ""
        }
    },
    "Adapters": [
        {
            "AdapterIndex": 0,
            "DXGI_ADAPTER_DESC3": {
                "Description": "NVIDIA GeForce RTX 3060 Laptop GPU",
                "VendorId": 4318,
                "DeviceId": 9504,
                "SubSysId": 461115459,
                "Revision": 161,
                "DedicatedVideoMemory": 6287261696,
                "DedicatedSystemMemory": 0,
                "SharedSystemMemory": 33963782144,
                "AdapterLuid": "00000000-0001310C",
                "Flags": 44,
                "GraphicsPreemptionGranularity": 3,
                "ComputePreemptionGranularity": 1
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_LOCAL]": {
                "Budget": 5481955328,
                "AvailableForReservation": 2875195392
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_NON_LOCAL]": {
                "Budget": 33158475776,
                "AvailableForReservation": 16713455616
            },
            "CheckInterfaceSupport": {
                "UMDVersion": 9007199255730646
            },
            "NvPhysicalGpuHandle": {
                "NvAPI_GPU_GetSystemType": 1,
                "NvAPI_GPU_GetFullName": "NVIDIA GeForce RTX 3060 Laptop GPU",
                "NvAPI_GPU_GetPCIIdentifiers - pDeviceID": 622858462,
                "NvAPI_GPU_GetPCIIdentifiers - pSubSystemId": 461115459,
                "NvAPI_GPU_GetPCIIdentifiers - pRevisionId": 161,
                "NvAPI_GPU_GetPCIIdentifiers - pExtDeviceId": 9504,
                "NvAPI_GPU_GetGPUType": 2,
                "NvAPI_GPU_GetBusType": 3,
                "NvAPI_GPU_GetVbiosRevision": 2483435520,
                "NvAPI_GPU_GetVbiosOEMRevision": 9,
                "NvAPI_GPU_GetVbiosVersionString": "94.06.38.00.09",
                "NvAPI_GPU_GetPhysicalFrameBufferSize": 6290944,
                "NvAPI_GPU_GetVirtualFrameBufferSize": 6291456,
                "NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id": 368,
                "NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::implementation_id": 6,
                "NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::revision_id": 161,
                "NvAPI_GPU_GetVRReadyData - NV_GPU_VR_READY::isVRReady": false,
                "NvAPI_GPU_QueryIlluminationSupport(NV_GPU_IA_LOGO_BRIGHTNESS)": false,
                "NvAPI_GPU_QueryIlluminationSupport(NV_GPU_IA_SLI_BRIGHTNESS)": false,
                "NvAPI_GPU_QueryWorkstationFeatureSupport(NV_GPU_WORKSTATION_FEATURE_TYPE_NVIDIA_RTX_VR_READY)": -104,
                "NvAPI_GPU_QueryWorkstationFeatureSupport(NV_GPU_WORKSTATION_FEATURE_TYPE_PROVIZ)": -104,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemory": 6442450944,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::availableDedicatedVideoMemory": 6287261696,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::systemVideoMemory": 0,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::sharedSystemMemory": 33963782144,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::curAvailableDedicatedVideoMemory": 3643822080,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryEvictionsSize": 102868774912,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryEvictionCount": 4936,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryPromotionsSize": 90164830208,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryPromotionCount": 10213,
                "NvAPI_GPU_GetShaderSubPipeCount": 15,
                "NvAPI_GPU_GetGpuCoreCount": 3840,
                "NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::isSupported": false,
                "NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::configurationOptions": 0,
                "NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::isEnabled": false,
                "NvAPI_GPU_GetRamBusWidth": 192,
                "NvAPI_GPU_GetGPUInfo - NV_GPU_INFO::bIsExternalGpu": false,
                "NvAPI_GPU_GetGPUInfo - NV_GPU_INFO::rayTracingCores": 30,
                "NvAPI_GPU_GetGPUInfo - NV_GPU_INFO::tensorCores": 120
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS": {
                "DoublePrecisionFloatShaderOps": true,
                "OutputMergerLogicOp": true,
                "MinPrecisionSupport": 2,
                "TiledResourcesTier": 3,
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
                "TotalLaneCount": 3840,
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
            "D3D12_FEATURE_DATA_D3D12_OPTIONS21": {
                "WorkGraphsTier": 10,
                "ExecuteIndirectTier": 11,
                "SampleCmpGradientAndBiasSupported": true,
                "ExtendedCommandInfoSupported": true
            },
            "GetDescriptorHandleIncrementSize": {
                "D3D12_DESCRIPTOR_HEAP_TYPE_CBV_SRV_UAV": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_SAMPLER": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_RTV": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_DSV": 8
            },
            "NvAPI_D3D12_QueryCpuVisibleVidmem": {
                "pTotalBytes": 8556380160
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
                "NVAPI_D3D12_RAYTRACING_CAPS_TYPE_THREAD_REORDERING": 0,
                "NVAPI_D3D12_RAYTRACING_CAPS_TYPE_OPACITY_MICROMAP": 1,
                "NVAPI_D3D12_RAYTRACING_CAPS_TYPE_DISPLACEMENT_MICROMAP": 1
            },
            "NvAPI_D3D12_QueryWorkstationFeatureProperties": {
                "NV_D3D12_WORKSTATION_FEATURE_TYPE_PRESENT_BARRIER - supported": false,
                "NV_D3D12_WORKSTATION_FEATURE_TYPE_RDMA_BAR1_SUPPORT - supported": false
            },
            "NvAPI_D3D12_GetNeedsAppFPBlendClamping": {
                "pAppClampNeeded": false
            },
            "Formats": {
                "0": {
                    "Support1": 1,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "1": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "2": {
                    "Support1": 49599483,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "3": {
                    "Support1": 40915451,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "4": {
                    "Support1": 40915451,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "5": {
                    "Support1": 1052912,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "6": {
                    "Support1": 5509627,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "7": {
                    "Support1": 5247483,
                    "Support2": 256,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "8": {
                    "Support1": 5247483,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "9": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "10": {
                    "Support1": 318559219,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "11": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "12": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "13": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "14": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "15": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "16": {
                    "Support1": 49599483,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "17": {
                    "Support1": 40915451,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "18": {
                    "Support1": 40915451,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "19": {
                    "Support1": 1052848,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "20": {
                    "Support1": 3215536,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "21": {
                    "Support1": 80746416,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "22": {
                    "Support1": 5247408,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "23": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "24": {
                    "Support1": 872207347,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "25": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "26": {
                    "Support1": 48550899,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "27": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "28": {
                    "Support1": 872207347,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "29": {
                    "Support1": 301782000,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "30": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "31": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "32": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "33": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "34": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "35": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "36": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "37": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "38": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "39": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "40": {
                    "Support1": 3215536,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "41": {
                    "Support1": 116709371,
                    "Support2": 712,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "42": {
                    "Support1": 40915455,
                    "Support2": 1023,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "43": {
                    "Support1": 40915451,
                    "Support2": 767,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "44": {
                    "Support1": 1052848,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "45": {
                    "Support1": 3215536,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "46": {
                    "Support1": 80746416,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "47": {
                    "Support1": 5247408,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "48": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "49": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "50": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "51": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "52": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "53": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "54": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "55": {
                    "Support1": 3215536,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "56": {
                    "Support1": 116709363,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "57": {
                    "Support1": 40915447,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "58": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "59": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "60": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "61": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "62": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "63": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "64": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "65": {
                    "Support1": 48550896,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "66": {},
                "67": {
                    "Support1": 8393712,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "68": {
                    "Support1": 8393712,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "69": {
                    "Support1": 8393712,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "70": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "71": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "72": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "73": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "74": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "75": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "76": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "77": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "78": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "79": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "80": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "81": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "82": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "83": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "84": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "85": {
                    "Support1": 14996464,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "86": {
                    "Support1": 14996464,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "87": {
                    "Support1": 872207347,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "88": {
                    "Support1": 821351411,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "89": {
                    "Support1": 286785568,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "90": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "91": {
                    "Support1": 301782000,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "92": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "93": {
                    "Support1": 16045040,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "94": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "95": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "96": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "97": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "98": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "99": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "100": {
                    "Support1": 578868000,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "101": {
                    "Support1": 41943840,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "102": {
                    "Support1": 41947936,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "103": {
                    "Support1": 4202742560,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "104": {
                    "Support1": 981517088,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "105": {
                    "PlaneCount": 2
                },
                "106": {
                    "Support1": 939524128,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "107": {
                    "Support1": 847250208,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "108": {
                    "Support1": 41943840,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "109": {
                    "Support1": 41943840,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "110": {
                    "PlaneCount": 2
                },
                "111": {
                    "Support1": 536870944,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "112": {
                    "Support1": 536870944,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "113": {
                    "Support1": 536870944,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "114": {
                    "Support1": 536870944,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "115": {
                    "Support1": 8655856,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "130": {},
                "131": {},
                "132": {},
                "189": {
                    "Support1": 4128,
                    "Support2": 32768,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "190": {
                    "Support1": 4128,
                    "Support2": 32768,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "191": {
                    "Support1": 8655856,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                }
            }
        },
        {
            "AdapterIndex": 1,
            "DXGI_ADAPTER_DESC3": {
                "Description": "AMD Radeon(TM) Graphics",
                "VendorId": 4098,
                "DeviceId": 5761,
                "SubSysId": 461115459,
                "Revision": 200,
                "DedicatedVideoMemory": 475852800,
                "DedicatedSystemMemory": 0,
                "SharedSystemMemory": 33963782144,
                "AdapterLuid": "00000000-00015187",
                "Flags": 44,
                "GraphicsPreemptionGranularity": 1,
                "ComputePreemptionGranularity": 0
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_LOCAL]": {
                "Budget": 33634328576,
                "AvailableForReservation": 16951382016
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_NON_LOCAL]": {
                "Budget": 0,
                "AvailableForReservation": 0
            },
            "CheckInterfaceSupport": {
                "UMDVersion": 9007200042419204
            },
            "AGSDeviceInfo": {
                "adapterString": "AMD Radeon(TM) Graphics",
                "asicFamily": 0,
                "isAPU": true,
                "isExternal": false,
                "vendorId": 4098,
                "deviceId": 5761,
                "revisionId": 200,
                "numCUs": 6,
                "numWGPs": 0,
                "numROPs": 16,
                "coreClock": 22,
                "memoryClock": 24,
                "memoryBandwidth": 76800,
                "teraFlops": 0.016896000131964684,
                "localMemoryInBytes": 536870912,
                "sharedMemoryInBytes": 33963782144
            },
            "AGSDX12ReturnedParams::ExtensionsSupported": {
                "intrinsics16": true,
                "intrinsics17": true,
                "userMarkers": true,
                "appRegistration": true,
                "UAVBindSlot": true,
                "intrinsics19": true,
                "baseVertex": true,
                "baseInstance": true,
                "getWaveSize": true,
                "floatConversion": true,
                "readLaneAt": true,
                "rayHitToken": true,
                "shaderClock": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS": {
                "DoublePrecisionFloatShaderOps": true,
                "OutputMergerLogicOp": true,
                "MinPrecisionSupport": 2,
                "TiledResourcesTier": 3,
                "ResourceBindingTier": 3,
                "PSSpecifiedStencilRefSupported": true,
                "TypedUAVLoadAdditionalFormats": true,
                "ROVsSupported": true,
                "ConservativeRasterizationTier": 3,
                "MaxGPUVirtualAddressBitsPerResource": 47,
                "StandardSwizzle64KBSupported": false,
                "CrossNodeSharingTier": 0,
                "CrossAdapterRowMajorTextureSupported": false,
                "VPAndRTArrayIndexFromAnyShaderFeedingRasterizerSupportedWithoutGSEmulation": true,
                "ResourceHeapTier": 2
            },
            "D3D12_FEATURE_DATA_GPU_VIRTUAL_ADDRESS_SUPPORT": {
                "MaxGPUVirtualAddressBitsPerResource": 47,
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
                "UMA": true,
                "CacheCoherentUMA": false,
                "IsolatedMMU": true
            },
            "D3D12_FEATURE_DATA_FEATURE_LEVELS": {
                "MaxSupportedFeatureLevel": 49408
            },
            "D3D12_FEATURE_DATA_SHADER_CACHE": {
                "SupportFlags": 127
            },
            "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY": {
                "TYPE_DIRECT.PRIORITY_NORMAL.PriorityForTypeIsSupported": true,
                "TYPE_DIRECT.PRIORITY_HIGH.PriorityForTypeIsSupported": true,
                "TYPE_DIRECT.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": false,
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
            "D3D12_FEATURE_DATA_D3D12_OPTIONS1": {
                "WaveOps": true,
                "WaveLaneCountMin": 32,
                "WaveLaneCountMax": 64,
                "TotalLaneCount": 768,
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
                "RaytracingTier": 11
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS6": {
                "AdditionalShadingRatesSupported": false,
                "PerPrimitiveShadingRateSupportedWithViewportIndexing": true,
                "VariableShadingRateTier": 2,
                "ShadingRateImageTileSize": 8,
                "BackgroundProcessingSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS7": {
                "MeshShaderTier": 0,
                "SamplerFeedbackTier": 100
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS8": {
                "UnalignedBlockTexturesSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS9": {
                "MeshShaderPipelineStatsSupported": false,
                "MeshShaderSupportsFullRangeRenderTargetArrayIndex": false,
                "AtomicInt64OnTypedResourceSupported": true,
                "AtomicInt64OnGroupSharedSupported": true,
                "DerivativesInMeshAndAmplificationShadersSupported": false,
                "WaveMMATier": 0
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS10": {
                "VariableRateShadingSumCombinerSupported": true,
                "MeshShaderPerPrimitiveShadingRateSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS11": {
                "AtomicInt64OnDescriptorHeapResourceSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS12": {
                "MSPrimitivesPipelineStatisticIncludesCulledPrimitives": 0,
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
                "SupportedSampleCountsWithNoOutputs": 29,
                "PointSamplingAddressesNeverRoundUp": true,
                "RasterizerDesc2Supported": true,
                "NarrowQuadrilateralLinesSupported": true,
                "AnisoFilterWithPointMipSupported": true,
                "MaxSamplerDescriptorHeapSize": 4096,
                "MaxSamplerDescriptorHeapSizeWithStaticSamplers": 4096,
                "MaxViewDescriptorHeapSize": 33554432,
                "ComputeOnlyCustomHeapSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS20": {
                "ComputeOnlyWriteWatchSupported": true,
                "RecreateAtTier": 0
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS21": {
                "WorkGraphsTier": 0,
                "ExecuteIndirectTier": 10,
                "SampleCmpGradientAndBiasSupported": true,
                "ExtendedCommandInfoSupported": true
            },
            "GetDescriptorHandleIncrementSize": {
                "D3D12_DESCRIPTOR_HEAP_TYPE_CBV_SRV_UAV": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_SAMPLER": 16,
                "D3D12_DESCRIPTOR_HEAP_TYPE_RTV": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_DSV": 224
            },
            "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported": {},
            "NvAPI_D3D12_GetRaytracingCaps": {},
            "NvAPI_D3D12_QueryWorkstationFeatureProperties": {},
            "Formats": {
                "0": {
                    "Support1": 1,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "1": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "2": {
                    "Support1": 49599483,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "3": {
                    "Support1": 40915451,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "4": {
                    "Support1": 40915451,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "5": {
                    "Support1": 1052912,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "6": {
                    "Support1": 5509627,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "7": {
                    "Support1": 5247483,
                    "Support2": 256,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "8": {
                    "Support1": 5247483,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "9": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "10": {
                    "Support1": 855430131,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "11": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "12": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "13": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "14": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "15": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "16": {
                    "Support1": 49599483,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "17": {
                    "Support1": 40915451,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "18": {
                    "Support1": 40915451,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "19": {
                    "Support1": 1052848,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "20": {
                    "Support1": 3215536,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "21": {
                    "Support1": 80746416,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "22": {
                    "Support1": 5247408,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "23": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "24": {
                    "Support1": 872207347,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "25": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "26": {
                    "Support1": 48550899,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "27": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "28": {
                    "Support1": 872207347,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "29": {
                    "Support1": 838652912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "30": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "31": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "32": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "33": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "34": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "35": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "36": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "37": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "38": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "39": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "40": {
                    "Support1": 3215536,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "41": {
                    "Support1": 116709371,
                    "Support2": 712,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "42": {
                    "Support1": 40915455,
                    "Support2": 1023,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "43": {
                    "Support1": 40915451,
                    "Support2": 767,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "44": {
                    "Support1": 1052848,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "45": {
                    "Support1": 3215536,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "46": {
                    "Support1": 80746416,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "47": {
                    "Support1": 5247408,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "48": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "49": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "50": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "51": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "52": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "53": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "54": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "55": {
                    "Support1": 3215536,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "56": {
                    "Support1": 116709363,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "57": {
                    "Support1": 40915447,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "58": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "59": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "60": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "61": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "62": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "63": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "64": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "65": {
                    "Support1": 48550896,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "66": {},
                "67": {
                    "Support1": 48288752,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "68": {
                    "Support1": 8393712,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "69": {
                    "Support1": 8393712,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "70": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "71": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "72": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "73": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "74": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "75": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "76": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "77": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "78": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "79": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "80": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "81": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "82": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "83": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "84": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "85": {
                    "Support1": 48550896,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "86": {
                    "Support1": 48550896,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "87": {
                    "Support1": 872207347,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "88": {
                    "Support1": 821351411,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "89": {
                    "Support1": 823656480,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "90": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "91": {
                    "Support1": 838652912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "92": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "93": {
                    "Support1": 16045040,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "94": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "95": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "96": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "97": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "98": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "99": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "100": {
                    "PlaneCount": 1
                },
                "101": {
                    "PlaneCount": 1
                },
                "102": {
                    "PlaneCount": 1
                },
                "103": {
                    "Support1": 981517088,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "104": {
                    "Support1": 981517088,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "105": {
                    "Support1": 981517088,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "106": {
                    "Support1": 939524128,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "107": {
                    "Support1": 847250208,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "108": {
                    "PlaneCount": 1
                },
                "109": {
                    "PlaneCount": 1
                },
                "110": {
                    "PlaneCount": 2
                },
                "111": {
                    "PlaneCount": 1
                },
                "112": {
                    "PlaneCount": 1
                },
                "113": {
                    "PlaneCount": 1
                },
                "114": {
                    "PlaneCount": 1
                },
                "115": {
                    "Support1": 48550896,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "130": {},
                "131": {},
                "132": {},
                "189": {
                    "Support1": 4128,
                    "Support2": 32768,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "190": {
                    "Support1": 4128,
                    "Support2": 32768,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "191": {
                    "Support1": 14996464,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                }
            }
        },
        {
            "AdapterIndex": 2,
            "DXGI_ADAPTER_DESC3": {
                "Description": "Microsoft Basic Render Driver",
                "VendorId": 5140,
                "DeviceId": 140,
                "SubSysId": 0,
                "Revision": 0,
                "DedicatedVideoMemory": 0,
                "DedicatedSystemMemory": 0,
                "SharedSystemMemory": 33963782144,
                "AdapterLuid": "00000000-00015104",
                "Flags": 46,
                "GraphicsPreemptionGranularity": 4,
                "ComputePreemptionGranularity": 4
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_LOCAL]": {
                "Budget": 33158475776,
                "AvailableForReservation": 16713455616
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_NON_LOCAL]": {
                "Budget": 0,
                "AvailableForReservation": 0
            },
            "CheckInterfaceSupport": {
                "UMDVersion": 2814751477598042
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS": {
                "DoublePrecisionFloatShaderOps": true,
                "OutputMergerLogicOp": true,
                "MinPrecisionSupport": 3,
                "TiledResourcesTier": 3,
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
                "HighestShaderModel": 104
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
            "D3D12_FEATURE_DATA_D3D12_OPTIONS1": {
                "WaveOps": true,
                "WaveLaneCountMin": 4,
                "WaveLaneCountMax": 4,
                "TotalLaneCount": 64,
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
                "RaytracingTier": 11
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS6": {
                "AdditionalShadingRatesSupported": true,
                "PerPrimitiveShadingRateSupportedWithViewportIndexing": false,
                "VariableShadingRateTier": 1,
                "ShadingRateImageTileSize": 0,
                "BackgroundProcessingSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS7": {
                "MeshShaderTier": 10,
                "SamplerFeedbackTier": 100
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS8": {
                "UnalignedBlockTexturesSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS9": {
                "MeshShaderPipelineStatsSupported": true,
                "MeshShaderSupportsFullRangeRenderTargetArrayIndex": true,
                "AtomicInt64OnTypedResourceSupported": true,
                "AtomicInt64OnGroupSharedSupported": true,
                "DerivativesInMeshAndAmplificationShadersSupported": true,
                "WaveMMATier": 0
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS10": {
                "VariableRateShadingSumCombinerSupported": false,
                "MeshShaderPerPrimitiveShadingRateSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS11": {
                "AtomicInt64OnDescriptorHeapResourceSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS12": {
                "MSPrimitivesPipelineStatisticIncludesCulledPrimitives": 0,
                "EnhancedBarriersSupported": true,
                "RelaxedFormatCastingSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS13": {
                "UnrestrictedBufferTextureCopyPitchSupported": true,
                "UnrestrictedVertexElementAlignmentSupported": true,
                "InvertedViewportHeightFlipsYSupported": true,
                "InvertedViewportDepthFlipsZSupported": false,
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
                "MaxSamplerDescriptorHeapSize": 2097152,
                "MaxSamplerDescriptorHeapSizeWithStaticSamplers": 2097152,
                "MaxViewDescriptorHeapSize": 2097152,
                "ComputeOnlyCustomHeapSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS20": {
                "ComputeOnlyWriteWatchSupported": true,
                "RecreateAtTier": 0
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS21": {
                "WorkGraphsTier": 10,
                "ExecuteIndirectTier": 11,
                "SampleCmpGradientAndBiasSupported": true,
                "ExtendedCommandInfoSupported": true
            },
            "GetDescriptorHandleIncrementSize": {
                "D3D12_DESCRIPTOR_HEAP_TYPE_CBV_SRV_UAV": 64,
                "D3D12_DESCRIPTOR_HEAP_TYPE_SAMPLER": 64,
                "D3D12_DESCRIPTOR_HEAP_TYPE_RTV": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_DSV": 8
            },
            "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported": {},
            "NvAPI_D3D12_GetRaytracingCaps": {},
            "NvAPI_D3D12_QueryWorkstationFeatureProperties": {},
            "Formats": {
                "0": {
                    "Support1": 1,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "1": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "2": {
                    "Support1": 49599483,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "3": {
                    "Support1": 40915451,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "4": {
                    "Support1": 40915451,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "5": {
                    "Support1": 1052912,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "6": {
                    "Support1": 16045051,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "7": {
                    "Support1": 7361019,
                    "Support2": 256,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "8": {
                    "Support1": 7361019,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "9": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "10": {
                    "Support1": 50123763,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "11": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "12": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "13": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "14": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "15": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "16": {
                    "Support1": 49599483,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "17": {
                    "Support1": 40915451,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "18": {
                    "Support1": 40915451,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "19": {
                    "Support1": 1052848,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "20": {
                    "Support1": 3215536,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "21": {
                    "Support1": 80746416,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "22": {
                    "Support1": 5247408,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "23": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "24": {
                    "Support1": 66900979,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "25": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "26": {
                    "Support1": 48550899,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "27": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "28": {
                    "Support1": 66900979,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "29": {
                    "Support1": 33346544,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "30": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "31": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "32": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "33": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "34": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "35": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "36": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "37": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "38": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "39": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "40": {
                    "Support1": 3215536,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "41": {
                    "Support1": 116709371,
                    "Support2": 712,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "42": {
                    "Support1": 40915455,
                    "Support2": 1023,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "43": {
                    "Support1": 40915451,
                    "Support2": 767,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "44": {
                    "Support1": 1052848,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "45": {
                    "Support1": 3215536,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "46": {
                    "Support1": 80746416,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "47": {
                    "Support1": 5247408,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "48": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "49": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "50": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "51": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "52": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "53": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "54": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "55": {
                    "Support1": 3215536,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "56": {
                    "Support1": 116709363,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "57": {
                    "Support1": 40915447,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "58": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "59": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "60": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "61": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "62": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "63": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "64": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "65": {
                    "Support1": 48550896,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "66": {},
                "67": {
                    "Support1": 8393712,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "68": {
                    "Support1": 8393712,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "69": {
                    "Support1": 8393712,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "70": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "71": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "72": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "73": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "74": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "75": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "76": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "77": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "78": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "79": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "80": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "81": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "82": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "83": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "84": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "85": {
                    "Support1": 48550899,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "86": {
                    "Support1": 48550899,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "87": {
                    "Support1": 66900979,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "88": {
                    "Support1": 16045043,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "89": {
                    "Support1": 18350112,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "90": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "91": {
                    "Support1": 33346544,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "92": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "93": {
                    "Support1": 16045040,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "94": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "95": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "96": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "97": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "98": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "99": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "100": {
                    "Support1": 41997088,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "101": {
                    "Support1": 41943840,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "102": {
                    "Support1": 41947936,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "103": {
                    "Support1": 41992992,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "104": {
                    "Support1": 41992992,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "105": {
                    "Support1": 41992992,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "106": {
                    "Support1": 32,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "107": {
                    "Support1": 41943840,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "108": {
                    "Support1": 41943840,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "109": {
                    "Support1": 41943840,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "110": {
                    "PlaneCount": 2
                },
                "111": {
                    "PlaneCount": 1
                },
                "112": {
                    "PlaneCount": 1
                },
                "113": {
                    "Support1": 32,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "114": {
                    "Support1": 32,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "115": {
                    "Support1": 48550899,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "130": {},
                "131": {},
                "132": {},
                "189": {
                    "Support1": 4128,
                    "Support2": 32768,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "190": {
                    "Support1": 4128,
                    "Support2": 32768,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "191": {
                    "Support1": 48550899,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                }
            }
        }
    ]
},{
    "Header": {
        "Program": "D3d12info",
        "Version": "3.7.2",
        "Build Date": "Dec 29 2024, 22:39:03",
        "Configuration": "Debug",
        "Configuration bits": "64-bit",
        "Generated on": "2024-12-29",
        "Using preview Agility SDK": true,
        "D3D12_PREVIEW_SDK_VERSION": 715,
        "NvAPI compiled version": "R535-developer",
        "NvAPI_GetInterfaceVersionString": "NVidia Complete Version 1.10",
        "AMD_AGS_VERSION": "6.2.0",
        "agsGetVersionNumber": 25174016,
        "Intel GPU Detect compiled version": "2023-07-18"
    },
    "SystemInfo": {
        "OS Info": {
            "Windows version": "10.0.26100"
        },
        "System memory": {
            "GetPhysicallyInstalledSystemMemory": 67108864,
            "MEMORYSTATUSEX::ullTotalPhys": 67927564288,
            "MEMORYSTATUSEX::ullTotalPageFile": 72222531584,
            "MEMORYSTATUSEX::ullTotalVirtual": 140737488224256
        },
        "DXGI_FEATURE": {
            "DXGI_FEATURE_PRESENT_ALLOW_TEARING": true
        },
        "NvAPI_SYS_GetDriverAndBranchVersion": {
            "pDriverVersion": 56614,
            "szBuildBranchString": "r565_00"
        },
        "NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO": {
            "driverVersion": 56614,
            "szBuildBranch": "r565_00",
            "bIsDCHDriver": true,
            "bIsNVIDIAStudioPackage": false,
            "bIsNVIDIAGameReadyPackage": true,
            "bIsNVIDIARTXProductionBranchPackage": false,
            "bIsNVIDIARTXNewFeatureBranchPackage": false,
            "szBuildBaseBranch": "R565"
        },
        "AGSGPUInfo": {
            "driverVersion": "",
            "radeonSoftwareVersion": ""
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
                "Description": "NVIDIA GeForce RTX 3060 Laptop GPU",
                "VendorId": 4318,
                "DeviceId": 9504,
                "SubSysId": 461115459,
                "Revision": 161,
                "DedicatedVideoMemory": 6287261696,
                "DedicatedSystemMemory": 0,
                "SharedSystemMemory": 33963782144,
                "AdapterLuid": "00000000-0001310C",
                "Flags": 44,
                "GraphicsPreemptionGranularity": 3,
                "ComputePreemptionGranularity": 1
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_LOCAL]": {
                "Budget": 5481955328,
                "AvailableForReservation": 2875195392
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_NON_LOCAL]": {
                "Budget": 33158475776,
                "AvailableForReservation": 16713455616
            },
            "CheckInterfaceSupport": {
                "UMDVersion": 9007199255730646
            },
            "NvPhysicalGpuHandle": {
                "NvAPI_GPU_GetSystemType": 1,
                "NvAPI_GPU_GetFullName": "NVIDIA GeForce RTX 3060 Laptop GPU",
                "NvAPI_GPU_GetPCIIdentifiers - pDeviceID": 622858462,
                "NvAPI_GPU_GetPCIIdentifiers - pSubSystemId": 461115459,
                "NvAPI_GPU_GetPCIIdentifiers - pRevisionId": 161,
                "NvAPI_GPU_GetPCIIdentifiers - pExtDeviceId": 9504,
                "NvAPI_GPU_GetGPUType": 2,
                "NvAPI_GPU_GetBusType": 3,
                "NvAPI_GPU_GetVbiosRevision": 2483435520,
                "NvAPI_GPU_GetVbiosOEMRevision": 9,
                "NvAPI_GPU_GetVbiosVersionString": "94.06.38.00.09",
                "NvAPI_GPU_GetPhysicalFrameBufferSize": 6290944,
                "NvAPI_GPU_GetVirtualFrameBufferSize": 6291456,
                "NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id": 368,
                "NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::implementation_id": 6,
                "NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::revision_id": 161,
                "NvAPI_GPU_GetVRReadyData - NV_GPU_VR_READY::isVRReady": false,
                "NvAPI_GPU_QueryIlluminationSupport(NV_GPU_IA_LOGO_BRIGHTNESS)": false,
                "NvAPI_GPU_QueryIlluminationSupport(NV_GPU_IA_SLI_BRIGHTNESS)": false,
                "NvAPI_GPU_QueryWorkstationFeatureSupport(NV_GPU_WORKSTATION_FEATURE_TYPE_NVIDIA_RTX_VR_READY)": -104,
                "NvAPI_GPU_QueryWorkstationFeatureSupport(NV_GPU_WORKSTATION_FEATURE_TYPE_PROVIZ)": -104,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemory": 6442450944,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::availableDedicatedVideoMemory": 6287261696,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::systemVideoMemory": 0,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::sharedSystemMemory": 33963782144,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::curAvailableDedicatedVideoMemory": 3660222464,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryEvictionsSize": 102868774912,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryEvictionCount": 4936,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryPromotionsSize": 90164961280,
                "NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryPromotionCount": 10214,
                "NvAPI_GPU_GetShaderSubPipeCount": 15,
                "NvAPI_GPU_GetGpuCoreCount": 3840,
                "NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::isSupported": false,
                "NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::configurationOptions": 0,
                "NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::isEnabled": false,
                "NvAPI_GPU_GetRamBusWidth": 192,
                "NvAPI_GPU_GetGPUInfo - NV_GPU_INFO::bIsExternalGpu": false,
                "NvAPI_GPU_GetGPUInfo - NV_GPU_INFO::rayTracingCores": 30,
                "NvAPI_GPU_GetGPUInfo - NV_GPU_INFO::tensorCores": 120
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
            "D3D12_FEATURE_DATA_APPLICATION_SPECIFIC_DRIVER_STATE": {
                "Supported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS1": {
                "WaveOps": true,
                "WaveLaneCountMin": 32,
                "WaveLaneCountMax": 32,
                "TotalLaneCount": 3840,
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
                "RecreateAtTier": 1
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS21": {
                "WorkGraphsTier": 11,
                "ExecuteIndirectTier": 11,
                "SampleCmpGradientAndBiasSupported": true,
                "ExtendedCommandInfoSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS22": {
                "TightAlignmentSupported": false
            },
            "GetDescriptorHandleIncrementSize": {
                "D3D12_DESCRIPTOR_HEAP_TYPE_CBV_SRV_UAV": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_SAMPLER": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_RTV": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_DSV": 8
            },
            "DirectSR": [
                {
                    "VariantId": "{9C01B751-23ED-4620-B99F-980F2AFE0C97}",
                    "VariantName": "DLSS",
                    "Flags": 5,
                    "OptimizationRankings": [
                        1,
                        2,
                        0,
                        3,
                        4,
                        5,
                        6
                    ],
                    "OptimalTargetFormat": 10
                },
                {
                    "VariantId": "{9578D791-9494-4707-8C35-4AF6D58F1DB9}",
                    "VariantName": "AMD FidelityFX Super Resolution 3.1",
                    "Flags": 59,
                    "OptimizationRankings": [
                        0,
                        1,
                        3,
                        4,
                        2,
                        5,
                        6
                    ],
                    "OptimalTargetFormat": 0
                }
            ],
            "NvAPI_D3D12_QueryCpuVisibleVidmem": {
                "pTotalBytes": 8556380160
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
                "NVAPI_D3D12_RAYTRACING_CAPS_TYPE_THREAD_REORDERING": 0,
                "NVAPI_D3D12_RAYTRACING_CAPS_TYPE_OPACITY_MICROMAP": 1,
                "NVAPI_D3D12_RAYTRACING_CAPS_TYPE_DISPLACEMENT_MICROMAP": 1
            },
            "NvAPI_D3D12_QueryWorkstationFeatureProperties": {
                "NV_D3D12_WORKSTATION_FEATURE_TYPE_PRESENT_BARRIER - supported": false,
                "NV_D3D12_WORKSTATION_FEATURE_TYPE_RDMA_BAR1_SUPPORT - supported": false
            },
            "NvAPI_D3D12_GetNeedsAppFPBlendClamping": {
                "pAppClampNeeded": false
            },
            "Formats": {
                "0": {
                    "Support1": 1,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "1": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "2": {
                    "Support1": 49599483,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "3": {
                    "Support1": 40915451,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "4": {
                    "Support1": 40915451,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "5": {
                    "Support1": 1052912,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "6": {
                    "Support1": 5509627,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "7": {
                    "Support1": 5247483,
                    "Support2": 256,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "8": {
                    "Support1": 5247483,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "9": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "10": {
                    "Support1": 318559219,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "11": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "12": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "13": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "14": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "15": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "16": {
                    "Support1": 49599483,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "17": {
                    "Support1": 40915451,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "18": {
                    "Support1": 40915451,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "19": {
                    "Support1": 1052848,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "20": {
                    "Support1": 3215536,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "21": {
                    "Support1": 80746416,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "22": {
                    "Support1": 5247408,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "23": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "24": {
                    "Support1": 872207347,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "25": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "26": {
                    "Support1": 48550899,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "27": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "28": {
                    "Support1": 872207347,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "29": {
                    "Support1": 301782000,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "30": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "31": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "32": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "33": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "34": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "35": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "36": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "37": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "38": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "39": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "40": {
                    "Support1": 3215536,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "41": {
                    "Support1": 116709371,
                    "Support2": 712,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "42": {
                    "Support1": 40915455,
                    "Support2": 1023,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "43": {
                    "Support1": 40915451,
                    "Support2": 767,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "44": {
                    "Support1": 1052848,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "45": {
                    "Support1": 3215536,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "46": {
                    "Support1": 80746416,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "47": {
                    "Support1": 5247408,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "48": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "49": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "50": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "51": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "52": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "53": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "54": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "55": {
                    "Support1": 3215536,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "56": {
                    "Support1": 116709363,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "57": {
                    "Support1": 40915447,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "58": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "59": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "60": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "61": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "62": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "63": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "64": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "65": {
                    "Support1": 48550896,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "66": {},
                "67": {
                    "Support1": 8393712,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "68": {
                    "Support1": 8393712,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "69": {
                    "Support1": 8393712,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "70": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "71": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "72": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "73": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "74": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "75": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "76": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "77": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "78": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "79": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "80": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "81": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "82": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "83": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "84": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "85": {
                    "Support1": 14996464,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "86": {
                    "Support1": 14996464,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "87": {
                    "Support1": 872207347,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "88": {
                    "Support1": 821351411,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "89": {
                    "Support1": 286785568,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "90": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "91": {
                    "Support1": 301782000,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "92": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "93": {
                    "Support1": 16045040,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "94": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "95": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "96": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "97": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "98": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "99": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "100": {
                    "Support1": 578868000,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "101": {
                    "Support1": 41943840,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "102": {
                    "Support1": 41947936,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "103": {
                    "Support1": 4202742560,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "104": {
                    "Support1": 981517088,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "105": {
                    "PlaneCount": 2
                },
                "106": {
                    "Support1": 939524128,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "107": {
                    "Support1": 847250208,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "108": {
                    "Support1": 41943840,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "109": {
                    "Support1": 41943840,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "110": {
                    "PlaneCount": 2
                },
                "111": {
                    "Support1": 536870944,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "112": {
                    "Support1": 536870944,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "113": {
                    "Support1": 536870944,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "114": {
                    "Support1": 536870944,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "115": {
                    "Support1": 8655856,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "130": {},
                "131": {},
                "132": {},
                "189": {
                    "Support1": 4128,
                    "Support2": 32768,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "190": {
                    "Support1": 4128,
                    "Support2": 32768,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "191": {
                    "Support1": 8655856,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                }
            }
        },
        {
            "AdapterIndex": 1,
            "DXGI_ADAPTER_DESC3": {
                "Description": "AMD Radeon(TM) Graphics",
                "VendorId": 4098,
                "DeviceId": 5761,
                "SubSysId": 461115459,
                "Revision": 200,
                "DedicatedVideoMemory": 475852800,
                "DedicatedSystemMemory": 0,
                "SharedSystemMemory": 33963782144,
                "AdapterLuid": "00000000-00015187",
                "Flags": 44,
                "GraphicsPreemptionGranularity": 1,
                "ComputePreemptionGranularity": 0
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_LOCAL]": {
                "Budget": 33634328576,
                "AvailableForReservation": 16951382016
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_NON_LOCAL]": {
                "Budget": 0,
                "AvailableForReservation": 0
            },
            "CheckInterfaceSupport": {
                "UMDVersion": 9007200042419204
            },
            "AGSDeviceInfo": {
                "adapterString": "AMD Radeon(TM) Graphics",
                "asicFamily": 0,
                "isAPU": true,
                "isExternal": false,
                "vendorId": 4098,
                "deviceId": 5761,
                "revisionId": 200,
                "numCUs": 6,
                "numWGPs": 0,
                "numROPs": 16,
                "coreClock": 22,
                "memoryClock": 24,
                "memoryBandwidth": 76800,
                "teraFlops": 0.016896000131964684,
                "localMemoryInBytes": 536870912,
                "sharedMemoryInBytes": 33963782144
            },
            "AGSDX12ReturnedParams::ExtensionsSupported": {
                "intrinsics16": true,
                "intrinsics17": true,
                "userMarkers": true,
                "appRegistration": true,
                "UAVBindSlot": true,
                "intrinsics19": true,
                "baseVertex": true,
                "baseInstance": true,
                "getWaveSize": true,
                "floatConversion": true,
                "readLaneAt": true,
                "rayHitToken": true,
                "shaderClock": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS": {
                "DoublePrecisionFloatShaderOps": true,
                "OutputMergerLogicOp": true,
                "MinPrecisionSupport": 2,
                "TiledResourcesTier": 4,
                "ResourceBindingTier": 3,
                "PSSpecifiedStencilRefSupported": true,
                "TypedUAVLoadAdditionalFormats": true,
                "ROVsSupported": true,
                "ConservativeRasterizationTier": 3,
                "MaxGPUVirtualAddressBitsPerResource": 47,
                "StandardSwizzle64KBSupported": false,
                "CrossNodeSharingTier": 0,
                "CrossAdapterRowMajorTextureSupported": false,
                "VPAndRTArrayIndexFromAnyShaderFeedingRasterizerSupportedWithoutGSEmulation": true,
                "ResourceHeapTier": 2
            },
            "D3D12_FEATURE_DATA_GPU_VIRTUAL_ADDRESS_SUPPORT": {
                "MaxGPUVirtualAddressBitsPerResource": 47,
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
                "UMA": true,
                "CacheCoherentUMA": false,
                "IsolatedMMU": true
            },
            "D3D12_FEATURE_DATA_FEATURE_LEVELS": {
                "MaxSupportedFeatureLevel": 49408
            },
            "D3D12_FEATURE_DATA_SHADER_CACHE": {
                "SupportFlags": 127
            },
            "D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY": {
                "TYPE_DIRECT.PRIORITY_NORMAL.PriorityForTypeIsSupported": true,
                "TYPE_DIRECT.PRIORITY_HIGH.PriorityForTypeIsSupported": true,
                "TYPE_DIRECT.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported": false,
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
            "D3D12_FEATURE_DATA_APPLICATION_SPECIFIC_DRIVER_STATE": {
                "Supported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS1": {
                "WaveOps": true,
                "WaveLaneCountMin": 32,
                "WaveLaneCountMax": 64,
                "TotalLaneCount": 768,
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
                "RaytracingTier": 11
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS6": {
                "AdditionalShadingRatesSupported": false,
                "PerPrimitiveShadingRateSupportedWithViewportIndexing": true,
                "VariableShadingRateTier": 2,
                "ShadingRateImageTileSize": 8,
                "BackgroundProcessingSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS7": {
                "MeshShaderTier": 0,
                "SamplerFeedbackTier": 100
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS8": {
                "UnalignedBlockTexturesSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS9": {
                "MeshShaderPipelineStatsSupported": false,
                "MeshShaderSupportsFullRangeRenderTargetArrayIndex": false,
                "AtomicInt64OnTypedResourceSupported": true,
                "AtomicInt64OnGroupSharedSupported": true,
                "DerivativesInMeshAndAmplificationShadersSupported": false,
                "WaveMMATier": 0
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS10": {
                "VariableRateShadingSumCombinerSupported": true,
                "MeshShaderPerPrimitiveShadingRateSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS11": {
                "AtomicInt64OnDescriptorHeapResourceSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS12": {
                "MSPrimitivesPipelineStatisticIncludesCulledPrimitives": 0,
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
                "SupportedSampleCountsWithNoOutputs": 29,
                "PointSamplingAddressesNeverRoundUp": true,
                "RasterizerDesc2Supported": true,
                "NarrowQuadrilateralLinesSupported": true,
                "AnisoFilterWithPointMipSupported": true,
                "MaxSamplerDescriptorHeapSize": 4096,
                "MaxSamplerDescriptorHeapSizeWithStaticSamplers": 4096,
                "MaxViewDescriptorHeapSize": 33554432,
                "ComputeOnlyCustomHeapSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS20": {
                "ComputeOnlyWriteWatchSupported": true,
                "RecreateAtTier": 0
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS21": {
                "WorkGraphsTier": 0,
                "ExecuteIndirectTier": 10,
                "SampleCmpGradientAndBiasSupported": true,
                "ExtendedCommandInfoSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS22": {
                "TightAlignmentSupported": false
            },
            "GetDescriptorHandleIncrementSize": {
                "D3D12_DESCRIPTOR_HEAP_TYPE_CBV_SRV_UAV": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_SAMPLER": 16,
                "D3D12_DESCRIPTOR_HEAP_TYPE_RTV": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_DSV": 224
            },
            "DirectSR": [
                {
                    "VariantId": "{9578D791-9494-4707-8C35-4AF6D58F1DB9}",
                    "VariantName": "AMD FidelityFX Super Resolution 3.1",
                    "Flags": 59,
                    "OptimizationRankings": [
                        0,
                        1,
                        3,
                        4,
                        2,
                        5,
                        6
                    ],
                    "OptimalTargetFormat": 0
                }
            ],
            "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported": {},
            "NvAPI_D3D12_GetRaytracingCaps": {},
            "NvAPI_D3D12_QueryWorkstationFeatureProperties": {},
            "Formats": {
                "0": {
                    "Support1": 1,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "1": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "2": {
                    "Support1": 49599483,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "3": {
                    "Support1": 40915451,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "4": {
                    "Support1": 40915451,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "5": {
                    "Support1": 1052912,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "6": {
                    "Support1": 5509627,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "7": {
                    "Support1": 5247483,
                    "Support2": 256,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "8": {
                    "Support1": 5247483,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "9": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "10": {
                    "Support1": 855430131,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "11": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "12": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "13": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "14": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "15": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "16": {
                    "Support1": 49599483,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "17": {
                    "Support1": 40915451,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "18": {
                    "Support1": 40915451,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "19": {
                    "Support1": 1052848,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "20": {
                    "Support1": 3215536,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "21": {
                    "Support1": 80746416,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "22": {
                    "Support1": 5247408,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "23": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "24": {
                    "Support1": 872207347,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "25": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "26": {
                    "Support1": 48550899,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "27": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "28": {
                    "Support1": 872207347,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "29": {
                    "Support1": 838652912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "30": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "31": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "32": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "33": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "34": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "35": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "36": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "37": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "38": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "39": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "40": {
                    "Support1": 3215536,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "41": {
                    "Support1": 116709371,
                    "Support2": 712,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "42": {
                    "Support1": 40915455,
                    "Support2": 1023,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "43": {
                    "Support1": 40915451,
                    "Support2": 767,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "44": {
                    "Support1": 1052848,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "45": {
                    "Support1": 3215536,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "46": {
                    "Support1": 80746416,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "47": {
                    "Support1": 5247408,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "48": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "49": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "50": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "51": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "52": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "53": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "54": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "55": {
                    "Support1": 3215536,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "56": {
                    "Support1": 116709363,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "57": {
                    "Support1": 40915447,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "58": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "59": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "60": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "61": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "62": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "63": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "64": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "65": {
                    "Support1": 48550896,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "66": {},
                "67": {
                    "Support1": 48288752,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "68": {
                    "Support1": 8393712,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "69": {
                    "Support1": 8393712,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "70": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "71": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "72": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "73": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "74": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "75": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "76": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "77": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "78": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "79": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "80": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "81": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "82": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "83": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "84": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "85": {
                    "Support1": 48550896,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "86": {
                    "Support1": 48550896,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "87": {
                    "Support1": 872207347,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "88": {
                    "Support1": 821351411,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "89": {
                    "Support1": 823656480,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "90": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "91": {
                    "Support1": 838652912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "92": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "93": {
                    "Support1": 16045040,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "94": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "95": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "96": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "97": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "98": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "99": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "100": {
                    "PlaneCount": 1
                },
                "101": {
                    "PlaneCount": 1
                },
                "102": {
                    "PlaneCount": 1
                },
                "103": {
                    "Support1": 981517088,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "104": {
                    "Support1": 981517088,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "105": {
                    "Support1": 981517088,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "106": {
                    "Support1": 939524128,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "107": {
                    "Support1": 847250208,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "108": {
                    "PlaneCount": 1
                },
                "109": {
                    "PlaneCount": 1
                },
                "110": {
                    "PlaneCount": 2
                },
                "111": {
                    "PlaneCount": 1
                },
                "112": {
                    "PlaneCount": 1
                },
                "113": {
                    "PlaneCount": 1
                },
                "114": {
                    "PlaneCount": 1
                },
                "115": {
                    "Support1": 48550896,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "130": {},
                "131": {},
                "132": {},
                "189": {
                    "Support1": 4128,
                    "Support2": 32768,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "190": {
                    "Support1": 4128,
                    "Support2": 32768,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "191": {
                    "Support1": 14996464,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                }
            }
        },
        {
            "AdapterIndex": 2,
            "DXGI_ADAPTER_DESC3": {
                "Description": "Microsoft Basic Render Driver",
                "VendorId": 5140,
                "DeviceId": 140,
                "SubSysId": 0,
                "Revision": 0,
                "DedicatedVideoMemory": 0,
                "DedicatedSystemMemory": 0,
                "SharedSystemMemory": 33963782144,
                "AdapterLuid": "00000000-00015104",
                "Flags": 46,
                "GraphicsPreemptionGranularity": 4,
                "ComputePreemptionGranularity": 4
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_LOCAL]": {
                "Budget": 33158475776,
                "AvailableForReservation": 16713455616
            },
            "DXGI_QUERY_VIDEO_MEMORY_INFO[DXGI_MEMORY_SEGMENT_GROUP_NON_LOCAL]": {
                "Budget": 0,
                "AvailableForReservation": 0
            },
            "CheckInterfaceSupport": {
                "UMDVersion": 2814751477598042
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
                "HighestShaderModel": 104
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
            "D3D12_FEATURE_DATA_APPLICATION_SPECIFIC_DRIVER_STATE": {
                "Supported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS1": {
                "WaveOps": true,
                "WaveLaneCountMin": 4,
                "WaveLaneCountMax": 4,
                "TotalLaneCount": 64,
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
                "RaytracingTier": 11
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS6": {
                "AdditionalShadingRatesSupported": true,
                "PerPrimitiveShadingRateSupportedWithViewportIndexing": false,
                "VariableShadingRateTier": 1,
                "ShadingRateImageTileSize": 0,
                "BackgroundProcessingSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS7": {
                "MeshShaderTier": 10,
                "SamplerFeedbackTier": 100
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS8": {
                "UnalignedBlockTexturesSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS9": {
                "MeshShaderPipelineStatsSupported": true,
                "MeshShaderSupportsFullRangeRenderTargetArrayIndex": true,
                "AtomicInt64OnTypedResourceSupported": true,
                "AtomicInt64OnGroupSharedSupported": true,
                "DerivativesInMeshAndAmplificationShadersSupported": true,
                "WaveMMATier": 0
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS10": {
                "VariableRateShadingSumCombinerSupported": false,
                "MeshShaderPerPrimitiveShadingRateSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS11": {
                "AtomicInt64OnDescriptorHeapResourceSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS12": {
                "MSPrimitivesPipelineStatisticIncludesCulledPrimitives": 0,
                "EnhancedBarriersSupported": true,
                "RelaxedFormatCastingSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS13": {
                "UnrestrictedBufferTextureCopyPitchSupported": true,
                "UnrestrictedVertexElementAlignmentSupported": true,
                "InvertedViewportHeightFlipsYSupported": true,
                "InvertedViewportDepthFlipsZSupported": false,
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
                "MaxSamplerDescriptorHeapSize": 2097152,
                "MaxSamplerDescriptorHeapSizeWithStaticSamplers": 2097152,
                "MaxViewDescriptorHeapSize": 2097152,
                "ComputeOnlyCustomHeapSupported": false
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS20": {
                "ComputeOnlyWriteWatchSupported": true,
                "RecreateAtTier": 0
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS21": {
                "WorkGraphsTier": 10,
                "ExecuteIndirectTier": 11,
                "SampleCmpGradientAndBiasSupported": true,
                "ExtendedCommandInfoSupported": true
            },
            "D3D12_FEATURE_DATA_D3D12_OPTIONS22": {
                "TightAlignmentSupported": false
            },
            "GetDescriptorHandleIncrementSize": {
                "D3D12_DESCRIPTOR_HEAP_TYPE_CBV_SRV_UAV": 64,
                "D3D12_DESCRIPTOR_HEAP_TYPE_SAMPLER": 64,
                "D3D12_DESCRIPTOR_HEAP_TYPE_RTV": 32,
                "D3D12_DESCRIPTOR_HEAP_TYPE_DSV": 8
            },
            "DirectSR": [
                {
                    "VariantId": "{9578D791-9494-4707-8C35-4AF6D58F1DB9}",
                    "VariantName": "AMD FidelityFX Super Resolution 3.1",
                    "Flags": 59,
                    "OptimizationRankings": [
                        0,
                        1,
                        3,
                        4,
                        2,
                        5,
                        6
                    ],
                    "OptimalTargetFormat": 0
                }
            ],
            "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported": {},
            "NvAPI_D3D12_GetRaytracingCaps": {},
            "NvAPI_D3D12_QueryWorkstationFeatureProperties": {},
            "Formats": {
                "0": {
                    "Support1": 1,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "1": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "2": {
                    "Support1": 49599483,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "3": {
                    "Support1": 40915451,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "4": {
                    "Support1": 40915451,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "5": {
                    "Support1": 1052912,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "6": {
                    "Support1": 16045051,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "7": {
                    "Support1": 7361019,
                    "Support2": 256,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "8": {
                    "Support1": 7361019,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "9": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "10": {
                    "Support1": 50123763,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "11": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "12": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "13": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "14": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "15": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "16": {
                    "Support1": 49599483,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "17": {
                    "Support1": 40915451,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "18": {
                    "Support1": 40915451,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "19": {
                    "Support1": 1052848,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "20": {
                    "Support1": 3215536,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "21": {
                    "Support1": 80746416,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "22": {
                    "Support1": 5247408,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "23": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "24": {
                    "Support1": 66900979,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "25": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "26": {
                    "Support1": 48550899,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "27": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "28": {
                    "Support1": 66900979,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "29": {
                    "Support1": 33346544,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "30": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "31": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "32": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "33": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "34": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "35": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "36": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "37": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "38": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "39": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "40": {
                    "Support1": 3215536,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "41": {
                    "Support1": 116709371,
                    "Support2": 712,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "42": {
                    "Support1": 40915455,
                    "Support2": 1023,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "43": {
                    "Support1": 40915451,
                    "Support2": 767,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "44": {
                    "Support1": 1052848,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "45": {
                    "Support1": 3215536,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "46": {
                    "Support1": 80746416,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "47": {
                    "Support1": 5247408,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "48": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "49": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "50": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "51": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "52": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "53": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "54": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "55": {
                    "Support1": 3215536,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "56": {
                    "Support1": 116709363,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "57": {
                    "Support1": 40915447,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "58": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "59": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "60": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "61": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "62": {
                    "Support1": 40915443,
                    "Support2": 960,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "63": {
                    "Support1": 49599475,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "64": {
                    "Support1": 40915443,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "65": {
                    "Support1": 48550896,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "66": {},
                "67": {
                    "Support1": 8393712,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "68": {
                    "Support1": 8393712,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "69": {
                    "Support1": 8393712,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "70": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "71": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "72": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "73": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "74": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "75": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "76": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "77": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "78": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "79": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "80": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "81": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "82": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "83": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "84": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "85": {
                    "Support1": 48550899,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "86": {
                    "Support1": 48550899,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "87": {
                    "Support1": 66900979,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "88": {
                    "Support1": 16045043,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "89": {
                    "Support1": 18350112,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "90": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "91": {
                    "Support1": 33346544,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "92": {
                    "Support1": 1052912,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "93": {
                    "Support1": 16045040,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "94": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "95": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "96": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "97": {
                    "Support1": 1052896,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "98": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "99": {
                    "Support1": 9442272,
                    "Support2": 512,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "100": {
                    "Support1": 41997088,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "101": {
                    "Support1": 41943840,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "102": {
                    "Support1": 41947936,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "103": {
                    "Support1": 41992992,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "104": {
                    "Support1": 41992992,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "105": {
                    "Support1": 41992992,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 2
                },
                "106": {
                    "Support1": 32,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "107": {
                    "Support1": 41943840,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "108": {
                    "Support1": 41943840,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "109": {
                    "Support1": 41943840,
                    "Support2": 128,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "110": {
                    "PlaneCount": 2
                },
                "111": {
                    "PlaneCount": 1
                },
                "112": {
                    "PlaneCount": 1
                },
                "113": {
                    "Support1": 32,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "114": {
                    "Support1": 32,
                    "Support2": 0,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "115": {
                    "Support1": 48550899,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "130": {},
                "131": {},
                "132": {},
                "189": {
                    "Support1": 4128,
                    "Support2": 32768,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "190": {
                    "Support1": 4128,
                    "Support2": 32768,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                },
                "191": {
                    "Support1": 48550899,
                    "Support2": 704,
                    "MultisampleQualityLevels": {
                        "1": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "2": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "4": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "8": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        },
                        "16": {
                            "NumQualityLevels": 1,
                            "Flags": 0
                        }
                    },
                    "PlaneCount": 1
                }
            }
        }
    ]
}]