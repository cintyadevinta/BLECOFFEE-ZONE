// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Hamburger-menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
}; 

// Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.targets)) {
    navbarNav.classList.remove("active");
  }
});
