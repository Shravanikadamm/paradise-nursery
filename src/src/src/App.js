import React from "react";
import "./App.css";
import AboutUs from "./AboutUs";

function App() {
  const getStarted = () => {
    alert("Welcome to Paradise Nursery!");
  };

  return (
    <div className="app">
      <div className="landing-page">
        <h1>Paradise Nursery</h1>

        <p>
          Bring nature home with beautiful plants.
        </p>

        <button className="get-started" onClick={getStarted}>
          Get Started
        </button>

        <AboutUs />
      </div>
    </div>
  );
}

export default App;
