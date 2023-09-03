// Get DOM elements
const hamburgerMenu = document.querySelector(".nav-hamburger");
const navBarMobile = document.querySelector(".nav-links-container-mobile");

export default function showNavBarLinksOnMobile() {
  hamburgerMenu.addEventListener("click", () => {
    navBarMobile.classList.toggle("nav-links-container-mobile--show");
  });
}
