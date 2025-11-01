#include "precompiled_header.h"

#include "embed_extractor.h"
#include "report_generator.h"
#include "subprocess.h"
#include "window.h"

using namespace D3d12infoGUI;

// Command line flags
static bool g_OpenLicenses = false;
static bool g_OpenHelp = false;
static bool g_AutoSubmit = false;
static std::wstring g_CustomWarpPath;
static bool g_CLIArgumentsError = false;

int RunGUI(HINSTANCE hInstance)
{
    Window window(hInstance, L"Extracting files");

    std::filesystem::path rootPath = std::filesystem::temp_directory_path() / L"D3d12infoGUI";

    if(!std::filesystem::is_directory(rootPath))
    {
        if(!std::filesystem::create_directory(rootPath))
        {
            throw std::runtime_error("Failed to create temp directory");
        }
    }

    EmbedExctactor::ExtractFiles(rootPath);

    if(window.IsExitRequested())
        return 1;
    window.ReportProgress(L"Running D3d12info");
#if USE_D3D12INFO_FROM_WORKING_DIRECTORY
    std::filesystem::path d3d12infoPath = L"D3d12info.exe";
    std::filesystem::path d3d12infoPreviewPath = L"D3d12info_preview.exe";
#else
    std::filesystem::path d3d12infoPath = rootPath / L"D3d12info.exe";
    std::filesystem::path d3d12infoPreviewPath = rootPath / L"D3d12info_preview.exe";
#endif

    std::filesystem::path d3d12infoReport = rootPath / L"D3d12info_report.json";
    std::filesystem::path d3d12infoPreviewReport = rootPath / L"D3d12info_preview_report.json";

    std::vector<std::vector<char>> validReports;

    std::wstring d3d12infoCmdLine = std::format(
        L"\"{}\" --OutputFile=\"{}\" --JSON --MinimizeJson --Formats --EnableExperimental=OFF",
        d3d12infoPath.wstring(), d3d12infoReport.wstring());
    std::wstring d3d12infoPreviewCmdLine =
        std::format(L"\"{}\" --OutputFile=\"{}\" --JSON --MinimizeJson --Formats --EnableExperimental=ON",
            d3d12infoPreviewPath.wstring(), d3d12infoPreviewReport.wstring());
    if(g_CustomWarpPath.empty())
    {
        d3d12infoCmdLine += L" --AllAdapters";
        d3d12infoPreviewCmdLine += L" --AllAdapters";
    }
    else
    {
        std::filesystem::copy_file(g_CustomWarpPath, rootPath / "d3d10warp.dll", std::filesystem::copy_options::overwrite_existing);
        d3d12infoCmdLine += L" --WARP";
        d3d12infoPreviewCmdLine += L" --WARP";
    }

    Subprocess d3d12infoProcess(d3d12infoCmdLine.data());
    Subprocess d3d12infoPreviewProcess(d3d12infoPreviewCmdLine.data());

    if(d3d12infoProcess.Wait() == 0)
    {
        std::ifstream file(d3d12infoReport, std::ios::binary);
        if(file.is_open())
        {
            std::vector<char> report((std::istreambuf_iterator<char>(file)), std::istreambuf_iterator<char>());
            validReports.push_back(report);
        }
    }

    if(d3d12infoPreviewProcess.Wait() == 0)
    {
        std::ifstream file(d3d12infoPreviewReport, std::ios::binary);
        if(file.is_open())
        {
            std::vector<char> report((std::istreambuf_iterator<char>(file)), std::istreambuf_iterator<char>());
            validReports.push_back(report);
        }
    }

    if(window.IsExitRequested())
        return 1;

    window.ReportProgress(L"Generating report");

    OpenOptions options{};
    options.AutoSubmit = g_AutoSubmit;

    ReportGenerator::GenerateHTML(rootPath, validReports, options);
    if(window.IsExitRequested())
        return 1;
    window.ReportProgress(L"Opening report");

    std::filesystem::path reportPath = rootPath / L"index.html";

    ::ShellExecuteW(NULL, L"open", reportPath.c_str(), NULL, NULL, SW_SHOW);
    return 0;
}

void InitializeConsole()
{
    if(!::AttachConsole(ATTACH_PARENT_PROCESS))
    {
        if(!::AllocConsole())
        {
            throw std::runtime_error("Failed to allocate console");
        }
    }

    FILE* dummy;
    ::freopen_s(&dummy, "CONOUT$", "w", stdout);
    ::freopen_s(&dummy, "CONOUT$", "w", stderr);
    ::freopen_s(&dummy, "CONIN$", "r", stdin);
    std::cout.clear();
    std::cerr.clear();
    std::cin.clear();

    HANDLE hConOut = CreateFile(L"CONOUT$", GENERIC_READ | GENERIC_WRITE, FILE_SHARE_READ | FILE_SHARE_WRITE, NULL,
        OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL, NULL);
    HANDLE hConIn = CreateFile(L"CONIN$", GENERIC_READ | GENERIC_WRITE, FILE_SHARE_READ | FILE_SHARE_WRITE, NULL,
        OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL, NULL);
    SetStdHandle(STD_OUTPUT_HANDLE, hConOut);
    SetStdHandle(STD_ERROR_HANDLE, hConOut);
    SetStdHandle(STD_INPUT_HANDLE, hConIn);
    std::wcout.clear();
    std::wcerr.clear();
    std::wcin.clear();
}

void PrintHelp()
{
    std::wcout << std::endl;
    std::wcout << "Usage:" << std::endl;
    std::wcout << "    -l --licenses - Shows open source licenses" << std::endl;
    std::wcout << "    -h --help     - Shows this usage info" << std::endl;
    std::wcout << std::endl;
    std::ios::sync_with_stdio();
}

void OpenLicenses()
{
    std::filesystem::path rootPath = std::filesystem::temp_directory_path() / L"D3d12infoGUI";
    if(!std::filesystem::is_directory(rootPath))
    {
        if(!std::filesystem::create_directory(rootPath))
        {
            throw std::runtime_error("Failed to create temp directory");
        }
    }

    EmbedExctactor::ExtractFiles(rootPath);

    auto D3d12infoGUILicense = rootPath / L"D3d12infoGUI_LICENSE.txt";
    ::ShellExecuteW(NULL, L"open", D3d12infoGUILicense.c_str(), NULL, NULL, SW_SHOW);
#if !USE_D3D12INFO_FROM_WORKING_DIRECTORY
    auto D3d12infoLicense = rootPath / L"D3d12info_LICENSE.txt";
    ::ShellExecuteW(NULL, L"open", D3d12infoLicense.c_str(), NULL, NULL, SW_SHOW);
#endif
}

void ParseCommandLine()
{
    int argc = 0;
    LPWSTR* argv = CommandLineToArgvW(GetCommandLineW(), &argc);
    if(!argv)
        return;

    for(int i = 1; i < argc; ++i)
    {
        LPWSTR arg = argv[i];
        if(std::wcscmp(arg, L"--license") == 0 || std::wcscmp(arg, L"-l") == 0)
        {
            g_OpenLicenses = true;
            continue;
        }

        if(std::wcscmp(arg, L"--help") == 0 || std::wcscmp(arg, L"-h") == 0)
        {
            g_OpenHelp = true;
            continue;
        }

        if(std::wcscmp(arg, L"--auto-submit") == 0 || std::wcscmp(arg, L"-a") == 0)
        {
            g_AutoSubmit = true;
            continue;
        }

        // --custom-warp=PATH
        constexpr wchar_t warpLongArgPrefix[] = L"--custom-warp=";
        constexpr size_t warpLongArgLen = sizeof(warpLongArgPrefix) / sizeof(wchar_t) - 1;
        if(std::wcsncmp(arg, warpLongArgPrefix, warpLongArgLen) == 0)
        {
            g_CustomWarpPath = std::wstring(arg + warpLongArgLen);
            continue;
        }

        // -w=PATH
        constexpr wchar_t warpShortArgPrefix[] = L"-w=";
        constexpr size_t warpShortArgLen = sizeof(warpShortArgPrefix) / sizeof(wchar_t) - 1;
        if(std::wcsncmp(arg, warpShortArgPrefix, warpShortArgLen) == 0)
        {
            g_CustomWarpPath = std::wstring(arg + warpShortArgLen);
            continue;
        }

        // --custom-warp PATH / -w PATH
        if(std::wcscmp(arg, L"--custom-warp") == 0 || std::wcscmp(arg, L"-w") == 0)
        {
            if(i + 1 >= argc)
            {
                g_CLIArgumentsError = true;
                break;
            }

            g_CustomWarpPath = std::wstring(argv[++i]);
            continue;
        }

        g_CLIArgumentsError = true;
        break;
    }

    if (g_CustomWarpPath.size() > 2)
    {
        size_t beginPos = 0;
        size_t endPos = g_CustomWarpPath.size();
        if (g_CustomWarpPath[beginPos] == L'"')
        {
            ++beginPos;
        }
        if (g_CustomWarpPath[endPos - 1] == L'"')
        {
            --endPos;
        }
        g_CustomWarpPath = g_CustomWarpPath.substr(beginPos, endPos - beginPos);
    }

    LocalFree(argv);
}

int APIENTRY wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPWSTR lpCmdLine, int nCmdShow)
{
    try
    {
        ParseCommandLine();

        if(g_CLIArgumentsError || g_OpenHelp)
        {
            InitializeConsole();
            PrintHelp();
            ::FreeConsole();
            return g_CLIArgumentsError ? 1 : 0;
        }

        if(g_OpenLicenses)
        {
            OpenLicenses();
            return 0;
        }

        return RunGUI(hInstance);
    }
    catch(const std::exception& e)
    {
        MessageBoxA(NULL, e.what(), "Error", MB_OK | MB_ICONERROR);
        return 1;
    }
}
