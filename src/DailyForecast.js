import React, { useState, useEffect } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import "./DailyForecast.css"

export default function DailyForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(" ");

    function displayForecast(response) {
        setLoaded(true);
        setForecast(response.data.daily);
    }

    useEffect (() => {
        setLoaded(false);
    }, [props.code]);


    let apiKey = "04d1784de2be03a1bd2o2db8tf6b23e4";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.code}&key=${apiKey}`;

    axios.get(apiUrl).then(displayForecast);

    if (loaded) {
    return  (
    <div className="dailyForecast">
        <div>
        {forecast.map(function(displayDaily, index) {
         if (index < 5) {
           return (
           <Forecast data={displayDaily} />
         );
        }
        })}        
        </div>
    </div>
    ); 
    } else {
        return <p>"Loading"</p>;
    }
}