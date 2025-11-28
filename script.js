function getWeather() {
    let city = document.getElementById("city").value;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`;

    fetch(api)
        .then(res => res.json())
        .then(data => {
            document.getElementById("result").innerHTML = `
                <h3>${data.name}</h3>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind: ${data.wind.speed} km/h</p>
            `;
        })
        .catch(() => {
            document.getElementById("result").innerHTML = "City not found!";
        });
}
