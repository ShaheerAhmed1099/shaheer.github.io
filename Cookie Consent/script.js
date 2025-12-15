let cookieBtn = document.getElementById('cookie-btn');
let popUp = document.querySelector('.cookie-popup');


function checkCookieConsent() {
    return localStorage.getItem('cookieConsent') === "true";
}

function showCookiePopup() {
     popUp.style.display = "flex";
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'true');
    popUp.style.display = "none";
}

cookieBtn.addEventListener('click', acceptCookies);

if (!checkCookieConsent()) {
    showCookiePopup();
};