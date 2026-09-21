// Año dinámico en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("is-open");
});

navLinks.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("is-open"));
});

// Revelado de secciones al hacer scroll
const revealTargets = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((target) => revealObserver.observe(target));
