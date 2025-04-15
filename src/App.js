import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="outer" >
      <div className="inner" >
      <header className="App-header">
        <Weather city="Durban" />
        <Footer />
      </header>
    </div>
    </div>
    </div>
  );
}

export default App;
