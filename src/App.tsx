import { FC } from "react";
import Main from "./pages/Main";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CityWeather from "./pages/CityWeather";

const App: FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="city/:id" element={<CityWeather />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
