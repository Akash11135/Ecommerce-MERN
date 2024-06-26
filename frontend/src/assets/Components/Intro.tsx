import { motion } from "framer-motion";

import { AuroraBackground } from "../../components/ui/aurora-background.tsx";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <AuroraBackground className="bg-black">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative  flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold text-white text-center">
          Just Shop.
        </div>
        <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
          and repeat.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          <Link to={"/login"}>Debug now</Link>
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
