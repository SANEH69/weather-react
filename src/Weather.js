import React, { useState } from "react";
import axios from "axios";


function Weather(props) {
    let [city, setCity] = useState(" ");
    let [weather, setWeather] = useState (" ");

    function displayWeather(response) {
        console.log(response);
        alert(`The temperature in ${props.city} is ${Math.round(response.data.temperature.current)}°C`);
    }

    let apiKey = "04d1784de2be03a1bd2o2db8tf6b23e4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);

    function updateCity(event) {
        setCity(event.target.value);
    }

    let form = (
        <form>
            <input type="search" onChange={updateCity}/>
            <input type="submit" />
        </form>
    );

    return (
       <h1>{form}</h1>
    );
}
export default Weather;