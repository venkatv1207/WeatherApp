/* eslint-disable react/prop-types */
import "../App.css";
function WeatherDetails({ weatherData }) {
  const WeedDays = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "WednesDay",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[new Date().getDay()];
  };
  const KeltoCel = (kelvin) => {
    return Math.floor(kelvin - 273.15);
  };
  const MaxTemp = (kelvin) => {
    return (kelvin - 273.15).toFixed(3);
  };

  return (
    <div>
      {weatherData && (
        <div className="weather-container">
          <h2>
            {weatherData.name}, <i>{weatherData.sys.country}</i>
          </h2>
          <span className="weatherdata">
            {new Date().toLocaleDateString()}
            {" ," + WeedDays()} {new Date().toLocaleTimeString()}
          </span>
          <h5>
            <i className="fa-solid fa-temperature-empty"></i>{" "}
            {KeltoCel(weatherData.main.temp)}°C
          </h5>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt=""
            />
          </div>
          <h5>{weatherData.weather[0].description}</h5>

          <div className="riserase">
            <div className="maxtemp">
              <i className="fa-solid fa-temperature-arrow-up"></i> Max-temp:{" "}
              <br />
              {MaxTemp(weatherData.main.temp_max)}°C
            </div>
            <div className="mintemp">
              <i className="fa-solid fa-temperature-arrow-down"></i> Min-temp:{" "}
              <br />
              {KeltoCel(weatherData.main.temp_min)}°C
            </div>
            <div className="hum">
              <i className="fa-solid fa-droplet"></i> Humidity: <br />
              {weatherData.main.humidity}%
            </div>
          </div>

          <div className="riserase">
            <div className="rise">
              <i className="fa-solid fa-arrow-up"></i> Sunrise: <br />
              {new Date(weatherData.sys.sunrise).toLocaleTimeString()}
            </div>

            <div className="rase">
              <i className="fa-solid fa-down-long"></i> Sunset: <br />
              {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
            </div>
            <div className="wind">
              <i className="fa-solid fa-wind"></i> Wind Speed: <br />{" "}
              {weatherData.wind.speed} km/h
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default WeatherDetails;
