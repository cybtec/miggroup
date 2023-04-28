import React from "react";
import { motion } from "framer-motion";

export default function LogoLargeScreen(props: any) {
  const Content = () => props.svg;
  return (
    <a href={props.link}>
      <div>
        <motion.div
          className=" w-20   flex justify-center flex-col items-center gap-5 "
          initial={{ opacity: 0, scale: 0.5 }}
          viewport={{ once: true }}
          animate={props.controler}
        >
          <Content />
        </motion.div>
      </div>
    </a>
  );
}
