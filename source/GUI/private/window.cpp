#include "precompiled_header.h"

#include "window.h"

namespace D3d12infoGUI
{

    Window::Window(HINSTANCE hInstance, const std::wstring_view message)
        : instance(hInstance)
    {
        progressMessage = message;
        {
            isDarkMode = QueryDarkMode();
            windowThread = std::jthread(&ThreadEntryPointStatic, this);
            std::unique_lock lock(syncMutex);
            initializedCondition.wait(lock, [this] { return isInitialized; });
        }
    }

    Window::~Window()
    {
        Close();
    }

    void Window::Close()
    {
        ::PostMessage(hwnd, WM_CLOSE, 0, 0);
    }

    void Window::ReportProgress(const std::wstring_view message)
    {
        {
            std::scoped_lock lock(syncMutex);
            progressMessage = message;
        }
        ::InvalidateRect(hwnd, NULL, true);
    }

    bool Window::IsExitRequested()
    {
        return exitRequested;
    }

    void Window::ThreadEntryPointStatic(Window* window)
    {
        window->ThreadEntryPoint();
    }

    void Window::ThreadEntryPoint()
    {
        WNDCLASSEXW windowClassEx{};

        windowClassEx.cbSize = sizeof(WNDCLASSEX);

        windowClassEx.style = CS_HREDRAW | CS_VREDRAW;
        windowClassEx.lpfnWndProc = &WindowProcStatic;
        windowClassEx.cbClsExtra = 0;
        windowClassEx.cbWndExtra = 0;
        windowClassEx.hInstance = instance;
        windowClassEx.hIcon = NULL;
        windowClassEx.hCursor = NULL;
        windowClassEx.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);
        windowClassEx.lpszMenuName = NULL;
        windowClassEx.lpszClassName = windowClass;
        windowClassEx.hIconSm = NULL;
        ATOM windowClassAtom = RegisterClassExW(&windowClassEx);
        assert(windowClassAtom);

        hwnd = CreateWindowW(windowClass, windowTitle, WS_OVERLAPPEDWINDOW, CW_USEDEFAULT, CW_USEDEFAULT, 470, 130,
            nullptr, nullptr, instance, this);

        if(isDarkMode)
        {
            BOOL USE_DARK_MODE = true;
            ::DwmSetWindowAttribute(
                hwnd, DWMWINDOWATTRIBUTE::DWMWA_USE_IMMERSIVE_DARK_MODE, &USE_DARK_MODE, sizeof(USE_DARK_MODE));
        }

        assert(hwnd);
        ::ShowWindow(hwnd, SW_SHOWNORMAL);

        {
            std::unique_lock lock(syncMutex);
            isInitialized = true;
            initializedCondition.notify_one();
        }

        MessageLoop();
    }

    void Window::MessageLoop()
    {
        MSG msg;
        BOOL bRet;

        while((bRet = ::GetMessage(&msg, hwnd, 0, 0)) != 0)
        {
            if(bRet == -1)
            {
                return;
            }

            ::TranslateMessage(&msg);
            ::DispatchMessage(&msg);
        }
    }

    LRESULT CALLBACK Window::WindowProcStatic(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam)
    {
        // How can I make a WNDPROC or DLGPROC a member of my C++ class?
        // https://devblogs.microsoft.com/oldnewthing/20140203-00/?p=1893
        Window* object;
        if(uMsg == WM_NCCREATE)
        {
            LPCREATESTRUCT lpcs = reinterpret_cast<LPCREATESTRUCT>(lParam);
            object = static_cast<Window*>(lpcs->lpCreateParams);
            ::SetWindowLongPtrW(hwnd, GWLP_USERDATA, reinterpret_cast<LONG_PTR>(object));
        }
        else
        {
            object = reinterpret_cast<Window*>(::GetWindowLongPtr(hwnd, GWLP_USERDATA));
        }
        if(object)
        {
            return object->WindowProc(hwnd, uMsg, wParam, lParam);
        }

        return ::DefWindowProc(hwnd, uMsg, wParam, lParam);
    }

    LRESULT Window::WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam)
    {
        switch(uMsg)
        {
        case WM_PAINT: {
            PaintWindow(hwnd);
            return 0;
        }
        case WM_NCDESTROY:
            exitRequested = true;
            [[fallthrough]];
        default:
            return DefWindowProc(hwnd, uMsg, wParam, lParam);
        }
        return 0;
    }

    void Window::PaintWindow(HWND hwnd)
    {
        PAINTSTRUCT ps;
        HDC hdc = BeginPaint(hwnd, &ps);

        HFONT font = ::CreateFontW(40, 0, 0, 0, FW_SEMIBOLD, FALSE, FALSE, FALSE, DEFAULT_CHARSET, OUT_OUTLINE_PRECIS,
            CLIP_DEFAULT_PRECIS, CLEARTYPE_QUALITY, VARIABLE_PITCH, TEXT("Segoe UI"));
        ::SelectObject(hdc, font);

        HBRUSH backgroundBrush = isDarkMode ? ::CreateSolidBrush(RGB(50, 50, 50)) : (HBRUSH)(COLOR_WINDOW + 1);
        COLORREF textColor = isDarkMode ? RGB(225, 225, 225) : RGB(0, 0, 0);

        ::FillRect(hdc, &ps.rcPaint, backgroundBrush);
        ::SetTextColor(hdc, textColor);
        ::SetTextAlign(hdc, TA_CENTER);
        ::SetBkMode(hdc, TRANSPARENT);

        {
            std::scoped_lock lock(syncMutex);
            ::TextOutW(hdc, 227, 23, progressMessage.c_str(), progressMessage.length());
        }

        ::EndPaint(hwnd, &ps);
        ::ReleaseDC(hwnd, hdc);
        ::DeleteObject(font);
        if(isDarkMode)
        {
            ::DeleteObject(backgroundBrush);
        }
    }

    bool Window::QueryDarkMode()
    {
        HKEY hKey;
        DWORD dwValue = 0;
        DWORD dwSize = sizeof(dwValue);

        if(::RegOpenKeyExW(HKEY_CURRENT_USER, L"Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize", 0,
               KEY_READ, &hKey) == ERROR_SUCCESS)
        {
            if(::RegQueryValueEx(hKey, L"AppsUseLightTheme", nullptr, nullptr, reinterpret_cast<LPBYTE>(&dwValue),
                   &dwSize) == ERROR_SUCCESS)
            {
                ::RegCloseKey(hKey);

                return dwValue == 0;
            }
            ::RegCloseKey(hKey);
        }

        return false;
    }

} // namespace D3d12infoGUI
