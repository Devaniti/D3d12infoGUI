Push-Location $PSScriptRoot

$TempFolder = Join-Path -Path $env:TEMP -ChildPath "d3d12infogui_build"
$PathToD3d12info = Join-Path -Path $TempFolder -ChildPath "D3d12info"

$PackageFolder = "../package"
$FolderToArchive = Join-Path -Path $PackageFolder -ChildPath "D3d12infoGUI"

if (Test-Path $PackageFolder) {
    Remove-Item -LiteralPath $PackageFolder -Force -Recurse
}

New-Item -ItemType Directory -Path $PackageFolder
New-Item -ItemType Directory -Path $FolderToArchive

$D3d12infoLicenseFile = Join-Path -Path $PathToD3d12info -ChildPath "LICENSE.txt"
$D3d12infoLicenseDestination = Join-Path -Path $FolderToArchive -ChildPath "D3d12info_LICENSE.txt"
Copy-Item -Path $D3d12infoLicenseFile -Destination $D3d12infoLicenseDestination

$GUILicenseFile = "../LICENSE"
$GUILicenseDestination = Join-Path -Path $FolderToArchive -ChildPath "D3d12infoGUI_LICENSE.txt"
Copy-Item -Path $GUILicenseFile -Destination $GUILicenseDestination

$D3d12infoExecutable = "../build/bin/Release/GUI.exe"
$D3d12infoExecutableDestination = Join-Path -Path $FolderToArchive -ChildPath "D3d12infoGUI.exe"
Copy-Item -Path $D3d12infoExecutable -Destination $D3d12infoExecutableDestination

$ZipFile = Join-Path -Path $PackageFolder -ChildPath "D3d12infoGUI.zip"
# Disable compression to minimize chances of false positives in antivirus software
Compress-Archive -CompressionLevel NoCompression -Path $FolderToArchive -DestinationPath $ZipFile

Pop-Location
