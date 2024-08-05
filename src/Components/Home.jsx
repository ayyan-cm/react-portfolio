import hero from "../assets/hero.png";
import { motion } from "framer-motion";

export default function Home() {
  const text = "Ayyanraj C";

  return (
    <div className="flex flex-wrap items-center overflow-hidden pt-20 lg:px-10">
      {/* Image Section */}
      <div className="w-full md:w-1/2 md:px-20">
        <motion.div
          className="flex justify-center px-20"
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={hero} alt="hero" className="rounded-full" />
        </motion.div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col w-full md:w-1/2">
        <div>
          <div className="flex justify-center md:justify-start">
            <div className="w-fit">
              {/* Name Heading */}
              <motion.h2
                className="text-2xl font-thin py-3 lg:mx-0 text-center lg:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {text}
              </motion.h2>
            </div>
          </div>

          {/* Description Text */}
          <motion.div
            className="mx-5 lg:mx-0"
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="font-thin text-sm lg:text-base">
              <span className="font-medium text-lg lg:text-2xl bg-gradient-to-br from-fuchsia-600 via-sky-300 to-fuchsia-500 bg-clip-text text-transparent">
                Full Stack Developer
              </span>{" "}
              with strong ideas on frontend technologies and focus on backend
              technologies. My commitment to continuous learning drives me to
              deliver high-quality, user-centric applications and motivates me
              to learn and adapt new technologies.
            </span>
          </motion.div>
        </div>

        {/* Buttons Section */}
        <motion.div
          className="flex justify-center md:justify-start text-sm lg:text-base my-3 mx-5 lg:mx-0"
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className="text-center mr-4"
            initial={{
              x: 100,
            }}
            animate={{
              x: 0,
            }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-2xl text-sm px-4 py-2 text-center me-2 mb-2">
              Resume
            </button>
          </motion.div>
          <div className="text-center">
            <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-2xl text-sm px-4 py-2 text-center me-2 mb-2">
              Contact
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
