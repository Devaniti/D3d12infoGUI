param ([string]$PathToD3d12info)

if (-not $PathToD3d12info) {
    Write-Output "Downloading D3d12info"
    $TempFolder = Join-Path -Path $env:TEMP -ChildPath "d3d12infogui_build"
    $PathToD3d12info = Join-Path -Path $TempFolder -ChildPath "D3d12info"
    Remove-Item -Recurse -Force $TempFolder
    New-Item -ItemType Directory -Path $TempFolder
    New-Item -ItemType Directory -Path $PathToD3d12info
    $JSONURL = "https://api.github.com/repos/sawickiap/D3d12info/releases/latest"
    $PrevProgressPreference = $ProgressPreference
    $ProgressPreference = 'silentlyContinue'
    $JSON = Invoke-WebRequest -UseBasicParsing -Uri $JSONURL
    $ProgressPreference = $PrevProgressPreference
    $ParsedJSON = ConvertFrom-Json -InputObject $JSON
    Write-Output "Lateste D3d12info release - $($ParsedJSON.tag_name)"
    $Assets = Select-Object -InputObject $ParsedJSON -ExpandProperty assets
    $IsDownloaded = $false
    Foreach ($Asset IN $Assets)
    {
        if ($Asset.name -eq 'D3d12info.zip')
        {
            $DownloadURL = $Asset.browser_download_url
            $ZIPPath = Join-Path -Path $TempFolder -ChildPath "D3d12info.zip"
            $PrevProgressPreference = $ProgressPreference
            $ProgressPreference = 'silentlyContinue'
            Invoke-WebRequest -UseBasicParsing -Uri $DownloadURL -OutFile $ZIPPath
            Expand-Archive -Path $ZIPPath -DestinationPath $TempFolder -Force
            $ProgressPreference = $PrevProgressPreference
            Remove-Item -Path $ZIPPath
            Write-Host "Sucessfully downloaded D3d12info"
            $IsDownloaded = $true
            break
        }
    }
    if (-not $IsDownloaded)
    {
        Write-Error "Failed to download D3d12info"
        exit 1
    }
}

Push-Location $PSScriptRoot
& ./clean.ps1
cmake -S ../source -B ../build/ -DD3D12INFO_PATH="$PathToD3d12info"
cmake --build ../build/ --target GUI --config Release
Pop-Location
