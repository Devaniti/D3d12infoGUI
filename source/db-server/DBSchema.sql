BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS Submissions(
    "ID" INTEGER PRIMARY KEY, -- This automatically becomes an alias for rowid in sqlite
    "Header.Version" TEXT NOT NULL,
    "Header.Using preview Agility SDK" INT NOT NULL,
    "SystemInfo.OS Info.Windows version" TEXT NOT NULL,
    "SystemInfo.D3D12EnableExperimentalFeatures" TEXT,
    "DXGI_ADAPTER_DESC3.Description" TEXT NOT NULL,
    "DXGI_ADAPTER_DESC3.VendorId" INT NOT NULL,
    "DXGI_ADAPTER_DESC3.DeviceId" INT NOT NULL,
    "DXGI_ADAPTER_DESC3.SubSysId" INT NOT NULL,
    "DXGI_ADAPTER_DESC3.Revision" INT NOT NULL,
    "DXGI_ADAPTER_DESC3.DedicatedVideoMemory" INT NOT NULL,
    "CheckInterfaceSupport.UMDVersion" INT NOT NULL,
    "Data" TEXT NOT NULL
) STRICT;

CREATE UNIQUE INDEX IF NOT EXISTS UniqueSubmission on Submissions (
    "Header.Version",
    "Header.Using preview Agility SDK",
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

PRAGMA user_version=5;

COMMIT;
