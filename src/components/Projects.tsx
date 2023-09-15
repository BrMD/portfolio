import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import StyledComponents from "../icons/styledcomponets.png";
import Nextjs from "../icons/next96.svg";
import Reactjs from "../icons/react96.svg";
import "./project.css";

const Projects = ({
  backgroundDark,
  language,
}: {
  backgroundDark: Boolean;
  language: string;
}) => {
  return (
    <section id="projetos">
      <div className="w-[100vw] h-[95vh]">
        <div className="w-full h-full flex justify-center items-center">
          <div className="myCard">
            <div className="innerCard">
              <div className="frontSide px-1">
                <p className="title">CSGO - TRACKER</p>

                <p>
                  {language === "PT"
                    ? "Projeto de estudo focado no aprendizado de Next.js"
                    : "Study project focused on learn how to work with Next.js"}
                </p>
              </div>
              <div className="backSide">
                <p className="title"></p>
                <div className="flex flex-col items-center">
                  <span>
                    {language === "PT"
                      ? "Tecnologias usadas"
                      : "Tecnologies used"}
                  </span>
                  <div className="flex justify-center items-center m-0 mb-4">
                    <img src={StyledComponents} width={"30px"} />
                    <img src={Nextjs} width={"35px"} />
                    <img src={Reactjs} width={"35px"} />
                  </div>
                  <span>
                    {language === "PT"
                      ? "Repositorio no github"
                      : "Github Repository"}
                  </span>
                  <a
                    href="https://github.com/BrMD/csgo-tracker"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className={`icon-project text-[#1E3050]`}
                      icon={icon({ name: "github", style: "brands" })}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
