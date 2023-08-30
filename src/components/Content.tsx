import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const Content = ({ backgroundDark }: { backgroundDark: Boolean }) => {
  return (
    <div
      className={`text-center text-5xl mx-[1em] mt-[0.5em] texto justify-center font-semibold flex flex-col h-[95vh] ${
        backgroundDark ? "text-cyan-200" : "text-orange-400"
      } sm:text-xl md:text-8xl mx-[2em] `}
    >
      <div>
        Olá sou Matheus Dorigon, tenho 23 anos e sou um Desenvolvedor <br />
        <span
          data-text="Frontend"
          className={`${
            backgroundDark ? "specialWordDark" : "specialWordWhite"
          }`}
        >
          Frontend
        </span>
      </div>
      <div className="mt-[1em] text-5xl flex justify-center h-[1em]">
        <div className="m-4 mx-6 contactLinks">
          <a href="https://wa.me/5543998011390" target="_blank">
            <FontAwesomeIcon
              className={"text-[#25D366] icon"}
              icon={icon({ name: "whatsapp", style: "brands" })}
            />
          </a>
        </div>
        <div className="m-4 mx-6 contactLinks">
          <a
            href="https://www.linkedin.com/in/matheus-dorigon-685599167"
            target="_blank"
          >
            <FontAwesomeIcon
              className={"text-[#0077B5] icon"}
              icon={icon({ name: "linkedin", style: "brands" })}
            />
          </a>
        </div>
        <div className="m-4 mx-6">
          <a href="mailto:dorigon.matheus8@gmail.com" target="_blank">
            <FontAwesomeIcon
              className={`icon ${backgroundDark ? "text-white" : "text-black"}`}
              icon={icon({ name: "envelope", style: "regular" })}
            />
          </a>
        </div>
        <div className="m-4 mx-6">
          <a href="https://github.com/BrMD" target="_blank">
            <FontAwesomeIcon
              className={`icon text-[#1E3050]`}
              icon={icon({ name: "github", style: "brands" })}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
