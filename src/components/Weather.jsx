import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Nairobi");

  const API_KEY = "YOUR_OPENWEATHER_API_KEY"; // Replace with your API key
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(API_URL);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold">Weather in {city}</h2>
      {weather ? (
        <div>
          <p className="text-xl">{weather.main.temp}°C</p>
          <p className="capitalize">{weather.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
