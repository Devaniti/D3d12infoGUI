import ArchStats from './arch_stats.mjs'
import * as Constants from './constants.mjs'
import * as HTML from './html.mjs'
import * as Server from './server.mjs'
import * as ArchClassifier from './arch_classifier.mjs'

function AddHeaderCell(container, className, headerElement)
{
    let cell = document.createElement("th");
    cell.append(headerElement);
    if (className) 
    {
        cell.className = HTML.SanitizeCSSClassName(className);
    }
    container.appendChild(cell);
}

function AddBodyCell(container, className, text)
{
    let cell = document.createElement("td");
    cell.append(text);
    if (className) 
    {
        cell.className = HTML.SanitizeCSSClassName(className);
    }
    container.appendChild(cell);
}

function RenderTableHead(container, vendorName) {
    let thead = document.createElement("thead");

    let headerRowVendor = document.createElement("tr");
    let cellVendor = document.createElement("th");
    cellVendor.append(vendorName);
    cellVendor.className = HTML.SanitizeCSSClassName(vendorName);
    cellVendor.scope = "colgroup";
    cellVendor.colSpan = 5;
    headerRowVendor.appendChild(cellVendor);
    thead.appendChild(headerRowVendor);

    let headerRowLegend = document.createElement("tr");

    AddHeaderCell(headerRowLegend, vendorName, HTML.CreateMultilineText("Arch"));
    AddHeaderCell(headerRowLegend, vendorName, HTML.CreateMultilineText("Release", "Date"));
    AddHeaderCell(headerRowLegend, vendorName, HTML.CreateMultilineText("Market", "Share"));
    AddHeaderCell(headerRowLegend, vendorName, HTML.CreateMultilineText("Cumulative", "Market Share"));
    AddHeaderCell(headerRowLegend, vendorName, HTML.CreateMultilineText("Added Features"));

    thead.appendChild(headerRowLegend);
    
    container.appendChild(thead);
}

function FormatMarketShare(marketShare)
{
    if (!marketShare) return "~0%"
    return (marketShare * 100).toFixed(2) + "%"
}

function AddLine(original, newLine)
{
    if (!original) return newLine;
    return original + "\n" + newLine;
}

function BuildNewFeatureList(architectureName, newReport, cumulativeFeatures)
{
    let result = "";

    let newSMValue = newReport.D3D12_FEATURE_DATA_SHADER_MODEL.HighestShaderModel;
    if (newSMValue != cumulativeFeatures.SM)
    {
        let SMString = Constants.EnumMappingsShort["D3D12_FEATURE_DATA_SHADER_MODEL.HighestShaderModel"][newSMValue] ?? "Unknown";
        if (newSMValue > cumulativeFeatures.SM)
        {
            result = AddLine(result, "SM " + SMString);
        }
        else
        {
            result = AddLine(result, "* SM " + SMString);
        }
        cumulativeFeatures.SM = newSMValue;
    }
    
    let newSupport16BitShaderOps = newReport.D3D12_FEATURE_DATA_D3D12_OPTIONS4.Native16BitShaderOpsSupported == 1;
    if (newSupport16BitShaderOps != cumulativeFeatures.Support16BitShaderOps)
    {
        if (newSupport16BitShaderOps)
        {
            result = AddLine(result, "16-bit Shader Ops");
        }
        else
        {
            result = AddLine(result, "* no support for 16-bit Shader Ops");
        }
        cumulativeFeatures.Support16BitShaderOps = newSupport16BitShaderOps;
    }

    let newSupportEnhancedBarriers = newReport.D3D12_FEATURE_DATA_D3D12_OPTIONS12.EnhancedBarriersSupported == 1;
    if (newSupportEnhancedBarriers != cumulativeFeatures.SupportEnhancedBarriers)
    {
        if (newSupportEnhancedBarriers)
        {
            result = AddLine(result, "Enhanced Barriers");
        }
        else
        {
            result = AddLine(result, "* no support for Enhanced Barriers");
        }
        cumulativeFeatures.SupportEnhancedBarriers = newSupportEnhancedBarriers;
    }
    
    let newSupportMeshShaders = newReport.D3D12_FEATURE_DATA_D3D12_OPTIONS7.MeshShaderTier == 10;
    if (newSupportMeshShaders != cumulativeFeatures.SupportMeshShaders)
    {
        if (newSupportMeshShaders)
        {
            result = AddLine(result, "Mesh Shaders");
        }
        else
        {
            result = AddLine(result, "* no support for Mesh Shaders");
        }
        cumulativeFeatures.SupportMeshShaders = newSupportMeshShaders;
    }

    let newDXRTier = newReport.D3D12_FEATURE_DATA_D3D12_OPTIONS5.RaytracingTier;

    // Force emulated DXR be reported as no DXR support
    if (architectureName == "Pascal" || architectureName == "Turing 16")
    {
        newDXRTier = 0;
    }

    if (newDXRTier != cumulativeFeatures.DXRTier)
    {
        let TierString = Constants.EnumMappingsShort["D3D12_FEATURE_DATA_D3D12_OPTIONS5.RaytracingTier"][newDXRTier] ?? "Unknown";
        if (newDXRTier > cumulativeFeatures.DXRTier)
        {
            result = AddLine(result, "DXR " + TierString);
        }
        else
        {
            result = AddLine(result, "* DXR " + TierString);
        }
        cumulativeFeatures.DXRTier = newDXRTier;
    }

    let newVRSTier = newReport.D3D12_FEATURE_DATA_D3D12_OPTIONS6.VariableShadingRateTier;
    if (newVRSTier != cumulativeFeatures.VRSTier)
    {
        let TierString = Constants.EnumMappingsShort["D3D12_FEATURE_DATA_D3D12_OPTIONS6.VariableShadingRateTier"][newVRSTier] ?? "Unknown";
        if (newVRSTier > cumulativeFeatures.VRSTier)
        {
            result = AddLine(result, "VRS " + TierString);
        }
        else
        {
            result = AddLine(result, "* VRS " + TierString);
        }
        cumulativeFeatures.VRSTier = newVRSTier;
    }

    let newSamplerFeedbackTier = newReport.D3D12_FEATURE_DATA_D3D12_OPTIONS7.SamplerFeedbackTier;
    if (newSamplerFeedbackTier != cumulativeFeatures.SamplerFeedbackTier)
    {
        let TierString = Constants.EnumMappingsShort["D3D12_FEATURE_DATA_D3D12_OPTIONS7.SamplerFeedbackTier"][newSamplerFeedbackTier] ?? "Unknown";
        if (newSamplerFeedbackTier > cumulativeFeatures.SamplerFeedbackTier)
        {
            result = AddLine(result, "Sampler Feedback " + TierString);
        }
        else
        {
            result = AddLine(result, "* Sampler Feedback " + TierString);
        }
        cumulativeFeatures.SamplerFeedbackTier = newSamplerFeedbackTier;
    }

    let newSupportR9G9B9E5RTVUAV = false;
    if (newReport.Formats)
    {
        newSupportR9G9B9E5RTVUAV = !!(newReport.Formats[67].Support1 & 16384);
    }
    if (newSupportR9G9B9E5RTVUAV != cumulativeFeatures.SupportR9G9B9E5RTVUAV)
    {
        if (newSupportR9G9B9E5RTVUAV)
        {
            result = AddLine(result, "R9G9B9E5 RTV/UAV");
        }
        else
        {
            result = AddLine(result, "* no support for R9G9B9E5 RTV/UAV");
        }
        cumulativeFeatures.SupportR9G9B9E5RTVUAV = newSupportR9G9B9E5RTVUAV;
    }

    let newWorkGraphsTier = 0
    if (newReport.D3D12_FEATURE_DATA_D3D12_OPTIONS21)
    {
        newWorkGraphsTier = newReport.D3D12_FEATURE_DATA_D3D12_OPTIONS21.WorkGraphsTier;
    }

    if (newWorkGraphsTier != cumulativeFeatures.WorkGraphsTier)
    {
        let TierString = Constants.EnumMappingsShort["D3D12_FEATURE_DATA_D3D12_OPTIONS21.WorkGraphsTier"][newWorkGraphsTier] ?? "Unknown";
        if (newWorkGraphsTier > cumulativeFeatures.WorkGraphsTier)
        {
            result = AddLine(result, "Work Graphs " + TierString);
        }
        else
        {
            result = AddLine(result, "* Work Graphs " + TierString);
        }
        cumulativeFeatures.WorkGraphsTier = newWorkGraphsTier;
    }

    let newResourceHeapTier = newReport.D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceHeapTier

    if (newResourceHeapTier != cumulativeFeatures.ResourceHeapTier)
    {
        let TierString = Constants.EnumMappingsShort["D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceHeapTier"][newResourceHeapTier] ?? "Unknown";
        if (newResourceHeapTier > cumulativeFeatures.ResourceHeapTier)
        {
            result = AddLine(result, "Resource Heap " + TierString);
        }
        else
        {
            result = AddLine(result, "* Resource Heap " + TierString);
        }
        cumulativeFeatures.ResourceHeapTier = newResourceHeapTier;
    }

    let newTiledResourcesTier = newReport.D3D12_FEATURE_DATA_D3D12_OPTIONS.TiledResourcesTier

    if (newTiledResourcesTier != cumulativeFeatures.TiledResourcesTier)
    {
        let TierString = Constants.EnumMappingsShort["D3D12_FEATURE_DATA_D3D12_OPTIONS.TiledResourcesTier"][newTiledResourcesTier] ?? "Unknown";
        if (newTiledResourcesTier > cumulativeFeatures.TiledResourcesTier)
        {
            result = AddLine(result, "Tiled Resources " + TierString);
        }
        else
        {
            result = AddLine(result, "* Tiled Resources " + TierString);
        }
        cumulativeFeatures.TiledResourcesTier = newTiledResourcesTier;
    }

    return result;
}

function RenderTableBody(container, vendorArchitectures) {
    let tbody = document.createElement("tbody");

    let cumulativeMarketShare = 0.0;

    let cumulativeFeatures = {
        // 0 is less than guaranteed SM 5.1 (81)
        // This forces shader model to show even if it is 5.1
        SM: 0,
        Support16BitShaderOps: false,
        SupportEnhancedBarriers: false,
        SupportMeshShaders: false,
        DXRTier: 0,
        VRSTier: 0,
        SamplerFeedbackTier: 0,
        SupportR9G9B9E5RTVUAV: false,
        WorkGraphsTier: 0,
        ResourceHeapTier: 1,
        TiledResourcesTier: 0,
    }

    for (let architectureName of vendorArchitectures) {
        let row = document.createElement("tr");
        
        let marketShare = ArchStats[architectureName] ?? 0.0;
        cumulativeMarketShare += marketShare; 

        let report = ArchClassifier.NewestDriverReportPerArch.get(architectureName);

        AddBodyCell(row, null, architectureName);
        AddBodyCell(row, null, Constants.ArchReleaseDates[architectureName] ?? "Unknown");
        AddBodyCell(row, null, FormatMarketShare(marketShare));
        AddBodyCell(row, null, FormatMarketShare(cumulativeMarketShare));
        AddBodyCell(row, null, BuildNewFeatureList(architectureName, report, cumulativeFeatures));

        tbody.append(row);
    }

    container.appendChild(tbody);
}

function RenderTable(container, vendorName, vendorArchitectures) {
    let table = document.createElement("table");
    RenderTableHead(table, vendorName);
    RenderTableBody(table, vendorArchitectures);
    table.className = "ArchitectureTable"
    container.appendChild(table);
}

function RenderNotes(container) {
    const notesContainer = document.getElementById("NotesContainer")
    HTML.ClearElement(notesContainer);

    notesContainer.appendChild(HTML.CreateMultilineText(
        "Features marked with * appear out of order of increasing capabilities.",
        "Some Nvidia Pascal and Turing 16 GPUs have software emulated DXR Tier 1.0 Support. Since software emulation is too slow for most practical purposes, they are marked as if they have no DXR support in this table.",
        "Market Share is calculated from the Steam Hardware Survey among DirectX 12 Systems. This is supposed to be an underestimate but may be generally inaccurate.",
        "Market Share will vary a lot between different games. Steam Hardware Survey may not be a good representation of your target audience.",
        "Some features require new enough version of Agility SDK to be used by app to become available, even if GPU supports them."
    ))
}

function RenderTables() {
    const tableContainer = document.getElementById("ArchitectureTables")
    HTML.ClearElement(tableContainer);

    const vendorList = [ "AMD", "Nvidia", "Intel", "Qualcomm", "Moore Threads" ]

    for (let vendor of vendorList) {
        let acrhContainer = document.createElement("div");
        RenderTable(acrhContainer, vendor, ArchClassifier.ArchsPerVendor[vendor]);
        acrhContainer.className = "ArchitectureTableContainer"
        tableContainer.appendChild(acrhContainer);
    }
}

function OnLoad() {
    const tableContainer = document.getElementById("ArchitectureTables")
    const textContainer = document.createElement("div")
    const loadingText = document.createTextNode("Loading. Please wait.")
    textContainer.appendChild(loadingText)
    tableContainer.appendChild(textContainer)

    Server.GetAllSubmissions((data) => {
        let Reports = data;
        ArchClassifier.ClassifyReports(Reports);
        RenderTables();
        RenderNotes();
    })
}

window.addEventListener('DOMContentLoaded', OnLoad, false);
