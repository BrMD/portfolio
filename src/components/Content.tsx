import ItemContact from "./ItemContact";
import WppLogo from "../wpp.svg";
import EmailLogo from "../email.svg";
import GithubLogo from "../github.svg";

const Content = ({ backgroundDark }: { backgroundDark: Boolean }) => {
  return (
    <div
      className={`text-center text-5xl mx-[1em] mt-[0.5em] texto  font-semibold ${
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
      <div className="mt-[1em] text-5xl flex justify-center">
        <ItemContact link="whatsapp.com" logo={WppLogo} />
        <ItemContact link="google.com" logo={EmailLogo} />
        <ItemContact link="google.com" logo={GithubLogo} />
      </div>
    </div>
  );
};

export default Content;
