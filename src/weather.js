import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div class="Weather">
      <h1>San Antonio</h1>
      <ul>
        <li>Friday 10:12</li>
        <li>Partly Cloudy</li>
        <div classname="row">
          <div classname="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
            98°F
          </div>
          <div classname="col-6">
            <ul class="list-2">
              <li>Precipitation: 50%</li>
              <li>Humididty: 90%</li>
              <li>Wind: 15 km/h%</li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}
