export function SetCookie(name, value, expirationDays)
{
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    let expirationString = "expires="+ expirationDate.toUTCString();
    document.cookie = name + "=" + value + ";" + expirationString + ";path=/";
}

export function GetCookie(name, defaultValue)
{
    const cookiePrefix = name + "=";
    const cookieArray = document.cookie.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
        let cookieValue = cookieArray[i];
        cookieValue = cookieValue.trim();
        if (cookieValue.indexOf(cookiePrefix) === 0) {
            return cookieValue.substring(cookiePrefix.length, cookieValue.length);
        }
    }
    return defaultValue;
}

export function DeleteCookie(name)
{
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

export function DeleteAllCookies()
{
    const cookieArray = document.cookie.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
        let cookieValue = cookieArray[i];
        cookieValue = cookieValue.trim();
        if (cookieValue.indexOf("=") !== -1) {
            const name = cookieValue.substring(0, cookieValue.indexOf("="));
            DeleteCookie(name);
        }
    }
}
