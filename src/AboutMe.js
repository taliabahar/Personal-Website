import React from "react";
import "./App.css";
import "./sectionStyles/AboutMe.css";
import profilePic from "./images/talia.jpeg";
import Resume from "./documents/Resume-TaliaBahar.pdf";

import { Grid, Image } from "semantic-ui-react";

function AboutMe() {
  return (
    <div className="AboutMe">
      <Grid divided="vertically">
        <h2 id="aboutTitle">About Me</h2>
        <Grid.Row columns={1}>
          <Grid.Column>
            <p className="aboutBlurb">
              I am a Los Angeles, CA native who recently graduated from Loyola
              Marymount University with a Bachelor's in Computer Science and a
              minor in Graphic Arts. My background is in web development with a
              focus on front-end, React, API integration, accessibility, and
              graphic design. I also have a strong interest in transitioning my
              technical and design skills into the UX/UI world. I am very
              interested in working on projects where I can combine both my
              technical and design skills to have a positive impact on peoples'
              daily lives.
            </p>
            <p className="aboutBlurb">
              Ever since elementary school art has been one of my passions. I
              love how in art anyone can turn nothing into something. Art has
              also shaped the way I look for solutions to problems because I
              know I can always learn new creative ways to get a job done. This
              concept of infinite creation is what sparked my interest in
              Computer Science engineering. I feel the same rush when I turn a
              blank canvas into a geometric abstraction as when I turn lines of
              code into a dynamic website. Furthermore, I like how in both art
              and Computer Science I can experiment with different styles and
              mediums to create something that has an impact on others. Through
              art, I can emotionally connect with anyone and get a message
              across. Now, by obtaining a Computer Science degree, I can go one
              step further by building dynamic user-friendly websites and
              applications that anyone can interact with.
            </p>
            <p className="aboutBlurb">
              During my time at LMU, I've earned many opportunities to expand
              upon my passions and grow as a person. I was a participant then
              later TA for LMU's Google CSSIx program. I am the Events chair for
              the Association of Computing Machinery(ACM), a member of the
              Society of Women Engineers(SWE), and a member of Han Tao. I work
              as a Digital Media Assistant for the LMU Marketing and
              Communications department. I was also fortunate enough to
              participate in LMU's Summer Opportunities for Advanced
              Research(SOAR) program and Mozilla's Fix-the-Internet
              Hackternship. Outside of school, I enjoy working on personal
              projects to build my programming skills, attending design jams to
              build my UX skills, and creating fun illustrations and logos to
              express myself creatively.
            </p>
          </Grid.Column>
          <Grid.Column>
            <div className="about">
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
                <a href="mailto:tbahar@lion.lmu.edu.com">
                  <button className="aboutBtn">CONTACT ME :)</button>
                </a>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
        <h2>Education</h2>
        <Grid.Row columns={3}>
          <Grid.Column>
            <strong>
              <p>Loyola Marymount University</p>
            </strong>
            <p>Bachelor of Science, Computer Science / Graphic Arts Minor</p>
            <p>GPA: 3.58 / Dean’s List: Fall 2018, 2019, 2020, Spring 2021</p>
            <p>August 2017 – May 2021</p>{" "}
          </Grid.Column>
          <Grid.Column>
            <p>
              <span>Design Courses:</span> Computer Graphics, Typography, User
              Experience Design, 2D Design
            </p>
            <p>
              <span>Technical Courses:</span> Algorithms, App Development
              Practicum, Computer Graphics, Computer Systems Design, Computer
              Systems Organization, Data Structures, Interaction Design, Intro
              to Databases, Language Translation and Implementation, Logic
              Design, Operating Systems, Programming Languages
            </p>{" "}
          </Grid.Column>
          <Grid.Column>
            <p>
              <span>Affiliations:</span> Association of Computing Machinery
              (Events Chair), Han Tao Cultural Club (Member), Society of Women
              Engineers (Member)
            </p>{" "}
          </Grid.Column>
        </Grid.Row>
        <h2>Skills</h2>
        <Grid.Row columns={3}>
          <Grid.Column>
            <h3>Front End Development</h3>
            <ul>
              <li>React</li>
              <li>React Native</li>
              <li>Traditonal Web </li>
              <li>API Integration</li>
              <li>ADA Compliance</li>
              <li>WordPress</li>
              <li>TerminalFour</li>
            </ul>
          </Grid.Column>
          <Grid.Column>
            <h3>User Experience Design </h3>
            <ul>
              <li>Mobile and Web Wireframing</li>
              <li>User Research</li>
              <li>User Testing</li>
              <li>User Personas</li>
              <li>User Journey Mapping</li>
              <li>Affinity Mapping</li>
              <li>Story Boarding</li>
            </ul>
          </Grid.Column>
          <Grid.Column>
            <h3>Graphic Design</h3>
            <ul>
              <li>User Interface Design</li>
              <li>Interaction Design</li>
              <li>Web Design</li>
              <li>Mobile Design</li>
              <li>Digital Design</li>
              <li>Logo Design</li>
              <li>Illustration</li>
            </ul>
          </Grid.Column>
        </Grid.Row>
        <h2>Tools</h2>
        <Grid.Row columns={3}>
          <Grid.Column>
            <h3>Coding</h3>
            <ul>
              <li>React</li>
              <li>React Native</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS/SASS</li>
              <li>Java</li>
            </ul>
          </Grid.Column>
          <Grid.Column>
            <h3>Technologies</h3>
            <ul>
              <li>CLI</li>
              <li>GitHub</li>
              <li>Git</li>
              <li>InVision</li>
              <li>Expo</li>
              <li>Jira</li>
              <li>Postman</li>
              <li>MongoDB</li>
              <li>Sharepoint</li>
              <li>SiteImprove</li>
              <li>ServiceNow</li>
              <li>TerminalFour</li>
            </ul>
          </Grid.Column>
          <Grid.Column>
            <h3>Adobe</h3>
            <ul>
              <li>Illustrator</li>
              <li>InDesign</li>
              <li>XD</li>
              <li>Photoshop</li>
              <li>Acrobat</li>
            </ul>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <footer>© 2021 Talia Bahar</footer>
    </div>
  );
}

export default AboutMe;
