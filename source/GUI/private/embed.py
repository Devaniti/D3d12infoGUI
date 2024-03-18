import sys

out_file = sys.argv[1]
result_content = "struct EmbeddedFile { const wchar_t* name; const size_t size; const char* content; };\nconst EmbeddedFile g_embeddedFiles[] = {"
result_prefix = "#pragma once\n"

for i in range(2, len(sys.argv), 2):
    in_file = sys.argv[i]
    out_name = sys.argv[i + 1]
    with open(in_file, "rb") as file:
        file_data = file.read()
    escaped_file_data = ",".join(["(char)" + str(byte) for byte in file_data])
    result_prefix += f"const char data{i//2}[] = {{{escaped_file_data}}};\n"
    result_content += f"\n{{L\"{out_name}\", sizeof(data{i//2}), data{i//2}}},"

result_content += "\n};"
result_content = result_prefix + result_content

with open(out_file, "w") as file:
    file.write(result_content)
