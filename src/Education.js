import React from "react";
import "./App.css";
import "./sectionStyles/Education.css";

import { Grid } from "semantic-ui-react";

function Education() {
  return (
    <div className="education">
      <h2>Education</h2>
      <Grid columns={2} stackable>
        <Grid.Column>
          <div className="educationBlurb">
            <p>Loyola Marymount University</p>
            <p>Bachelor of Science, Computer Science Graphic Arts Minor</p>
            <p>August 2017-May 2021 / GPA: 3.51</p>
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
          <p>
            <span>Affiliations:</span> Association of Computing Machinery(Events
            Chair), Society of Women Engineers(Member), Han Tao(Member)
          </p>
        </Grid.Column>
      </Grid>
      <a id="skills"></a>
    </div>
  );
}

export default Education;
