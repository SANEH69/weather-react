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

    if (loaded) {
        return (
            <div className="dailyForecast">
                <div>
                    {forecast.slice(0, 5).map((displayDaily, index) => (
                        <Forecast key={index} data={displayDaily} />
                    ))}
                </div>
            </div>
        );
    } else {
        const apiKey = "04d1784de2be03a1bd2o2db8tf6b23e4";
        const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.code}&key=${apiKey}`;
    
        axios.get(apiUrl).then(displayForecast);
        return <p>LOADING...</p>;
    }
}