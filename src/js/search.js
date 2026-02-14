import { getCountryData } from "./country.js";
import { getAttractions, getAttractionDetails } from "./attractions.js";
import { getImage } from "./images.js";
import { renderCountry, renderAttractionCard } from "./ui.js";
import { saveToStorage, loadFromStorage } from "./utils.js";

export async function searchCountry(name) {
  const resultDiv = document.getElementById("result");
  const errorBox = document.getElementById("error");
  const recentDiv = document.getElementById("recentSearches");

  errorBox.classList.add("hidden");
  resultDiv.innerHTML = "";

  try {
    const country = await getCountryData(name);
    resultDiv.innerHTML += renderCountry(country);

    // Recent searches
    let recent = loadFromStorage("recent");
    if (!recent.includes(name)) recent.unshift(name);
    recent = recent.slice(0, 5);
    saveToStorage("recent", recent);
    recentDiv.innerHTML = `<h4>Recent Searches:</h4> ${recent.map(r => `<span>${r}</span>`).join(", ")}`;

    const [lat, lon] = country.latlng;
    const attractions = await getAttractions(lat, lon);

    for (const place of attractions) {
      const details = await getAttractionDetails(place.properties.xid);
      const image = details.preview?.source || await getImage(details.name);
      resultDiv.innerHTML += renderAttractionCard(details.name, image, details.kinds);
    }

  } catch (err) {
    errorBox.textContent = err.message;
    errorBox.classList.remove("hidden");
  }
}
