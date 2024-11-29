import React from "react";

const Weather = ({ weatherData }) => {
  if (!weatherData) return <p>Search for city here.</p>;

  const { name, main, weather } = weatherData;
  const icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-container">
      <h2>Weather in {name}</h2>
      <img src={icon} alt={weather[0].description} />
      <p>Temperature: {main.temp}°C</p>
      <p>Condition: {weather[0].description}</p>
    </div>
  );
};

export default Weather;
