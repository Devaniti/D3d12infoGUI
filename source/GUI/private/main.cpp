#include "precompiled_header.h"

#include "embed_extractor.h"
#include "report_generator.h"
#include "subprocess.h"
#include "window.h"

using namespace D3d12infoGUI;

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

    std::vector<std::vector<char>> validReports;

    const Subprocess::ProcessOutput report = Subprocess::GetCommandOutput(
        d3d12infoPath.string() + " --AllAdapters --JSON --Formats --EnableExperimental=OFF");
    if(report.first == 0)
    {
        validReports.push_back(report.second);
    }

    if(window.IsExitRequested())
        return 1;
    window.ReportProgress(L"Running D3d12info_preview");

    const Subprocess::ProcessOutput previewReport = Subprocess::GetCommandOutput(
        d3d12infoPreviewPath.string() + " --AllAdapters --JSON --Formats --EnableExperimental=ON");
    if(previewReport.first == 0)
    {
        validReports.push_back(previewReport.second);
    }

    if(window.IsExitRequested())
        return 1;
    window.ReportProgress(L"Generating report");

    ReportGenerator::GenerateHTML(rootPath, validReports);
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

int ProcessCommandLine(LPWSTR lpCmdLine)
{
    if(std::wcscmp(lpCmdLine, L"--licenses") == 0 || std::wcscmp(lpCmdLine, L"-l") == 0)
    {
        OpenLicenses();
        return 0;
    }

    if(std::wcscmp(lpCmdLine, L"--help") == 0 || std::wcscmp(lpCmdLine, L"-h") == 0)
    {
        PrintHelp();
        return 0;
    }

    PrintHelp();
    return 1;
}

int RunCommandLine(LPWSTR lpCmdLine)
{
    InitializeConsole();

    int result = ProcessCommandLine(lpCmdLine);

    ::FreeConsole();

    return result;
}

int APIENTRY wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPWSTR lpCmdLine, int nCmdShow)
{
    try
    {
        if(*lpCmdLine != L'\0')
        {
            return RunCommandLine(lpCmdLine);
        }
        return RunGUI(hInstance);
    }
    catch(const std::exception& e)
    {
        MessageBoxA(NULL, e.what(), "Error", MB_OK | MB_ICONERROR);
        return 1;
    }
}
