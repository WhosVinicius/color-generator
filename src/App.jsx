import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const colors = [1, 2, 3, 4, 5, 6, 7, 8,
    9, 0, "a", "b", "c", "d", "e", "f"];

  const [backGroundColor, setbackgroundColor] = useState("#fff");

  const [text, setText] = useState("#fff");

  useEffect(() => {
    if (localStorage.getItem("backGroundColor")) {
      setbackgroundColor(localStorage.getItem("backGroundColor"));
      setText(localStorage.getItem("backGroundColor"));
    }
  }, []);

  const handleClick = () => {
    let string = "#";
    for (let i = 0; i < 6; i++) {
      string = string + colors[Math.floor(Math.random() * 100) % colors.length];
    }
    setbackgroundColor(string);
    setText(string);
    localStorage.setItem("backGroundColor", string);
  };

  return (
    <div
      style={{
        backgroundColor: backGroundColor,
      }}
      className="App center-text">
      <button
        className="teste"
        onClick={handleClick}>
        Gere uma cor aleatoria!
      </button>
      <div className="text-div center-text">
        <form>
          <input
            maxLength={7}
            placeholder={text}
            onChange={(e) => {
              setbackgroundColor(e.target.value);
              localStorage.setItem("backGroundColor", e.target.value);
            }}
            type="text"
            className="text center-text"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
