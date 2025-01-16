import * as Properties from "./properties.mjs"
import * as Constants from "./constants.mjs"

export function ClearElement(element) {
    while (element.lastElementChild) {
        element.removeChild(element.lastElementChild)
    }
}

export function AddIcon(element, iconPath, classToAdd) {
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('class', classToAdd)
    let use = document.createElementNS('http://www.w3.org/2000/svg', 'use')
    use.setAttributeNS("http://www.w3.org/1999/xlink", 'href', iconPath);
    svg.appendChild(use)
    element.appendChild(svg)
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

    AddIcon(cell, "icons.svg#icon-info", "cell-icon")
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