const navLinks = document.querySelector(".navbar-links");
const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  closeBtn.classList.add("active");
  menuBtn.classList.add("disable");
});
closeBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.classList.remove("disable");
});
