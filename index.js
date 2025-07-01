const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementById("nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  hamburger.setAttribute(
    "aria-expanded",
    hamburger.classList.contains("active")
  );
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (hamburger.classList.contains("active")) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", false);
    }
  });
});
