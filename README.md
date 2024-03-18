D3d12infoGUI
============

D3d12infoGUI is a GUI for [D3d12info](https://github.com/sawickiap/D3d12info) and a GPU hardware database

You can submit new reports to the databse via GUI, or browse existing entries on the [database website](https://d3d12infodb.boolka.dev/)

# GUI Usage

1. Download latest release from [Releases](https://github.com/Devaniti/D3d12infoGUI/releases)
2. Extract all files
3. Run GUI.exe

Upon running it will generate webpage with the report and open it in default app.

Report will include all GPUs in your system, as well as "Microsoft Basic Render Driver".

If you have developer mode enabled in windows, it will also have an option to switch between info collected with Release Agility SDK and preview one.

After opening report, you will be able to submit your generated report to the [database](https://d3d12infodb.boolka.dev/).

After submitting report (or in case database already has matching report), you have an option to open said report online. You can then share link to that report to be viewed on another computer.

# Building GUI

## Prerequisites

* Cmake 3.22 or later
* Python 3
* Visual Studio 2022 with C++ development components installed
  * Other Generators or older versions of Visual Studio may work, but are not tested
* Vulkan SDK (optional)
  * Optional dependency of [D3d12info](https://github.com/sawickiap/D3d12info)
 
## How to build

In the repository root:
1. Initialize git submodules 
```
git submodule update --init --recursive
```
2. Configure Cmake project
```
cmake -S source -B build
```
3. Build generated project
```
cmake --build build -j
```
After build, artifacts will be in the `build/bin/{Configuration}` folder

By default D3d12info will be built from sources and embedded in GUI
You can configure this behaviour via following Cmake parameters:

* EMBED_D3D12INFO = <ON/OFF>
  * Whether to embed D3d12info or run D3d12info located in the working directory
  * D3d12info will still be built and placed in the same directory as GUI binary even if you decide not to embed it
  * On by default
* D3D12INFO_PATH
  * Specifies custom path to D3d12info binaries to embed
  * Only has effect when EMBED_D3D12INFO=ON
  * If it's non empty string, D3d12info build may be skipped
  * Empty string by default

If you are building D3d12info as part of D3d12infoGUI build, make sure to check [D3d12info build instructions](https://github.com/sawickiap/D3d12info?tab=readme-ov-file#building)

# Running website

To run database you need to host contents of `source/website` as a static website

Database service is hosted separately from the website, and doesn't neccecarilly need to run on same machine

Note that URLs of database service and website are hardcoded in source code

# Running database service

## Prerequisites

* Node.js v21
  * Older versions may work, but are not tested

## Running the service

In the `{REPO_ROOT}/source/db-server` folder:
1. Install npm dependencies
```
npm install
```
2. (Optional) Specify path to SSL key and certificate to enable HTTPS
```
# For Linux
export SSLKey=/path/to/keys/privkey.pem
export SSLCert=/path/to/keys/fullchain.pem
```
```
rem For Windows
set SSLKEY=C:\path\to\kets\privkey.pem
set SSLCert=C:\path\to\kets\fullchain.pem
```
3. Run the service
```
node main.js
```
While node process is running, database service is available

It is recommended to wrap it into system service to startup/restart on error automatically (e.g. with systemd on linux)
