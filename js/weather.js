function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const weather = document.querySelector("#weather span:first-child");
  const city = document.querySelector("#weather span:last-child");
  const API_KEY = "05ca6b667b962f937cb9a07f0c293951";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("현 위치를 찾을 수 없습니다.");
}

console.log(navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError));
