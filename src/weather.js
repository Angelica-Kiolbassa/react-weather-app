import React from "react";
import "./weather.css";

export default function Weather() {
  const apiKey = d8o5aa0df3a2c34948fdac8abdta545d;
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";
  return (
    <div class="Weather">
      <form>
        <div className="row">
          <div className="col-6 mb-3 ms-5 mt-1">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
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
      <h1 className="city mb-0">San Antonio</h1>
      <div className="time">
        <strong>Friday 10:12</strong>
      </div>
      <div className="temp">
        98°
        <span className="units">
          F<span className="units"> |</span>
          <span className="units"> C</span>
        </span>
      </div>
      <div className="details mt-0">
        <strong>Partly Cloudy</strong>
      </div>
      <div className="icon">
        <img
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
          alt="sun"
        />
      </div>

      <span>
        Humididty: <span className="details">90%</span>
        <div>
          Wind: <span className="details">15 km/h%</span>
        </div>
      </span>

      <div className="subtext2 mt-1">Feels like...</div>
      <div className="headphones">
        <img
          src="https://www.freeiconspng.com/uploads/headphones-png-19.png"
          id="headphones"
          alt="Headphones pic"
          height="200"
          width="200"
        ></img>
      </div>
      <div>
        <iframe
          id="playlist"
          src="https://open.spotify.com/embed/playlist/6TzelL2zxRLsKm2d4YdhLR?utm_source=generator"
          width="70%"
          height="100"
          frameborder="0"
          allow="autoplay"
          loading="lazy"
        ></iframe>
      </div>
      <div className="forecast mb-4">
        <div>Daily Forcast coming soon...</div>
      </div>
    </div>
  );
}
