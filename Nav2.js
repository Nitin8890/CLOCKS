import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between items-center p-2 bg-slate-950 text-lime-500">
      <div className="w-1/2">
        <h1 className="font-extrabold text-xl">CLOCK</h1>
      </div>
      <div class="flex p-2 bg-slate-950">
        <a className=" font-extrabold px-4 group" href='SW'>
          Stopwatch
          <div class="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </a>
      </div>
    </div>
  );
};

export default Nav;
