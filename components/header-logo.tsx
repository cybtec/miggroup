import React from "react";
import { motion } from "framer-motion";
import groovyWalkAnimation from "../public/Loading_02.json";
import Lottie from "lottie-react";

export default function HeaderLogo() {
  return (
    <a>
      <div className="w-96  flex justify-center relative mb-20">
        <motion.div
          initial={{ opacity: 0, x: 165, y: 250 }}
          animate={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div
            className={
              "flex flex-col xl:-rotate-90 justify-center items-center absolute z-[999] "
            }
          >
            <div className="w-10 h-10 rounded-full shadow-light bg-white" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 185, y: 270 }}
          animate={{ opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <div
            className={
              "flex flex-col xl:-rotate-90 justify-center items-center absolute z-[999] "
            }
          >
            <div className="w-1 h-52 bg-gray-100 rounded-full -m-1" />
          </div>
        </motion.div>
        <Lottie
          className="bg-transparent w-80 mt-8 mr-24 sm:mb-40 sm:w-[600px] stroke-white fill-white invert"
          animationData={groovyWalkAnimation}
          loop={false}
        />
      </div>
    </a>
  );
}
