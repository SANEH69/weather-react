import React from "react";

export default function Date(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let day = days[props.code.getDay()];
    let hours = props.code.getHours();
    let minutes = props.code.getMinutes();
    let month = months[props.code.getMonth()]
    let date = props.code.getDate();

    return <div>{month} {date}, {day} {hours}:{minutes}</div>;
}