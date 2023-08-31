import icons from "./IconsSrc";
import "./teste.css";

const Stack = ({ backgroundDark }: { backgroundDark: Boolean }) => {
  return (
    <section className="w-[100vw] h-[100vh] justify-center items-center flex flex-wrap">
      {icons.map((icon) => {
        return (
          <div
            key={icon.name}
            className={`m-8 p-4 w-[12em] flex flex-col items-center text-lg font-semibold ${
              backgroundDark && "text-white"
            }`}
          >
            <div>
              <img
                src={icon.src}
                width="40"
                className={`w-[4em] flex-1 ${
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