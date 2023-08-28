import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [backgroundDark, setBackgroundDark] = useState(false);

  function changeBackgroundColor() {
    setBackgroundDark((backgroundDark) => !backgroundDark);
  }

  if (backgroundDark === true) {
    document.body.classList.remove("backgroundWhite");
    document.body.classList.add("backgroundDark");
  } else {
    document.body.classList.remove("backgroundDark");
    document.body.classList.add("backgroundWhite");
  }
  return (
    <div className="w-full flex flex-col text-center">
      <Header
        backgroundDark={backgroundDark}
        onChangeBackground={changeBackgroundColor}
      />
      <Content backgroundDark={backgroundDark} />
    </div>
  );
}

export default App;
