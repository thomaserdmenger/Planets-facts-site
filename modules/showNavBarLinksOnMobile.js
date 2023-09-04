// Get DOM elements
const hamburgerMenu = document.querySelector(".nav-hamburger");
const navBarMobile = document.querySelector(".nav-links-container-mobile");
const mainContent = document.querySelector(".planets-main-container");

export default function showNavBarLinksOnMobile() {
  hamburgerMenu.addEventListener("click", () => {
    navBarMobile.classList.toggle("nav-links-container-mobile--show");
    hamburgerMenu.classList.toggle("nav-hamburger--opacity");
    mainContent.classList.toggle("planets-main-container--hide");
  });
}
