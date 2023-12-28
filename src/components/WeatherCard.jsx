/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../index.css";

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  iconUrl,
  conditions,
}) => {
  const [icon, setIcon] = useState(iconUrl || ""); // Initialize with the provided icon URL

  useEffect(() => {
    setIcon(iconUrl || "");
  }, [iconUrl]);

  return (
    <div className="w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4">
      <div className="flex w-full just-center, items-center gap-4 mt-12 mb-4">
        <img src={icon} alt="weather_icon" />
        <p className="font-bold text-5xl flex justify-center items-center">
          {temperature} &deg;C
        </p>
      </div>
      <div className="font-bold text-center text-xl">{place}</div>
      <div className="w-full flex justify-between items-center mt-4">
        <p className="flex-1 text-center p-2">{new Date().toDateString()}</p>
      </div>
      <hr className="bg-slate-600" />

      <div className="w-full flex justify-between items-center mt-4 gap-4">
        <div className="flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">
          <p>
            Wind Speed <span className="font-normal">{windspeed} kp/h</span>
          </p>
        </div>
        <div className="flex-1 text-center p-2 font-bold rounded-lg bg-green-600">
          <p>
            Humidity <span className="font-normal">{humidity} gm/m&#179;</span>
          </p>
        </div>
      </div>
      <div className="w-full p-4 flex justify-center items-center text-3xl font-semibold">
        {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;
