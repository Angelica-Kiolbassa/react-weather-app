import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./Weatherinfo";
import Music from "./music";
import Forecast from "./forecast";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
    });
  }

  function Search() {
    const apiKey = "d8o5aa0df3a2c34948fdac8abdta545d";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div class="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6 mb-3 ms-5 mt-1">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3 ms-0 mt-2">
              <input
                type="submit"
                value="search"
                className="btn btn-dark ps-2 ms-0"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />

        <Music />

        <Forecast />
      </div>
    );
  } else {
    Search();
    return "Loading... ";
  }
}
