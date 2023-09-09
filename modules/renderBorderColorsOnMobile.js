// Get DOM elements
const planetName = document.querySelector(".planets-heading");
const planetMenuDefaultContainer = document.querySelector(".planets-menu-one");
const planetMenuStructureContainer =
  document.querySelector(".planets-menu-two");
const planetMenuGeologyContainer = document.querySelector(
  ".planets-menu-three"
);

const planetMenuDefaultTextEl = document.querySelector(
  ".planets-menu-one-text"
);
const planetMenuStructureTextEl = document.querySelector(
  ".planets-menu-two-text"
);
const planetMenuGeologyTextEl = document.querySelector(
  ".planets-menu-three-text"
);

// Render Border Colors when clicking on Sub Menu
export default async function renderBorderColorsOnMobile(data) {
  const response = await fetch("./colorsMenu.json");
  const colors = await response.json();

  planetMenuDefaultContainer.addEventListener("click", () => {
    data.forEach((item) => {
      if (planetName.textContent.toLowerCase() !== item.name.toLowerCase()) {
        return;
      }

      colors.forEach((color) => {
        if (color.name !== planetName.textContent.toLowerCase()) {
          return;
        }

        // Set border
        planetMenuDefaultTextEl.style.borderBottomColor = color.color;
        planetMenuDefaultTextEl.style.borderBottomStyle = "solid";

        // Reset border
        planetMenuStructureTextEl.style.borderBottomColor = "none";
        planetMenuStructureTextEl.style.borderBottomStyle = "none";
        planetMenuGeologyTextEl.style.borderBottomColor = "none";
        planetMenuGeologyTextEl.style.borderBottomStyle = "none";
      });
    });
  });

  planetMenuStructureContainer.addEventListener("click", () => {
    data.forEach((item) => {
      if (planetName.textContent.toLowerCase() !== item.name.toLowerCase()) {
        return;
      }

      colors.forEach((color) => {
        if (color.name !== planetName.textContent.toLowerCase()) {
          return;
        }

        // Set border
        planetMenuStructureTextEl.style.borderBottomColor = color.color;
        planetMenuStructureTextEl.style.borderBottomStyle = "solid";

        // Reset border
        planetMenuDefaultTextEl.style.borderBottomColor = "none";
        planetMenuDefaultTextEl.style.borderBottomStyle = "none";
        planetMenuGeologyTextEl.style.borderBottomColor = "none";
        planetMenuGeologyTextEl.style.borderBottomStyle = "none";
      });
    });
  });

  planetMenuGeologyContainer.addEventListener("click", () => {
    data.forEach((item) => {
      if (planetName.textContent.toLowerCase() !== item.name.toLowerCase()) {
        return;
      }

      colors.forEach((color) => {
        if (color.name !== planetName.textContent.toLowerCase()) {
          return;
        }

        // Set border
        planetMenuGeologyTextEl.style.borderBottomColor = color.color;
        planetMenuGeologyTextEl.style.borderBottomStyle = "solid";

        // Reset border
        planetMenuDefaultTextEl.style.borderBottomColor = "none";
        planetMenuDefaultTextEl.style.borderBottomStyle = "none";
        planetMenuStructureTextEl.style.borderBottomColor = "none";
        planetMenuStructureTextEl.style.borderBottomStyle = "none";
      });
    });
  });
}

// TODO: Write Function Border on load when I click on menu planet
// Render Border Colors when clicking on Main Menu
