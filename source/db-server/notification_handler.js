"use strict"

const https = require('https');

function GetWebhookURL() {
    return process.env.WebhookURL
}

module.exports = {
    notify: function (data) {
        const webhookUrl = GetWebhookURL()
        if (!webhookUrl) {
            return
        }
        
        const payload = JSON.stringify(data)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const req = https.request(webhookUrl, options);

        req.on('error', (error) => {
            console.error(error);
        });

        req.write(payload);
        req.end();
    },
    formatDriverVersion: function (value) {
        let a = BigInt(value)
        return `${(a >> 48n) & 65535n}.${(a >> 32n) & 65535n}.${(a >> 16n) & 65535n}.${a & 65535n}`
    },
    formatVendor: function (value) {
        const VendorIDs =
        {
            // PCI IDs
            "0x1002": "AMD/ATI",
            "0x1022": "AMD",
            "0x10de": "NVIDIA",
            "0x1414": "Microsoft",
            "0x1ab8": "Parallels",
            "0x5143": "Qualcomm",
            "0x8086": "Intel",
            // ACPI IDs
            "PRL4": "Parallels", // 0x344C5250
            "NVDA": "NVIDIA", // 0x4144564E
            "INTC": "Intel", // 0x43544E49
            "INTL": "Intel", // 0x4C544E49
            "AMDI": "AMD", // 0x49444D41
            "ACPI": "Intel", // 0x49504341
            "QCOM": "Qualcomm", // 0x4D4F4351
            "MSFT": "Microsoft", // 0x5446534D
            "MSHW": "Microsoft", // 0x5748534D
            "MSAY": "Microsoft", // 0x5941534D
        }

        let decodedValue;
        if (value <= 0xFFFF) {
            // PCI ID codepath
            let ZeroPad = (e, pad) => e.length >= pad ? e : "0".repeat(pad - e.length) + e
            decodedValue = "0x" + ZeroPad(Number(value).toString(16), 4)
        } else {
            // ACPI ID codepath
            let ToTextID = (e) => String.fromCharCode(e & 0xFF, (e >> 8) & 0xFF, (e >> 16) & 0xFF, (e >> 24) & 0xFF);
            decodedValue = ToTextID(value)
        }
        if (VendorIDs[decodedValue])
            return `${VendorIDs[decodedValue]} (${decodedValue})`
        else
            return `Unknown (${decodedValue})`
    },
    formatVRAM: function (value) {
        const prefixes = ['B', 'KiB', 'MiB', 'GiB', 'TiB']
        let a = Number(value)
        let prefixIndex = 0
        while (a > 1024) {
            a /= 1024
            ++prefixIndex
        }
        a = a.toFixed(2)
        return a + prefixes[prefixIndex]
    }
}