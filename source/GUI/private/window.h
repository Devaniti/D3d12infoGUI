#pragma once

#include "precompiled_header.h"

namespace D3d12infoGUI
{
    class Window
    {
    public:
        Window(HINSTANCE hInstance, const std::wstring_view message);
        ~Window();

        void Close();
        void ReportProgress(const std::wstring_view message);
        bool IsExitRequested();

    private:
        static void ThreadEntryPointStatic(Window* window);
        void ThreadEntryPoint();
        void MessageLoop();
        static LRESULT CALLBACK WindowProcStatic(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam);
        LRESULT WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam);

        void PaintWindow(HWND hwnd);

        bool QueryDarkMode();

        std::jthread windowThread;
        std::atomic<bool> exitRequested = false;

        std::mutex syncMutex;
        std::condition_variable initializedCondition;
        bool isInitialized = false;

        std::wstring progressMessage;
        const HINSTANCE instance = nullptr;
        HWND hwnd = nullptr;

        bool isDarkMode = false;

        static constexpr wchar_t windowClass[] = L"D3d12infoGUI Windows Class";
        static constexpr wchar_t windowTitle[] = L"D3d12infoGUI";
    };
} // namespace D3d12infoGUI
