#include "precompiled_header.h"

#include "subprocess.h"

namespace D3d12infoGUI {
std::string Subprocess::GetCommandOutput(std::string_view commandLine) {
  HANDLE stdoutRead = NULL;
  HANDLE stdoutWrite = NULL;
  InitializePipe(stdoutRead, stdoutWrite);
  LaunchProcess(stdoutWrite, commandLine);
  return ReadOutput(stdoutRead);
}
void Subprocess::InitializePipe(HANDLE &stdoutRead, HANDLE &stdoutWrite) {
  SECURITY_ATTRIBUTES securityAttributes{};

  securityAttributes.nLength = sizeof(SECURITY_ATTRIBUTES);
  securityAttributes.bInheritHandle = TRUE;
  securityAttributes.lpSecurityDescriptor = NULL;

  if (!CreatePipe(&stdoutRead, &stdoutWrite, &securityAttributes, 0))
    throw std::runtime_error("Subprocess::InitializePipe::CreatePipe");

  if (!SetHandleInformation(stdoutRead, HANDLE_FLAG_INHERIT, 0))
    throw std::runtime_error(
        "Subprocess::InitializePipe::SetHandleInformation");
}
void Subprocess::LaunchProcess(const HANDLE &stdoutWrite,
                               std::string_view &commandLine) {
  PROCESS_INFORMATION procInfo{};
  STARTUPINFO startupInfo{};

  startupInfo.cb = sizeof(STARTUPINFO);
  startupInfo.hStdError = stdoutWrite;
  startupInfo.hStdOutput = stdoutWrite;
  startupInfo.dwFlags |= STARTF_USESTDHANDLES;

  std::string commandLineCopy(commandLine);

  BOOL bSuccess = CreateProcess(NULL, commandLineCopy.data(), NULL, NULL, TRUE,
                                0, NULL, NULL, &startupInfo, &procInfo);
  if (!bSuccess)
    std::runtime_error("Subprocess::LaunchProcess::CreateProcessW");

  CloseHandle(procInfo.hProcess);
  CloseHandle(procInfo.hThread);
  CloseHandle(stdoutWrite);
}
std::string Subprocess::ReadOutput(const HANDLE &stdoutRead) {
  DWORD bytesRead;
  CHAR tempBuffer[4096];
  std::string output;
  for (;;) {
    BOOL bSuccess = ReadFile(stdoutRead, tempBuffer, ARRAYSIZE(tempBuffer),
                             &bytesRead, NULL);
    if (!bSuccess || bytesRead == 0) break;

    std::string chunk(tempBuffer, tempBuffer + bytesRead / sizeof(CHAR));
    output += chunk;
  }

  CloseHandle(stdoutRead);

  return output;
}
}  // namespace D3d12infoGUI
