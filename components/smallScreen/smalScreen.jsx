import React, { useState, useEffect } from "react";
import HeaderLogo from "../header-logo";
import Mig from "../mig";
import Imoode from "../imoode";
import Echoes from "../echoes";
import GostavEleis from "../gustav-gleis";
import GustavKahn from "../gustav-kahn";
import Stivai from "../stivai";
import Giardo from "../giardo";
import TamzAmSee from "../tamz-am-see";
import Vierd from "../vierd";
import SummerGarta from "../summerGarta";
import LineTall from "../line-tall";
const SmalScreen = () => {
  const [inView, setInView] = useState(0);
  const [logo, setLogo] = useState(false);
  const [logo1, setLogo1] = useState(false);
  const [logo2, setLogo2] = useState(false);
  const [logo3, setLogo3] = useState(false);
  const [logo4, setLogo4] = useState(false);
  const [logo5, setLogo5] = useState(false);
  const [logo6, setLogo6] = useState(false);
  const [logo7, setLogo7] = useState(false);
  const delays = [2.3, 2.9, 3.5, 4.1, 5.7, 6.3, 6.9, 7.5];

  useEffect(() => {
    if (inView == 0) {
      let count = 0;
      if (logo) count++;
      if (logo1) count++;
      if (logo2) count++;
      if (logo3) count++;
      if (logo4) count++;
      if (logo5) count++;
      if (logo6) count++;
      if (logo7) count++;
      setInView(count);
    }
  }, [logo, logo1, logo2, logo3, logo4, logo5, logo6, logo7]);
  return (
    <>
      <HeaderLogo />
      <Mig />
      <LineTall
        // style={{ paddingLeft: "42px" }}
        delay={inView >= 0 ? delays[0] : 0}
      />
      <Imoode setLogo={setLogo} inView={inView} />
      <LineTall delay={inView >= 1 ? delays[0.5] : 0} />
      <Echoes setLogo={setLogo} inView={inView} />
      <LineTall delay={inView >= 2 ? delays[1] : 0} />
      <GostavEleis setLogo={setLogo1} inView={inView} />
      <LineTall delay={inView >= 3 ? delays[1.5] : 0} />
      <GustavKahn setLogo={setLogo2} inView={inView} />
      <LineTall delay={inView >= 4 ? delays[2] : 0} />
      <Stivai setLogo={setLogo3} inView={inView} />
      <LineTall delay={inView >= 5 ? delays[2.5] : 0} />
      <Giardo setLogo={setLogo4} inView={inView} />
      <LineTall delay={inView >= 6 ? delays[3] : 0} />
      <TamzAmSee setLogo={setLogo5} inView={inView} />
      <LineTall delay={inView >= 7 ? delays[3.5] : 0} />
      <Vierd setLogo={setLogo6} inView={inView} />
      <LineTall delay={inView >= 7 ? delays[3.5] : 0} />
      <SummerGarta setLogo={setLogo4} inView={inView} />
    </>
  );
};

export default SmalScreen;
