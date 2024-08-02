import { useState } from "react";
import { useDrag } from "@use-gesture/react";
import { PROJECTS } from "./hero_data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + PROJECTS.length) % PROJECTS.length
    );
  };

  const bind = useDrag(({ swipe: [swipeX] }) => {
    if (swipeX === 1) {
      nextProject();
    } else if (swipeX === -1) {
      prevProject();
    }
  });

  const { ref: carouselRef, inView: carouselInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const centerStyle =
    "relative flex flex-col items-center justify-center w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-lg my-5 text-white hover:scale-110 transition-transform duration-300 ease-in-out";
  const sideStyle =
    "flex flex-col items-center justify-center w-20 h-40 md:w-42 md:h-52 lg:w-60 lg:h-60 rounded-lg my-5 scale-75 hover:cursor-pointer";

  return (
    <div
      className="flex flex-col text-center mt-5 border-t-2 border-t-zinc-800 p-5 m-7 md:m-12 lg:mx-20"
      ref={carouselRef}
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        animate={carouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl lg:text-3xl">Projects</h2>
      </motion.div>

      {/* Project Carousel */}
      <div {...bind()} className="touch-none">
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={
              carouselInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button onClick={prevProject} aria-label="Previous Project">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </motion.div>
          <motion.div
            className={sideStyle}
            style={{
              backgroundImage: `url(${
                PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length]
                  .thumbnail
              })`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            onClick={prevProject}
            initial={{ x: 100, opacity: 0, scale: 1 }}
            animate={
              carouselInView
                ? { x: 0, opacity: 1, scale: 0.75 }
                : { x: 100, opacity: 0, scale: 1 }
            }
            transition={{ duration: 1, delay: 1 }}
          ></motion.div>
          <motion.div
            className={centerStyle}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={
              carouselInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.75 }
            }
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div
              className="absolute inset-0 rounded-lg opacity-25"
              style={{
                backgroundImage: `url(${PROJECTS[currentIndex].thumbnail})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <h2 className="relative z-10 text-2xl font-bold">
              {PROJECTS[currentIndex].name}
            </h2>
            <p className="relative z-10 font-normal">
              {PROJECTS[currentIndex].used.join(", ")}
            </p>
            <a
              href={PROJECTS[currentIndex].github}
              className="relative z-10 font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              GitHub
            </a>
            <a
              href={PROJECTS[currentIndex].link}
              className="relative z-10 font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Link
            </a>
          </motion.div>
          <motion.div
            className={sideStyle}
            style={{
              backgroundImage: `url(${
                PROJECTS[(currentIndex + 1) % PROJECTS.length].thumbnail
              })`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            onClick={nextProject}
            initial={{ x: -100, opacity: 0, scale: 1 }}
            animate={
              carouselInView
                ? { x: 0, opacity: 1, scale: 0.75 }
                : { x: -100, opacity: 0, scale: 1 }
            }
            transition={{ duration: 1, delay: 1 }}
          ></motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={
              carouselInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button onClick={nextProject} aria-label="Next Project">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </motion.div>
        </div>
        {/* Project Carousel Pointer */}
        <div>
          <div className="flex justify-center mt-4">
            {PROJECTS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`${
                  index === currentIndex
                    ? "bg-white -scale-x-150 w-4 translate-x-0 ease duration-300"
                    : "bg-gray-500"
                } w-2 h-2 rounded-full mx-2 focus:outline-none`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
