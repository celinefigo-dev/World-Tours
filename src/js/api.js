export async function getCountry(name) {
  const res = await fetch('https://api.unsplash.com/search/photos?query=Eiffel+Tower&client_id=YOUR_UNSPLASH_KEY'
);
  if (!res.ok) throw new Error("Country not found");
  const data = await res.json();
  return data[0];
}

export async function getAttractions(code) {
  const res = await fetch(`https://geodb-free-service.wirefreethought.com/v1/geo/countries/${code}/cities`);
  const data = await res.json();
  return data.data.slice(0, 5);
}


