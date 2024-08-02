import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className=" m-10 flex justify-between items-baseline">
      <motion.div
        className="text-3xl font-thin md:text-5xl"
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{ scale: 1, x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome,
      </motion.div>
    </div>
  );
}
