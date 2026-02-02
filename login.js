window.addEventListener("load", () => {
    const body = document.body;
    body.classList.add("loaded"); // fade in body

    const main = document.querySelector(".main");
    const left = document.querySelector(".left");
    const glass = document.querySelector(".glass-container");
    const right = document.querySelector(".right");
    const inputs = document.querySelectorAll(".input-group input, .login-btn, .socials a");

    // Animate main sections
    setTimeout(() => main.classList.add("visible"), 50);
    setTimeout(() => left.classList.add("visible"), 100);
    setTimeout(() => glass.classList.add("visible"), 200);
    setTimeout(() => right.classList.add("visible"), 300);

    // Staggered fade-in for inputs, button, socials
    inputs.forEach((el, i) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        setTimeout(() => {
            el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, 400 + i * 100); // stagger
    });
});

// Form submit: fade-out + slide-out
const form = document.getElementById("loginForm");
const card = document.getElementById("loginCard");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    card.classList.add("slide-out");
    document.body.classList.add("fade-out");
    setTimeout(() => {
        window.location.href = "Home.html";
    }, 600);
});
