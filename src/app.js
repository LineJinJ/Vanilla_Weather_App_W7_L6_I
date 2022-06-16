function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.na  me;
}

let apiKey = "8469b2792b7396f5ad1a7f0ec5ad59c0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York
&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
