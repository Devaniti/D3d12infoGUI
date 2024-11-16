param (
    [string]$Configuration = "Release"
)

Push-Location $PSScriptRoot
& "./configure.ps1"
cmake --build ../build/ -j --config $Configuration
Pop-Location
