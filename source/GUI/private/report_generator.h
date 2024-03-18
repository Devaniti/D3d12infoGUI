#pragma once

#include "precompiled_header.h"

namespace D3d12infoGUI {
class ReportGenerator {
 public:
  static void GenerateHTML(
      const std::filesystem::path& rootPath,
      const std::vector<std::vector<char>>& validReports);
};
}  // namespace D3d12infoGUI