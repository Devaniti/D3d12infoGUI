function SwitchImpl(theme)
{
    document.body.classList.add('preload')
    
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme + '-mode');
    
    setTimeout(() => {
        document.body.classList.remove('preload');
    }, 500);
}

function GetBrowserTheme()
{
    if (window.matchMedia("(prefers-color-scheme: light)").matches)
    {
        return "light"
    }
    return "dark";
}

let CurrentTheme = null;
let IsAuto = null;
let ChangeCallbacks = [];

export function GetCurrentTheme()
{
    return CurrentTheme
}

export function AddChangeCallback(callback)
{
    ChangeCallbacks.push(callback)
}

export function Switch(theme)
{
    IsAuto = (theme == 'auto')
    if (IsAuto)
    {
        theme = GetBrowserTheme();
    }

    if (theme != CurrentTheme)
    {
        CurrentTheme = theme
        SwitchImpl(theme);
        ChangeCallbacks.forEach(callback => callback(CurrentTheme));
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (IsAuto)
    {
        Switch('auto');
    }
});