import { saveRecent, getRecent } from "./utils.js";

const input = document.getElementById("searchInput");
const btn = document.getElementById("searchBtn");
const recentList = document.getElementById("recentList");
const themeBtn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
  const name = input.value;
  if (!name) return;
  saveRecent(name);
  window.location.href = `country.html?name=${name}`;
});

function renderRecent() {
  recentList.innerHTML = "";
  getRecent().forEach((r) => {
    const li = document.createElement("li");
    li.textContent = r;
    li.onclick = () => (window.location.href = `country.html?name=${r}`);
    recentList.appendChild(li);
  });
}

themeBtn.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark"));
};

if (localStorage.getItem("theme") === "true") {
  document.body.classList.add("dark");
}

renderRecent();
