const ATTRACTION_KEY = "YOUR_API_KEY_HERE";

export async function getCountry(name) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  if (!res.ok) throw new Error("Country not found");
  return res.json();
}

export async function getAttractions(lat, lon) {
  const res = await fetch(
    `https://api.opentripmap.com/0.1/en/places/radius?radius=20000&lon=${lon}&lat=${lat}&limit=5&apikey=${ATTRACTION_KEY}`,
  );
  const data = await res.json();
  return data.features;
}
