
import React from "react";
import { useState } from "react";
import "./App.css";
import MainPage from "./sections/MainPage.jsx";
import {LoadingScreen} from "./sections/LoadingScreen.jsx"



function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-800 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }bg-black text-gray-100`}
      >
        <MainPage />
      </div>
    </>
  );
}

export default App;
