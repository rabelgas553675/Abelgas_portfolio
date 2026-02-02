// Wait until page is fully loaded
window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    // Animate hero text
    const heroContent = document.querySelector(".content");
    const firstName = document.querySelector(".first-name");
    const lastName = document.querySelector(".last-name");
    const title = document.querySelector(".title");
    const buttons = document.querySelector(".buttons");

    heroContent.classList.add("visible");
    firstName.classList.add("visible");
    lastName.classList.add("visible");
    title.classList.add("visible");
    buttons.classList.add("visible");
});

// Fade-out on nav link click
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");

        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = href;
        }, 600); // matches fade-out transition
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".content");
  const firstName = document.querySelector(".first-name");
  const lastName = document.querySelector(".last-name");
  const title = document.querySelector(".title");
  const buttons = document.querySelector(".buttons");

  // Content fade in
  setTimeout(() => {
    content.classList.add("animate-content");
  }, 200);

  // First name slides from left
  setTimeout(() => {
    firstName.classList.add("animate-left");
  }, 500);

  // Last name slides from right
  setTimeout(() => {
    lastName.classList.add("animate-right");
  }, 800);

  // Title slides up
  setTimeout(() => {
    title.classList.add("animate-up");
  }, 1100);

  // Buttons slide up last
  setTimeout(() => {
    buttons.classList.add("animate-up");
  }, 1400);
});
