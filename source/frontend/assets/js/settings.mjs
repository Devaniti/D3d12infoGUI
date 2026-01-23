import * as Cookies from './cookies.mjs';
import * as ThemeSwitch from './theme_switch.mjs';

let SettingsDialog = null;
let OpenSettingsButton = null;
let AllowPreferenceCookiesCheckbox = null;
let ThemeSettingFieldset = null;
let ThemeSettingAuto = null;
let ThemeSettingDark = null;
let ThemeSettingLight = null;
let CurrentTheme = null;

function ApplySettings()
{
    let themeCookie = Cookies.GetCookie('ThemeOverride');
    switch (themeCookie)
    {
        case 'dark': CurrentTheme = 'dark'; break;
        case 'light': CurrentTheme = 'light'; break;
        default: CurrentTheme = 'auto'; break;
    }
    ThemeSwitch.Switch(CurrentTheme);
}

function UpdateSettingsState()
{
    const allowCookies = (Cookies.GetCookie('AllowPreferenceCookies') == 'true');

    AllowPreferenceCookiesCheckbox.checked = allowCookies;

    ThemeSettingFieldset.disabled = !allowCookies;
    
    ThemeSettingAuto.checked = (CurrentTheme == 'auto');
    ThemeSettingDark.checked = (CurrentTheme == 'dark');
    ThemeSettingLight.checked = (CurrentTheme == 'light');
}

function SwitchPreferenceCookies()
{
    if (AllowPreferenceCookiesCheckbox.checked)
    {
        Cookies.SetCookie('AllowPreferenceCookies', 'true', 180);
    }
    else
    {
        Cookies.DeleteAllCookies();
        ApplySettings();
    }    
    UpdateSettingsState();
}

function SwitchTheme()
{
    let newTheme = null;
    if (ThemeSettingAuto.checked)
    {
        newTheme = 'auto'
    }
    else if (ThemeSettingDark.checked)
    {
        newTheme = 'dark'
    }
    else if (ThemeSettingLight.checked)
    {
        newTheme = 'light';
    }

    if (CurrentTheme == newTheme)
    {
        return;
    }

    if (newTheme == 'auto')
    {
        Cookies.DeleteCookie('ThemeOverride');
    }
    else
    {
        Cookies.SetCookie('ThemeOverride', newTheme, 180);
    }
    CurrentTheme = newTheme;
    ThemeSwitch.Switch(CurrentTheme);
}

function OpenSettings()
{
    UpdateSettingsState();

    SettingsDialog.showModal()
}

function OnLoad()
{
    SettingsDialog = document.getElementById('SettingsDialog');
    OpenSettingsButton = document.getElementById('OpenSettings');
    OpenSettingsButton.onclick = OpenSettings;
    AllowPreferenceCookiesCheckbox = document.getElementById('AllowPreferenceCookiesCheckbox');
    AllowPreferenceCookiesCheckbox.onchange = SwitchPreferenceCookies;
    ThemeSettingFieldset = document.getElementById('ThemeSetting')
    ThemeSettingAuto = document.getElementById('ThemeAuto');
    ThemeSettingAuto.onchange = SwitchTheme;
    ThemeSettingDark = document.getElementById('ThemeDark');
    ThemeSettingDark.onchange = SwitchTheme;
    ThemeSettingLight = document.getElementById('ThemeLight');
    ThemeSettingLight.onchange = SwitchTheme;

    ApplySettings();
}

window.addEventListener('DOMContentLoaded', OnLoad, true)
