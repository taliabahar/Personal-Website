import React from "react";
import "./App.css";
import "./Education.css";

import { Grid, Image, Card } from "semantic-ui-react";

function Education() {
  return (
    <div className="education">
      <h2>Education</h2>
      <Grid columns={2} stackable>
        <Grid.Column>
          <div class="educationBlurb">
            <p>Loyola Marymount University</p>
            <p>Bachelor of Science, Computer Science Graphic Arts Minor</p>
            <p>August 2017-May 2021 GPA: 3.47</p>
          </div>
        </Grid.Column>
        <Grid.Column id="classes">
          <p>
            <span>Design Courses:</span> User Experience Design, Computer
            Graphics, 2D Design, Typography
          </p>
          <p>
            <span>Technical Courses:</span> Data Structures, Algorithms,
            Interaction Design, App Development Practicum, Operating Systems,
            Programming Languages, Intro to Databases, Logic Design, Computer
            Graphics, Computer Systems Design, Computer Systems Organization,
            Language Translation and Implementation
          </p>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Education;
