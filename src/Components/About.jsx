import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EDUCATION } from "./hero_data";

export default function About() {
  // Hook to track if the element is in view
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: educationRef, inView: educationInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="text-center mt-5 border-t-2 border-t-zinc-800 p-5 pb-0 m-7 mb-0 md:m-12 lg:mx-20">
      {/* About Section Header */}
      <motion.h2
        className="text-2xl lg:text-3xl"
        ref={aboutRef}
        initial={{ opacity: 0, y: -20 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h2>

      {/* About Section Content */}
      <motion.div
        className="mt-5"
        ref={aboutRef}
        initial={{ opacity: 0, y: 20 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span className="lg:p-20">
          Final-year Computer Science and Engineering student at KCT with a
          solid foundation in software engineering. Passionate front-end
          developer with user interactive and dynamic interface developing
          skills. Continuously improving backend skills. Highly adaptable,
          collaborative, and possesses strong problem-solving abilities.
        </span>
      </motion.div>

      {/* Education Section */}
      <motion.div
        ref={educationRef}
        initial={{ opacity: 0, y: 20 }}
        animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className="text-l lg:text-xl mt-5 mb-2">Education</h3>
        <div>
          {EDUCATION.map((education, index) => (
            <motion.div
              key={index}
              className="flex grid-col-2 space-x-5 mb-10"
              initial={{ opacity: 0, x: -20 }}
              animate={
                educationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-1/2 text-end lg:mr-20">
                <p>{education.year}</p>
              </div>
              <div className="w-1/2 text-start">
                <p>{education.Received}</p>
                <p>{education.score}</p>
                <p>{education.place},</p>
                <p>{education.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
