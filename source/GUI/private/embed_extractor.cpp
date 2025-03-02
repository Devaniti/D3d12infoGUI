#include "precompiled_header.h"

#include "embed_extractor.h"

#include "embed.h"

namespace D3d12infoGUI
{

    void EmbedExctactor::ExtractFiles(const std::filesystem::path& rootPath)
    {
        for(auto [name, size, content] : g_embeddedFiles)
        {
            const std::filesystem::path filePath = rootPath / name;
            const std::filesystem::path folderPath = filePath.parent_path();
            if(!std::filesystem::is_directory(folderPath))
            {
                if(!std::filesystem::create_directory(folderPath))
                {
                    throw std::runtime_error("Failed to create subdirectory");
                }
            }
            WriteFile(rootPath / name, content, size);
        }
    }

    void EmbedExctactor::WriteFile(const std::filesystem::path& path, const char* data, const size_t size)
    {
        std::ofstream file;
        file.open(path, std::ios_base::out | std::ios_base::binary);
        if(file.fail())
        {
            throw std::runtime_error(std::format("Failed to open output file {}", path.string()));
        }

        file.write(data, size);
        file.close();
        if(file.fail())
        {
            throw std::runtime_error(std::format("Failed to write output file {}", path.string()));
        }
    }

} // namespace D3d12infoGUI
