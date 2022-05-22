const API_KEY = "30e64eb7f914f4650542f376bed93b83";

function onSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector(".weather span:first-child");
        const name = document.querySelector(".weather span:last-child");
        name.innerText = `Your location : ${data.name}, ${data.sys.country}`;
        weather.innerText = `${data.weather[0].main} / Temperature : ${data.main.temp}`;
    });
}   
function onFail() {
    alert("We can't bring your location information!");
}

navigator.geolocation.getCurrentPosition(onSuccess,onFail);