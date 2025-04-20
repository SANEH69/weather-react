import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function Day() {
        let date = new Date(props.data.time * 1000);
        let day = days[date.getDay()];

        return day;
    }

    return (
        <div className="dailyTemp">
        <p>{Day()}</p>
        <p>💧 {Math.round(props.data.temperature.humidity)} %</p>
        <WeatherIcon code={props.data.condition.icon} size={30}/>
        <span><p>{Math.round(props.data.temperature.maximum)}°C</p></span>
       <span className="minTemp"><p>{Math.round(props.data.temperature.minimum)}°C</p></span>
       </div>
    );
}