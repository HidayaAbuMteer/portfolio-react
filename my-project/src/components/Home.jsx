import { motion as Motion } from "framer-motion";
import ProfilePhoto from "./ProfilePhoto";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import HidayaCV from "../assets/HidayaCV.pdf";

const Home = () => {
  return (
    <section id="home" className="h-screen snap-center bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">

      {/* Left side */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <Motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 40, damping: 25, delay: 1.3, duration: 1.5 }}
          className="text-5xl md:text-7xl lg:text-7xl font-bold z-10 mb-6"
        >
          Hi.I'm<br /> Hidaya Abu Mteer
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 40, damping: 25, delay: 1.8, duration: 1.5 }}
          className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl"
        >
          I'm a passionate Web Developer from Jordan
        </Motion.p>

        {/* Buttons & Icons */}
        <div className="flex items-center space-x-4 mt-6">

          {/* CV Download */}
          <Motion.a
            href={HidayaCV}
            download
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.6, duration: 0.8 }}
            className="px-4 py-2 rounded-xl border border-gray-300 text-gray-300 dark:text-gray-100 font-bold flex items-center gap-2 hover:border-violet-600 hover:text-violet-400  "
          >
            <FiDownload className="w-5 h-5" />
            Download CV
          </Motion.a>

          {/* GitHub */}
          <Motion.a
            href="www.linkedin.com/in/hidayaabumteer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.6, duration: 0.8 }}
            className="w-12 h-12 rounded-full border border-gray-300 text-gray-300 dark:text-gray-100 flex items-center justify-center hover:border-violet-600 hover:text-violet-400 transition-all duration-300"
          >
            <Motion.span whileHover={{ rotate: 20 }} transition={{ duration: 0.3 }}>
              <FiGithub className="w-6 h-6" />
            </Motion.span>
          </Motion.a>

          {/* LinkedIn */}
          <Motion.a
            href="https://github.com/HidayaAbuMteer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
  
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.6, duration: 0.8 }}
            className="w-12 h-12 rounded-full border border-gray-300 text-gray-300 dark:text-gray-100 flex items-center justify-center hover:border-violet-600 hover:text-violet-400 transition-all duration-300"
          >
            <Motion.span whileHover={{ rotate: 20 }} transition={{ duration: 0.3 }}>
              <FiLinkedin className="w-6 h-6" />
            </Motion.span>
          </Motion.a>

        </div>
      </div>

      {/* Right side */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <ProfilePhoto />
      </div>

    </section>
  )
}

export default Home;
