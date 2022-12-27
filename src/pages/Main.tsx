import { FC } from "react";
import Card from "../components/Card";
import InputArea from "../components/InputArea";
import "./main.css";
import { useSelector } from "react-redux";

const Main: FC = () => {
  const cities = useSelector((state: any) => state.cities.cities);

  return (
    <div className="main">
      <div className="main-top">
        <InputArea />
      </div>
      <div className="main-center">
        {!cities
          ? "add city to see weathe"
          : cities.map((city: any) => <Card city={city} />)}
      </div>
    </div>
  );
};

export default Main;
