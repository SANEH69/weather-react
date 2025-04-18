import React, { useState } from "react";

export default function Units(props) {
    let [units, setUnits ] = useState("celsius")

    function showFahrenheit(event) {
        event.preventDefault();
        setUnits("fahreneit")
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnits("celsius")
    }

    function fahreneitTemp() {
        return(Math.round((props.celsius * 9)/ 5 + 32))
    }

    if ( units === "celsius") {
        return (
        <span>
            <span><strong>{props.celsius}</strong> °C | <a href="/" onClick={showFahrenheit}>°F</a></span>
        </span>
        );
    } else {
        return (
        <span>
            <span><strong>{fahreneitTemp()}</strong> <a href="/" onClick={showCelsius}>°C</a> | °F</span>
        </span>
        );
    }
}