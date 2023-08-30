import "./App.css";
import Weather from "./weather";
import "./weather.css";
import LightDark from "./lightDark";

function App() {
  return (
    <div className="App">
      <LightDark />
      <Weather defaultCity="San Antonio" />
      <footer className="footer">
        <span>This app was coded by </span>
        <a
          href="https://www.instagram.com/creating_angelica/"
          target="_blank"
          className="links"
        >
          Angelica Kiolbassa
        </a>
        <span> and open-sourced on </span>
        <a
          href="https://github.com/Angelica-Kiolbassa/react-weather-app.git"
          target="_blank"
          className="links"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
