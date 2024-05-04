import React from 'react';
import Media from './Media';

const LeftBanner = () => {
  const text = "Web Developer."; // Fixing the variable assignment
  
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 mt-8" > 
      <div className="flex flex-col gap-6 mb-5">
        <h4 className="text-lg font-normal text-black">Hello Folks !</h4>
        <h1 className="text-6xl font-bold text-black">
          Hi, I'm <span className="text-designColor capitalize text-black">GOKUL</span>
        </h1>
        <h2 className="text-4xl font-bold text-black">
           <span>{text}</span>
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-black">
          Crafting digital experiences, pixel by pixel, code by code, weaving functionality with finesse. From sleek designs to robust backend systems, every line echoes a user-centric symphony. In the world of web development, innovation meets usability, shaping tomorrow's online landscape.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner;
