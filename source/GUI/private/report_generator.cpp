#include "precompiled_header.h"

#include "report_generator.h"

namespace D3d12infoGUI
{

    void ReportGenerator::GenerateHTML(const std::filesystem::path& rootPath,
        const std::vector<std::vector<char>>& validReports, const OpenOptions& options)
    {
        if(!std::filesystem::is_directory(rootPath))
        {
            if(!std::filesystem::create_directory(rootPath))
            {
                throw std::runtime_error("Failed to create temporary directory");
            }
        }

        std::filesystem::path jsFilePath = rootPath / L"data.js";
        std::ofstream dataFile;
        dataFile.open(jsFilePath, std::ios_base::out | std::ios_base::binary);
        if(dataFile.fail())
        {
            throw std::runtime_error("Failed to open output file");
        }

        dataFile << std::format("const openOptions = {{autoSubmit: {}}}\n", options.AutoSubmit);

        dataFile << "const reports = [";
        bool isFirst = true;
        for(const auto& report : validReports)
        {
            if(isFirst)
            {
                isFirst = false;
            }
            else
            {
                dataFile << ",";
            }

            dataFile.write(report.data(), report.size());
        }
        dataFile << "]";

        dataFile.close();
        if(dataFile.fail())
        {
            throw std::runtime_error("Failed to write output file");
        }
    }

} // namespace D3d12infoGUI
