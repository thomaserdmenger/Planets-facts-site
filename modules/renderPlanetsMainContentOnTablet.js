// Get DOM Elements
const navBarTablet = document.querySelector(".nav-links-container-tablet");
const navBarLinksInTablet = document.querySelector(".nav-links-list-tablet");
const planetsHeading = document.querySelector(".planets-heading");
const planetsText = document.querySelector(".planets-text");
const planetsSource = document.querySelector(".planets-source");
const planetsMenuOne = document.querySelector(".planets-menu-one");
const planetsImgaes = document.querySelector(".planet-image");

export default async function renderPlanetsMainContentOnTablet() {
  const response = await fetch("./data.json");
  const data = await response.json();

  navBarLinksInTablet.addEventListener("click", (e) => {
    data.forEach((item) => {
      if (e.target.textContent !== item.name) return;

      // Render Planet Names on Screen
      planetsHeading.textContent = e.target.textContent;

      // Render Planet Description on Screen
      planetsText.textContent = item.overview.content;

      // Add Links to Planet Links
      planetsSource.setAttribute("href", item.overview.source);

      // TODO: // Add Border and Background-Color to Overwiev menu
      planetsImgaes.setAttribute("src", item.images.planet);

      // Add different image sizes and margin bottom and top
      switch (item.name) {
        case "Mercury":
          planetsImgaes.className = "";
          planetsImgaes.classList.add("planet-image");
          planetsImgaes.classList.add("planet-image-mercury--tablet");
          break;
        case "Venus":
          planetsImgaes.className = "";
          planetsImgaes.classList.add("planet-image");
          planetsImgaes.classList.add("planet-image-venus--tablet");
          break;
        case "Earth":
          planetsImgaes.className = "";
          planetsImgaes.classList.add("planet-image");
          planetsImgaes.classList.add("planet-image-earth--tablet");
          break;
        case "Mars":
          planetsImgaes.className = "";
          planetsImgaes.classList.add("planet-image");
          planetsImgaes.classList.add("planet-image-mars--tablet");
          break;
        case "Jupiter":
          planetsImgaes.className = "";
          planetsImgaes.classList.add("planet-image");
          planetsImgaes.classList.add("planet-image-jupiter--tablet");
          break;
        case "Saturn":
          planetsImgaes.className = "";
          planetsImgaes.classList.add("planet-image");
          planetsImgaes.classList.add("planet-image-saturn--tablet");
          break;
        case "Uranus":
          planetsImgaes.className = "";
          planetsImgaes.classList.add("planet-image");
          planetsImgaes.classList.add("planet-image-uranus--tablet");
          break;
        case "Neptune":
          planetsImgaes.className = "";
          planetsImgaes.classList.add("planet-image");
          planetsImgaes.classList.add("planet-image-neptune--tablet");
          break;
      }
    });
  });
}
