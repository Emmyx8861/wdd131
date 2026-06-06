document.addEventListener("DOMContentLoaded", () => {
    
    let numReviews = Number(window.localStorage.getItem("reviews-counter")) || 0;
    
    numReviews++;
    
    document.getElementById("reviewCount").textContent = numReviews;
    
    window.localStorage.setItem("reviews-counter", numReviews);

    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});