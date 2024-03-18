#include "precompiled_header.h"

#include "embed_extractor.h"
#include "report_generator.h"
#include "subprocess.h"
#include "window.h"

using namespace D3d12infoGUI;

int mainImpl(HINSTANCE hInstance) {
  Window window(hInstance, L"Extracting files");

  std::filesystem::path rootPath =
      std::filesystem::temp_directory_path() / L"D3d12infoGUI";
  if (!std::filesystem::is_directory(rootPath)) {
    if (!std::filesystem::create_directory(rootPath)) {
      throw std::runtime_error("Failed to create temp directory");
    }
  }

  EmbedExctactor::ExtractFiles(rootPath);

  if (window.IsExitRequested()) return 1;
  window.ReportProgress(L"Running D3d12info");
#if USE_D3D12INFO_FROM_WORKING_DIRECTORY
  std::filesystem::path d3d12infoPath = L"D3d12info.exe";
  std::filesystem::path d3d12infoPreviewPath = L"D3d12info_preview.exe";
#else
  std::filesystem::path d3d12infoPath = rootPath / L"D3d12info.exe";
  std::filesystem::path d3d12infoPreviewPath =
      rootPath / L"D3d12info_preview.exe";
#endif

  std::vector<std::vector<char>> validReports;

  const Subprocess::ProcessOutput report = Subprocess::GetCommandOutput(
      d3d12infoPath.string() + " -j --AllAdapters");
  if (report.first == 0) {
    validReports.push_back(report.second);
  }

  if (window.IsExitRequested()) return 1;
  window.ReportProgress(L"Running D3d12info_preview");

  const Subprocess::ProcessOutput previewReport = Subprocess::GetCommandOutput(
      d3d12infoPreviewPath.string() + " -j --AllAdapters");
  if (previewReport.first == 0) {
    validReports.push_back(previewReport.second);
  }

  if (window.IsExitRequested()) return 1;
  window.ReportProgress(L"Generating report");

  ReportGenerator::GenerateHTML(rootPath, validReports);
  if (window.IsExitRequested()) return 1;
  window.ReportProgress(L"Opening report");

  std::filesystem::path reportPath = rootPath / L"Report.html";

  ::ShellExecuteW(NULL, L"open", reportPath.c_str(), NULL, NULL, SW_SHOW);
  window.Close();
  return 0;
}

int APIENTRY wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance,
                      LPWSTR lpCmdLine, int nCmdShow) {
  try {
    return mainImpl(hInstance);
  } catch (const std::exception& e) {
    MessageBoxA(NULL, e.what(), "Error", MB_OK | MB_ICONERROR);
    return 1;
  }
}
