param ([Parameter(Mandatory=$true)][string]$path_to_d3d12info)

Push-Location $PSScriptRoot
& "./clean.ps1"
cmake -S ../source -B ../build/ -DD3D12INFO_PATH="$path_to_d3d12info"
cmake --build ../build/ --target GUI --config Release
Pop-Location
