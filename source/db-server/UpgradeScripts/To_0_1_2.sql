-- Only called manually
-- Pre 0.1.1 schemas didn't had user_version pragma set to detect version

ALTER TABLE Submissions ADD COLUMN "Header.NvAPI compiled version" TEXT NOT NULL DEFAULT "R535-developer";
ALTER TABLE Submissions ADD COLUMN "Header.NvAPI_GetInterfaceVersionString" TEXT;
ALTER TABLE Submissions ADD COLUMN "Header.AMD_AGS_VERSION" TEXT NOT NULL DEFAULT "6.2.0";
ALTER TABLE Submissions ADD COLUMN "Header.agsGetVersionNumber" INT;
ALTER TABLE Submissions ADD COLUMN "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.driverVersion" INT;
ALTER TABLE Submissions ADD COLUMN "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.szBuildBranch" TEXT;
ALTER TABLE Submissions ADD COLUMN "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsDCHDriver" INT;
ALTER TABLE Submissions ADD COLUMN "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIAStudioPackage" INT;
ALTER TABLE Submissions ADD COLUMN "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIAGameReadyPackage" INT;
ALTER TABLE Submissions ADD COLUMN "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIARTXProductionBranchPackage" INT;    
ALTER TABLE Submissions ADD COLUMN "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.bIsNVIDIARTXNewFeatureBranchPackage" INT;    
ALTER TABLE Submissions ADD COLUMN "SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.szBuildBaseBranch" TEXT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetSystemType" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetFullName" TEXT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pDeviceID" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pSubSystemId" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pRevisionId" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pExtDeviceId" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetGPUType" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetBusType" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetVbiosRevision" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetVbiosOEMRevision" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetVbiosVersionString" TEXT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetPhysicalFrameBufferSize" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetVirtualFrameBufferSize" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::implementation_id" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::revision_id" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetVRReadyData - NV_GPU_VR_READY::isVRReady" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_QueryIlluminationSupport(NV_GPU_IA_LOGO_BRIGHTNESS)" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_QueryIlluminationSupport(NV_GPU_IA_SLI_BRIGHTNESS)" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_QueryWorkstationFeatureSupport(NV_GPU_WORKSTATION_FEATURE_TYPE_NVIDIA_RTX_VR_READY)" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_QueryWorkstationFeatureSupport(NV_GPU_WORKSTATION_FEATURE_TYPE_PROVIZ)" INT;      
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemory" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::availableDedicatedVideoMemory" INT;      
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::systemVideoMemory" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::sharedSystemMemory" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::curAvailableDedicatedVideoMemory" INT;   
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryEvictionsSize" INT; 
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryEvictionCount" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryPromotionsSize" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetMemoryInfoEx - NV_GPU_MEMORY_INFO_EX::dedicatedVideoMemoryPromotionCount" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetShaderSubPipeCount" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetGpuCoreCount" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::isSupported" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::configurationOptions" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetECCStatusInfo - NV_GPU_ECC_STATUS_INFO::isEnabled" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetRamBusWidth" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDeviceInfo.adapterString" TEXT;
ALTER TABLE Submissions ADD COLUMN "AGSDeviceInfo.asicFamily" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDeviceInfo.isAPU" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDeviceInfo.isExternal" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDeviceInfo.vendorId" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDeviceInfo.deviceId" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDeviceInfo.revisionId" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDeviceInfo.numCUs" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDeviceInfo.numWGPs" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDeviceInfo.numROPs" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDeviceInfo.coreClock" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDeviceInfo.memoryClock" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDeviceInfo.memoryBandwidth" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDeviceInfo.teraFlops" REAL;
ALTER TABLE Submissions ADD COLUMN "AGSDeviceInfo.localMemoryInBytes" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDeviceInfo.sharedMemoryInBytes" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDX12ReturnedParams::ExtensionsSupported.intrinsics16" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDX12ReturnedParams::ExtensionsSupported.intrinsics17" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDX12ReturnedParams::ExtensionsSupported.userMarkers" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDX12ReturnedParams::ExtensionsSupported.appRegistration" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDX12ReturnedParams::ExtensionsSupported.UAVBindSlot" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDX12ReturnedParams::ExtensionsSupported.intrinsics19" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDX12ReturnedParams::ExtensionsSupported.baseVertex" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDX12ReturnedParams::ExtensionsSupported.baseInstance" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDX12ReturnedParams::ExtensionsSupported.getWaveSize" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDX12ReturnedParams::ExtensionsSupported.floatConversion" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDX12ReturnedParams::ExtensionsSupported.readLaneAt" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDX12ReturnedParams::ExtensionsSupported.rayHitToken" INT;
ALTER TABLE Submissions ADD COLUMN "AGSDX12ReturnedParams::ExtensionsSupported.shaderClock" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_QueryCpuVisibleVidmem.pTotalBytes" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_SHFL" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_SHFL_UP" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_SHFL_DOWN" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_SHFL_XOR" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_VOTE_ALL" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_VOTE_ANY" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_VOTE_BALLOT" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_GET_LANE_ID" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_FP16_ATOMIC" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_FP32_ATOMIC" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_UINT64_ATOMIC" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_GET_SHADING_RATE" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_IsNvShaderExtnOpCodeSupported.NV_EXTN_OP_VPRS_EVAL_ATTRIB_AT_SAMPLE" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_THREAD_REORDERING" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_OPACITY_MICROMAP" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_GetRaytracingCaps.NVAPI_D3D12_RAYTRACING_CAPS_TYPE_DISPLACEMENT_MICROMAP" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_QueryWorkstationFeatureProperties.NV_D3D12_WORKSTATION_FEATURE_TYPE_PRESENT_BARRIER - supported" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_QueryWorkstationFeatureProperties.NV_D3D12_WORKSTATION_FEATURE_TYPE_RDMA_BAR1_SUPPORT - supported" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_QueryWorkstationFeatureProperties.NV_D3D12_WORKSTATION_FEATURE_TYPE_RDMA_BAR1_SUPPORT - rdmaHeapSize" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_GetNeedsAppFPBlendClamping.pAppClampNeeded" INT;

DROP INDEX UniqueSubmission;

CREATE UNIQUE INDEX IF NOT EXISTS UniqueSubmission on Submissions (
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

PRAGMA user_version=1;
