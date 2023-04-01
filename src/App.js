import SearchEngine from "./SearchEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchEngine />
        <p>
          <a href="https://github.com/sandramkh516/lesson4" target="-blank">
            Open-source code
          </a>
          , by Sara Mokhtari
        </p>
      </header>
    </div>
  );
}

export default App;
