export function showCountry(c) {
  document.getElementById("countryName").textContent = c.name.common;

  document.getElementById("countryContainer").innerHTML = `
    <div class="card">
      <img src="${c.flags.png}" alt="flag" />
      <p>Capital: ${c.capital}</p>
      <p>Population: ${c.population}</p>
      <p>Region: ${c.region}</p>
      <p>Languages: ${Object.values(c.languages).join(", ")}</p>
      <p>Currency: ${Object.values(c.currencies)[0].name}</p>
      <button id="saveCountry">❤️ Save Country</button>
    </div>
  `;
}
