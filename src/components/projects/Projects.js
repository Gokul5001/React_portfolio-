import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  // Define GitHub links and deployed website links for each project
  const projects = [
    {
      title: "SOCIAL MEDIA CLONE",
      des: "A social media clone app built with React to work seamlessly across various devices and platforms, including web, iOS, and Android.Notify users about new releases from their favorite artists, new followers, or playlist updates.",
      src: projectOne,
      githubLink: "https://github.com/Gokul5001/Social-Media-Clone-App.git",
      websiteLink: "https://spotify-clone-ndt.vercel.app/"
    },
    {
      title: "Weather Application",
      des: "Responsive weather application using React.js with real-time global data retrieval. Implemented hooks and conditional rendering for efficient state management,ensuring a seamless user experience.",
      src: projectTwo,
      githubLink: "https://github.com/Gokul5001/Weather_App_React_JS_INTERN.git",
      websiteLink: "https://weather-app-react-js-intern-fvec.vercel.app/"
    },
    {
      title: "Messenger App",
      des: "A messaging application created with React.js where ability to send and receive messages even when users are offline. Messages should be delivered once the user comes back online..",
      src: projectThree,
      githubLink: "https://github.com/Gokul5001/Messenging-app_REACT_JS_INTERN.git",
      websiteLink: "https://messenger-app.com"
    },
    // Add more projects with corresponding GitHub and website links
  ];

  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PROJECTS AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projects.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
            descriptionClassName="text-gray-1000" 
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
