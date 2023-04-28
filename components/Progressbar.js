import React, { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import LogoLargeScreen from "./largeScreeen/logoLargeScreen";

export default function Progressbar({
  logo,
  setTurn,
  isTurn,
  isLogoDown = false,
  skipPrograss = false,
}) {
  const [filled, setFilled] = useState(0);
  const isRunning = isTurn;
  const [isFinish, setIsFinish] = useState(false);
  const constolProgressBar = useAnimationControls();
  const constolLogo = useAnimationControls();
  const [isBurning, setIsBurning] = useState(true);
  useEffect(() => {
    skipPrograss && setFilled(95);
  }, [skipPrograss]);

  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 5)), 20);
      if (filled == 95) {
        constolProgressBar.start({
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
      // setInterval(() => {
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
            setIsFinish(true);
            setInterval(() => {
              setIsBurning(false);
            }, 200);
          });
      }
      //
    }
  }, [filled, isRunning]);
  useEffect(() => {
    isFinish && setTurn((prev) => prev + 1);
  }, [isFinish]);
  useEffect(() => {
    !isBurning &&
      constolProgressBar.start({
        boxShadow: [
          "4px 2px 100px 28px rgb(255 255 255 / 84%)",
          "4px 2px 80px 21px rgb(255 255 255 / 84%)",
          "4px 2px 60px 15px rgb(255 255 255 / 84%)",
          "none",
        ],
        transition: {
          duration: 0.8,
          default: { ease: "linear" },
        },
      });
  }, [isBurning]);

  return (
    <div style={{ position: "relative" }} className="moveToleft">
      <motion.div
        className="progressbar "
        initial={{ opacity: 0, scaleX: 0, originX: "0px" }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div
          style={{
            height: "100%",
            width: `${filled}%`,
            backgroundColor: "white",
            transition: "width 0.2s",
          }}
        ></div>
      </motion.div>
      <div className={"progressCircle 	"}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={constolProgressBar}
          className={`${isFinish ? " bg-white " : "bg-[#a29d9d] "} ${
            isBurning ? "shadow" : "shadow"
          } w-6 h-6 rounded-full border-transparent `}
          //style={{ transition: "shadow 1s linear" }}
        />
      </div>
      <div className={isLogoDown ? "progressLogo 	logoDown" : "progressLogo"}>
        {" "}
        <LogoLargeScreen
          svg={logo.svg}
          link={logo.link}
          controler={constolLogo}
        />
      </div>
    </div>
  );
}
