#pragma once

#include "precompiled_header.h"

namespace D3d12infoGUI {
class Subprocess {
 public:
  using ProcessOutput = std::pair<int, std::vector<char>>;

  // first - exit code, second - array of chars of output
  static ProcessOutput GetCommandOutput(std::string_view commandLine);

 private:
  static void InitializePipe(HANDLE &stdoutRead, HANDLE &stdoutWrite);
  static void LaunchProcess(HANDLE stdinRead, HANDLE stdoutWrite,
                            HANDLE &processHandle,
                            std::string_view commandLine);
  static std::vector<char> ReadOutput(HANDLE stdoutRead);
  static int GetExitCode(HANDLE process);
};
}  // namespace D3d12infoGUI