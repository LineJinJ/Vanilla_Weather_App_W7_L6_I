function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "8469b2792b7396f5ad1a7f0ec5ad59c0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York
&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
