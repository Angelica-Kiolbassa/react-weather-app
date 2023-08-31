import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temperature.maximum);
    return `${maxTemp}°`;
  }

  function minTemperature() {
    let minTemp = Math.round(props.data.temperature.minimum);
    return `${minTemp}°`;
  }

  function day() {
    let date = new Date(props.data.temperature.day * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>

      <img src={props.data.condition.icon_url} height="50" width="50" />

      <div className="forecast-temp-max">{maxTemperature()}</div>
      <div className="forecast-temp-min">{minTemperature()}</div>
    </div>
  );
}
