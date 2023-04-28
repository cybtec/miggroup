import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TamzAmSee(props: any) {
  const { ref, inView } = useInView();
  React.useEffect(() => {
    props.setLogo(inView);
  }, [inView]);
  const Content = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.28 27.32"
      fill="#fff"
      className="w-36"
    >
      <g id="logos">
        <g>
          <polygon points="7.25 12.33 8.52 12.25 7.88 6.73 7.25 12.33" />
          <polygon points="2.94 22.86 3.76 22.8 3.35 18.84 2.94 22.86" />
          <path d="M21.25,0L0,5.14V27.32s21.27-2.34,21.27-2.34l-.03-24.97Zm-5.57,14.01l2.51-9.43-2.39,.41v-1.8l3.75-.76v1.87l-2.51,9.63,2.51-.07v1.9h-3.87v-1.76ZM1.38,6.1l4.09-.82v1.5l-1.38,.24V15.77h-1.32V7.24l-1.38,.24v-1.38Zm2.64,19.17l-.15-1.41-1.04,.09-.15,1.46-.78,.08,.86-8.06h1.24s.86,7.74,.86,7.74l-.85,.09Zm4.98-.54l-.8,.09v-5.3l-.58,5.36-.8,.09-.63-5.31v5.38l-.74,.08v-7.68h1.17s.62,5.32,.62,5.32l.58-5.32h1.17s0,7.3,0,7.3Zm-.06-8.96l-.23-2.02-1.62,.06-.23,1.96h-1.21l1.35-10.8,1.94-.39,1.35,11.19h-1.33Zm3.38,8.68c-.83,.09-1.26-.51-1.26-1.64v-.43l.8-.06v.5c0,.5,.17,.66,.44,.64,.27-.03,.44-.22,.44-.71,0-1.42-1.65-1.59-1.65-3.61,0-1.13,.42-1.78,1.24-1.78s1.24,.62,1.24,1.71v.21l-.8,.02v-.29c0-.49-.15-.68-.42-.67-.27,0-.42,.2-.42,.7,0,1.44,1.65,1.62,1.65,3.57,0,1.09-.43,1.76-1.26,1.85Zm-.31-17.24V15.77h-1.19V4.2l1.66-.33,1.36,7.01V3.59l1.18-.24V15.77h-1.36l-1.65-8.55Zm4.55,11.13l-1.46,.02v1.85l1.16-.05v.93l-1.16,.07v1.95l1.46-.14v.93l-2.3,.25v-6.74h2.3s0,.92,0,.92Zm3.02-.05l-1.46,.02v1.76l1.16-.05v.89l-1.16,.07v1.85l1.46-.14v.88l-2.3,.25v-6.42h2.3s0,.88,0,.88Z" />
        </g>
      </g>
    </svg>
  );
  return (
    <a href="https://tanzamsee.ch">
      <div ref={ref}>
        {props.inView >= 7 ? (
          <motion.div
            className="w-36 flex justify-center flex-col items-center gap-5 "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 8.2 }}
          >
            <Content />
          </motion.div>
        ) : (
          <motion.div
            className="w-36 flex justify-center flex-col items-center gap-5 "
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Content />
          </motion.div>
        )}{" "}
      </div>
    </a>
  );
}
