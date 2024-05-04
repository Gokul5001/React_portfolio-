import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-black text-bold ">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=100022448842059" target="_blank" rel="noopener noreferrer" className="bannerIcon" style={{ color: 'red'  , backgroundColor: 'white'}}>
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/Gokulkanna5334" target="_blank" rel="noopener noreferrer" className="bannerIcon" style={{ color: 'red'  , backgroundColor: 'white'}}>
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/gokul-kannan-k-h-1240b2215" target="_blank" rel="noopener noreferrer" className="bannerIcon" style={{ color: 'red'  , backgroundColor: 'white'}}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-black">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" style={{ color: 'red'  , backgroundColor: 'white'}}>
              <FaReact />
            </span>
            <span className="bannerIcon" style={{ color: 'red'  , backgroundColor: 'white'}}>
              <SiNextdotjs />
            </span>
            <span className="bannerIcon" style={{ color: 'red'  , backgroundColor: 'white'}}>
              <SiTailwindcss />
            </span>
            <span className="bannerIcon" style={{ color: 'red' , backgroundColor: 'white' }}>
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media;
