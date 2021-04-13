import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import icon from "./images/TB.png";
import Resume from "./documents/Resume-TaliaBahar.pdf";
import { Link } from "react-router-dom";

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
          background:
            "linear-gradient(90deg, rgba(169,249,255,0.9486169467787114) 0%, rgba(102,206,254,0.9542191876750701) 31%, rgba(94,190,255,0.9262079831932774) 53%, rgba(105,157,242,0.9318102240896359) 76%, rgba(68,136,255,1) 100%)",
        }}
      >
        <img
          src={icon}
          style={{
            width: "50px",
            border: "solid black 3px",
            padding: "5px",
            marginRight: "1.2%",
          }}
        ></img>
        <Menu.Item
          as={Link}
          to="/Personal-Website/"
          style={{ fontWeight: "700" }}
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        ></Menu.Item>
        <Menu.Item
          as={Link}
          to="/about"
          style={{ fontWeight: "700" }}
          name="about"
          active={activeItem === "about"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item
            style={{ fontWeight: "700" }}
            name="resume"
            onClick={this.handleItemClick}
            href={Resume}
            target="newTab"
          />
          <Menu.Item
            style={{ fontWeight: "700" }}
            name="contact"
            onClick={this.handleItemClick}
            href="mailto:tbahar@lion.lmu.edu.com"
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
