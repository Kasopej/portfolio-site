export function setDocumentDarkTheme() {
    if (document.documentElement.getAttribute("data-theme") !== "dark") {
        document.documentElement.setAttribute("data-theme", 'dark');
    }
}

export function setDocumentLightTheme() {
    if (document.documentElement.getAttribute("data-theme") !== "light") {
        document.documentElement.setAttribute("data-theme", 'light');
    }
}