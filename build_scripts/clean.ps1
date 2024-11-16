Push-Location $PSScriptRoot
if (Test-Path ../build/) {
    Remove-Item -LiteralPath ../build/ -Force -Recurse
}
Pop-Location
