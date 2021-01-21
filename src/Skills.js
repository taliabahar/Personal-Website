import React from "react";
import { Grid } from "semantic-ui-react";

import "./App.css";
import "./sectionStyles/Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <Grid columns={2} stackable>
        <Grid.Column>
          <h3>Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS/SASS</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
          <h3>Technologies</h3>
          <ul>
            <li>React</li>
            <li>React Native</li>
            <li>Semantic UI</li>
            <li>GitHub</li>
            <li>Git</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Adobe InDesign</li>
            <li>Adobe XD</li>
            <li>InVision</li>
            <li>WordPress</li>
            <li>Node.js</li>
            <li>Maven</li>
            <li>MongoDB</li>
            <li>CLI</li>
            <li>Postman</li>
            <li>Terminal Four</li>
            <li>Expo</li>
          </ul>
        </Grid.Column>
        <Grid.Column>
          <h3>1 - Front End Development</h3>
          <ul>
            <li>React + React Native</li>
            <li>Traditonal Web </li>
            <li>API Integration</li>
            <li>ADA Compliance</li>
            <li>Google App Engine</li>
          </ul>
          <h3>2 - User Experience Design </h3>
          <ul>
            <li>Mobile and Web Wireframing</li>
            <li>User Research</li>
            <li>User Testing</li>
            <li>User Personas</li>
            <li>User Journey Mapping</li>
            <li>Affinity Mapping</li>
            <li>Story Boarding</li>
          </ul>
          <h3>3 - Graphic Design</h3>
          <ul>
            <li>User Interface Design</li>
            <li>Interaction Design</li>
            <li>Web Design</li>
            <li>Mobile Design</li>
            <li>Digital Design</li>
            <li>Logo Design</li>
            <li>Illustration</li>
            <li>Drawing</li>
          </ul>
        </Grid.Column>
      </Grid>
      <a id="projects"></a>
    </div>
  );
}

export default Skills;
