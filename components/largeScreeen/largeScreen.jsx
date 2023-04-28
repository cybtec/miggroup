import React from "react";
import Progressbar from "../Progressbar";
import { logosData } from "../../constant/logos";
import HeaderLogoLargeScreen from "./headerLogoLargeScreen";

const LargeScreen = () => {
  const [turn, setTurn] = React.useState(-1);
  const [isSkipPrograss, setIsSkipPrograss] = React.useState(false);

  return (
    <>
      <HeaderLogoLargeScreen
        setTurn={setTurn}
        setIsSkipPrograss={setIsSkipPrograss}
      />
      <Progressbar
        logo={logosData.mig}
        isTurn={turn == 0}
        setTurn={setTurn}
        skipPrograss={isSkipPrograss}
      />
      <Progressbar
        logo={logosData.imoode}
        isTurn={turn == 1}
        setTurn={setTurn}
        isLogoDown={true}
      />
      <Progressbar
        logo={logosData.echoes}
        isTurn={turn == 2}
        setTurn={setTurn}
      />
      <Progressbar
        logo={logosData.gustavGleis}
        isTurn={turn == 3}
        setTurn={setTurn}
        isLogoDown={true}
      />
      <Progressbar
        logo={logosData.gustavKahn}
        isTurn={turn == 4}
        setTurn={setTurn}
      />{" "}
      <Progressbar
        logo={logosData.stivai}
        isTurn={turn == 5}
        setTurn={setTurn}
        isLogoDown={true}
      />
      <Progressbar
        logo={logosData.giardo}
        isTurn={turn == 6}
        setTurn={setTurn}
      />
      <Progressbar
        logo={logosData.tamzAmSee}
        isTurn={turn == 7}
        setTurn={setTurn}
        isLogoDown={true}
      />
      <Progressbar
        logo={logosData.vierd}
        isTurn={turn == 8}
        setTurn={setTurn}
      />{" "}
      <Progressbar
        logo={logosData.summerGarta}
        isTurn={turn == 9}
        setTurn={setTurn}
        isLogoDown={true}
      />{" "}
    </>
  );
};

export default LargeScreen;
