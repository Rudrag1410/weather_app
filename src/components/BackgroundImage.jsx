import { useEffect, useState } from "react";
import { useStateContext } from "../context/WeatherContext";
import clearImage from "../assets/images/Clear.jpg";
import fogImage from "../assets/images/fog.png";
import cloudyImage from "../assets/images/Cloudy.jpg";
import rainyImage from "../assets/images/Rainy.jpg";
import snowyImage from "../assets/images/snow.jpg";
import stormyImage from "../assets/images/Stormy.jpg";
import sunnyImage from "../assets/images/Sunny.jpg";

const BackgroundImage = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(clearImage);

  useEffect(() => {
    const getWeatherImage = () => {
      const imageString = weather.conditions.toLowerCase();

      if (imageString.includes("clear")) {
        setImage(clearImage);
      } else if (imageString.includes("cloud")) {
        setImage(cloudyImage);
      } else if (imageString.includes("snow")) {
        setImage(snowyImage);
      } else if (imageString.includes("sunny")) {
        setImage(sunnyImage);
      } else if (imageString.includes("fog")) {
        setImage(fogImage);
      } else if (
        imageString.includes("thunder") ||
        imageString.includes("storm")
      ) {
        setImage(stormyImage);
      } else if (
        imageString.includes("rain") ||
        imageString.includes("shower")
      ) {
        setImage(rainyImage);
      }
    };

    if (weather.conditions) {
      getWeatherImage();
    }
  }, [weather.conditions]);

  return (
    <img
      src={image}
      alt="weather_image"
      className="h-screen w-full fixed left-0 top-0 -z-[10]"
    />
  );
};

export default BackgroundImage;
