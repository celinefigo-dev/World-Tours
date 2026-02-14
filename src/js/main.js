import { searchCountry } from "./search.js";

const btn = document.getElementById("searchBtn");
btn.addEventListener("click", () => {
  const val = document.getElementById("searchInput").value.trim();
  if (val) searchCountry(val);
});

// Dark mode toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
