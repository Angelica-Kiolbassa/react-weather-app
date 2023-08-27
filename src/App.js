import "./App.css";
import Weather from "./weather";
import "./weather.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Weather defaultcity="San Antonio" />
      </header>

      <footer className="footer">
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
