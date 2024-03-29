const API_KEY = "6192ba8f5cf813d0b0794939179baaea";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const ctiy = document.querySelector("#weather span:last-child");
      ctiy.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  const error = document.querySelector("#weather span:first-child");
  const error2 = document.querySelector("#weather span:first-child");
  error.innerText = "에러!";
  error2.innerText = "위치 정보를 찾을 수 없습니다.";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
