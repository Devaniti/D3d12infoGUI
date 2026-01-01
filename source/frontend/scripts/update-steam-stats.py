import os
import csv
import json

arch_name_mapping = { 
"Ada Lovelace" : "Ada",
"Ampere" : "Ampere",
"Blackwell" : "Blackwell",
"Curie" : "Curie",
"Fermi" : "Fermi",
"Fermi 2.0" : "Fermi2",
"GCN 1.0" : "GCN1",
"GCN 2.0" : "GCN2",
"GCN 3.0" : "GCN3",
"GCN 4.0" : "GCN4",
"GCN 5.0" : "Vega",
"Generation 3.0" : "Gen3",
"Generation 4.0" : "Gen4",
"Generation 5.75" : "Gen5.75",
"Generation 6.0" : "Gen6",
"Generation 7.0" : "Gen7",
"Generation 7.5" : "Gen7.5",
"Generation 8.0" : "Gen8",
"Generation 9.0" : "Gen9",
"Generation 9.5" : "Gen9.5",
"Generation 12.1/Generation 12.2" : "Xe",
"Generation 12.2" : "Xe",
"Kepler" : "Kepler",
"Kepler 2.0" : "Kepler",
"Maxwell" : "Maxwell1",
"Maxwell 2.0" : "Maxwell2",
"Pascal" : "Pascal",
"RDNA 1.0" : "RDNA",
"RDNA 2.0" : "RDNA2",
"RDNA 3.0" : "RDNA3",
"RDNA 4.0" : "RDNA4",
"TeraScale" : "PreGCN",
"TeraScale 2" : "PreGCN",
"TeraScale 3" : "PreGCN",
"Tesla" : "Tesla",
"Tesla 2.0" : "Tesla2",
"Turing" : "Turing 20",
"Turing 16" : "Turing 16",
"X1" : "X1",
"Unknown" : "Unknown",
}

# pull latest main in ../../external/SteamHWSurveyGPUArchStats repo
os.system("git -C ../../external/SteamHWSurveyGPUArchStats switch --discard-changes --recurse-submodules main")
os.system("git -C ../../external/SteamHWSurveyGPUArchStats pull")

converted_arch_stats = {}

with open('../../external/SteamHWSurveyGPUArchStats/arch_stats_dx12_latest.csv', newline='') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        if row[0] == "gpu architecture":
            continue
        arch = row[0]
        if (arch not in arch_name_mapping):
            print(f"Unknown architecture: {arch}")
        arch = arch_name_mapping.get(arch, arch)
        percentage = float(row[1])
        converted_arch_stats.setdefault(arch, 0.0)
        converted_arch_stats[arch] += percentage
with open('../assets/js/arch_stats.mjs', 'w') as jsfile:
    jsfile.write("const ArchStats = ")
    json.dump(converted_arch_stats, jsfile)
    jsfile.write("\n")
    jsfile.write("export default ArchStats")
