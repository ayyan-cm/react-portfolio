import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import instaIcon from "../assets/icons/instagram.png";
import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import mailIcon from "../assets/icons/mail.png";
import locationPin from "../assets/icons/location.png";

export default function Footer() {
  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="flex justify-center mt-5 border-t-2 border-t-zinc-800 p-5 pb-0 m-7 mb-0 md:m-12 lg:mx-20"
      ref={footerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-fit">
        <motion.div
          className="text-center font-bold mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let{"'"}s Get in Touch
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={footerInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ul className="flex justify-evenly">
            <motion.li
              className="cursor-pointer"
              whileHover={{
                scale: 1.2,
                rotate: 10,
                transition: { duration: 0.3 },
              }}
              initial={{ x: 50 }}
              animate={footerInView ? { x: 0 } : { x: 50 }}
              transition={{ duration: 1 }}
            >
              <a href="https://www.linkedin.com/in/ayyanraj-c-5561a5222/">
                <img className="w-6" src={linkedinIcon} alt="LinkedIn" />
              </a>
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{
                scale: 1.2,
                rotate: 10,
                transition: { duration: 0.3 },
              }}
              initial={{ x: 25 }}
              animate={footerInView ? { x: 0 } : { x: 25 }}
              transition={{ duration: 1 }}
            >
              <a href="https://github.com/ayyan-cm">
                <img className="w-6" src={githubIcon} alt="GitHub" />
              </a>
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{
                scale: 1.2,
                rotate: 10,
                transition: { duration: 0.3 },
              }}
              initial={{ x: -25 }}
              animate={footerInView ? { x: 0 } : { x: -25 }}
              transition={{ duration: 1 }}
            >
              <a href="https://www.instagram.com/ayyanrajc/">
                <img className="w-6" src={instaIcon} alt="Instagram" />
              </a>
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{
                scale: 1.2,
                rotate: 10,
                transition: { duration: 0.3 },
              }}
              initial={{ x: -50 }}
              animate={footerInView ? { x: 0 } : { x: -50 }}
              transition={{ duration: 1 }}
            >
              <a href="mailto:cayyanraj@gmail.com">
                <img className="w-6" src={mailIcon} alt="Email" />
              </a>
            </motion.li>
          </ul>
        </motion.div>
        <motion.div
          className="font-thin mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Looking forward to hearing from you ✨
        </motion.div>
        <motion.div
          className="text-xs flex justify-center mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <img src={locationPin} className="w-3 h-3 invert" />
          <span>&nbsp;&nbsp;Coimbatore</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
