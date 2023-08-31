import React, { useState } from "react";
import "./forecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily[0]);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <WeatherForecastDay data={forecast} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "d8o5aa0df3a2c34948fdac8abdta545d";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
