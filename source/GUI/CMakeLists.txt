file(GLOB_RECURSE SourceList CONFIGURE_DEPENDS *.cpp)
file(GLOB_RECURSE HeaderList CONFIGURE_DEPENDS *.h *.hpp)
file(GLOB_RECURSE HTMLList CONFIGURE_DEPENDS html/*)
set(GeneratedFiles ${CMAKE_CURRENT_BINARY_DIR}/embed.h)

option(EMBED_D3D12INFO "Whether to embed D3d12info binaries self extract later" ON)
set(D3D12INFO_PATH "" CACHE STRING "If EMBED_D3D12INFO is ON, overrides default path for D3d12info binaries to embed")

add_executable(GUI WIN32 ${SourceList} ${HeaderList} ${GeneratedFiles} ${HTMLList})

set_property(TARGET GUI PROPERTY
        MSVC_RUNTIME_LIBRARY "MultiThreaded$<$<CONFIG:Debug>:Debug>")

if(CMAKE_CXX_COMPILER_ID MATCHES "MSVC")
    target_compile_definitions(GUI PRIVATE UNICODE _UNICODE)
endif()

target_include_directories(GUI
    PUBLIC public
    PRIVATE private
    PRIVATE ${CMAKE_CURRENT_BINARY_DIR}
)

target_precompile_headers(GUI
    PUBLIC public/precompiled_header.h
)

set_source_files_properties(${HeaderList} ${HTMLList} ${GeneratedFiles} PROPERTIES HEADER_FILE_ONLY TRUE)
set_source_files_properties(${GeneratedFiles} PROPERTIES GENERATED TRUE)
source_group(TREE ${CMAKE_CURRENT_SOURCE_DIR} FILES ${SourceList} ${HeaderList} ${HTMLList})

target_link_libraries(GUI)

set_property(TARGET GUI PROPERTY VS_DEBUGGER_COMMAND_ARGUMENTS "")

set_target_properties(GUI
    PROPERTIES
    RUNTIME_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/bin"
)

if (EMBED_D3D12INFO)
    if (D3D12INFO_PATH)
        # Embed D3d12info from custom folder
        add_custom_command(
            OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/embed.h
            COMMAND python "${CMAKE_CURRENT_SOURCE_DIR}/private/embed.py" "${CMAKE_CURRENT_BINARY_DIR}/embed.h" "${CMAKE_SOURCE_DIR}/../LICENSE" D3d12infoGUI_LICENSE.txt "${CMAKE_CURRENT_SOURCE_DIR}/html/Report.html" Report.html "${CMAKE_CURRENT_SOURCE_DIR}/html/Report.js" Report.js "${CMAKE_CURRENT_SOURCE_DIR}/html/Report.css" Report.css "${CMAKE_CURRENT_SOURCE_DIR}/html/Search.svg" Search.svg "${CMAKE_CURRENT_SOURCE_DIR}/html/Info.svg" Info.svg "${D3D12INFO_PATH}/D3d12info.exe" D3d12info.exe "${D3D12INFO_PATH}/D3d12info_preview.exe" D3d12info_preview.exe "${D3D12INFO_PATH}/amd_ags_x64.dll" amd_ags_x64.dll "${D3D12INFO_PATH}/D3D12/D3D12Core.dll" D3D12/D3D12Core.dll "${D3D12INFO_PATH}/D3D12_preview/D3D12Core.dll" D3D12_preview/D3D12Core.dll "${D3D12INFO_PATH}/D3D12_preview/DirectSR.dll" D3D12_preview/DirectSR.dll "${D3D12INFO_PATH}/LICENSE.txt" D3d12info_LICENSE.txt
            DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/private/embed.py ${CMAKE_SOURCE_DIR}/../LICENSE ${CMAKE_CURRENT_SOURCE_DIR}/html/Report.html ${CMAKE_CURRENT_SOURCE_DIR}/html/Report.js ${CMAKE_CURRENT_SOURCE_DIR}/html/Report.css ${CMAKE_CURRENT_SOURCE_DIR}/html/Search.svg ${CMAKE_CURRENT_SOURCE_DIR}/html/Info.svg ${D3D12INFO_PATH}/D3d12info.exe ${D3D12INFO_PATH}/D3d12info_preview.exe ${D3D12INFO_PATH}/amd_ags_x64.dll ${D3D12INFO_PATH}/D3D12/D3D12Core.dll ${D3D12INFO_PATH}/D3D12_preview/D3D12Core.dll ${D3D12INFO_PATH}/LICENSE.txt
        )
    else()
        # Build D3d12info and embed it
        add_dependencies(GUI D3d12info D3d12info_preview)
        add_custom_command(
            OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/embed.h
            COMMAND python "${CMAKE_CURRENT_SOURCE_DIR}/private/embed.py" "${CMAKE_CURRENT_BINARY_DIR}/embed.h" "${CMAKE_SOURCE_DIR}/../LICENSE" D3d12infoGUI_LICENSE.txt "${CMAKE_CURRENT_SOURCE_DIR}/html/Report.html" Report.html "${CMAKE_CURRENT_SOURCE_DIR}/html/Report.js" Report.js "${CMAKE_CURRENT_SOURCE_DIR}/html/Report.css" Report.css "${CMAKE_CURRENT_SOURCE_DIR}/html/Search.svg" Search.svg "${CMAKE_CURRENT_SOURCE_DIR}/html/Info.svg" Info.svg "${CMAKE_BINARY_DIR}/bin/$<CONFIG>/D3d12info.exe" D3d12info.exe "${CMAKE_BINARY_DIR}/bin/$<CONFIG>/D3d12info_preview.exe" D3d12info_preview.exe "${CMAKE_BINARY_DIR}/bin/$<CONFIG>/amd_ags_x64.dll" amd_ags_x64.dll "${CMAKE_BINARY_DIR}/bin/$<CONFIG>/D3D12/D3D12Core.dll" D3D12/D3D12Core.dll "${CMAKE_BINARY_DIR}/bin/$<CONFIG>/D3D12_preview/D3D12Core.dll" D3D12_preview/D3D12Core.dll "${CMAKE_BINARY_DIR}/bin/$<CONFIG>/D3D12_preview/DirectSR.dll" D3D12_preview/DirectSR.dll "${CMAKE_SOURCE_DIR}/external/D3d12info/LICENSE.txt" D3d12info_LICENSE.txt
            DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/private/embed.py ${CMAKE_SOURCE_DIR}/../LICENSE ${CMAKE_CURRENT_SOURCE_DIR}/html/Report.html ${CMAKE_CURRENT_SOURCE_DIR}/html/Report.js ${CMAKE_CURRENT_SOURCE_DIR}/html/Report.css ${CMAKE_CURRENT_SOURCE_DIR}/html/Search.svg ${CMAKE_CURRENT_SOURCE_DIR}/html/Info.svg ${CMAKE_BINARY_DIR}/bin/$<CONFIG>/D3d12info.exe ${CMAKE_BINARY_DIR}/bin/$<CONFIG>/D3d12info_preview.exe ${CMAKE_BINARY_DIR}/bin/$<CONFIG>/amd_ags_x64.dll ${CMAKE_BINARY_DIR}/bin/$<CONFIG>/D3D12/D3D12Core.dll ${CMAKE_BINARY_DIR}/bin/$<CONFIG>/D3D12_preview/D3D12Core.dll ${CMAKE_SOURCE_DIR}/external/D3d12info/LICENSE.txt
        )
    endif()
else()
    # Don't embed D3d12info, build it and run from the working directory
    target_compile_definitions(GUI PRIVATE USE_D3D12INFO_FROM_WORKING_DIRECTORY=1)
    add_dependencies(GUI D3d12info D3d12info_preview)
    add_custom_command(
        OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/embed.h
        COMMAND python "${CMAKE_CURRENT_SOURCE_DIR}/private/embed.py" "${CMAKE_CURRENT_BINARY_DIR}/embed.h" "${CMAKE_SOURCE_DIR}/../LICENSE" D3d12infoGUI_LICENSE.txt "${CMAKE_CURRENT_SOURCE_DIR}/html/Report.html" Report.html "${CMAKE_CURRENT_SOURCE_DIR}/html/Report.js" Report.js "${CMAKE_CURRENT_SOURCE_DIR}/html/Report.css" Report.css "${CMAKE_CURRENT_SOURCE_DIR}/html/Search.svg" Search.svg "${CMAKE_CURRENT_SOURCE_DIR}/html/Info.svg" Info.svg
        DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/private/embed.py ${CMAKE_SOURCE_DIR}/../LICENSE ${CMAKE_CURRENT_SOURCE_DIR}/html/Report.html ${CMAKE_CURRENT_SOURCE_DIR}/html/Report.js ${CMAKE_CURRENT_SOURCE_DIR}/html/Report.css ${CMAKE_CURRENT_SOURCE_DIR}/html/Search.svg ${CMAKE_CURRENT_SOURCE_DIR}/html/Info.svg
    )
endif()
