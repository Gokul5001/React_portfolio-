import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] text-black">2018-2024</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 text-gray-800">
          <ResumeCard
            title="Master Of Computer Applications"
            subTitle="Kongu Engineering College (2022-2024)"
            result="8.08/10"
            des="Achieved a commendable GPA of 8.08/10, demonstrating a comprehensive understanding of computer applications and related fields. This program equips individuals with the necessary skills and knowledge to thrive in diverse sectors of the economy and cultural spheres, preparing them for professional roles in the rapidly evolving tech industry."
          />
          <ResumeCard
            title="Bachelor of Science (B.Sc.) in Chemistry"
            subTitle="Erode Arts And Science College (2019-2022)"
            result="8.08/5"
            des="Attained an outstanding GPA of 8.08/10, showcasing proficiency in the principles and applications of chemistry. Higher education in chemistry provides a solid foundation in scientific inquiry and analytical thinking, paving the way for academic excellence and career opportunities in research, industry, and academia."
          />
          <ResumeCard
            title="Higher Secondary School Education"
            subTitle="Vidhya Vikas Boys Higher Secondary School"
            result="179/200"
            des="Secured an impressive score of 179/200, reflecting a strong academic performance during the crucial phase of higher secondary education. This phase lays the groundwork for tertiary education by fostering critical thinking skills and subject expertise, essential for pursuing specialized fields of study."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Erode Hindu Kalvi Nilayam "
            result="477/500"
            des="Completed secondary education with a perfect score of 477/500, indicating exceptional academic aptitude and dedication to learning. Secondary education forms the cornerstone of a student's educational journey, providing fundamental knowledge and skills necessary for personal and intellectual development."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
