import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css"

export default function DailyForecast() {
    return  (
    <div className="dailyForecast">
        <div className="dailyTemp">
        <p>April 20, Sunday 18 : 59</p>
        <h1>Durban, South Africa</h1>
        <p>Monday</p>
        <p>💧 49%</p>
        <WeatherIcon code="clear-sky-day" size={30}/>
        <span><p>29°C</p></span>
        <span className="minTemp"><p>17°C</p></span>
        </div>
    </div>
    );
}