import { easeIn, easeInOut, motion as Motion } from "framer-motion";
import ME from "../assets/me.png";

const ProfilePhoto = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: easeIn },
        }}
        className="relative flex items-center justify-center"
      >
      
        <Motion.svg
          className="absolute w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="white"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </Motion.svg>

        
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: easeInOut },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full overflow-hidden relative z-10"
        >
          <img
            src={ME}
            alt="me"
            className="object-cover w-full h-full"
          />
        </Motion.div>
      </Motion.div>

    </div>
  );
};

export default ProfilePhoto;