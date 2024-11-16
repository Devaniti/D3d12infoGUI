Push-Location $PSScriptRoot
Remove-Item -LiteralPath ../tidy -Force -Recurse -ErrorAction SilentlyContinue
cmake -G "Ninja" -DCMAKE_CXX_CLANG_TIDY="clang-tidy" -DCMAKE_CXX_CLANG_TIDY_EXPORT_FIXES_DIR="$PSScriptRoot/../tidy/fixes" -S ../source -B ../tidy
cmake --build ../tidy
clang-apply-replacements ../tidy/fixes
Remove-Item -LiteralPath ../tidy -Force -Recurse
Pop-Location
