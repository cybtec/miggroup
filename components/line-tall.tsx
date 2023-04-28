import React from "react";
import { motion, useScroll } from "framer-motion";
const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};
export default function LineTall({ size = 200, delay = 0 }) {
  const [positionY, setPositionY] = React.useState(0);
  const [positionX, setPositionX] = React.useState(0);
  const ref = React.useRef<any>(null);
  // const { scrollYProgress, scrollXProgress } = useScroll({
  //   target: ref,
  //   offset: ["end end", "start start"],
  // });
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={ref}>
      {delay && !isMobile ? (
        <motion.div
          initial={{ opacity: 0, scaleX: 0, originX: "0px" }}
          animate={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay }}
          style={{
            // height:
            //   typeof window !== "undefined" && window.innerWidth <= 1024
            //     ? scrollYProgress.get() * size
            //     : 5,
            height: 200,
            backgroundColor: "#fff",
            width: !isMobile ? 200 : 5,
            borderRadius: 10,
          }}
        ></motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scaleX: 0, originX: "0px" }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            // height:
            //   typeof window !== "undefined" && window.innerWidth <= 1024
            //     ? scrollYProgress.get() * size
            //     : 5,
            height: 150,
            backgroundColor: "#fff",
            // here change number 4 for width
            width: !isMobile ? 200 : 4,
            borderRadius: 10,
          }}
        ></motion.div>
      )}
    </div>
  );
}
