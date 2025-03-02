#pragma once

#include "precompiled_header.h"

namespace D3d12infoGUI
{
    class Subprocess
    {
    public:
        Subprocess(wchar_t* commandLine);
        ~Subprocess();

        // Disable copy and move semantics.
        Subprocess(const Subprocess&) = delete;
        Subprocess& operator=(const Subprocess&) = delete;
        Subprocess(Subprocess&&) = delete;
        Subprocess& operator=(Subprocess&&) = delete;

        int Wait();

    private:
        HANDLE m_Process;
    };
} // namespace D3d12infoGUI