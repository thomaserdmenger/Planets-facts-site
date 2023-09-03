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
      const listItem = document.createElement("li");
      const listText = document.createElement("span");

      navbarListEl.appendChild(listItem);

      listItem.classList.add("nav-links-list-items-container");
      listItem.append(listText);

      listText.textContent = item.name;
      listText.classList.add("nav-links-list-items-text");

      // Create planet circles
      const planets = document.createElement("div");
      planets.classList.add("nav-links-list-planets");
      listItem.insertAdjacentElement("afterbegin", planets);
      planets.style.color = colors[index].color;

      planets.style.backgroundColor = colors[index].color;

      // Add arrows
      const arrowEl = document.createElement("img");
      arrowEl.setAttribute("src", "./assets/icon-chevron.svg");
      arrowEl.classList.add("nav-links-list-items-arrows");
      listItem.insertAdjacentElement("beforeend", arrowEl);
    });
  }

  fetchColors();
}
