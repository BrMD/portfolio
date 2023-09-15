import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Stack from "./components/Stack";
import Projects from "./components/Projects";

function App() {
  const [backgroundDark, setBackgroundDark] = useState(false);
  const [language, setLanguage] = useState("PT");

  function changeBackgroundColor() {
    setBackgroundDark((backgroundDark) => !backgroundDark);
  }

  function changeLanguage() {
    setLanguage((language) => {
      return language === "PT" ? "EN" : "PT";
    });
  }
  if (backgroundDark === true) {
    document.body.classList.remove("backgroundWhite");
    document.body.classList.add("backgroundBlack");
  } else {
    document.body.classList.remove("backgroundBlack");
    document.body.classList.add("backgroundWhite");
  }
  return (
    <div className="flex flex-col text-center">
      {/* <div className="containerDarkMode">
        <div className={`dark-mode ${backgroundDark ? "active" : ""}`}></div>
      </div> */}
      <Header
        backgroundDark={backgroundDark}
        onChangeBackground={changeBackgroundColor}
        language={language}
        onChangeLanguage={changeLanguage}
      />
      <Content backgroundDark={backgroundDark} language={language} />
      <Stack backgroundDark={backgroundDark} />
      <Projects backgroundDark={backgroundDark} language={language} />
    </div>
  );
}

export default App;
