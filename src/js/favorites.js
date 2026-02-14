import { loadFromStorage } from "./utils.js";

const list = document.getElementById("favoritesList");
const favorites = loadFromStorage("favorites");

favorites.forEach(fav => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `<h4>${fav}</h4>`;
  list.appendChild(div);
});

