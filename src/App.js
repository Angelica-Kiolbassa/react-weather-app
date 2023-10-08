import "./App.css";
import Weather from "./weather";
import "./weather.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <img
        src={require("./images/BTSfall.png")}
        width="600"
        height="300"
        className="img-fluid rounded mx-auto d-block"
        alt="Responsive image"
      />

      <Weather defaultCity="San Antonio" />

      <div className="container mt-0">
        <span className="logo">
          <img
            src={require("./images/bts.png")}
            width="100"
            height="200"
            className="img-fluid rounded inline-block"
            alt="Responsive image"
          />
        </span>

        <span className="logo">
          <img
            src={require("./images/army.png")}
            width="100"
            height="200"
            className="img-fluid rounded inline-block mt-4"
            alt="Responsive image"
          />
        </span>
      </div>

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
