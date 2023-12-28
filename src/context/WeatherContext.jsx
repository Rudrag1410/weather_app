/* eslint-disable react/prop-types */
import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("Jaipur");
  const [thisLocation, setLocation] = useState("");

  // fetch api
  const fetchWeather = async () => {
    const options = {
      method: "GET",
      url: "https://api.weatherapi.com/v1/forecast.json",
      params: {
        key: import.meta.env.VITE_API_KEY,
        q: place,
        days: 7,
      },
    };

    try {
      const response = await axios.request(options);
      const thisData = response.data;
      // console.log(response.data);
      setLocation(thisData.location.name);
      setValues(thisData.forecast.forecastday);
      setWeather(thisData.current);
    } catch (e) {
      console.error(e);
      alert("This place does not exist");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  return (
    <StateContext.Provider
      value={{
        weather,
        setPlace,
        values,
        thisLocation,
        place,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
