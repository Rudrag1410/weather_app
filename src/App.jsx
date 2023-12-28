import { useState } from "react";
import seatchIcon from "./assets/icons/search.svg";
import BackgroundImage from "./components/BackgroundImage";
import WeatherCard from "./components/WeatherCard";
import MiniCard from "./components/MiniCard";
import { useStateContext } from "./context/WeatherContext";

const App = () => {
  const [input, setInput] = useState("");
  const { weather, values, setPlace, place, error, retryFetch } =
    useStateContext();

  const submitCity = () => {
    setPlace(input);
    setInput("");
  };

  const renderContent = () => {
    if (error) {
      return (
        <div>
          <p>An error occurred: {error}</p>
          <button onClick={retryFetch}>Retry</button>
        </div>
      );
    }

    if (!weather || !values) {
      // Data is being fetched
      return <p>Loading...</p>;
    }

    return (
      <div className="w-full h-screen text-white px-8">
        <nav className="w-full p-3 flex justify-between items-center">
          <h1 className="font-bold tracking-wide text-3xl">Weather App</h1>
          <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex justify-center p-2 gap-2">
            <img
              src={seatchIcon}
              alt="search_icon"
              className="h-[1.5rem] w-[1.5rem]"
            />
            <input
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  submitCity();
                }
              }}
              type="text"
              className="focus:outline-none w-full text-[#212121] text-lg"
              placeholder="Search City"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Search City"
            />
          </div>
        </nav>
        <BackgroundImage />
        <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] justify-center items-center">
          <WeatherCard
            temperature={weather.temp_c}
            place={place}
            windspeed={weather.wind_kph}
            humidity={weather.humidity}
            iconUrl={weather.condition ? weather.condition.icon : ""}
            conditions={weather.condition ? weather.condition.text : ""}
          />
          <div className="flex justify-center gap-8 flex-wrap w-[60%]">
            {values?.slice(1, 7).map((curr) => {
              return (
                <MiniCard
                  key={curr.date}
                  time={curr.date}
                  temp={curr.day.avgtemp_c}
                  iconUrl={curr.day.condition ? curr.day.condition.icon : ""}
                />
              );
            })}
          </div>
        </main>
      </div>
    );
  };

  return renderContent();
};

export default App;
