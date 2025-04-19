import React from "react";
import "./WeatherDate.css";

export default function WeatherDate(props) {
    console.log(props.data);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let hours = props.data.getHours();
    let minutes = props.data.getMinutes();
    let date = props.data.getDate();
    let day = days[props.data.getDay()];
    let month = months[props.data.getMonth()];

    if (minutes < 10) {
        return <span>(`0${minutes}`)</span>
    };
    if (hours < 10) {
        return <span>(`0${hours}`)</span>
    };
    return <div className="date">{month} {date}, {day} {hours} : {minutes}</div>;
}