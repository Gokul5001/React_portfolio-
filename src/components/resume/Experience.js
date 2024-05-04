import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Internships</p>
          <h2 className="text-4xl font-bold text-black">Internships</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="React Js Intern"
            subTitle="Sync Intern"
            result="India-Remote"
            des="Created a responsive weather application using React.js with real-time global data retrieval. Implemented hooks and conditional rendering for efficient state management, ensuring a seamless user experience. Developed a real-time messenger app like WhatsApp. Created a resume builder web application for generating resumes from user input in respective input fields. Created an online code editor for practicing programming languages and executed it."
          />
          <ResumeCard
            title="Web Development Intern"
            subTitle="Codsoft"
            result="India-Remote"
            des="Developed a professional portfolio website showcasing diverse skills using HTML and CSS. Created a dynamic to-do list app with real-time updates using JavaScript. Implemented a fully functional calculator app, demonstrating problem-solving skills."
          />
          <ResumeCard
            title="Web Development Intern"
            subTitle="Oasis Infobyte"
            result="India-Remote"
            des="Developed a calculator app to perform basic mathematical operations. Created a tribute page for John Mccarthy. Created a basic to do app website for managing tasks. Created a login authentication for my portfolio website."
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Certificates</p>
          <h2 className="text-4xl font-bold text-black">Web Development Courses</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Introduction to Front End Development"
            subTitle="Simplilearn"
            result=""
            des=""
          />
          <ResumeCard
            title="Database Management System"
            subTitle="Great Learning"
            result=""
            des=""
          />
          <ResumeCard
            title="HTML Course"
            subTitle="Great Learning"
            result=""
            des=""
          />
          <ResumeCard
            title="Complete Web Development Bootcamp"
            subTitle="Udemy"
            result=""
            des=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
