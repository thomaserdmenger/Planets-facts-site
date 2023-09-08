// Get DOM element
const planetImages = document.querySelector(".planet-image");
const planetMenuDefault = document.querySelector(".planets-menu-one-text");
const planetMenuStructure = document.querySelector(".planets-menu-two-text");
const planetMenuGeology = document.querySelector(".planets-menu-three-text");
const planetImageGeology = document.querySelector(".planet-image-geology");
const planetName = document.querySelector(".planets-heading");

// Render Internal Structure
export function renderPlanetsStructures(data) {
  planetMenuStructure.addEventListener("click", () => {
    data.forEach((item) => {
      if (item.name.toLowerCase() !== planetName.textContent.toLowerCase()) {
        return;
      }

      planetImages.setAttribute("src", item.images.internal);
      planetImageGeology.style.display = "none";
    });
  });
}

// Render Default Planets
export function renderPlanetsDefault(data) {
  planetMenuDefault.addEventListener("click", () => {
    data.forEach((item) => {
      if (planetName.textContent.toLowerCase() !== item.name.toLowerCase()) {
        return;
      }

      planetImages.setAttribute("src", item.images.planet);
      planetImageGeology.style.display = "none";
    });
  });
}

// Render Planets Geology
export function renderPlanetsGeology(data) {
  planetMenuGeology.addEventListener("click", () => {
    data.forEach((item) => {
      if (planetName.textContent.toLowerCase() !== item.name.toLowerCase()) {
        return;
      }

      planetImages.setAttribute("src", item.images.planet);
      planetImageGeology.setAttribute("src", item.images.geology);
      planetImageGeology.style.display = "block";
    });
  });
}
