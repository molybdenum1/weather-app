import { FC } from "react";

const WeatherIcons: FC<{ icon: string }> = ({ icon }) => {
  return (
    <div className="card-img">
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
    </div>
  );
};

export default WeatherIcons;
