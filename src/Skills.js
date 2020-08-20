import React from "react";
import { Grid, Image } from "semantic-ui-react";

import "./App.css";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <Grid columns={2} stackable>
        <Grid.Column>
          <h3>Languages</h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
          <h3>Technologies</h3>
          <ul>
            <li>Git</li>
            <li>Node</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Adobe InDesign</li>
            <li>Adobe XD</li>
            <li>InVision</li>
            <li>Maven</li>
            <li>WordPress</li>
            <li>CLI</li>
          </ul>
        </Grid.Column>
        <Grid.Column>
          <h3>1 - Front End Development</h3>
          <ul>
            <li>ADA Compliance</li>
            <li>React</li>
            <li>CSS/SCSS</li>
            <li>HTML</li>
            <li>API Integration</li>
            <li>Google App Engine</li>
          </ul>
          <h3>2 - UX Design </h3>
          <ul>
            <li>Mobile and Web Wireframing</li>
            <li>User Research</li>
            <li>User Testing</li>
            <li>User Personas</li>
            <li>User Journey Mapping</li>
          </ul>
          <h3>3 - Graphic Design</h3>
          <ul>
            <li>UI Design</li>
            <li>Website &amp; Digital Design</li>
            <li>Brading &amp; Visual Identity</li>
            <li>Illustration</li>
          </ul>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Skills;
