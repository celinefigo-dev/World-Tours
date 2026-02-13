import { getCountry, getAttractions } from "./api.js";
import { showCountry } from "./ui.js";

const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const list = document.getElementById("attractionsList");

async function load() {
  try {
    const data = await getCountry(name);
    const c = data[0];
    showCountry(c);

    const lat = c.latlng[0];
    const lon = c.latlng[1];

    const attractions = await getAttractions(lat, lon);

    attractions.forEach((a) => {
      const li = document.createElement("li");
      li.innerHTML = `${a.properties.name || "Attraction"} <button>⭐</button>`;
      li.querySelector("button").onclick = () =>
        saveAttraction(a.properties.name);
      list.appendChild(li);
    });

    document.getElementById("saveCountry").onclick = () =>
      saveCountry(c.name.common);
  } catch {
    document.body.innerHTML = "<h2>Country not found or API error.</h2>";
  }
}

function saveCountry(name) {
  let fav = JSON.parse(localStorage.getItem("favCountries")) || [];
  if (!fav.includes(name)) fav.push(name);
  localStorage.setItem("favCountries", JSON.stringify(fav));
}

function saveAttraction(name) {
  let fav = JSON.parse(localStorage.getItem("favAttractions")) || [];
  if (!fav.includes(name)) fav.push(name);
  localStorage.setItem("favAttractions", JSON.stringify(fav));
}

load();
