import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>

      <footer>
        <span>This app was coded by </span>
        <a href="https://www.instagram.com/creating_angelica/" target="_blank">
          Angelica Kiolbassa
        </a>
        <span> and open-sourced on </span>
        <a
          href="https://github.com/Angelica-Kiolbassa/react-weather-app.git"
          target="_blank"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
