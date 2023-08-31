import React from "react";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="forecast-day">{props.data.temperature.day}</div>

      <img src={props.data.condition.icon_url} height="50" width="50" />

      <div className="forecast-temp-max">{props.data.temperature.maximum}°</div>
      <div className="forecast-temp-min">{props.data.temperature.minimum}°</div>
    </div>
  );
}
