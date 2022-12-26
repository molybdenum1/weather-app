import { useParams } from "react-router-dom";
import { useState } from 'react';
import { useGet5DayWeatherByCityQuery } from "../store/weather/weather.api";
import "./cityWeather.css";
import ChartBar, { iChartData } from "../components/ChartBar";

const CityWeather = () => {
  const { id } = useParams();
  const { error, isLoading, data } = useGet5DayWeatherByCityQuery(id);
  console.log(data);

//   const [weatherData, setData] = useState({
//     labels:,
//     datasets: [
//         {
//             label: "Weather forecast for 5 day every three hour",
//             data: data?.list.map(w => Math.round(w.main.temp) - 273)
//         }
//     ]
//   })
    const weatherData = {
        labels: data?.list.map(w => w.dt_txt).filter(e => e.includes('12:00:00')),
        datasets: [
            {
                label: "Weather forecast for 5 day every three hour",
                data: data?.list.map(w => Math.round(w.main.temp) - 273)
            }
        ]
    }

  if (error) return <div>Failed</div>;

  return (
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
            <ChartBar chartData={weatherData}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityWeather;
