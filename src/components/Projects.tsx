import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import StyledComponents from "../icons/styledcomponets.png";
import Nextjs from "../icons/next96.svg";
import Reactjs from "../icons/react96.svg";
import "./project.css";

const Projects = ({ backgroundDark }: { backgroundDark: Boolean }) => {
  return (
    <section id="projetos">
      <div className="w-[100vw] h-[95vh]">
        <div className="w-full h-full flex justify-center items-center">
          <div className="myCard">
            <div className="innerCard">
              <div className="frontSide px-1">
                <p className="title">CSGO - TRACKER</p>
                <p>Projeto de estudo focado no aprendizado de next.js</p>
              </div>
              <div className="backSide">
                <p className="title"></p>
                <p className="flex flex-col items-center">
                  <p>Tecnologias usadas</p>
                  <div className="flex justify-center items-center m-0 mb-4">
                    <img src={StyledComponents} width={"30px"} />
                    <img src={Nextjs} width={"35px"} />
                    <img src={Reactjs} width={"35px"} />
                  </div>
                  <p>Repositorio do projeto</p>
                  <a
                    href="https://github.com/BrMD/csgo-tracker"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className={`icon-project text-[#1E3050]`}
                      icon={icon({ name: "github", style: "brands" })}
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
