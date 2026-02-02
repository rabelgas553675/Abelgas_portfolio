// Wait for page to load
window.addEventListener("load", () => {
    const body = document.body;
    body.classList.add("loaded");

    const main = document.querySelector(".main");
    const left = document.querySelector(".left");
    const glass = document.querySelector(".glass-container");
    const right = document.querySelector(".right");
    const inputs = document.querySelectorAll(".input-group input, .login-btn");
    const socials = document.querySelectorAll(".socials a");

    // Animate main sections
    setTimeout(() => main.classList.add("visible"), 100);
    setTimeout(() => left.classList.add("visible"), 200);
    setTimeout(() => glass.classList.add("visible"), 300);
    setTimeout(() => right.classList.add("visible"), 500);

    // Staggered input/button animation
    inputs.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("visible");
        }, 600 + i * 100);
    });

    // Social icons animation
    socials.forEach((el, i) => {
        setTimeout(() => el.classList.add("visible"), 1000 + i * 100);
    });
});

// Form submit: fade-out + slide-out
const form = document.getElementById("signupForm");
const card = document.querySelector(".glass-container");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    card.classList.add("slide-out");
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "Home.html"; // redirect after animation
    }, 600);
});
