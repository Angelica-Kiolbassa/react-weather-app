import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city mb-0 mt-0">{props.data.city}</h1>
      <div className="weather-info-center">
        <div className="time">
          <strong>
            <FormattedDate date={props.data.date} />
          </strong>
        </div>

        <WeatherTemperature celsius={props.data.temperature} />

        <div className="icon">
          <img src={props.data.icon} alt="weather icon" />
        </div>
        <div className="details text-capitalize">
          <strong>{props.data.description}</strong>
        </div>

        <span>
          Humididty:{" "}
          <span className="details">{Math.round(props.data.humidity)}%</span>
          <div>
            Wind:{" "}
            <span className="details">{Math.round(props.data.wind)} km/h</span>
          </div>
        </span>
      </div>
    </div>
  );
}
