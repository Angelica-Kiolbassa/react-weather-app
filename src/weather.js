import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./Weatherinfo";
import Music from "./music";
import WeatherForecast from "./forecast";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
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
      <div className="Weather">
        <div className="container">
          <form
            onSubmit={handleSubmit}
            className="d-flex justify-content-center"
          >
            <div className="row">
              <div className="col">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3 mt-0 mb-2 d-flex justify-content-center">
                <input type="submit" value="search" className="btn btn-dark " />
              </div>
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />

        <Music />

        <div className="forecast-section">
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    Search();
    return;
  }
}
