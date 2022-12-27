import { useGetWeatherByCityQuery } from "../store/weather/weather.api";
import { useDispatch } from "react-redux";
import { weaterListAction } from "../store/weather/weather.slice";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import WeatherIcons from "./WeatherImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faRotate } from "@fortawesome/free-solid-svg-icons";

interface iCardProps {
  city: string;
}

const Card = ({ city }: iCardProps) => {
  const { data, isLoading, error, refetch } = useGetWeatherByCityQuery(city);
  const dispatch = useDispatch();

  if (error) dispatch(weaterListAction.removeItem(city));

  return (
    <div className="card">
      {isLoading ? (
        <div className="card-loading">Loading...</div>
      ) : (
        data?.cod !== 200? (<div>City doesn't exsist</div>)
        : (
            <div className="card-container">
          <div className="card-header">
            <Link to={`/city/${city}`}>
              <div className="card-name">
                {" "}
                {city === "Moscow" ? "boloto" : city}{" "}
              </div>
            </Link>
            <WeatherIcons icon={data?.weather[0].icon || ""} />
          </div>

          <div className="card-desc">
            <div className="card-weather">
              {data &&
                data.weather &&
                data.weather[0] &&
                data.weather[0].main &&
                data.weather[0].main}
            </div>
            <div className="card-temp">
              {data &&
                data.main &&
                data.main.temp_max &&
                Math.floor(data?.main?.temp_max - 273)}{" "}
              °C
            </div>
            <div className="card-temp-feel">
                Feels like:{" "}
                {data &&
                  data.main &&
                  data.main.feels_like &&
                  Math.floor(data?.main?.feels_like - 273)}{" "}
                °C
              </div>
            <div className="card-footer">
                <div className="card-del">
                    <Button
                        size="small"
                        onClick={() => refetch()}
                        variant="contained"
                        color="secondary"
                    >
                        <FontAwesomeIcon icon={faRotate}/>
                    </Button>
                </div>
                <div className="card-del">
                    <Button
                    size="small"
                    onClick={() => dispatch(weaterListAction.removeItem(city))}
                    variant="contained"
                    color="secondary"
                    >
                        <FontAwesomeIcon icon={faTrash}/>
                    </Button>
                </div>
            </div>
          </div>
        </div>
        )
      )}
    </div>
  );
};

export default Card;
