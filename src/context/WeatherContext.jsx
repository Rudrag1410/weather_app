/* eslint-disable react/prop-types */
import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("India");
  const [thisLocation, setLocation] = useState("");
  const [error, setError] = useState(null);

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
      setLocation(thisData.location.name);
      setValues(thisData.forecast.forecastday);
      setWeather(thisData.current);
      setError(null);
    } catch (e) {
      console.error(e);
      setError("This place does not exist");
    }
  };

  const retryFetch = () => {
    setError(null);
    fetchWeather();
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
        error,
        retryFetch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
