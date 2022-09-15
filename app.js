
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
        console.log(name, icon, description, temp, speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".weather-description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " mph";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    }
};
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search()
    }
})

