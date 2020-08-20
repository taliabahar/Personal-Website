import React from "react";
import "./App.css";
import "./Education.css";

import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";

function Nav() {
  return (
    <div children="nav">
      <div
        class="ui secondary right menu fixed"
        style={{
          padding: "1%",
          //   backgroundColor: "black",
          background: "rgb(169,249,255)",
          background:
            "linear-gradient(90deg, rgba(169,249,255,0.9486169467787114) 0%, rgba(157,218,242,0.9262079831932774) 18%, rgba(94,190,255,0.9262079831932774) 53%, rgba(195,166,247,0.9318102240896359) 76%, rgba(161,126,241,0.9514180672268907) 100%)",

          background: "rgb(169,249,255)",
          background:
            "linear-gradient(90deg, rgba(169,249,255,0.9486169467787114) 0%, rgba(102,206,254,0.9542191876750701) 31%, rgba(94,190,255,0.9262079831932774) 53%, rgba(105,157,242,0.9318102240896359) 76%, rgba(68,136,255,1) 100%)",
        }}
      >
        <a class="active item" id="about">
          About
        </a>
        <a class="item" id="education">
          Education
        </a>
        <a class="item" id="skills">
          Skills
        </a>
        <a class="item" id="projects">
          Projects
        </a>
        <div class="right menu">
          <a class="item" id="resume">
            Resume
          </a>
          <a class="item" id="about">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
