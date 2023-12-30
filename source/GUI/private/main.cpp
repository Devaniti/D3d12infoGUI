#include "precompiled_header.h"

#include "report_generator.h"
#include "subprocess.h"

using namespace D3d12infoGUI;

int main(int argc, char* argv[]) {
  std::ostringstream reportsArray;
  reportsArray << "[" << Subprocess::GetCommandOutput("D3d12info.exe -j --AllAdapters")
               << ","
               << Subprocess::GetCommandOutput("D3d12info_preview.exe -j --AllAdapters")
               << "]";
  ReportGenerator::GenerateHTML(reportsArray.str());
  return 0;
}