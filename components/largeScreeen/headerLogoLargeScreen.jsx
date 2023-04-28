import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import groovyWalkAnimation from "../../public/Loading_02.json";
import Lottie from "lottie-react";

export default function HeaderLogoLargeScreen({ setTurn, setIsSkipPrograss }) {
  const mon = {
    class: " bottom-[20rem] sm:top-42  left-0 sm:left-[20rem]",
    x: 0,
  };
  const [filled, setFilled] = useState(0);
  const line = {
    class: "top-60 sm:top-[26.07rem]  left-[2rem] sm:left-[21rem]",
    x: 200,
  };
  const constolLogo = useAnimationControls();
  const [isRunning, setIsRunning] = useState(true);
  const constolProgressBar = useAnimationControls();
  const constolMon = useAnimationControls();

  useEffect(() => {
    constolLogo
      .start({
        opacity: 1,
        scale: 1,

        transition: {
          duration: 1,
          default: { ease: "linear" },
        },
      })
      .then((e) => {
        //
        setIsRunning(true);
      });
  }, []);
  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 5)), 100);
      if (filled == 95) {
        constolMon.start({
          opacity: 1,
          scale: 1,
          boxShadow: "4px 2px 100px 28px rgb(255 255 255 / 84%)",
          transition: {
            duration: 1,
            default: { ease: "linear" },
          },
        });
      }
    } else {
      if (filled >= 100) {
        constolLogo
          .start({
            opacity: 1,
            scale: 1,

            transition: {
              duration: 1,
              default: { ease: "linear" },
            },
          })
          .then((e) => {
            constolProgressBar.start({ opacity: 1, scaleX: 2.3 }).then((e) => {
              setTurn((prev) => prev + 1);
              setIsSkipPrograss(true);
            });
          });
      }
    }
  }, [filled, isRunning]);
  return (
    <a>
      <div
        className="w-96 md:w-[600px] flex justify-center relative mb-20 scaleDown"
        style={{ position: "relative", marginRight: "-65px" }}
      >
        <motion.div
          initial={{ opacity: 0, x: mon.x, y: 0 }}
          animate={constolLogo}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div
            className={
              "flex flex-col sm:-rotate-90 justify-center items-center absolute z-[999] " +
              mon.class
            }
          >
            <div className="w-10 h-10 rounded-full shadow-light bg-white" />
          </div>
        </motion.div>
        <div
          className={
            "rotate-0 justify-center items-center absolute z-[999] " +
            line.class
          }
        >
          <motion.div
            className="progressbar fixWidth"
            initial={{ opacity: 0, scaleX: 0, originX: "0px" }}
            animate={constolProgressBar}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                height: "100%",
                width: `${filled}%`,
                backgroundColor: "white",
                transition: "width 0.5s",
              }}
            ></div>
          </motion.div>
        </div>
        <Lottie
          className="bg-transparent w-50 md:80 mr-24 sm:mb-40 sm:w-[600px] stroke-white fill-white invert"
          animationData={groovyWalkAnimation}
          loop={false}
        />
      </div>
    </a>
  );
}
