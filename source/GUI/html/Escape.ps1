$content = -join("const char g_",$args[2],"[] = {",(((Get-Content $args[0] -Raw).ToCharArray() | % {0 + $_}) -join ","),"};")
Set-Content -Path $args[1] -Value $content