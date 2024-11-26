/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import WeatherDetails from "./weatherData";
import "./weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeather] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);

  const handleInput = (event) => {
    event.preventDefault();
    setCity(event.target.value);
  };

  async function fetchingData() {
    try {
      setLoad(true);
      setErr(null);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4e98008ab197e6d9eed169a982d6e811`
      );
      if (res.status === 404) {
        throw new Error(`${city.toLocaleUpperCase()} NOT FOUND`);
      }
      const data = await res.json();

      console.log(data);
      setWeather(data);
    } catch (err) {
      setErr(err.message);
    } finally {
      setLoad(false);
    }
  }
  useEffect(() => {
    if (city.trim()) {
      fetchingData();
    }
  }, []);

  const getData = () => {
    if (city) {
      fetchingData();
    } else {
      alert("enter city name");
    }
  };

  return (
    <div className="container">
      <div className="parent-container">
        <input
          type="text"
          placeholder="search city"
          value={city}
          onChange={handleInput}
        />
        <button onClick={getData}>Submit</button>
      </div>
      {load && <div className="item1"></div>}
      {err ? (
        <div className="error">
          <section className="error-container">
            <span>4</span>
            <span>
              <span className="screen-reader-text">0</span>
            </span>
            <span>4</span>
          </section>
          {err}
        </div>
      ) : (
        <WeatherDetails weatherData={weatherData} />
      )}
    </div>
  );
}

export default Weather;
