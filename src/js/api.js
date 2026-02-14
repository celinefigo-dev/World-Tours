export async function getCountry(name) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  if (!res.ok) throw new Error("Country not found");
  const data = await res.json();
  return data[0];
}

export async function getAttractions(code) {
  const res = await fetch(`https://geodb-free-service.wirefreethought.com/v1/geo/countries/${code}/cities`
  );
  
  if (!res.ok) {
    throw new Error("Failed to load attractions");
  }

  const data = await res.json();

  if (!data || !data.data || data.data.length === 0) {
    return [];
  }

  return data.data.slice(0, 3);

}

