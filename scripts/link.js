

const baseURL = "https://Abdon250.github.io/wdd230/";
const linksURL = "https://Abdon250.github.io/wdd230/data/links.json";
const weatherAPIKey = "YOUR_OPENWEATHERMAP_API_KEY";

async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kigali&appid=$497a9fbde8ed96e7f5035fc201caab90&units=metric`);
        const weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function displayWeather(weatherData) {
    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.innerHTML = `
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Condition: ${weatherData.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png" alt="Weather Icon">
    `;
}

getWeather();
















