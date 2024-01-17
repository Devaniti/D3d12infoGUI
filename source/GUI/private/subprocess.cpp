#include "precompiled_header.h"

#include "subprocess.h"

namespace D3d12infoGUI {
std::pair<int, std::vector<char>> Subprocess::GetCommandOutput(
    std::string_view commandLine) {
  HANDLE stdinRead = NULL;
  HANDLE stdinWrite = NULL;
  HANDLE stdoutRead = NULL;
  HANDLE stdoutWrite = NULL;
  HANDLE process = NULL;

  InitializePipe(stdoutRead, stdoutWrite);
  LaunchProcess(stdinRead, stdoutWrite, process, commandLine);
  ::CloseHandle(stdoutWrite);

  std::pair<int, std::vector<char>> result;
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
void Subprocess::LaunchProcess(HANDLE stdinRead, HANDLE stdoutWrite,
                               HANDLE &processHandle,
                               std::string_view commandLine) {
  PROCESS_INFORMATION procInfo{};
  STARTUPINFO startupInfo{};

  startupInfo.cb = sizeof(STARTUPINFO);
  startupInfo.hStdInput = stdinRead;
  startupInfo.hStdError = stdoutWrite;
  startupInfo.hStdOutput = stdoutWrite;
  startupInfo.dwFlags |= STARTF_USESTDHANDLES;

  std::string commandLineCopy(commandLine);

  BOOL bSuccess = ::CreateProcess(NULL, commandLineCopy.data(), NULL, NULL,
                                  TRUE, 0, NULL, NULL, &startupInfo, &procInfo);
  if (!bSuccess)
    std::runtime_error("Subprocess::LaunchProcess::CreateProcessW");

  bSuccess = ::AttachConsole(procInfo.dwProcessId);
  if (!bSuccess)
    std::runtime_error("Subprocess::LaunchProcess::AttachConsole");

  processHandle = procInfo.hProcess;
  ::CloseHandle(procInfo.hThread);
}
std::vector<char> Subprocess::ReadOutput(HANDLE stdoutRead) {
  DWORD bytesRead;
  CHAR tempBuffer[4096];
  std::vector<char> output;
  for (;;) {
    BOOL bSuccess = ::ReadFile(stdoutRead, tempBuffer, ARRAYSIZE(tempBuffer),
                               &bytesRead, NULL);
    if (!bSuccess || bytesRead == 0) break;

    size_t prevSize = output.size();
    output.resize(prevSize + bytesRead);
    char *dest = output.data() + prevSize;
    memcpy(dest, tempBuffer, bytesRead);
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
