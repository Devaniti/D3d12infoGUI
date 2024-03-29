BEGIN TRANSACTION;

ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetGPUInfo - NV_GPU_INFO::bIsExternalGpu" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetGPUInfo - NV_GPU_INFO::rayTracingCores" INT;
ALTER TABLE Submissions ADD COLUMN "NvPhysicalGpuHandle.NvAPI_GPU_GetGPUInfo - NV_GPU_INFO::tensorCores" INT;
ALTER TABLE Submissions ADD COLUMN "NvAPI_D3D12_GetOptimalThreadCountForMesh.pThreadCount" INT;

PRAGMA user_version=2;

COMMIT;
