import React, { useState } from "react";
import axios from "axios";
import Durban from "./Durban";
import './Weather.css'


function Weather() {
    let [city, setCity] = useState(" ");
    let [weather, setWeather] = useState (" ");

    function displayWeather(response) {
        setWeather({
            city: response.data.city,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            windSpeed: response.data.wind.speed,
            condition: response.data.condition.description,
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
                    <h2>{weather.city}</h2>
                    <p>{weather.condition}, humidity: {weather.humidity}%, wind: {weather.windSpeed}km/h</p>
                </div>
                <div>
                    <h1>{Math.round(weather.temperature)}°C</h1>
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
