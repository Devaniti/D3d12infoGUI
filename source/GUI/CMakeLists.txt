file(GLOB_RECURSE SourceList CONFIGURE_DEPENDS *.cpp)
file(GLOB_RECURSE HeaderList CONFIGURE_DEPENDS *.h *.hpp)
file(GLOB_RECURSE HTMLList CONFIGURE_DEPENDS html/*)
set(GeneratedFiles ${CMAKE_CURRENT_BINARY_DIR}/Report.html ${CMAKE_CURRENT_BINARY_DIR}/Report.js ${CMAKE_CURRENT_BINARY_DIR}/Report.css)

add_executable(GUI ${SourceList} ${HeaderList} ${HTMLList} ${GeneratedFiles})

target_include_directories(GUI
    PUBLIC public
    PRIVATE private
    PRIVATE ${CMAKE_CURRENT_BINARY_DIR}
)

target_precompile_headers(GUI
    PUBLIC public/precompiled_header.h
)

set_source_files_properties(${HeaderList} ${HTMLList} ${GeneratedFiles} PROPERTIES HEADER_FILE_ONLY TRUE)
source_group(TREE ${CMAKE_CURRENT_SOURCE_DIR} FILES ${SourceList} ${HeaderList} ${HTMLList})

target_link_libraries(GUI)

set_property(TARGET GUI PROPERTY VS_DEBUGGER_COMMAND_ARGUMENTS "")

set_target_properties(GUI
    PROPERTIES
    RUNTIME_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/bin"
)

add_custom_command(
    OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/Report.html
    COMMAND powershell -noprofile -executionpolicy bypass -file "${CMAKE_CURRENT_SOURCE_DIR}/html/Escape.ps1" "${CMAKE_CURRENT_SOURCE_DIR}/html/Report.html" "${CMAKE_CURRENT_BINARY_DIR}/Report.html" ReportHTML
    MAIN_DEPENDENCY ${CMAKE_CURRENT_SOURCE_DIR}/html/Escape.ps1 ${CMAKE_CURRENT_SOURCE_DIR}/html/Report.html
)

add_custom_command(
    OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/Report.js
    COMMAND powershell -noprofile -executionpolicy bypass -file "${CMAKE_CURRENT_SOURCE_DIR}/html/Escape.ps1" "${CMAKE_CURRENT_SOURCE_DIR}/html/Report.js" "${CMAKE_CURRENT_BINARY_DIR}/Report.js" ReportJS
    MAIN_DEPENDENCY ${CMAKE_CURRENT_SOURCE_DIR}/html/Escape.ps1 ${CMAKE_CURRENT_SOURCE_DIR}/html/Report.js
)

add_custom_command(
    OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/Report.css
    COMMAND powershell -noprofile -executionpolicy bypass -file "${CMAKE_CURRENT_SOURCE_DIR}/html/Escape.ps1" "${CMAKE_CURRENT_SOURCE_DIR}/html/Report.css" "${CMAKE_CURRENT_BINARY_DIR}/Report.css" ReportCSS
    MAIN_DEPENDENCY ${CMAKE_CURRENT_SOURCE_DIR}/html/Escape.ps1 ${CMAKE_CURRENT_SOURCE_DIR}/html/Report.css
)

add_dependencies(GUI D3d12info D3d12info_preview)
