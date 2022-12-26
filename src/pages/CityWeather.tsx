import { useParams } from "react-router-dom";
import { useState } from 'react';
import { useGet5DayWeatherByCityQuery } from "../store/weather/weather.api";
import "./cityWeather.css";
import ChartBar from "../components/ChartBar";
import { Link } from "react-router-dom";

const CityWeather = () => {
  const { id } = useParams();
  const { error, isLoading, data } = useGet5DayWeatherByCityQuery(id);

    const Arr = data?.list.filter(i => i.dt_txt.includes('12:00:00'))
    const dates = Arr?.map(i=>i.dt_txt) || []
    const temp = Arr?.map(e=>Math.round(e.main.temp) - 273)|| []
    


  if (error) return <div>Failed</div>;

  return (
    <div>
        <Link to='/'>Home</Link>
    <div className="card-page">
       
      {isLoading ? (
        <div className="card-loading">Loading...</div>
      ) : (
        <div className="card-container">
          <div className="card-header">
            <div className="card-name">
              {data &&
                data.city &&
                data.city.name &&
                data?.city.name + ", " + data.city.country}
            </div>
          </div>
          <div className="card-desc">
            <div>
              {data && data.list && data.list[0] && (
                <div>
                  <b>Temperature</b>: {Math.round(data.list[0].main.temp - 273)}{" "}
                  °C
                  <br />
                  <b>Feels like</b> :{" "}
                  {Math.round(data.list[0].main.feels_like - 273)} °C
                  <br />
                  <b>Atmospheric pressure on the sea level</b>:{" "}
                  {Math.round(data.list[0].main.sea_level)} hPa
                  <br />
                  <b>Atmospheric pressure on the ground level</b>:{" "}
                  {Math.round(data.list[0].main.grnd_level)} hPa
                  <br />
                  <b>Weather description</b>:{" "}
                  {data.list[0].weather[0].description}
                  <br />
                  <b>Wind speed</b>: {data.list[0].wind.speed} meter/sec
                </div>
              )}
            </div>
          </div>
          <div className="main-center">
            <ChartBar labels={temp} data={dates} />
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default CityWeather;
