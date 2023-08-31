import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Stack from "./components/Stack";

function App() {
  const [backgroundDark, setBackgroundDark] = useState(false);

  function changeBackgroundColor() {
    setBackgroundDark((backgroundDark) => !backgroundDark);
  }

  if (backgroundDark === true) {
    document.body.classList.remove("backgroundWhite");
  } else {
    document.body.classList.add("backgroundWhite");
  }
  return (
    <div className="flex flex-col text-center">
      <div className="containerDarkMode">
        <div className={`dark-mode ${backgroundDark ? "active" : ""}`}></div>
      </div>
      <Header
        backgroundDark={backgroundDark}
        onChangeBackground={changeBackgroundColor}
      />
      <Content backgroundDark={backgroundDark} />
      <Stack backgroundDark={backgroundDark} />
    </div>
  );
}

export default App;
