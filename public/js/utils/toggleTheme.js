const lightThemeBtn = document.querySelector("#set-light-theme-btn");
const darkThemeBtn = document.querySelector("#set-dark-theme-btn");
const html = document.documentElement;

function getDefaultUserTheme() {
    // Verificar si el tema ya está guardado en localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        // Aplicar el tema guardado
        if (savedTheme === "dark") {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    } else {
        // Detectar la preferencia del sistema
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;
        if (prefersDark) {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    }
}

function setLightTheme() {
    html.classList.remove("dark");
    html.classList.add("light");
    localStorage.setItem("theme", "light");
    window.dispatchEvent(new CustomEvent("theme-change", { detail: "light" }));
}

function setDarkTheme() {
    html.classList.remove("light");
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    window.dispatchEvent(new CustomEvent("theme-change", { detail: "dark" }));
}

getDefaultUserTheme();
lightThemeBtn.addEventListener("click", setLightTheme);
darkThemeBtn.addEventListener("click", setDarkTheme);
