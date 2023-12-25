#include "precompiled_header.h"

#include "report_generator.h"

#include "Report.html"

namespace D3d12infoGUI {

void ReportGenerator::GenerateHTML(std::string_view reportData) {
  std::filesystem::path folderPath =
      std::filesystem::temp_directory_path() / L"D3d12infoGUI";
  if (!std::filesystem::is_directory(folderPath)) {
    if (!std::filesystem::create_directory(folderPath)) {
      throw std::runtime_error("Failed to create temporary directory");
    }
  }

  std::filesystem::path htmlFilePath = folderPath / L"Report.html";
  std::ofstream HTMLFile;
  HTMLFile.open(htmlFilePath, std::ios_base::out | std::ios_base::binary);
  if (HTMLFile.fail()) {
    throw std::runtime_error("Failed to open output file");
  }

  HTMLFile << g_ReportPage;
  HTMLFile.close();
  if (HTMLFile.fail()) {
    throw std::runtime_error("Failed to write output file");
  }

  std::filesystem::path jsFilePath = folderPath / L"Reports.js";
  std::ofstream jsFile;
  jsFile.open(jsFilePath, std::ios_base::out | std::ios_base::binary);
  if (jsFile.fail()) {
    throw std::runtime_error("Failed to open output file");
  }

  jsFile << "const reports = " << reportData;
  jsFile.close();
  if (jsFile.fail()) {
    throw std::runtime_error("Failed to write output file");
  }

  ::ShellExecuteW(NULL, L"open", htmlFilePath.c_str(), NULL, NULL, SW_SHOW);
}

}  // namespace D3d12infoGUI
