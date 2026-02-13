const cList = document.getElementById("favCountries");
const aList = document.getElementById("favAttractions");

(JSON.parse(localStorage.getItem("favCountries")) || []).forEach((c) => {
  const li = document.createElement("li");
  li.textContent = c;
  cList.appendChild(li);
});

(JSON.parse(localStorage.getItem("favAttractions")) || []).forEach((a) => {
  const li = document.createElement("li");
  li.textContent = a;
  aList.appendChild(li);
});
