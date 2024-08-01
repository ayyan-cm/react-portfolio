import { useState } from "react";
import { useDrag } from "@use-gesture/react";
import { PROJECTS } from "./hero_data";

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
      console.log("1");
      nextProject();
    } else if (swipeX === -1) {
      prevProject();
    }
  });

  const centerStyle =
    "relative flex flex-col items-center justify-center w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-lg my-5  text-white hover:scale-110 transition-transform duration-300 ease-in-out";
  const sideStyle =
    "flex flex-col items-center justify-center w-20 h-40 md:w-42 md:h-52 lg:w-60 lg:h-60 rounded-lg my-5 scale-75 ";

  return (
    <div className="flex flex-col text-center mt-5 border-t-2 border-t-zinc-800 p-5 m-7 md:m-12 lg:mx-20">
      <div>
        <h2 className="text-2xl lg:text-3xl">Projects</h2>
      </div>

      {/* Project Carousel */}
      <div {...bind()} className="flex justify-center items-center touch-none">
        <div className="hidden md:block">
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
        </div>
        <div
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
        ></div>
        <div className={centerStyle}>
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
        </div>
        <div
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
        ></div>
        <div className="hidden md:block">
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
        </div>
      </div>
    </div>
  );
}
