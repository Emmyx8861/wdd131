const currentYearElement = document.querySelector("#currentyear");
const lastModifiedElement = document.querySelector("#lastModified");
const tempElement = document.querySelector("#temp");
const windElement = document.querySelector("#wind-speed");
const windChillElement = document.querySelector("#wind-chill");

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
}

const temperature = parseFloat(tempElement ? tempElement.textContent : 0);
const windSpeed = parseFloat(windElement ? windElement.textContent : 0);

function calculateWindChill(temp, speed) {
    if (temp <= 10 && speed > 4.8) {
        const chill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
        return `${chill.toFixed(1)}°C`;
    } else {
        return "N/A";
    }
}

if (windChillElement) {
    windChillElement.textContent = calculateWindChill(temperature, windSpeed);
}