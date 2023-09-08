// Get DOM Elements
const navBarMobile = document.querySelector(".nav-links-container-mobile");
const navBarLinksOnMobile = document.querySelector(".nav-links-list");
const mainContent = document.querySelector(".planets-main-container");
const planetsHeading = document.querySelector(".planets-heading");
const planetsText = document.querySelector(".planets-text");
const planetsSource = document.querySelector(".planets-source");
const planetsMenuOne = document.querySelector(".planets-menu-one");
const planetsImgaes = document.querySelector(".planet-image");
const planetImageGeology = document.querySelector(".planet-image-geology");
const planetImages = document.querySelector(".planet-image");

// Render main content
export default async function renderPlanetsMainContentOnMobile() {
  const response = await fetch("./data.json");
  const data = await response.json();

  navBarLinksOnMobile.addEventListener("click", (e) => {
    data.forEach((item) => {
      if (e.target.textContent !== item.name) return;

      // Reset Planets
      planetImageGeology.classList.remove("planet-image-geology--mobile");
      planetImageGeology.classList.remove("planet-image-geology--tablet");
      planetImageGeology.classList.remove("planet-image-geology--desktop");

      planetImages.setAttribute("src", item.images.planet);

      // Hide Menu and show main content after click
      navBarMobile.classList.remove("nav-links-container-mobile--show");
      mainContent.classList.remove("planets-main-container--hide");

      // Render Planet Names on Screen
      planetsHeading.textContent = e.target.textContent;

      // Render Planet Description on Screen
      planetsText.textContent = item.overview.content;

      // Add Links to Planet Links
      planetsSource.setAttribute("href", item.overview.source);

      // Add Border Buttom to Overview in Submenu
      planetsMenuOne.classList.add("planets-menu-one--active");

      // Add Planet Images
      planetsImgaes.setAttribute("src", item.images.planet);

      // Add different image sizes and margin bottom and top
      switch (item.name) {
        case "Mercury":
          planetsImgaes.className = "";
          planetsImgaes.classList.add("planet-image");
          planetsImgaes.classList.add("planet-image-mercury");
          break;
        case "Venus":
          planetsImgaes.className = "";
          planetsImgaes.classList.add("planet-image");
          planetsImgaes.classList.add("planet-image-venus");
          break;
        case "Earth":
          planetsImgaes.className = "";
          planetsImgaes.classList.add("planet-image");
          planetsImgaes.classList.add("planet-image-earth");
          break;
        case "Mars":
          planetsImgaes.className = "";
          planetsImgaes.classList.add("planet-image");
          planetsImgaes.classList.add("planet-image-mars");
          break;
        case "Jupiter":
          planetsImgaes.className = "";
          planetsImgaes.classList.add("planet-image");
          planetsImgaes.classList.add("planet-image-jupiter");
          break;
        case "Saturn":
          planetsImgaes.className = "";
          planetsImgaes.classList.add("planet-image");
          planetsImgaes.classList.add("planet-image-saturn");
          break;
        case "Uranus":
          planetsImgaes.className = "";
          planetsImgaes.classList.add("planet-image");
          planetsImgaes.classList.add("planet-image-uranus");
          break;
        case "Neptune":
          planetsImgaes.className = "";
          planetsImgaes.classList.add("planet-image");
          planetsImgaes.classList.add("planet-image-neptune");
          break;
      }

      // TODO: Add different color on border buttom on sub menu
    });
  });
}
