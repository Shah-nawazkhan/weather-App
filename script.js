const form = document.getElementById("location-form");
const locationInput = document.getElementById("location-input");
const weatherInfo = document.getElementById("weather-info");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const location = locationInput.value;
    const apiKey = "86e1e5a8cdb9aeefda190901ddbf2d9a"; // Actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const temperature = data.main.temp;
        const description = data.weather[0].description;

        weatherInfo.innerHTML = `Temperature: ${temperature}°C, Description: ${description}`;
    } catch (error) {
        weatherInfo.innerHTML = "Error fetching weather data";
    }
});
