export async function getCountryData(countryName) {
    const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    if (!res.ok) throw new Error("Country not found");
    const data = await res.json();
    return data[0];
}
