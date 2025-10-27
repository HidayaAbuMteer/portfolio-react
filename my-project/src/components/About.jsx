import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { FiCode, FiDatabase, FiLayers, FiHelpCircle } from "react-icons/fi";
import { FaHtml5, FaPhp, FaCss3, FaJs, FaReact, FaGithub, FaLaravel, FaFigma } from "react-icons/fa";

const personalInfo = [
  { label: "Address", value: "Amman – Jordan" },
  { label: "Phone", value: "0789461338" },
  { label: "Email", value: "hidayaabumteer@gmail.com" },
  { label: "Date of Birth", value: "May 3, 1998" },
];

const softSkills = [
  "Communication",
  "Quick Learning",
  "Time Management",
  "Teamwork & Collaboration",
  "Good Adaptability",
];

const skills = [
  { name: "PHP", icon: FaPhp },
  { name: "C# / C++", icon: FiCode },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3 },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Laravel", icon: FaLaravel },
  { name: "SQL", icon: FiDatabase },
  { name: "OOP", icon: FiLayers },
  { name: "Figma", icon: FaFigma },
  { name: "Problem Solving", icon: FiHelpCircle },
  { name: "Git / GitHub", icon: FaGithub },
];

const About = () => {
  const [activeSection, setActiveSection] = useState("Skills");

  return (
    <div
      id="about"
      className="h-screen snap-center max-w-6xl mx-auto mt-8 px-4 flex gap-6 items-center justify-center"
    >
      {/* Sidebar Buttons */}
      <div className="flex flex-col gap-2 mt-16">
        {["Personal Information", "Soft Skills", "Skills"].map((section) => (
          <button
            key={section}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              activeSection === section
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-purple-500"
            }`}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Content Column */}
      <div className="flex-1 space-y-6">
        {/* About Me Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2">ABOUT ME</h1>
        </Motion.div>

        {/* Personal Information Section */}
        {activeSection === "Personal Information" && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalInfo.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <span className="font-semibold text-purple-400">{item.label}:</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </Motion.div>
        )}

        {/* Soft Skills Section */}
        {activeSection === "Soft Skills" && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Soft Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-800 rounded-lg flex items-center justify-center text-center font-medium hover:bg-purple-700 transition-colors cursor-pointer"
                >
                  {skill}
                </div>
              ))}
            </div>
          </Motion.div>
        )}

        {/* Skills Section */}
        {activeSection === "Skills" && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-lg cursor-pointer hover:bg-purple-700 transition-colors"
                  >
                    <Icon className="w-8 h-8 mb-2 text-purple-400" />
                    <span className="text-center">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </Motion.div>
        )}
      </div>
    </div>
  );
};

export default About;
