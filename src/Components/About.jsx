import { EDUCATION } from "./hero_data";

export default function About() {
  return (
    <div className="text-center mt-5 border-t-2 border-t-zinc-800 p-5 m-7 lg:m-20">
      <h2 className="text-2xl lg:text-3xl">About</h2>
      <div className="mt-5">
        <span className="lg:p-20">
          Final-year Computer Science and Engineering student at KCT with a
          solid foundation in software engineering. Passionate front-end
          developer with user interactive and dynamic interface developing
          skills. Continuously improving backend skills. Highly adaptable,
          collaborative, and possesses strong problem-solving abilities.
        </span>
      </div>
      <div>
        <h3 className="text-l lg:text-xl mt-5 mb-2">Education</h3>
        <div>
          {EDUCATION.map((education, index) => (
            <div key={index} className="flex grid-col-2 space-x-5 mb-10">
              <div className="w-1/2 text-end lg:mr-20">
                <p>{education.year}</p>
              </div>
              <div className="w-1/2 text-start">
                <p>{education.Received}</p>
                <p>{education.score}</p>
                <p>{education.place},</p>
                <p>{education.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
