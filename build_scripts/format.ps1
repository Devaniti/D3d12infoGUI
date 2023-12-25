Push-Location $PSScriptRoot
Get-ChildItem -Path ../source -Include ('*.cpp','*.h','*.hpp') -File -Recurse -Exclude external | 
    Where-Object {$_.DirectoryName -notlike '*external*'} |
    ForEach-Object -Parallel {
        & clang-format -i $_.FullName
    }
Pop-Location
