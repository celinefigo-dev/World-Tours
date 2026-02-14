import { getCountry, getAttractions } from "./api.js";
import { renderCountry, renderAttractions, renderRecent } from "./ui.js";

export async function searchCountry(name) {
  const errorBox = document.getElementById("error");
  errorBox.classList.add("hidden");

  try {
    const country = await getCountry(name);
    document.getElementById("countryDisplay").innerHTML = renderCountry(country);

    const attractions = await getAttractions(country.cca2);
    document.getElementById("attractions").innerHTML = renderAttractions(attractions);

    saveRecent(name);
    loadRecent();
    enableAttractionClicks();
  } catch (err) {
    errorBox.textContent = err.message;
    errorBox.classList.remove("hidden");
  }
}

function saveRecent(name) {
  let recent = JSON.parse(localStorage.getItem("recent")) || [];
  if (!recent.includes(name)) recent.unshift(name);
  localStorage.setItem("recent", JSON.stringify(recent.slice(0, 5)));
}

export function loadRecent() {
  const recent = JSON.parse(localStorage.getItem("recent")) || [];
  document.getElementById("recentSearches").innerHTML =
    "<strong>Recent:</strong> " + renderRecent(recent);

  document.querySelectorAll("#recentSearches span").forEach(span => {
    span.addEventListener("click", () => {
      searchCountry(span.dataset.name);
    });
  });
}

function enableAttractionClicks() {
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      saveAttraction(card.dataset.name);
      alert("Attraction saved!");
    });
  });
}

function saveAttraction(name) {
  let favs = JSON.parse(localStorage.getItem("attractions")) || [];
  if (!favs.includes(name)) favs.push(name);
  localStorage.setItem("attractions", JSON.stringify(favs));
}
