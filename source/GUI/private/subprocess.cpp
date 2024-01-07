#include "precompiled_header.h"

#include "subprocess.h"

namespace D3d12infoGUI {
std::pair<int, std::string> Subprocess::GetCommandOutput(
    std::string_view commandLine) {
  HANDLE stdoutRead = NULL;
  HANDLE stdoutWrite = NULL;
  HANDLE process = NULL;

  InitializePipe(stdoutRead, stdoutWrite);
  LaunchProcess(stdoutWrite, process, commandLine);
  ::CloseHandle(stdoutWrite);

  std::pair<int, std::string> result;
  result.second = ReadOutput(stdoutRead);
  ::CloseHandle(stdoutRead);

  result.first = GetExitCode(process);
  ::CloseHandle(process);
  return result;
}
void Subprocess::InitializePipe(HANDLE &stdoutRead, HANDLE &stdoutWrite) {
  SECURITY_ATTRIBUTES securityAttributes{};

  securityAttributes.nLength = sizeof(SECURITY_ATTRIBUTES);
  securityAttributes.bInheritHandle = TRUE;
  securityAttributes.lpSecurityDescriptor = NULL;

  if (!::CreatePipe(&stdoutRead, &stdoutWrite, &securityAttributes, 0))
    throw std::runtime_error("Subprocess::InitializePipe::CreatePipe");

  if (!::SetHandleInformation(stdoutRead, HANDLE_FLAG_INHERIT, 0))
    throw std::runtime_error(
        "Subprocess::InitializePipe::SetHandleInformation");
}
void Subprocess::LaunchProcess(HANDLE stdoutWrite,
                               HANDLE &processHandle,
                               std::string_view commandLine) {
  PROCESS_INFORMATION procInfo{};
  STARTUPINFO startupInfo{};

  startupInfo.cb = sizeof(STARTUPINFO);
  startupInfo.hStdError = stdoutWrite;
  startupInfo.hStdOutput = stdoutWrite;
  startupInfo.dwFlags |= STARTF_USESTDHANDLES;

  std::string commandLineCopy(commandLine);

  BOOL bSuccess = ::CreateProcess(NULL, commandLineCopy.data(), NULL, NULL, TRUE,
                                0, NULL, NULL, &startupInfo, &procInfo);
  if (!bSuccess)
    std::runtime_error("Subprocess::LaunchProcess::CreateProcessW");

  processHandle = procInfo.hProcess;
  ::CloseHandle(procInfo.hThread);
}
std::string Subprocess::ReadOutput(const HANDLE &stdoutRead) {
  DWORD bytesRead;
  CHAR tempBuffer[4096];
  std::string output;
  for (;;) {
    BOOL bSuccess = ::ReadFile(stdoutRead, tempBuffer, ARRAYSIZE(tempBuffer),
                             &bytesRead, NULL);
    if (!bSuccess || bytesRead == 0) break;

    std::string chunk(tempBuffer, tempBuffer + bytesRead / sizeof(CHAR));
    output += chunk;
  }


  return output;
}

int Subprocess::GetExitCode(HANDLE process) {
  DWORD exit_code;
  ::WaitForSingleObject(process, INFINITE);
  ::GetExitCodeProcess(process, &exit_code);
  return exit_code;
}

}  // namespace D3d12infoGUI
