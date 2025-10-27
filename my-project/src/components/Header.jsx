import { VscCode } from "react-icons/vsc";
import {motion as Motion,AnimatePresence} from "framer-motion";
import { FiX } from "react-icons/fi";
import {useState}from "react"
const Header =()=>{

  // contact open close
  const [contactFormOpen,setContactFormOpen]=useState(false);
  const openContactForm=()=>setContactFormOpen(true);
  const closeContactForm=()=>setContactFormOpen(false);
    return(
        <header className="absolute w-full z-50 transition-all duration-300">

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">

          {/* logo/name */}
          <Motion.div className="flex items-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type:"spring",
            stiffness:100,
            damping:25,
            delay:0.3,
            duration:1.2,
           }}
          >

         <VscCode />

            <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                Hidaya Abu Mteer
            </span>
          </Motion.div>
          {/* navbar */}
          <nav className="  lg:flex   space-x-8">
            {["home","about","courses","project","contact"].map((item,index )=>(
              
                <Motion.a 
                key={item}
                initial={{ opacity:0 ,y:-20}}
                animate={{opacity:1 ,y:0}}
                transition={{
                  type:"spring",
                  stiffness:100,
                  damping:20,
                  delay:0.7 +index*0.2,
                }}
                className="relative text-gray-300 dark:text-gray-100 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"

                href={`#${item}`}>
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300">

                    </span>
                </Motion.a>
            ))}

          </nav>
        
          {/* Hire me */}
          <Motion.button 
          onClick={openContactForm}
          initial={{ opacity:0 ,scale:0.8}}
          animate={{opacity:1 ,scale:1}}
          transition={{
                  type:"spring",
                  stiffness:100,
                  damping:15,
                  delay:1.6,
                duration:0.8, }}
          className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-all duration-500 ">
            Hire Me
          </Motion.button>
          </div>
          <AnimatePresence>
          {/* contact form */}
              {contactFormOpen&& (
                <Motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{ duration:0.5 }}
                className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4 "
                onClick={closeContactForm}
                >
                    <Motion.div 
                    initial={{scale:0.8,opacity:0 ,y:30}}
                    animate={{scale:1,opacity:1 ,y:0}}
                    exit={{scale:0.8,opacity:0 ,y:30}}
                    transition={{type:"spring",
                                stiffness:200,
                                damping:30,
                                duration:0.8,}} 
                    onClick={(e)=>e.stopPropagation()}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6">
                        <div className="flex justify-between items-center mb-4">
                           <h1 className="text-2xl font-bold text-gray-300">
                              Get In Touch
                           </h1>
                           <button onClick={closeContactForm}>
                            <FiX className="w-5 h-5 text-gray-300 font-extrabold"/>
                           </button>
                        </div>
                        {/* form input */}
                        <form className="space-y-4">
                              <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray300 mb-1">Name</label>
                                <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                                />
                              </div>
                              <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray300 mb-1">Email</label>
                                <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                                />
                              </div>
                              <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray300 mb-1">Message</label>
                                <textarea
                                rows="4"
                                id="message"
                                placeholder="How can help you?"
                                className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                                />
                              </div>
                              <Motion.button
                              type="submit"
                              whileHover={{scale:1.03}}
                              whileTap={{scale:0.97}}
                              className="w-full px-2 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50"
                              >
                              Send Message
                              </Motion.button>
                        </form>
                    </Motion.div >
                </Motion.div>
              )
              }
              </AnimatePresence>
        </header>
    )
}

export default Header