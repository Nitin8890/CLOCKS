import React, { useState } from "react";
import Nav2 from '../DigitalClock/Nav2'
const Digi = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(updateTime);
  return (
    <div className=" bg-slate-900">
      <Nav2 />
      <section className="h-screen flex justify-center items-center">
        <div className="h-40 w-80 border-2 border-lime-500 rounded-lg flex justify-center items-center ">
          <h1 className="text-5xl text-lime-500 font-extrabold ">
            {currentTime}
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Digi;
