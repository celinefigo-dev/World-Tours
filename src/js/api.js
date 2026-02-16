const url = 'https://geodb-country-state-city.p.rapidapi.com/states.php';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '1d68a99355mshf58a1039113f98fp1ebf7bjsnfd1d17012fbb',
    'x-rapidapi-host': 'geodb-country-state-city.p.rapidapi.com'
  }
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}