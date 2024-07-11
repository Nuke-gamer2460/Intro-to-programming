let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];
let maxTemp = 100;
let minTemp = 0;



function generateWeather() {
    for (let i = 0; i < days.length; i++) {
        let weatherToday = weather[Math.floor(Math.random() * weather.length)];
        let tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
    }
}

generateWeather();