

const baseURL = "https://Abdon250.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;
const weatherAPIKey = "497a9fbde8ed96e7f5035fc201caab90"; 

function getWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kigali&appid=497a9fbde8ed96e7f5035fc201caab90&units=metric`)

        .then(response => response.json())
        .then(weatherData => displayWeather(weatherData))
        .catch(error => console.error("Error fetching weather data:", error));
}

function getLinks() {
    fetch(linksURL)
        .then(response => response.json())
        .then(data => displayLinks(data.weeks))
        .catch(error => console.error("Error fetching links data:", error));
}

function displayWeather(weatherData) {
    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.innerHTML = `<p>Temperature: ${weatherData.main.temp}°C</p>` +
                            `<p>Condition: ${weatherData.weather[0].description}</p>` +
                            `<img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png" alt="Weather Icon">`;
}

function displayLinks(weeks) {
    const activityLinks = document.getElementById("activity-links");
    weeks.forEach(function (week) {
        const weekDiv = document.createElement("div");
        weekDiv.innerHTML = `<h4>${week.week}</h4>`;
        const linksList = document.createElement("nav");
        week.links.forEach(function (link) {
            const linkElement = document.createElement("a");
            linkElement.href = `${baseURL}${link.url}`;
            linkElement.textContent = link.title;
            linksList.appendChild(linkElement);
        });
        weekDiv.appendChild(linksList);
        activityLinks.appendChild(weekDiv);
    });
}

getWeather();
getLinks();
