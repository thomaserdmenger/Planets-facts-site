// Imports
import renderNavBarLinks from "./modules/renderNavBarLinks.js";
import showNavBarLinksOnMobile from "./modules/showNavBarLinksOnMobile.js";

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

    renderNavBarLinks(data);
    showNavBarLinksOnMobile();
  } catch (error) {
    console.error(error.message);
  }
}

fetchData();
