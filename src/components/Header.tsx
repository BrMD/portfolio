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
    <div className="flex fixed justify-between items-center w-[100vw]">
      <div className="my-4 mx-8">
        <img
          src={`${backgroundDark === true ? LogoWhite : LogoBlack}`}
          className="w-20"
        />
      </div>
      <div className="flex m-6">
        <div className="mx-4">
          <button onClick={() => onChangeBackground()} className="mode-tog">
            {backgroundDark ? (
              <FontAwesomeIcon
                className={"text-[#ffdd00] h-[1.5em] w-[1.5em]"}
                icon={icon({ name: "sun", style: "solid" })}
              />
            ) : (
              <FontAwesomeIcon
                className={"text-[#012460] h-[1.5em] w-[1.5em]"}
                icon={icon({ name: "moon", style: "solid" })}
              />
            )}
          </button>
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
