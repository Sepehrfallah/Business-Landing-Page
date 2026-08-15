const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("shadow-sm", window.scrollY > 30);
});

document.querySelectorAll(".nav-link, .footer-nav a").forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.querySelector("#mainNav");
    if (nav.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }
  });
});

const form = document.querySelector("#contactForm");
const message = document.querySelector("#formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  message.textContent = "Thanks! Your inquiry has been sent successfully.";
  form.reset();
});
