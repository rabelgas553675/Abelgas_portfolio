document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card, .contact-card, .languages-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
});

window.addEventListener("load", () => {
  document.querySelector(".sunburst-container")?.classList.add("show");
  document.querySelector(".hero-content")?.classList.add("show");
});
