import React from "react";
import Home from "./components/Home";
import { useEffect } from 'react';

const App = () => {
 
  return (
    <>
      <div className="w-full h-screen bg-zinc-600 text-black">
        <Home bg={"bg.jpg"}/>
      </div>
    </>
  );
};

export default App;
