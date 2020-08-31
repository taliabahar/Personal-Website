import React from "react";
import "./App.css";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";

function App() {
  return (
    <div className="App">
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
