// Imports
import renderNavBarLinksOnMobile from "./modules/renderNavBarLinksOnMobile.js";
import showNavBarLinksOnMobile from "./modules/showNavBarLinksOnMobile.js";
import renderNavBarLinksOnTablet from "./modules/renderNavBarLinksOnTablet.js";
import renderPlanetsMainContentOnMobile from "./modules/renderPlanetsMainContentOnMobile.js";
import resetSettingsOnTablet from "./modules/resetSettingsOnTablet.js";
import renderPlanetsMainContentOnTablet from "./modules/renderPlanetsMainContentOnTablet.js";

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
  } catch (error) {
    console.error(error.message);
  }
}

fetchData();
