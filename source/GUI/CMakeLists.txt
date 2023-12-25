file(GLOB_RECURSE SourceList CONFIGURE_DEPENDS *.cpp)
file(GLOB_RECURSE HeaderList CONFIGURE_DEPENDS *.h *.hpp)
file(GLOB_RECURSE HTMLList CONFIGURE_DEPENDS html/*)

add_executable(GUI ${SourceList} ${HeaderList} ${HTMLList})

target_include_directories(GUI
    PUBLIC public
    PRIVATE private
    PRIVATE ${CMAKE_CURRENT_BINARY_DIR}
)

target_precompile_headers(GUI
    PUBLIC public/precompiled_header.h
)

set_source_files_properties(${HeaderList} ${HTMLList} PROPERTIES HEADER_FILE_ONLY TRUE)
source_group(TREE ${CMAKE_CURRENT_SOURCE_DIR} FILES ${SourceList} ${HeaderList} ${HTMLList})

target_link_libraries(GUI)

set_property(TARGET GUI PROPERTY VS_DEBUGGER_COMMAND_ARGUMENTS "")

set_target_properties(GUI
    PROPERTIES
    RUNTIME_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/bin"
)

add_custom_command(TARGET GUI
    PRE_BUILD
    COMMAND powershell -noprofile -executionpolicy bypass -file "${CMAKE_CURRENT_SOURCE_DIR}/html/Escape.ps1" "${CMAKE_CURRENT_SOURCE_DIR}/html/Report.html" "${CMAKE_CURRENT_BINARY_DIR}/Report.html"
    DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/html/Escape.ps1 ${CMAKE_CURRENT_SOURCE_DIR}/html/Report.html
    BYPRODUCTS ${CMAKE_CURRENT_BINARY_DIR}/Report.html
)
set_source_files_properties(${CMAKE_CURRENT_BINARY_DIR}/Report.html PROPERTIES GENERATED TRUE)

add_dependencies(GUI D3d12info D3d12info_preview)
