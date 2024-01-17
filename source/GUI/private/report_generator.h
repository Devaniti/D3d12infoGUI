#pragma once

#include "precompiled_header.h"

namespace D3d12infoGUI {
class ReportGenerator {
 public:
  static void GenerateHTML(const std::vector<std::vector<char>>& validReports);
  static void WriteFile(const std::filesystem::path& path, const char* data,
                        size_t size);
};
}  // namespace D3d12infoGUI