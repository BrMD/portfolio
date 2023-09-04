import icons from "./IconsSrc";
import "./iconStack.css";

const Stack = ({ backgroundDark }: { backgroundDark: Boolean }) => {
  return (
    <section
      id="stack"
      className="w-[100vw] h-[100vh] justify-center items-center flex flex-wrap stack"
    >
      {icons.map((icon) => {
        return (
          <div
            key={icon.name}
            className={`m-8 p-4 w-[12em] flex flex-col justify-center items-center text-lg font-semibold ${
              backgroundDark && "text-white"
            }`}
          >
            <div>
              <img
                src={icon.src}
                width="40"
                className={`w-[4em] flex-1 iconStack ${
                  backgroundDark && icon.name === "NextJS" ? "nextIcon" : ""
                }`}
              />
            </div>
            <span>{icon.name}</span>
          </div>
        );
      })}
    </section>
  );
};

export default Stack;
