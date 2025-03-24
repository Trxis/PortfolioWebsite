const news = document.querySelector(".news");
const nav = document.querySelector(".nav");

news.addEventListener("click", function () {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

let typed = new Typed(".input", {
    strings: ["frontend developer", "photo shopper", "web developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function setLanguage(language) {
    localStorage.setItem('preferredLanguage', language);
    document.querySelectorAll("[data-en]").forEach((el) => {
        const text = el.getAttribute(`data-${language}`);
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = text;
        } else {
            el.textContent = text;
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLanguage);
});



