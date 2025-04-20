import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css"

export default function DailyForecast() {
    return  (
    <div className="dailyForecast">
        <p>April 20, Sunday 18 : 59</p>
        <h2>Durban, South Africa</h2>
        <div className="dailyTemp">
        <p>Monday</p>
        <p>💧 49%</p>
        <WeatherIcon code="clear-sky-day" size={30}/>
        <span><p>29°C</p></span>
        <span className="minTemp"><p>17°C</p></span>
        </div>
    </div>
    );
}