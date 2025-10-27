import React from "react";
import { motion as Motion } from "framer-motion";
import { experiences } from "./DetailsCourse"; 

const Courses = () => {
  return (
    <section
      id="courses"
      className="h-screen snap-center py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-gradient-to-b from-violet-900 to-black"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">COURSES</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>

      {/* Timeline Container */}
      <div className="relative">
       
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full opacity-20"></div>

        {/* Experience Cards */}
        {experiences.map((experience, index) => {
          const Icon = experience.img;

          return (
            <Motion.div
              key={experience.id}
              className={`flex flex-col sm:flex-row items-center mb-16 ${
                index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
              }`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              {/* Timeline Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-purple-500 w-16 h-16 rounded-full flex justify-center items-center z-10">
                <Icon className="text-3xl text-purple-400" />
              </div>

              {/* Card Content */}
              <div
                className={`w-full sm:max-w-md p-6 rounded-2xl shadow-2xl border border-gray-600 bg-gray-900 backdrop-blur-md transition-transform duration-300 hover:scale-105 ${
                  index % 2 === 0 ? "sm:ml-40" : "sm:mr-40"
                } mt-20 sm:mt-0`}
              >
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold text-white">{experience.name}</h3>
                  <h4 className="text-sm text-gray-400">{experience.company}</h4>
                  <p className="mt-4 text-gray-300 leading-relaxed">{experience.desc}</p>
                </div>
              </div>
            </Motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Courses;
