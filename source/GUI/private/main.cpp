#include "precompiled_header.h"

#include "report_generator.h"
#include "subprocess.h"

using namespace D3d12infoGUI;

int main(int argc, char* argv[]) {
  std::ostringstream reportsArray;
  const std::pair<int, std::string> reports[] = {
      Subprocess::GetCommandOutput("D3d12info.exe -j --AllAdapters"),
      Subprocess::GetCommandOutput("D3d12info_preview.exe -j --AllAdapters")};

  bool isFirst = true;

  reportsArray << "[";
  for (const auto& report : reports) {
    if (report.first != 0) {
      continue;
    }

    if (isFirst) {
      isFirst = false;
    } else {
      reportsArray << ",";
    }

    reportsArray << report.second;
  }
  reportsArray << "]";
  ReportGenerator::GenerateHTML(reportsArray.str());
  return 0;
}