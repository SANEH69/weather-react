import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import WeatherDate from "./WeatherDate";
import Units from "./Units";
import './Weather.css'


function Weather(props) {
    let [city, setCity] = useState(props.defaultCity);
    let [weather, setWeather] = useState ({ ready: false });

    function displayWeather(response) {
        setWeather({
            ready: true,
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

    function search() {
        let apiKey = "04d1784de2be03a1bd2o2db8tf6b23e4";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
        axios.get(apiUrl).then(displayWeather);
    }

    function updateCity(event) {
        event.preventDefault();
        search();
    }

    function searchCity(event) {
        setCity(event.target.value);
    }

    let form = (
        <form onSubmit={updateCity}>
            <input type="search" onChange={searchCity} className="searchButton"/>
            <input type="submit" className="submitButton" />
        </form>
    );
    
    if (weather.ready) {
    return (
        <div>
            <h1>{form}</h1>
            <div className="weatherConditions">
                <div>
                    <WeatherDate data={weather.date} />
                    <h2>{weather.city},{weather.country}</h2>
                    <WeatherIcon code={weather.icon} />
                    <p className="description">{weather.condition}</p>
                    <Units celsius={Math.round(weather.temperature)} />
                    <p><strong>Humidity:</strong> {weather.humidity}%, <strong>Wind:</strong> {weather.windSpeed}km/h</p>
                </div>
            </div>
        </div>
    );
} else {
    search();
}
}
export default Weather;
