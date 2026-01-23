function OnLoad()
{
    setTimeout(() => {
        document.body.classList.remove('preload');
    }, 500);
}

window.addEventListener('DOMContentLoaded', OnLoad, false);
