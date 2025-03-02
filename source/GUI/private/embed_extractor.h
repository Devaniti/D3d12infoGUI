#pragma once

#include "precompiled_header.h"

namespace D3d12infoGUI
{
    class EmbedExctactor
    {
    public:
        static void ExtractFiles(const std::filesystem::path& rootPath);
        static void WriteFile(const std::filesystem::path& path, const char* data, const size_t size);
    };
} // namespace D3d12infoGUI
