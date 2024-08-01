import instaIcon from "../assets/icons/instagram.png";
import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import twitterIcon from "../assets/icons/twitter.png";
import mailIcon from "../assets/icons/mail.png";
import locationPin from "../assets/icons/location.png";

export default function Footer() {
  return (
    <div className=" flex justify-center mt-5 border-t-2 border-t-zinc-800 p-5 pb-0 m-7 mb-0 md:m-12 lg:mx-20">
      <div className="w-fit">
        <div className="text-center font-bold mb-5 ">
          Let{"'"}s Get in Touch
        </div>
        <div>
          <ul className="flex justify-evenly">
            <li className=" cursor-pointer">
              <a href="https://www.linkedin.com/in/ayyanraj-c-5561a5222/">
                <img className="w-6" src={linkedinIcon} alt="LinkedIn" />
              </a>
            </li>
            <li className=" cursor-pointer">
              <a href="https://github.com/ayyan-cm">
                <img className="w-6" src={githubIcon} alt="GitHub" />
              </a>
            </li>
            <li>
              <img className="w-6" src={twitterIcon} alt="Twitter" />
            </li>
            <li className=" cursor-pointer">
              <a href="https://www.instagram.com/ayyanrajc/">
                <img className="w-6" src={instaIcon} alt="Instagram" />
              </a>
            </li>
            <li className=" cursor-pointer">
              <a href="mailto:cayyanraj@gmail.com">
                <img className="w-6" src={mailIcon} alt="Email" />
              </a>
            </li>
          </ul>
        </div>
        <div className=" font-thin mt-2">
          Looking forward to hearing from you ✨
        </div>
        <div className="text-xs flex justify-center mt-2">
          <img src={locationPin} className="w-3 h-3 invert" />
          <span>&nbsp;&nbsp;Coimbatore</span>
        </div>
      </div>
    </div>
  );
}
