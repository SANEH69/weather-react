import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Weather city="Durban" />
      </header>
    </div>
  );
}

export default App;
