const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close");
const navBar = document.getElementById("nav");
const navItem = document.querySelectorAll(".px-3");

function menuToggle() {
  menuIcon.setAttribute("aria-expanded", true);
  navBar.classList.remove("-translate-y-full");
}

function closeMenu() {
  menuIcon.setAttribute("aria-expanded", false);
  navBar.classList.add("-translate-y-full");
}

menuIcon.addEventListener("click", menuToggle);
closeIcon.addEventListener("click", closeMenu);
navItem.forEach((element) => {
  element.addEventListener("click", closeMenu);
});
