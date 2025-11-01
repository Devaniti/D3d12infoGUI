#pragma once

#include "precompiled_header.h"

namespace D3d12infoGUI
{
    struct OpenOptions
    {
        bool AutoSubmit = false;
    };

    class ReportGenerator
    {
    public:
        static void GenerateHTML(const std::filesystem::path& rootPath,
            const std::vector<std::vector<char>>& validReports, const OpenOptions& options);
    };
} // namespace D3d12infoGUI