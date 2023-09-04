import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const Content = ({ backgroundDark }: { backgroundDark: Boolean }) => {
  return (
    <section
      id="contents"
      className={` text-center content  mt-[0.5em] font-semibold  h-[100vh] md:mx-[1em] text-5xl ${
        backgroundDark ? "text-cyan-200" : "text-orange-400"
      } sm:text-5xl lg:text-8xl mx-[2em] mt-[1em] `}
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
      <div className="mt-[1em] allContactLinks text-5xl  flex justify-center h-[1em] h-full w-full">
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
    </section>
  );
};

export default Content;
