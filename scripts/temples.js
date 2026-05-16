document.addEventListener("DOMContentLoaded", () => {
    const currentYearSpan = document.getElementById("current-year");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedParagraph = document.getElementById("last-modified");
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
    }

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            menuToggle.classList.toggle("open");

            if (menuToggle.classList.contains("open")) {
                menuToggle.innerHTML = "&times;"; 
            } else {
                menuToggle.innerHTML = "&#9776;"; 
            }
        });
    }
});