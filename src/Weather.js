import React from "react";
import axios from "axios";


function Weather(props) {
    function displayWeather(response) {
        alert(`The temperature in ${props.city} is ${Math.round(response.data.temperature.current)}°C`) 
    }

    let apiKey = "04d1784de2be03a1bd2o2db8tf6b23e4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}`
    axios.get(apiUrl).then(displayWeather);

    return (
       <h1>Hello</h1>
    );
}
export default Weather;