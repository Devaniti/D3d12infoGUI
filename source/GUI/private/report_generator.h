#pragma once

#include "precompiled_header.h"

namespace D3d12infoGUI {
class ReportGenerator {
 public:
  static void GenerateHTML(std::string_view reportData);
};
}  // namespace D3d12infoGUI