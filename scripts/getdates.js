document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("last-modified").textContent = lastModified;
});
const modified = document.lastModified;
document.getElementById('last-modified').textContent = 'Last Modified: ' + modified;