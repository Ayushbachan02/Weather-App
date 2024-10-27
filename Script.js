const apiKey = "93fbe882df68672e7ee49532af78a0e8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchinput = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city) {
    const response = await fetch( apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
    document.querySelector("#humid").innerHTML = data.main.humidity+"%";
    document.querySelector("#wind").innerHTML = data.wind.speed+" Km/h";

    if(data.weather[0].main == "Clear"){
        weatherIcon.scr = "images/clear.png";
    }

    else if (data.weather[0].main == "Clouds"){
        weatherIcon.scr = "images/clouds.png";
    }

    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.scr = "images/drizzle.png";
    }

    else if(data.weather[0].main == "Mist"){
        weatherIcon.scr = "images/mist.png";
    }

    else if(data.weather[0].main == "Rain"){
        weatherIcon.scr = "images/rain.png";
    }

    else {
        weatherIcon.scr = "images/snow.png";
    }
}

searchbtn.addEventListener("click", () => {
    checkweather(searchinput.value);

}
)