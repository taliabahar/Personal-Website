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
            <p>Bachelor of Science, Computer Science + Graphic Arts Minor</p>
            <p>Current GPA: 3.56</p>
            <p>August 2017 – May 2021</p>
          </div>
        </Grid.Column>
        <Grid.Column id="classes">
          <p>
            <span>Design Courses:</span> Computer Graphics, Typography, User
            Experience Design, 2D Design
          </p>
          <p>
            <span>Technical Courses:</span> Algorithms, App Development
            Practicum, Computer Graphics, Computer Systems Design, Computer
            Systems Organization, Data Structures, Interaction Design, Intro to
            Databases, Language Translation and Implementation, Logic Design,
            Operating Systems, Programming Languages
          </p>
          <p>
            <span>Affiliations:</span> Association of Computing Machinery
            (Events Chair), Han Tao Cultural Club (Member), Society of Women
            Engineers (Member),
          </p>
        </Grid.Column>
      </Grid>
      <a id="skills"></a>
    </div>
  );
}

export default Education;
