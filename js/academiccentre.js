// ===============================
// CODEACADEMY JAVASCRIPT FILE
// ===============================


// MOBILE NAVIGATION TOGGLE
const menuButton = document.createElement("button");
menuButton.innerHTML = "☰";
menuButton.classList.add("menu-btn");

document.querySelector("header").prepend(menuButton);

const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("show-nav");
});


// SMOOTH SCROLL EFFECT
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


// COURSE CARD ANIMATION
const courseCards = document.querySelectorAll(".course-card");

courseCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.4)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "none";
    });

});


// MICROSOFT CARD ANIMATION
const microsoftCards = document.querySelectorAll(".microsoft-card");

microsoftCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.4)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
    });

});


// HERO BUTTON ALERT
const startButton = document.querySelector(".btn");

startButton.addEventListener("click", (e) => {
    e.preventDefault();

    alert(
        "🚀 Welcome to CodeAcademy!\n\nStart your journey in Coding, Graphic Design, Microsoft Office, and Technology today!"
    );
});


// DYNAMIC FOOTER YEAR
const footerText = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footerText.innerHTML = `© ${currentYear} CodeAcademy. All Rights Reserved.`;


// SCROLL REVEAL EFFECT
const revealElements = document.querySelectorAll(
    ".course-card, .microsoft-card, .about"
);

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }

    });
}


// INITIAL STYLES FOR ANIMATION
revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all 0.8s ease";

});


// RUN ON PAGE LOAD
revealOnScroll();


// WELCOME MESSAGE IN CONSOLE
console.log("🚀 CodeAcademy Website Loaded Successfully!");


// LIGHT/DARK MODE TOGGLE
const darkModeBtn = document.createElement("button");

darkModeBtn.innerHTML = "🌙";
darkModeBtn.classList.add("dark-mode-btn");

document.body.appendChild(darkModeBtn);

let darkMode = true;

darkModeBtn.addEventListener("click", () => {

    if(darkMode){

        document.body.style.background = "#f8fafc";
        document.body.style.color = "#000";

        document.querySelectorAll(
            ".course-card, .microsoft-card, header, .about, .microsoft-section"
        ).forEach(item => {
            item.style.background = "#ffffff";
            item.style.color = "#000";
        });

        darkModeBtn.innerHTML = "☀️";

        darkMode = false;

    } else {

        location.reload();
    }

});