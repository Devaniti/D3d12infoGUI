Push-Location $PSScriptRoot
Remove-Item -LiteralPath ../build/ -Force -Recurse
Pop-Location