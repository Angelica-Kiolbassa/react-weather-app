import React from "react";
import "./forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "d8o5aa0df3a2c34948fdac8abdta545d";
  let lon = props.coordinates.longitude;
  let lat = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
            alt="weather icon"
            height="60"
            width="60"
            className="forecast-icon"
          />
          <div className="forecast-temp-max">19°</div>
          <div className="forecast-temp-min">10°</div>
        </div>
      </div>
    </div>
  );
}
