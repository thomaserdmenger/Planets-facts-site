// Get DOM element
const planetImages = document.querySelector(".planet-image");
const planetImageGeology = document.querySelector(".planet-image-geology");
const planetName = document.querySelector(".planets-heading");

const planetMenuStructureContainer =
  document.querySelector(".planets-menu-two");

const planetMenuDefaultContainer = document.querySelector(".planets-menu-one");

const planetMenuGeologyContainer = document.querySelector(
  ".planets-menu-three"
);

export function renderPlanetsStructures(data) {
  planetMenuStructureContainer.addEventListener("click", () => {
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
  planetMenuDefaultContainer.addEventListener("click", () => {
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
  planetMenuGeologyContainer.addEventListener("click", () => {
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
