// Get DOM element
const planetImages = document.querySelector(".planet-image");
const planetName = document.querySelector(".planets-heading");

const planetImageGeology = document.querySelector(".planet-image-geology");

const planetMenuStructureContainer =
  document.querySelector(".planets-menu-two");
const planetMenuDefaultContainer = document.querySelector(".planets-menu-one");
const planetMenuGeologyContainer = document.querySelector(
  ".planets-menu-three"
);

// Render Planets Structure
export function renderPlanetsStructures(data) {
  planetMenuStructureContainer.addEventListener("click", () => {
    data.forEach((item) => {
      if (item.name.toLowerCase() !== planetName.textContent.toLowerCase()) {
        return;
      }

      planetImages.setAttribute("src", item.images.internal);
      planetImageGeology.classList.remove("planet-image-geology--mobile");
      planetImageGeology.classList.remove("planet-image-geology--tablet");
      planetImageGeology.classList.remove("planet-image-geology--desktop");
    });
  });
}

// Render Default Planets
export function renderPlanetsDefault(data) {
  planetMenuDefaultContainer.addEventListener("click", () => {
    data.forEach((item) => {
      if (planetName.textContent.toLowerCase() !== item.name.toLowerCase()) {
        return;
      }

      planetImages.setAttribute("src", item.images.planet);
      planetImageGeology.classList.remove("planet-image-geology--mobile");
      planetImageGeology.classList.remove("planet-image-geology--tablet");
      planetImageGeology.classList.remove("planet-image-geology--desktop");
    });
  });
}

// Render Planets Geology
export function renderPlanetsGeology(data) {
  planetMenuGeologyContainer.addEventListener("click", () => {
    data.forEach((item) => {
      if (planetName.textContent.toLowerCase() !== item.name.toLowerCase()) {
        return;
      }

      planetImageGeology.classList.add("planet-image-geology--mobile");
      planetImages.setAttribute("src", item.images.planet);
      planetImageGeology.setAttribute("src", item.images.geology);
      planetImageGeology.classList.remove("planet-image-geology--tablet");
      planetImageGeology.classList.remove("planet-image-geology--desktop");

      if (window.innerWidth >= 768) {
        planetImageGeology.classList.remove("planet-image-geology--mobile");
        planetImageGeology.classList.remove("planet-image-geology--desktop");
        planetImageGeology.classList.add("planet-image-geology--tablet");
      }

      if (window.innerWidth >= 1440) {
        planetImageGeology.classList.add("planet-image-geology--desktop");
      }
    });
  });
}
