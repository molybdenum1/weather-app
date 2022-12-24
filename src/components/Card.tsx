import { useGetWeatherByCityQuery } from "../store/weather/weather.api";
import { useDispatch } from 'react-redux';
import { weaterListAction } from "../store/weather/weather.slice";

interface iCardProps {city: string} 

const Card = ({city}:  iCardProps) => {
    
    const {data, isLoading, error} = useGetWeatherByCityQuery(city);
    const dispatch = useDispatch();

    if(error) dispatch(weaterListAction.removeItem(city));

    return ( 
        <div className="card">
            {
                isLoading? <div>Loading...</div> :
                
                <div>
                    {city==='Moscow'? 'boloto': city}
                    <div>
                        {
                            (data && data.main && data.main.temp_max) && (Math.floor(data?.main?.temp_max -  273))
                        }
                    </div>
                </div>
            }
        </div>
     );
}
 
export default Card;