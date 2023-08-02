const API_KEY = "5cc5008faf9b8adc196494bab043c23b";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;// get json of response and get data of that json
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });//which will have name of the place and weather array where 0th element's main will be something like clouds
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);