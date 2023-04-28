import type { NextPage } from "next";
import Head from "next/head";
import SmalScreen from "../components/smallScreen/smalScreen";
import LargeScreen from "../components/largeScreeen/largeScreen";
import { useState, useEffect } from "react";
const Home: NextPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
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
    //** Autor cybtec */
    <>
      <Head>
        <title> miggroup GmbH</title>
        <meta
          name="description"
          content=" miggroup gmbh | toggenburgerstrasse 90 | 9500 wil | 071 910 10 70
              | contact@miggroup.ch"
        />
        <link
          rel="icon"
          href="https://www.migagentur.ch/app/themes/miggroup/css/img/favicon.svg"
        />
      </Head>
      <div className="body">
        <div className="logos">
          {isMobile ? <SmalScreen /> : <LargeScreen />}{" "}
          <div style={{ width: "150px" }}></div>
          <div className="flex justify-center items-center px-10 w-full ">
            <h1 className="font-thin text-xs md:text-2xl text-base text-[gray] text-center footer w-full">
              <span className=" text-white ">
                miggroup gmbh | toggenburgerstrasse 90 | 9500 wil | 071 910 10
                70 |{" "}
                <a href="mailto:contact@miggroup.ch">contact@miggroup.ch</a>
              </span>
              <br></br>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
