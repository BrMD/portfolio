import StyledComponents from "../icons/styledcomponets.png";
import Nextjs from "../icons/next96.svg";
import Reactjs from "../icons/react96.svg";
import Redux from "../icons/redux.svg";
import "./project.css";
import SingleProject from "./SingleProject";
import React from "react";

const Projects = ({
  backgroundDark,
  language,
}: {
  backgroundDark: Boolean;
  language: string;
}) => {
  return (
    <section id="projetos">
      <div className="w-[100vw] h-[95vh] ">
        <div className="w-full h-full flex justify-center items-center">
          <SingleProject
            background="bg-orange-500"
            language={language}
            title="Task Manager"
            ptParagraph="Projeto usado para aprender como trabalhar com o Redux"
            enParagraph="Study project focused on learn how to work with Redux"
            linkGithub="https://github.com/BrMD/Basic-Challenge-Task-Manager"
          >
            <img alt="Redux" src={Redux} width={"30px"} />
            <img alt="React" src={Reactjs} width={"35px"} />
          </SingleProject>

          <SingleProject
            background="bg-green-600"
            language={language}
            title="CSGO - TRACKER"
            ptParagraph="Projeto de estudo focado no aprendizado de Next.js"
            enParagraph="Study project focused on learn how to work with Next.js"
            linkGithub="https://github.com/BrMD/csgo-tracker"
          >
            <img
              alt="Styled-Components"
              src={StyledComponents}
              width={"30px"}
            />
            <img alt="Next-js" src={Nextjs} width={"35px"} />
            <img alt="React-js" src={Reactjs} width={"35px"} />
          </SingleProject>
        </div>
      </div>
    </section>
  );
};

export default Projects;
