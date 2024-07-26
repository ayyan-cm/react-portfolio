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
          <h2 className="text-2xl font-thin m-4 text-center lg:text-5xl lg:text-start lg:mx-0">
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
        <div className="flex flex-wrap justify-start my-5 ">
          <div className="border rounded-2xl px-3 py-1 text-center m-2">
            Resume
          </div>
          <div className="border rounded-2xl px-3 py-1 text-center m-2">
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}
