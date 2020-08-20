import React from "react";
import "./App.css";
import circle from "./images/circle.png";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Nav from "./Nav";

import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";
// const { activeItem } = this.state;

function App() {
  return (
    <div className="App">
      {/* <Nav></Nav> */}
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
