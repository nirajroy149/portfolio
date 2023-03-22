import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Skills from "./components/Skills/Skills";

function App() {
  const [theme, setTheme] = useState("light");
  function handleTheme() {
    // console.log(theme)
    if (theme === "light") {
      setTheme("dark");
    } else setTheme("light");
  }

  return (
    <div className={`whole-app ${theme}`}>
      <Sidebar />
      <div className="content-container">
        <div className="toggle-theme-nav">
          <div className="open-btn">
            <i
              className="fa-solid fa-bars"
              id="open-btn"
              onClick={() =>
                document.getElementById("sidebar").classList.add("visible")
              }
            ></i>
          </div>
          <div onClick={handleTheme} className="theme-div">
            <i class="fa-solid fa-sun"></i>
          </div>
        </div>
        <Home />
        <About />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
