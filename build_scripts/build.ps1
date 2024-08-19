Push-Location $PSScriptRoot
& "./configure.ps1"
cmake --build ../build/ -j --config Release
Pop-Location
