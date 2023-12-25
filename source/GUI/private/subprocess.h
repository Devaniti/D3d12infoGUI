#pragma once

#include "precompiled_header.h"

namespace D3d12infoGUI {
class Subprocess {
 public:
  static std::string GetCommandOutput(std::string_view commandLine);

 private:
  static void InitializePipe(HANDLE &stdoutRead, HANDLE &stdoutWrite);
  static void LaunchProcess(const HANDLE &stdoutWrite,
                            std::string_view &commandLine);
  static std::string ReadOutput(const HANDLE &stdoutRead);
};
}  // namespace D3d12infoGUI