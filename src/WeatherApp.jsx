import Search from "./Search";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherinfo, setWeatherinfo] = useState({
    city: "Gurugao",
    humidity: 11,
    temp: 37.05,
    tempMax: 37.05,
    tempMin: 37.05,
  });
  let updateInfo = (newInfo) => {
    setWeatherinfo(newInfo);
  };
  return (
    <div className="Weather">
      <Search updateInfo={updateInfo} />
      <InfoBox info={weatherinfo} />
    </div>
  );
}
