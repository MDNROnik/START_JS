// 5a3c0b17756512c5d2ed4a1b9e320344

const date = document.getElementById("date");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const temp_img = document.getElementById("temp_img");
const tempMax = document.getElementById("temp-max");
const tempMin = document.getElementById("temp-min");
const search = document.getElementById("search-icon");

let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1;
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
date.innerHTML = `${year}-${month}-${day}`;

search.addEventListener("click", () => {
  const cityName = document.getElementById("search-bar-input").value;
  console.log(cityName);
  const fun = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5a3c0b17756512c5d2ed4a1b9e320344`
    );
    const data = await response.json();
    console.log(data);
    city.innerHTML = data.name;
    temp.innerHTML = data.main.temp;

    tempMax.innerHTML = data.main.temp_max;
    tempMin.innerHTML = data.main.temp_min;
    temp_img.innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="weather-icon">`;
  };
  fun();
});
