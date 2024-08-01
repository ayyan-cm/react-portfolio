import hero from "../assets/hero_2.png";

export default function Home() {
  return (
    <div className="flex flex-wrap items-center overflow-hidden lg:px-10">
      <div className=" w-full md:w-1/2 md:px-20">
        <div className="flex justify-center">
          <img src={hero} alt="hero" className=" overflow-auto rounded-full " />
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/2">
        <div>
          <h2 className="text-2xl font-thin m-5 lg:mx-0 text-center lg:text-5xl md:text-start">
            Ayyanraj C
          </h2>
          <div className="mx-5 lg:mx-0">
            <span className="font-thin text-sm lg:text-base">
              <span className=" text-lg lg:text-2xl">Full Stack Developer</span>{" "}
              with strong ideas on frontend technologies and focus on backend
              technologies. My commitment to continuous learning drives me to
              deliver high-quality, user-centric applications and motivates to
              learn and adapt new technologies.
            </span>
          </div>
        </div>
        <div className="flex justify-center md:justify-start text-sm lg:text-base my-3 mx-5 lg:mx-0">
          <div className="text-center  mr-4">
            <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-2xl text-sm px-4 py-2 text-center me-2 mb-2">
              Resume
            </button>
          </div>
          <div className="text-center">
            <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-2xl text-sm px-4 py-2 text-center me-2 mb-2">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
