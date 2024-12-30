#include "precompiled_header.h"

#include "report_generator.h"

namespace D3d12infoGUI {

void ReportGenerator::GenerateHTML(
    const std::filesystem::path& rootPath,
    const std::vector<std::vector<char>>& validReports) {
  if (!std::filesystem::is_directory(rootPath)) {
    if (!std::filesystem::create_directory(rootPath)) {
      throw std::runtime_error("Failed to create temporary directory");
    }
  }

  std::filesystem::path jsFilePath = rootPath / L"reports.js";
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
}

}  // namespace D3d12infoGUI
