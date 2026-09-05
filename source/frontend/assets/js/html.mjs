import * as Properties from "./properties.mjs"
import * as Constants from "./constants.mjs"

export function ClearElement(element) {
    while (element.lastElementChild) {
        element.removeChild(element.lastElementChild)
    }
}

function AddTooltip(field, cell) {
    const tooltipText = Constants.PropertyTooltips[field]
    if (tooltipText == null) {
        return
    }

    cell.className = "tooltip";
    const tooltipTextElement = document.createElement("span")
    tooltipTextElement.className = "tooltiptext";
    tooltipTextElement.textContent = tooltipText;
    cell.appendChild(tooltipTextElement)
}

function AddTooltipIcon(field, cell) {
    if (Constants.PropertyTooltips[field] == null) {
        return
    }

    const tooltipIcon = document.createElement("img")
    tooltipIcon.src = "info.svg"
    tooltipIcon.alt = "Info"
    tooltipIcon.className = "tooltipicon"
    cell.appendChild(tooltipIcon)
}

export function WriteObjectToTable(obj, table) {
    for (const e of obj.HumanReadable(Properties.FilterField)) {
        const row = document.createElement("tr")

        const cell0 = document.createElement("td")
        AddTooltip(e.name, cell0)
        const cell0Text = document.createTextNode(e.name)
        cell0.appendChild(cell0Text)
        AddTooltipIcon(e.name, cell0)
        row.appendChild(cell0)

        const cell1 = document.createElement("td")
        const cell1Text = document.createTextNode(e.value)
        cell1.appendChild(cell1Text)
        row.appendChild(cell1)

        table.appendChild(row)
    }
}

export function SanitizeCSSClassName(name) {
    return name.replace(/[^a-zA-Z0-9_-]/g, "_")
}

export function CreateMultilineText(...lines) {
    if (lines.length === 1) {
        return document.createTextNode(lines[0]);
    }
    const span = document.createElement("span");
    for (let i = 0; i < lines.length; i++) {
        if (i > 0) {
            span.appendChild(document.createElement("br"));
        }
        span.appendChild(document.createTextNode(lines[i]));
    }
    return span;
}

export function CreateLinkElement(url, text) {
    const link = document.createElement("a");
    link.href = url;
    link.textContent = text;
    return link;
}