import { getCountryData } from "./country.js";
import { getAttractions, getAttractionDetails } from "./attractions.js";
import { renderCountry, renderAttractionCard } from "./ui.js";
import { getImage } from "./images.js";

export async function searchCountry(name) {
  const result = document.getElementById("result");
  result.innerHTML = "";

  try {
    // 1. Get country
    const country = await getCountryData(name);
    result.innerHTML += renderCountry(country);

    const [lat, lon] = country.latlng;

    // 2. Get attractions
    const attractions = await getAttractions(lat, lon);

    if (!attractions || attractions.length === 0) {
      result.innerHTML += "<p>No attractions found.</p>";
      return;
    }

    // 3. Take TOP 3
    const top3 = attractions.slice(0, 3);

    for (const place of top3) {
      const details = await getAttractionDetails(place.xid);
      const image = details.preview?.source || await getImage(details.name);

      result.innerHTML += renderAttractionCard(
        details.name,
        image,
        details.kinds
      );
    }

  } catch (error) {
    console.error(error);
    result.innerHTML = `<p>Error loading data</p>`;
  }
}
