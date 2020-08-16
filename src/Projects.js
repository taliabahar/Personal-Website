import React from "react";
import { Grid, Image, Card } from "semantic-ui-react";
import circle from "./images/circle.png";
import "./App.css";

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <p id="subtext">Here are some of my technical and design projects</p>

      <Grid container columns={4} stackable>
        <Grid.Column>
          <Image src={circle} />
          <h4 style={{ textAlign: "center" }}>RE</h4>
          <p>RE is a _____. I used ______. I learned _____.</p>
        </Grid.Column>
        <Grid.Column>
          <Image src={circle} />
          <h4 style={{ textAlign: "center" }}>TWS</h4>
        </Grid.Column>
        <Grid.Column>
          <Image src={circle} />
          <h4 style={{ textAlign: "center" }}>Package Tracker</h4>
        </Grid.Column>
        <Grid.Column>
          <Image src={circle} />
          <h4 style={{ textAlign: "center" }}>Inkling or PetMatch</h4>
        </Grid.Column>

        <Grid.Column>
          <Image src={circle} />
          <h4 style={{ textAlign: "center" }}>JAG</h4>
        </Grid.Column>
        <Grid.Column>
          <Image src={circle} />
          <h4 style={{ textAlign: "center" }}>Screen Time</h4>
        </Grid.Column>
        <Grid.Column>
          <button>GitHub</button>
          <button>BeHance</button>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Projects;
