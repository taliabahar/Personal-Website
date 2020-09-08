import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import Resume from "./documents/Resume:TaliaBahar.pdf";

export default class MenuExampleSecondary extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu
        fixed="top"
        secondary
        style={{
          margin: "0",
          padding: "1%",
          // background: "rgb(169,249,255)",
          background:
            "linear-gradient(90deg, rgba(169,249,255,0.9486169467787114) 0%, rgba(102,206,254,0.9542191876750701) 31%, rgba(94,190,255,0.9262079831932774) 53%, rgba(105,157,242,0.9318102240896359) 76%, rgba(68,136,255,1) 100%)",
        }}
      >
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
          href="#about"
        />
        <Menu.Item
          name="education"
          active={activeItem === "education"}
          onClick={this.handleItemClick}
          href="#education"
        />
        <Menu.Item
          name="skills"
          active={activeItem === "skills"}
          onClick={this.handleItemClick}
          href="#skills"
        />
        <Menu.Item
          name="projects"
          active={activeItem === "projects"}
          onClick={this.handleItemClick}
          href="#projects"
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="resume"
            // active={activeItem === "logout"}
            onClick={this.handleItemClick}
            href={Resume}
            target="newTab"
          />
          <Menu.Item
            name="contact"
            // active={activeItem === "logout"}
            onClick={this.handleItemClick}
            href="mailto:tbahar@lion.lmu.edu.com"
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
