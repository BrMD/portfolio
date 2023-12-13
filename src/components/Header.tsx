import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import LogoBlack from "../mdlogoBlack.png";
import LogoWhite from "../mdlogoWhite.png";
import usaflag from "../icons/usaflag.png";
import brazilflag from "../icons/brazilflag.png";

const Header = ({
  backgroundDark,
  onChangeBackground,
  language,
  onChangeLanguage,
}: {
  backgroundDark: Boolean;
  onChangeBackground: Function;
  language: string;
  onChangeLanguage: Function;
}) => {
  return (
    <div className="flex header fixed justify-between items-center w-[100vw]">
      <div className="my-4 mx-8">
        <img
          alt={`${backgroundDark ? "LogoWhite" : "LogoBlack"}`}
          src={`${backgroundDark ? LogoWhite : LogoBlack}`}
          className="w-10  sm:w-20"
        />
      </div>
      <div className="flex m-2  sm:m-6">
        <button onClick={() => onChangeLanguage()}>
          <div className="text-md font-bold m-0  sm:text-lg mx-4 ">
            {
              <img
                alt="flag"
                src={`${language === "PT" ? usaflag : brazilflag}`}
                className="w-4 sm:w-6"
              />
            }
          </div>
        </button>

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
            {language === "PT" ? "Inicio" : "Home"}
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
            {language === "PT" ? "Projetos" : "Projects"}
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
