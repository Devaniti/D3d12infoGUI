#include "precompiled_header.h"

#include "subprocess.h"

namespace D3d12infoGUI
{

    Subprocess::Subprocess(wchar_t* commandLine)
    {
        PROCESS_INFORMATION procInfo{};
        STARTUPINFOW startupInfo{};

        startupInfo.cb = sizeof(startupInfo);

        BOOL bSuccess = ::CreateProcessW(
            NULL, commandLine, NULL, NULL, TRUE, CREATE_NO_WINDOW, NULL, NULL, &startupInfo, &procInfo);
        if(!bSuccess)
            std::runtime_error("CreateProcess call failed");

        m_Process = procInfo.hProcess;
        ::CloseHandle(procInfo.hThread);
    }

    Subprocess::~Subprocess()
    {
        ::CloseHandle(m_Process);
    }

    int Subprocess::Wait()
    {
        DWORD exit_code;
        ::WaitForSingleObject(m_Process, INFINITE);
        ::GetExitCodeProcess(m_Process, &exit_code);
        return exit_code;
    }

} // namespace D3d12infoGUI
