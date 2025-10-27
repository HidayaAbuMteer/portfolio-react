import { motion as Motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact "className=" h-screen snap-center contact space-y-8 px-4 md:px-16 py-12">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Let's work together
      </h1>

      <form className="space-y-4 max-w-xl mx-auto">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-white"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-white"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Message
          </label>
          <textarea
            rows="4"
            id="message"
            placeholder="How can I help you?"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-white"
          />
        </div>

        <Motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50 text-white font-semibold"
        >
          Send Message
        </Motion.button>
      </form>
    </div>
  );
};

export default Contact;
