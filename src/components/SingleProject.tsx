import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const SingleProject = ({
  language,
  children,
  title,
  ptParagraph,
  enParagraph,
  linkGithub,
  background,
}: {
  language: string;
  children: React.ReactNode;
  title: string;
  ptParagraph: string;
  enParagraph: string;
  linkGithub: string;
  background: string;
}) => {
  return (
    <div className="myCard m-4">
      <div className="innerCard">
        <div className={`frontSide ${background} px-1`}>
          <p className="title">{title}</p>

          <p>{language === "PT" ? ptParagraph : enParagraph}</p>
        </div>
        <div className={`backSide ${background}`}>
          <p className="title"></p>
          <div className="flex flex-col items-center">
            <span>
              {language === "PT" ? "Tecnologias usadas" : "Tecnologies used"}
            </span>
            <div className="flex justify-center items-center m-0 mb-4">
              {children}
            </div>
            <span>
              {language === "PT"
                ? "Repositorio no github"
                : "Github Repository"}
            </span>
            <a href={linkGithub} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                className={`icon-project text-[#1E3050]`}
                icon={icon({ name: "github", style: "brands" })}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
