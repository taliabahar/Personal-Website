import React from "react";
import "./App.css";
import "./sectionStyles/About.css";
import Nav from "./Nav";
import Resume from "./documents/Resume-TaliaBahar.pdf";
import DesignResume from "./documents/TaliaBahar-OnlineResume.pdf";
import { Grid } from "semantic-ui-react";
import profilePic from "./images/talia.jpeg";

function About() {
  return (
    <div className="about">
      <a id="about"></a>
      <Nav></Nav>
      <Grid columns={2} stackable>
        <Grid.Column className="introText">
          <h1>Hi! Nice to meet you, I'm Talia.</h1>
          <p className="subTitle">A Design-Focused Developer.</p>
          {/* <p>I dabble in blah blah blah.</p> */}
        </Grid.Column>
        <Grid.Column>
          <div className="about">
            <p id="aboutBlurb">
              <img src={profilePic} id="profilePic"></img>
            </p>

            <div className="button-container">
              <div className="glass-btn blue-btn">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/talia-bahar-b65920145/ "
                >
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png"
                    alt="linkedin"
                    style={{ width: "65px" }}
                  />
                </a>
              </div>
              <div className="glass-btn purple-btn">
                <a target="_blank" href="https://github.com/taliabahar">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/GitHub-512.png"
                    alt="github"
                    style={{ width: "65px" }}
                  />
                </a>
              </div>
              <div className="glass-btn darkblue-btn">
                <a target="_blank" href="https://www.behance.net/taliabahar">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Behance-512.png"
                    alt="behance"
                    style={{ width: "55px" }}
                  />
                </a>
              </div>
              <a target="_blank" href="https://dribbble.com/taliabahar">
                <div className="glass-btn pink-btn">
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Dribbble-128.png"
                    alt="dribble"
                    style={{ width: "50px" }}
                  />
                </div>
              </a>
            </div>
            <div className="aboutBtns">
              <a href={Resume} target="newTab">
                <button className="aboutBtn">TECHNICAL RESUME</button>
              </a>
              <a href="mailto:taliabahar99@gmail.com">
                <button className="aboutBtn">CONTACT ME :)</button>
              </a>
            </div>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default About;
