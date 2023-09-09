// Get DOM elements
const planetsMenuOne = document.querySelector(".planets-menu-one");
const planetsMenuTwo = document.querySelector(".planets-menu-two-text");
const planetsMenuThree = document.querySelector(".planets-menu-three-text");

export default function resetSettingsOnTablet() {
  if (window.innerWidth >= 768) {
    planetsMenuOne.classList.remove("planets-menu-one--active");
    // planetsMenuTwo.textContent = "Internal Structure";
    // planetsMenuThree.textContent = "Surface Geology";
  } else {
    // planetsMenuTwo.textContent = "Structure";
    // planetsMenuThree.textContent = "Surface";
  }
}
