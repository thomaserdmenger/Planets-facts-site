// Get DOM elements
const planetsHeading = document.querySelector(".planets-heading");
const menuItem = document.querySelector(".planets-menu-one-text");
const planetMenuArr = document.querySelectorAll(
  ".nav-links-list-items-container"
);

// Change Border Color
export default async function changeBorderColorOnFirstItemOnClickOnMobile() {
  const response = await fetch("./colorsMenu.json");
  const colors = await response.json();

  //   const planetsName = planetsHeading.textContent.toLowerCase();

  colors.forEach((color) => {});
}
