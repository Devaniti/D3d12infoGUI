import sys
import os

out_file = sys.argv[1]
result_content = "struct EmbeddedFile { const wchar_t* name; const size_t size; const char* content; };\nconst EmbeddedFile g_embeddedFiles[] = {"
result_prefix = "#pragma once\n"

file_index = 0

def embed_single_file(in_file, out_path):
    global result_content
    global result_prefix
    global file_index

    print(f"Embedding {in_file} to {out_path}")
    
    out_path = out_path.replace("\\", "/")

    file = open(in_file, "rb")
    try:
        file_data = file.read()
    except Exception as e:
        print(f"Error reading file {in_file}: {e}")
        sys.exit(1)
    finally:
        file.close()

    escaped_file_data = ",".join(["(char)" + str(byte) for byte in file_data])

    result_prefix += f"const char data{file_index}[] = {{{escaped_file_data}}};\n"
    result_content += f"\n{{L\"{out_path}\", sizeof(data{file_index}), data{file_index}}},"
    file_index += 1

for i in range(2, len(sys.argv), 2):
    in_path = sys.argv[i]
    out_path = sys.argv[i + 1]
    # Checks whether in_path exist
    if not os.path.exists(in_path):
        print(f"File {in_path} does not exist")
        sys.exit(1)

    if os.path.isdir(in_path):
        for root, dirs, files in os.walk(in_path):
            for file in files:
                file_path = os.path.join(root, file)
                out_file_path = os.path.join(out_path, os.path.relpath(file_path, in_path))
                embed_single_file(file_path, out_file_path)
    elif os.path.isfile(in_path):
        embed_single_file(in_path, out_path)
    else:
        print(f"Invalid path {in_path}")
        sys.exit(1)

result_content += "\n};"
result_content = result_prefix + result_content

with open(out_file, "w") as file:
    file.write(result_content)
