#include "precompiled_header.h"

#include "report_generator.h"
#include "subprocess.h"

using namespace D3d12infoGUI;

int main(int argc, char* argv[]) {
  const std::pair<int, std::vector<char>> reports[] = {
      Subprocess::GetCommandOutput("D3d12info.exe -j --AllAdapters"),
      Subprocess::GetCommandOutput("D3d12info_preview.exe -j --AllAdapters")};

  std::vector<std::vector<char>> validReports;
  for (const auto& report : reports) {
    if (report.first == 0) {
      validReports.push_back(report.second);
    }
  }

  ReportGenerator::GenerateHTML(validReports);
  return 0;
}