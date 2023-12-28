import { useState } from "react";
import seatchIcon from "./assets/icon/search.svg";
const App = () => {
  const [input, setInput] = useState("");
  return (
    <header className="w-full h-screen text-white px-8">
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
                // sumit the form
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
    </header>
  );
};

export default App;
