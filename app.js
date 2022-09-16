
let weather = {
    apiKey: "ad0e698787f364b65657e5970560ef51",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=imperial&appid="
            + this.apiKey)

            .then((response) => response.json())
            .then((data) => this.getWeather(data));
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
    getWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;
        const { speed } = data.wind

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".weather-description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " mph";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
            ;
    },
};
let forecast = {
    apiKey: "ad0e698787f364b65657e5970560ef51",
    fetchForecast: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q="
            + city
            + "&cnt=5"
            + "&units=imperial&appid="
            + this.apiKey)

            .then((response) => response.json())
            .then((data) => this.getForecast(data));
    },
    search: function () {
        this.fetchForecast(document.querySelector(".search-bar").value);
    },
    getForecast: function (data) {
        forecastList = data.list;

        for (var i = 0; i < forecastList; i++) {
            const { description } = forecastList[i].weather.description;
            const { temp } = forecastList[i].weather.main;
            const { speed } = forecastList[i].weather.wind;

            document.querySelector(".description").innerText = description;
            data.list.append(".description")
            document.querySelector(".tempature").innerText = temp + "°F";
            data.list.append(".tempature")
            document.querySelector(".windS").innerText = "Wind Speed: " + speed + " mph";
            data.list.append(".windS")
            console.log()
        }
    },
};


document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search()
    }
})
document.querySelector(".forecast-button").addEventListener("click", function () {
    forecast.search();
})

