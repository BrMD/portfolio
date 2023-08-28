const Content = ({ backgroundDark }: { backgroundDark: Boolean }) => {
  return (
    <div
      className={` absolute top-20 mx-[2em] text-8xl font-semibold ${
        backgroundDark ? "text-cyan-200" : ""
      }`}
    >
      Olá sou Matheus Dorigon, tenho 23 anos e sou um Desenvolvedor{" "}
      <span data-text="Frontend" className="specialWord">
        Frontend
      </span>
    </div>
  );
};

export default Content;
