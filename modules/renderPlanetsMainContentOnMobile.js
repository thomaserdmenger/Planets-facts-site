// Get DOM Elements
const navBarMobile = document.querySelector(".nav-links-container-mobile");
const navBarLinksOnMobile = document.querySelector(".nav-links-list");
const planetsHeading = document.querySelector(".planets-heading");
const mainContent = document.querySelector(".planets-main-container");

// Render main content
export default async function renderPlanetsMainContentOnMobile() {
  const response = await fetch("./data.json");
  const data = await response.json();

  navBarLinksOnMobile.addEventListener("click", (e) => {
    data.forEach((item) => {
      if (e.target.textContent !== item.name) return;

      planetsHeading.textContent = e.target.textContent;
      navBarMobile.classList.remove("nav-links-container-mobile--show");
      mainContent.classList.remove("planets-main-container--hide");
    });

    // console.log(e.target.textContent);
  });
}
