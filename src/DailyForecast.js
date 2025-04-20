import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css"

export default function DailyForecast() {
    return  (
    <div className="dailyForecast">
        <p>Monday</p>
        <p>💧 49%</p>
        <WeatherIcon code="clear-sky-day" size={20}/>
        <p>29°C</p>
        <p>17°C</p>
    </div>
    );
}