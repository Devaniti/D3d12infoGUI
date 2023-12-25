$content = -join("const char g_ReportPage[] = {",(((Get-Content $args[0] -Raw).ToCharArray() | % {0 + $_}) -join ","),"};")
Set-Content -Path $args[1] -Value $content