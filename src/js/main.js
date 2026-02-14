import { searchCountry, loadRecent } from "./search.js";

document.getElementById("searchBtn").addEventListener("click", () => {
  const value = document.getElementById("searchInput").value.trim();
  if (value) searchCountry(value);
});

loadRecent();
