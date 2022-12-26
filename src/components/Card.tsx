import { useGetWeatherByCityQuery } from "../store/weather/weather.api";
import { useDispatch } from 'react-redux';
import { weaterListAction } from "../store/weather/weather.slice";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface iCardProps {city: string} 

const Card = ({city}:  iCardProps) => {
    
    const {data, isLoading, error} = useGetWeatherByCityQuery(city);
    const dispatch = useDispatch();

    if(error) dispatch(weaterListAction.removeItem(city));

    return ( 
        <Link to={`/city/${city}`}>
            <div className="card">
                {
                    isLoading? <div className="card-loading">Loading...</div> :
                    
                    <div className="card-container">
                        <div className="card-header">
                            <div className="card-name">  { city=== 'Moscow'? 'boloto': city} </div>
                            <div className="card-img">img</div>
                        </div>

                        <div className="card-desc">
                            <div className="card-weather">
                                {
                                    (data && data.weather && data.weather[0] && data.weather[0].main) && (data.weather[0].main)
                                }
                                
                            </div>
                            <div className="card-temp">
                                {
                                    (data && data.main && data.main.temp_max) && (Math.floor(data?.main?.temp_max -  273)) 
                                } °C
                            </div>
                            <div className="card-footer">
                                <div className="card-temp-feel">
                                    Feels like: {(data && data.main && data.main.feels_like) && (Math.floor(data?.main?.feels_like - 273))} °C
                                </div> 
                                <div className="card-del">
                                    <Button size="small" onClick={() => dispatch(weaterListAction.removeItem(city))} variant="contained" color="secondary">
                                        Del
                                    </Button>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                }
            </div>
        </Link>
     );
}
 
export default Card;