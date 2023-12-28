/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const MiniCard = ({ time, temp, iconUrl }) => {
  const [icon, setIcon] = useState();

  useEffect(() => {
    if (iconUrl) {
      setIcon(iconUrl);
    }
  }, [iconUrl]);

  return (
    <div className="glassCard w-[10rem] h-[10rem] p-4 flex flex-col">
      <p className="text-center">
        {
          new Date(time)
            .toLocaleTimeString("en", { weekday: "long" })
            .split(" ")[0]
        }
      </p>
      <hr />
      <div className="w-full flex justify-center items-center flex-1">
        <img
          src={icon}
          alt="forecast not available"
          className="w-[4rem] h-[4rem]"
        />
      </div>
      <p className="text-center font-bold">{temp}&deg;C</p>
    </div>
  );
};

export default MiniCard;
