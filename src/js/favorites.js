const list = document.getElementById("favoritesList");
const attractions = JSON.parse(localStorage.getItem("attractions")) || [];

if (attractions.length === 0) {
  list.innerHTML = "<li>No saved attractions yet.</li>";
} else {
  attractions.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
}

