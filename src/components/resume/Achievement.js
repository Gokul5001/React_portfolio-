import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023</p>
          <h2 className="text-4xl font-bold text-black">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
  title="Certificate of Participation"
  subTitle="This is to certify that"
  result="Success"
  des="This is to certify that Gokul Kannan from Kongu Engineering College KEC, Erode has participated in the Accenture Innovation Challenge 2023 organized by the Accenture."
/>
<ResumeCard
  title="Certificate of Participation"
  subTitle="This is to certify that"
  result="Success"
  des="This is to certify that GOKUL KANNAN K H from Kongu Engineering College KEC, Erode has participated in the Coca-Cola Disrupt Season 3 organized by the Hindustan Coca-Cola Beverages."
/>


        </div>
      </div>
     
    </motion.div>
  );
};

export default Achievement;
