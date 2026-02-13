export function saveRecent(search) {
  let recent = JSON.parse(localStorage.getItem("recent")) || [];
  recent = recent.filter((i) => i !== search);
  recent.unshift(search);
  localStorage.setItem("recent", JSON.stringify(recent.slice(0, 5)));
}

export function getRecent() {
  return JSON.parse(localStorage.getItem("recent")) || [];
}
