// Get DOM elements
const navbarListEl = document.querySelector(".nav-links-list-tablet");

export default function renderNavBarLinksOnTablet(data) {
  data.forEach((item) => {
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    listText.textContent = item.name;

    listItem.appendChild(listText);
    navbarListEl.appendChild(listItem);
  });
}
