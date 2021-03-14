import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import icon from "./images/TB.png";
import Resume from "./documents/Resume-TaliaBahar.pdf";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";

export default class MenuExampleSecondary extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Router>
        <Menu
          fixed="top"
          secondary
          style={{
            margin: "0",
            padding: "1%",
            // fontweight: "700",
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
            // as={Link}
            // to="/"
            style={{ fontWeight: "700" }}
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
            href="#about"
          ></Menu.Item>
          <Menu.Item
            as={Link}
            to="/about"
            style={{ fontWeight: "700" }}
            name="About"
            active={activeItem === "education"}
            onClick={this.handleItemClick}
            // href="#education"
          />
          <Menu.Item
            style={{ fontWeight: "700" }}
            name="projects"
            active={activeItem === "projects"}
            onClick={this.handleItemClick}
            href="#education"
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
        {/* <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Route path="/about">
            <About />
          </Route>
        </div> */}
      </Router>
    );
  }
}
