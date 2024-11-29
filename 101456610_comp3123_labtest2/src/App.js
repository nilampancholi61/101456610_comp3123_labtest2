import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import axios from "axios";
import Weathertype from './main/Weathertype';


const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    const API_KEY = process.env.REACT_WEATHER_APP_KEY;
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await axios.get(URL);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error:", error);
      alert("City not found. Please try again.");
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <Weathertype onSearch={fetchWeather} />
      <weather weatherData={weatherData} />
    </div>
  );
};

export default App;