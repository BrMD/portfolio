import React from "react";
import LogoBlack from "../mdlogoBlack.png";
import LogoWhite from "../mdlogoWhite.png";

const Header = ({
  backgroundDark,
  onChangeBackground,
}: {
  backgroundDark: Boolean;
  onChangeBackground: Function;
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="my-4 mx-8">
        <img
          src={`${backgroundDark === true ? LogoWhite : LogoBlack}`}
          className="w-20"
        />
      </div>
      <div className="flex m-6">
        <div>
          <button onClick={() => onChangeBackground()}>DarkMode</button>
        </div>
        <div
          className={`mx-4 font-bold text-lg ${
            backgroundDark === true
              ? "buttonGradientBluePurple"
              : "buttonGradientOrangePink"
          }`}
        >
          Inicio
        </div>
        <div
          className={`mx-4 font-bold text-lg ${
            backgroundDark === true
              ? "buttonGradientBluePurple"
              : "buttonGradientOrangePink"
          }`}
        >
          Stack
        </div>
        <div
          className={`mx-4 font-bold text-lg ${
            backgroundDark === true
              ? "buttonGradientBluePurple"
              : "buttonGradientOrangePink"
          }`}
        >
          Projetos
        </div>
      </div>
    </div>
  );
};

export default Header;
