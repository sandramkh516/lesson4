import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [message, setMessage] = useState("");
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "99f643817fcfdf6449cb563e62483475";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateSearch(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    let humidity = Math.round(response.data.main.humidity);
    let wind = Math.round(response.data.wind.speed);
    let icon = response.data.weather[0].icon;
    let image = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    setMessage(
      <ul>
        <li>{city}</li>
        <li>Temperature:{temperature}</li>
        <li>Description:{description}</li>
        <li>Humidity:{humidity}</li>
        <li>Wind:{wind}</li>
        <li>
          <img src={image} />
        </li>
      </ul>
    );
  }
  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          onChange={updateSearch}
          className="search"
        />
        <input type="submit" value="Search" className="color" />
      </form>
      <br />
      <ul>{message}</ul>
    </div>
  );
}
