
import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";


import erpImg from "../assets/erp.jpg";
import todoImg from "../assets/todolist.png";
import portfolioImg from "../assets/portfolio.jpg";
import netflixImg from "../assets/netflix.png";
import signupImg from "../assets/signup.png";

const projects = [
  {
    id: 1,
    title: "ERP SYSTEM",
    image: erpImg,
    desc: "I am actively developing a comprehensive Enterprise Resource Planning (ERP) web application using PHP.",
  },
  {
    id: 2,
    title: "TO DO LIST WEBSITE",
    image: todoImg,
    desc: "I built a To-Do List website with React, implementing features such as task creation, editing, deletion, and local storage persistence for a seamless user experience.",
  },
  {
    id: 3,
    title: "PORTFOLIO WEBSITE",
    image: portfolioImg,
    desc: "Developed a personal portfolio website with HTML and CSS, featuring sections for projects, skills, and experience. Implemented a responsive layout and modern styling to provide a professional and user-friendly showcase of my work.",
  },
  {
    id: 4,
    title: "NETFLIX FIGMA",
    image: netflixImg,
    desc: "Created a Netflix-inspired webpage design in Figma, focusing on layout, typography, and user experience. Developed a visually appealing and interactive prototype to showcase design skills and attention to detail.",
  },
  {
    id: 5,
    title: "SIGNUP & LOGIN WEBSITE",
    image: signupImg,
    desc: "Developed a Sign-Up & Log-In website twice: once using JavaScript and once using React.",
  },
];

const AllProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="project" className="relative w-full h-screen snap-center  flex flex-col items-center justify-center text-white">
      <h2 className="text-4xl font-bold mb-8">MY PROJECTS</h2>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl hover:scale-105 z-10"
      >
        <FaArrowAltCircleLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl hover:scale-105 z-10"
      >
        <FaArrowAltCircleRight />
      </button>

      {/* Project Cards */}
      <div className="relative w-full h-96 md:h-[500px] flex items-center justify-center">
        <AnimatePresence initial={false}>
          {projects.map(
            (project, index) =>
              index === currentIndex && (
                <Motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.8, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -100 }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                  className="absolute w-4/5 md:w-2/3 h-full bg-gray-900 bg-opacity-20 border border-purple-500 rounded-3xl p-6 flex flex-col items-center justify-center"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-center">{project.desc}</p>
                </Motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AllProject;
