Push-Location $PSScriptRoot

Write-Output "Downloading WinGet and its dependencies..." | Out-Host
Write-Output "No progress output during download, this may take a while..." | Out-Host
$PrevProgressPreference = $ProgressPreference
$progressPreference = 'silentlyContinue'
Invoke-WebRequest -Uri https://aka.ms/getwinget -OutFile Microsoft.DesktopAppInstaller_8wekyb3d8bbwe.msixbundle
Invoke-WebRequest -Uri https://aka.ms/Microsoft.VCLibs.x64.14.00.Desktop.appx -OutFile Microsoft.VCLibs.x64.14.00.Desktop.appx
Invoke-WebRequest -Uri https://github.com/microsoft/microsoft-ui-xaml/releases/download/v2.8.6/Microsoft.UI.Xaml.2.8.x64.appx -OutFile Microsoft.UI.Xaml.2.8.x64.appx
$ProgressPreference = $PrevProgressPreference
Write-Output "Download finished, installing WinGet" | Out-Host
Add-AppxPackage Microsoft.VCLibs.x64.14.00.Desktop.appx -ErrorAction 'SilentlyContinue'
Add-AppxPackage Microsoft.UI.Xaml.2.8.x64.appx -ErrorAction 'SilentlyContinue'
Add-AppxPackage Microsoft.DesktopAppInstaller_8wekyb3d8bbwe.msixbundle -ErrorAction 'SilentlyContinue'
Remove-Item -Path Microsoft.DesktopAppInstaller_8wekyb3d8bbwe.msixbundle
Remove-Item -Path Microsoft.VCLibs.x64.14.00.Desktop.appx
Remove-Item -Path Microsoft.UI.Xaml.2.8.x64.appx 

# Reload environment variables to include winget
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User") 

Write-Output "Installing Vulkan SDK"
winget install -e KhronosGroup.VulkanSDK

Pop-Location
