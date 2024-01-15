#pragma once

#include "precompiled_header.h"

namespace D3d12infoGUI {
class ReportGenerator {
 public:
  static void GenerateHTML(std::string_view reportData);
  static void WriteFile(const std::filesystem::path& path, const char* data,
                        size_t size);
};
}  // namespace D3d12infoGUI