let btn = document.querySelector("#btn");
let cityInput = document.querySelector("#city");

let temp = document.querySelector("#temp");
let weather = document.querySelector("#weather");
let feels = document.querySelector("#feels");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let pressure = document.querySelector("#pressure");
let visibility = document.querySelector("#visibility");
let description = document.querySelector(".description");
let icon = document.querySelector("#weatherIcon");
let dew = document.querySelector("#dew");
// let sunnyIcon = document.querySelector(".icon")


btn.addEventListener("click", getWeather);

async function getWeather() {
  let city = cityInput.value;

  let apiKey = "6dee0b01a1606b8dec2217bfe84fe4c7";

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  let response = await fetch(url);
  let data = await response.json();
  console.log(data);

//   sunnyIcon.classList.remove(".icon");
  
  temp.textContent = data.main.temp + "°C";
  console.log((weather.textContent = data.weather[0].main));
  let iconCode = data.weather[0].icon;
  icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  feels.textContent = data.main.feels_like + "°C";
  humidity.textContent = data.main.humidity + "%";
  wind.textContent = data.wind.speed + " km/h";
  pressure.textContent = data.main.pressure + " mb";
  visibility.textContent = data.visibility / 1000 + " km";
  description.textContent = data.weather[0].description;

  function calculateDewPoint(temp, humidity) {
    return temp - (100 - humidity) / 5;
  }

  let tempValue = data.main.temp;
  let humidityValue = data.main.humidity;

  let dewPoint = calculateDewPoint(tempValue, humidityValue);

  console.log(dew.textContent = dewPoint.toFixed(1) + "°C");
}
