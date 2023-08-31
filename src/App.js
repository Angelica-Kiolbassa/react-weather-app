import "./App.css";
import Weather from "./weather";
import "./weather.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <img
        src="https://images-prod.dazeddigital.com/1431/azure/dazed-prod/1210/6/1216646.jpg"
        width="600"
        height="300"
        className="img-fluid rounded mx-auto d-block"
        alt="Responsive image"
      />
      <Weather defaultCity="San Antonio" />

      <footer className="footer mt-1">
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
