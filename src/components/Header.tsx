import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

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
    <div className="flex header fixed justify-between items-center w-[100vw]">
      <div className="my-4 mx-8">
        <img
          src={`${backgroundDark === true ? LogoWhite : LogoBlack}`}
          className="w-10  sm:w-20"
        />
      </div>
      <div className="flex m-2  sm:m-6">
        <div className="mx-1 ">
          <button onClick={() => onChangeBackground()} className="mode-tog">
            {backgroundDark ? (
              <FontAwesomeIcon
                className={
                  "h-[1em] w-[1em] text-[#ffdd00] sm:h-[1.5em] w-[1.5em]"
                }
                icon={icon({ name: "sun", style: "solid" })}
              />
            ) : (
              <FontAwesomeIcon
                className={
                  "h-[1em] w-[1em] text-[#1439b3] sm:h-[1.5em] w-[1.5em]"
                }
                icon={icon({ name: "moon", style: "solid" })}
              />
            )}
          </button>
        </div>
        <a href="#root">
          <div
            className={`text-md mx-2 font-bold  sm:text-lg mx-4 ${
              backgroundDark === true
                ? "buttonGradientBluePurple"
                : "buttonGradientOrangePink"
            }`}
          >
            Inicio
          </div>
        </a>
        <a href="#stack">
          <div
            className={`text-md mx-2 font-bold  sm:text-lg mx-4 ${
              backgroundDark === true
                ? "buttonGradientBluePurple"
                : "buttonGradientOrangePink"
            }`}
          >
            Stack
          </div>
        </a>
        <a href="#projetos">
          <div
            className={`text-md mx-2 font-bold  sm:text-lg mx-4 ${
              backgroundDark === true
                ? "buttonGradientBluePurple"
                : "buttonGradientOrangePink"
            }`}
          >
            Projetos
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
