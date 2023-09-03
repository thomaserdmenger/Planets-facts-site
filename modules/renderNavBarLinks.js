// Get DOM elements
const navbarListEl = document.querySelector(".nav-links-list");

export default function renderNavBarLinks(data) {
  // Fetch colors for planet circles
  async function fetchColors() {
    const response = await fetch("./colors.json");
    const colors = await response.json();

    // Create new list items
    data.forEach((item, index) => {
      // Create list items
      const listContainerLeft = document.createElement("div");
      const listItem = document.createElement("li");
      const listText = document.createElement("span");

      navbarListEl.appendChild(listItem);
      listItem.appendChild(listContainerLeft);
      listItem.classList.add("nav-links-list-items-container");
      listContainerLeft.classList.add("nav-links-list-items-container-left");

      // Create planet circles
      const planets = document.createElement("div");
      planets.classList.add("nav-links-list-planets");

      planets.style.backgroundColor = colors[index].color;
      listContainerLeft.appendChild(planets);

      // Create planet names
      listText.textContent = item.name;
      listText.classList.add("nav-links-list-items-text");
      listContainerLeft.append(listText);

      // Add arrows
      const arrowEl = document.createElement("img");
      arrowEl.setAttribute("src", "./assets/icon-chevron.svg");
      arrowEl.classList.add("nav-links-list-items-arrows");
      listItem.appendChild(arrowEl);
    });
  }

  fetchColors();
}
