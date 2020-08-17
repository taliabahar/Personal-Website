import React from "react";
import "./App.css";
import circle from "./images/circle.png";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";

// const { activeItem } = this.state;

function App() {
  return (
    <div className="App">
      {/* <Menu className="menu" secondary stackable>
        <Menu.Item
          name="home"
          // active={activeItem === "home"}
          // onClick={this.handleItemClick}
        />
        <Menu.Item
          name="messages"
          // active={activeItem === "messages"}
          // onClick={this.handleItemClick}
        />
        <Menu.Item
          name="friends"
          // active={activeItem === "friends"}
          // onClick={this.handleItemClick}
        />
      </Menu> */}
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
