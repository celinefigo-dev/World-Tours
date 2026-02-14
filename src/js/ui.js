export function renderCountry(c) {
  return `
    <h2>${c.name.common}</h2>
    <img src="${c.flags.svg}" alt="Flag of ${c.name.common}" />
    <p>Capital: ${c.capital}</p>
    <p>Population: ${c.population.toLocaleString()}</p>
    <p>Region: ${c.region}</p>
    <p>Languages: ${Object.values(c.languages).join(", ")}</p>
    <p>Currency: ${Object.values(c.currencies)[0].name}</p>
    <h3>Top Attractions</h3>
  `;
}

export function renderAttractionCard(name, image, kinds) {
  return `
    <div class="card">
      <h4>📍 ${name}</h4>
      <img src="${image}" />
      <p>${kinds}</p>
    </div>
  `;
}
