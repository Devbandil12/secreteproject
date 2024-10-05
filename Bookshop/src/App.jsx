import React from "react";
import Home from "./components/Home";
import { useEffect } from 'react';
import io from "socket.io-client"

const App = () => {
 
useEffect(() => {
  const socket=io()
  socket.emit("hello","hello")
  socket.on("message",data=>{
    console.log(data);
    
  })
  


},[])
  return (
    <>
      <div className="w-full h-screen bg-zinc-600 text-black">
        <Home bg={"bg.jpg"}/>
      </div>
    </>
  );
};

export default App;
