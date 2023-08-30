import "./App.css";
import Weather from "./weather";
import "./weather.css";
import LightDark from "./lightDark";

function App() {
  return (
    <div className="App">
      <LightDark />
      <Weather defaultCity="San Antonio" />
    </div>
  );
}

export default App;
