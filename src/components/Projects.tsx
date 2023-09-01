import "./project.css";

const Projects = ({ backgroundDark }: { backgroundDark: Boolean }) => {
  return (
    <section>
      <div className="w-[100vw] h-[95vh]">
        <div className="w-full h-full flex justify-center items-center">
          <div className="myCard">
            <div className="innerCard">
              <div className="frontSide">
                <p className="title">CSGO - TRACKER</p>
                <p>Projeto de estudo focado no aprendizado de next.js</p>
              </div>
              <div className="backSide">
                <p className="title"></p>
                <p>Leave Me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
