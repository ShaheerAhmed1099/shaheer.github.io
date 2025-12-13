let homeBtn = document.getElementById("home-btn");
let projectBtn = document.getElementById("project-btn");
let articleBtn = document.getElementById("article-btn");
let contactBtn = document.getElementById("contact-btn");
let homeTab = document.getElementById("tab1");
let projectTab = document.getElementById("tab2");
let articleTab = document.getElementById("tab3");
let contactTab = document.getElementById("tab4");

homeBtn.addEventListener('click', () => {
    hideAllTabs();
    removeActive();

    homeTab.style.display = "block";
    homeBtn.classList.add("active");
});

projectBtn.addEventListener('click', () => {
    hideAllTabs();
    removeActive();

    projectTab.style.display = "block";
    projectBtn.classList.add("active");
});

articleBtn.addEventListener('click', () => {
    hideAllTabs();
    removeActive();

    articleTab.style.display = "block";
    articleBtn.classList.add("active");
});

contactBtn.addEventListener('click', () => {
    hideAllTabs();
    removeActive();

    contactTab.style.display = "block";
    contactBtn.classList.add("active");
});

hideAllTabs();

homeBtn.classList.add("active");
homeTab.style.display = "block";

function hideAllTabs() {
    homeTab.style.display = "none";
    projectTab.style.display = "none";
    articleTab.style.display = "none";
    contactTab.style.display = "none";
};

function removeActive() {
    homeBtn.classList.remove("active");
    projectBtn.classList.remove("active");
    articleBtn.classList.remove("active");
    contactBtn.classList.remove("active");
}