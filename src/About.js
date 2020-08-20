import React from "react";
import "./App.css";
import "./About.css";
import Nav from "./Nav";

import { Grid, Image } from "semantic-ui-react";

function About() {
  return (
    <div className="about">
      <Nav></Nav>
      {/* <Menu attached="top">
        <Dropdown item icon="wrench" simple>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Icon name="dropdown" />
              <span className="text">New</span>
              <Dropdown.Menu>
                <Dropdown.Item>Document</Dropdown.Item>
                <Dropdown.Item>Image</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>Open</Dropdown.Item>
            <Dropdown.Item>Save...</Dropdown.Item>
            <Dropdown.Item>Edit Permissions</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Export</Dropdown.Header>
            <Dropdown.Item>Share</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu> */}

      <Grid columns={2} stackable>
        <Grid.Column>
          <h1>Hi! Nice to Meet You, I'm Talia</h1>
        </Grid.Column>
        <Grid.Column>
          <div className="about">
            <p id="aboutBlurb">
              and I am looking for a job. I am a Los Angeles, CA native
              graduating from Loyola Marymount Univeristy with a Bacehlor's in
              Computer Science and a minor in Graphic Arts.
              <br></br>
              <br></br>Ever since elementary school art has been one of my
              passions. I love how in art anyone can turn nothing into
              something. Art has also shaped the way I look for solutions to
              problems because I know I can always learn new creative ways to
              get a job done. This concept of infinite creation is what sparked
              my interest in Computer Science engineering. I feel the same rush
              when I turn a blank canvas into a geometric abstraction as when I
              turn lines of code into a dynamic website. Furthermore, I like how
              in both art and Computer Science I can experiment with different
              styles and mediums to create something that has an impact on
              others. Through art, I can emotionally connect with anyone and get
              a message across. Now, by obtaining a Computer Science degree, I
              can go one step further by building dynamic user-friendly websites
              and applications that anyone can interact with.
              <br></br>
              <br></br>During my time at LMU I've earned many opportunities to
              expand upon my passions and grow as a person. I was a participant
              then later TA for LMU's Google CSSIx program. I am the Events
              chair for the Association of Computing Machinery(ACM), a member of
              the Society of Women Engineers(SWE), and a member of Han Tao. I
              work as a Digital Media Assistant for the LMU Marketing and
              Communications department. I was also fortunate enough to
              particpiate in LMU's Summer Opportunities for Advanced
              Research(SOAR) program and Mozilla's LMU Spring Hackternship.
              <br></br>
              <br></br>
              My background is in web develpment with a focus on front end, API
              integration, accessibility, and graphic design but I also have a
              strong interest in transitioning my technical and design skills
              into the UX/UI world. I am really interested in roles where I can
              combine both my technical and design skills to have a positive
              impact on peoples' daily lives.
            </p>

            <div class="button-container">
              <div class="glass-btn blue-btn">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/talia-bahar-b65920145/ "
                >
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png"
                    alt="linkedin"
                    style={{ width: "50px" }}
                  />
                </a>
              </div>
              <div class="glass-btn purple-btn">
                <a target="_blank" href="https://github.com/taliabahar">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/GitHub-512.png"
                    alt="github"
                    style={{ width: "50px" }}
                  />
                </a>
              </div>
              <div class="glass-btn darkblue-btn">
                <a target="_blank" href="https://www.behance.net/taliabahar">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Behance-512.png"
                    alt="behance"
                    style={{ width: "45px" }}
                  />
                </a>
              </div>
              <a target="_blank" href="https://dribbble.com/taliabahar">
                <div class="glass-btn pink-btn">
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Dribbble-128.png"
                    alt="dribble"
                    style={{ width: "40px" }}
                  />
                </div>
              </a>
            </div>
            <button className="aboutBtn">RESUME</button>
            <a href="mailto:tbahar@lion.lmu.edu.com">
              <button className="aboutBtn">CONTACT ME :)</button>
            </a>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default About;
