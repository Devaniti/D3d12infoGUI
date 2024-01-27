#include "precompiled_header.h"

#include "report_generator.h"

#include "Report.css"
#include "Report.html"
#include "Report.js"
#include "Search.svg"

namespace D3d12infoGUI {

void ReportGenerator::WriteFile(const std::filesystem::path& path,
                                const char* data, size_t size) {
  std::ofstream file;
  file.open(path, std::ios_base::out | std::ios_base::binary);
  if (file.fail()) {
    throw std::runtime_error(
        std::format("Failed to open output file {}", path.string()));
  }

  file.write(data, size);
  file.close();
  if (file.fail()) {
    throw std::runtime_error(
        std::format("Failed to write output file {}", path.string()));
  }
}

void ReportGenerator::GenerateHTML(
    const std::vector<std::vector<char>>& validReports) {
  std::filesystem::path folderPath =
      std::filesystem::temp_directory_path() / L"D3d12infoGUI";
  if (!std::filesystem::is_directory(folderPath)) {
    if (!std::filesystem::create_directory(folderPath)) {
      throw std::runtime_error("Failed to create temporary directory");
    }
  }

  std::filesystem::path htmlFilePath = folderPath / L"Report.html";
  WriteFile(htmlFilePath, g_ReportHTML, sizeof(g_ReportHTML));
  WriteFile(folderPath / L"Report.js", g_ReportJS, sizeof(g_ReportJS));
  WriteFile(folderPath / L"Report.css", g_ReportCSS, sizeof(g_ReportCSS));
  WriteFile(folderPath / L"Search.svg", g_SearchSVG, sizeof(g_SearchSVG));

  std::filesystem::path jsFilePath = folderPath / L"Reports.json";
  std::ofstream jsonFile;
  jsonFile.open(jsFilePath, std::ios_base::out | std::ios_base::binary);
  if (jsonFile.fail()) {
    throw std::runtime_error("Failed to open output file");
  }

  jsonFile << "const reports = [";
  bool isFirst = true;
  for (const auto& report : validReports) {
    if (isFirst) {
      isFirst = false;
    } else {
      jsonFile << ",";
    }

    jsonFile.write(report.data(), report.size());
  }
  jsonFile << "]";

  jsonFile.close();
  if (jsonFile.fail()) {
    throw std::runtime_error("Failed to write output file");
  }

  ::ShellExecuteW(NULL, L"open", htmlFilePath.c_str(), NULL, NULL, SW_SHOW);
}

}  // namespace D3d12infoGUI
