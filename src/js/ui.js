export function renderCountry(c) {
  return `
    <h2>${c.name.common}</h2>
    <img src="${c.flags.svg}" alt="Flag of ${c.name.common}" />
    <p><strong>Capital:</strong> ${c.capital}</p>
    <p><strong>Population:</strong> ${c.population.toLocaleString()}</p>
    <p><strong>Region:</strong> ${c.region}</p>
    <p><strong>Currency:</strong> ${Object.values(c.currencies)[0].name}</p>
  `;
}

export function renderAttractions(list) {
  if (!list || list.length === 0) {
    return "<p>No top attractions available.</p>";
  }

  return list.map(item => `
    <div class="card">
      <h4>📍 ${item.name}</h4>
    </div>
  `).join("");
}

export function renderRecent(list) {
  return list.map(name => `<span data-name="${name}">${name}</span>`).join("");
}
