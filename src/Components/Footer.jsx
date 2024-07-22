import instaIcon from "../assets/instagram.png";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.png";
import mailIcon from "../assets/mail.png";

export default function Footer() {
  return (
    <div className=" right-10 bottom-5 ">
      <div>
        <div>
          <ul className="flex justify-evenly">
            <li>
              <img className="w-6" src={linkedinIcon} alt="LinkedIn" />
            </li>
            <li>
              <img className="w-6" src={githubIcon} alt="GitHub" />
            </li>
            <li>
              <img className="w-6" src={twitterIcon} alt="Twitter" />
            </li>
            <li>
              <img className="w-6" src={instaIcon} alt="Instagram" />
            </li>
            <li>
              <img className="w-6" src={mailIcon} alt="Email" />
            </li>
          </ul>
        </div>
        <div className=" font-thin mt-2">
          Looking forward to hearing from you ✨
        </div>
      </div>
    </div>
  );
}
