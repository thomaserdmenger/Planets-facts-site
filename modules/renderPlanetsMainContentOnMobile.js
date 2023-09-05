// Get DOM Elements
const navBarMobile = document.querySelector(".nav-links-container-mobile");
const navBarLinksOnMobile = document.querySelector(".nav-links-list");
const mainContent = document.querySelector(".planets-main-container");
const planetsHeading = document.querySelector(".planets-heading");
const planetsText = document.querySelector(".planets-text");

// Render main content
export default async function renderPlanetsMainContentOnMobile() {
  const response = await fetch("./data.json");
  const data = await response.json();

  navBarLinksOnMobile.addEventListener("click", (e) => {
    data.forEach((item) => {
      if (e.target.textContent !== item.name) return;

      // Hide Menu and show main content after click
      navBarMobile.classList.remove("nav-links-container-mobile--show");
      mainContent.classList.remove("planets-main-container--hide");

      // Render Planet Names on Screen
      planetsHeading.textContent = e.target.textContent;

      // Render Planet Description on Screen
      planetsText.textContent = item.overview.content;
    });
  });
}
