// scripts.js

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  mirror: false,
});

// Toggle dark mode
document.querySelector(".toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const themeIcon = document.querySelector(".toggle-theme");
  themeIcon.textContent = document.body.classList.contains("dark-mode")
    ? "🌞"
    : "🌙";
});

// Preloader
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// Form submission handling
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your message has been sent!");
    this.reset();
  });

document
  .getElementById("subscribe-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("You have subscribed to the newsletter!");
    this.reset();
  });

// Smooth scroll for navigation
document.querySelectorAll(".nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Back to top button
const backToTopButton = document.createElement("button");
backToTopButton.textContent = "⬆️";
backToTopButton.classList.add("back-to-top");
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Modal for project details
const modal = document.getElementById("project-modal");
const modalContent = modal.querySelector(".modal-content");
const modalClose = modal.querySelector(".close");

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    const project = card.dataset.project;
    modal.querySelector("h2").textContent = `Project ${project}`;
    modal.querySelector("img").src = `project${project}.jpg`;
    modal.querySelector("p").textContent = `Details about project ${project}`;
    modal.style.display = "block";
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
