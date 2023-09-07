// Get DOM Elements
const navBarLinksOnTablet = document.querySelector(".nav-links-list-tablet");
const statsRotation = document.querySelector(".stats-numbers--rotation");
const statsRevolution = document.querySelector(".stats-numbers--revolution");
const statsRadius = document.querySelector(".stats-numbers--radius");
const statsTemp = document.querySelector(".stats-numbers--temp");

// Render Stats
export default function renderStatsOnMobile(data) {
  navBarLinksOnTablet.addEventListener("click", (e) => {
    data.forEach((item) => {
      if (e.target.textContent !== item.name) return;

      statsRotation.textContent = item.rotation;
      statsRevolution.textContent = item.revolution;
      statsRadius.textContent = item.radius;
      statsTemp.textContent = item.temperature;
    });
  });
}
