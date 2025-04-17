import React, { useState } from "react";
import axios from "axios";
import Durban from "./Durban";
import WeatherIcon from "./WeatherIcon";
import './Weather.css'


function Weather() {
    let [city, setCity] = useState(" ");
    let [weather, setWeather] = useState (" ");
    let [temperature, setTemperature] = useState (" ");

    function displayWeather(response) {
        console.log(response.data);
        setWeather({
            date : new Date(response.data.time * 1000),
            city: response.data.city,
            country: response.data.country,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            windSpeed: response.data.wind.speed,
            condition: response.data.condition.description,
            icon: response.data.condition.icon,
        });
    }

    function updateCity(event) {
        event.preventDefault();
        let apiKey = "04d1784de2be03a1bd2o2db8tf6b23e4";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
        axios.get(apiUrl).then(displayWeather);
    }

    function searchCity(event) {
        setCity(event.target.value);
    }

    function showFahrenheit(event) {
        event.preventDefault();
        let temperature = Math.round(weather.temperature * 9)/ 5 + 32;
        setTemperature(temperature);
    }

    function showCelsius(event) {
        event.preventDefault();
        setTemperature(weather.temperature);
    }

    let form = (
        <form onSubmit={updateCity}>
            <input type="search" onChange={searchCity} className="city"/>
            <input type="submit" className="submitButton" />
        </form>
    );
    
    if (city) {
    return (
        <div>
            <h1>{form}</h1>
            <div className="weatherConditions">
                <div>
                    <h2>{weather.city},{weather.country}</h2>
                    <WeatherIcon code={weather.icon} />
                    <p>{weather.condition}</p>
                    <h1>{Math.round(temperature)}<a href="/" onClick={showCelsius}>°C</a> | <a href="/" onClick={showFahrenheit}>°F</a></h1>
                    <p>humidity: {weather.humidity}%, wind: {weather.windSpeed}km/h</p>
                </div>
            </div>
        </div>
    );
} else {
    return (
        <div>
            <h1>{form}</h1>
            <Durban />
        </div>
        
    );
}
}
export default Weather;
