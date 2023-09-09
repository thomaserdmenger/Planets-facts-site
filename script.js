// Imports
import renderNavBarLinksOnMobile from "./modules/renderNavBarLinksOnMobile.js";
import showNavBarLinksOnMobile from "./modules/showNavBarLinksOnMobile.js";
import renderNavBarLinksOnTablet from "./modules/renderNavBarLinksOnTablet.js";
import renderPlanetsMainContentOnMobile from "./modules/renderPlanetsMainContentOnMobile.js";
import resetSettingsOnTablet from "./modules/resetSettingsOnTablet.js";
import renderPlanetsMainContentOnTablet from "./modules/renderPlanetsMainContentOnTablet.js";
import renderStatsOnMobile from "./modules/renderStatsOnMobile.js";
import renderStatsOnTablet from "./modules/renderStatsOnTablet.js";
import {
  renderPlanetsStructures,
  renderPlanetsDefault,
  renderPlanetsGeology,
} from "./modules/renderPlanetsStructures.js";
import renderBorderColorsOnMobile from "./modules/renderBorderColorsOnMobile.js";

// Get data from data.json
async function fetchData() {
  try {
    const response = await fetch("./data.json");

    if (!response.ok) {
      throw new Error(
        "Resource issue (e.g. resource does not exist) or server issue)"
      );
    }

    const data = await response.json();

    renderNavBarLinksOnMobile(data);
    showNavBarLinksOnMobile();
    renderPlanetsMainContentOnMobile(data);
    renderPlanetsMainContentOnTablet(data);

    renderNavBarLinksOnTablet(data);
    resetSettingsOnTablet();
    renderStatsOnMobile(data);
    renderStatsOnTablet(data);
    renderPlanetsDefault(data);

    renderPlanetsStructures(data);
    renderPlanetsGeology(data);
    renderBorderColorsOnMobile(data);
  } catch (error) {
    console.error(error.message);
  }
}

fetchData();
