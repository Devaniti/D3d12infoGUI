#pragma once

#include "precompiled_header.h"

namespace D3d12infoGUI {
class Subprocess {
 public:
  static std::pair<int, std::string> GetCommandOutput(
      std::string_view commandLine);

 private:
  static void InitializePipe(HANDLE &stdoutRead, HANDLE &stdoutWrite);
  static void LaunchProcess(HANDLE stdoutWrite, HANDLE &processHandle,
                            std::string_view commandLine);
  static std::string ReadOutput(const HANDLE &stdoutRead);
  static int GetExitCode(HANDLE process);
};
}  // namespace D3d12infoGUI