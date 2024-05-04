import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-white p-4 lgl:p-8 rounded-lg border border-black flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold bold text-gray-800">Gokul kannan K H</h3>
        <p className="text-lg font-normal text-gray-800">
          Web Developer
        </p>
        <p className="text-base text-gray-800 tracking-wide">
          Feel Free to Contant me
        </p>
        <p className="text-base text-gray-800 flex items-center gap-2">
          Phone: <span className="text-black">+91 6380085913</span>
        </p>
        <p className="text-base text-gray-800 flex items-center gap-2">
          Email: <span className="text-black">gokulkannankh@gmail.com</span>
        </p>
      </div>
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
 
    </div>
  );
}

export default ContactLeft;
