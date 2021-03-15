import React from "react";
import { Grid, Image } from "semantic-ui-react";
import TWS from "./images/TWSScreen.png";
import PetMatch from "./images/PetMatchScreen.png";
import RE from "./images/REScreen.png";
import ScreenTime from "./images/ScreenTimeScreen.png";
import JAG from "./images/JAGScreen.png";
import PackTrack from "./images/PackTrackScreen.png";

import "./App.css";
import "./sectionStyles/Projects2.css";

function Projects2() {
  return (
    <div className="projects">
      {/* <h2>Projects TEST</h2>
      <p id="subtext">
        Here are some of my technical and design projects. More projects can be
        found on my <a href="https://github.com/taliabahar">GitHub</a> and
        <a href="https://www.behance.net/taliabahar"> Behance</a>.
      </p> */}

      <Grid
        container
        columns={2}
        stackable
        doubling
        relaxed
        style={{ display: "inline" }}
      >
        <Grid.Column>
          <div className="projectContainer">
            <div>
              <h4 style={{ float: "left" }}>Pet Match</h4>
              <p style={{ float: "right", paddingTop: "12px" }}>2020</p>
            </div>
            <a target="newTab" href="https://github.com/taliabahar/pet-match">
              <Image
                src={PetMatch}
                alt="Pet Match Screen"
                style={{ width: "20%px" }}
              />
              <p style={{ textAlign: "center", color: "black", opacity: 0.6 }}>
                One line description maybe. One line description maybe.
              </p>
            </a>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="projectContainer">
            <h4 style={{ float: "left" }}>Package Tracker</h4>
            <p style={{ float: "right", paddingTop: "12px" }}>2020</p>
            <a
              target="newTab"
              href="https://github.com/taliabahar/package-tracker"
            >
              <Image src={PackTrack} alt="Package Tracker Screen" />
              <p style={{ textAlign: "center", color: "black", opacity: 0.6 }}>
                One line description maybe. One line description maybe.
              </p>
            </a>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="projectContainer">
            <h4 style={{ float: "left" }}>TWS</h4>
            <p style={{ float: "right", paddingTop: "12px" }}>2020</p>
            <a
              target="newTab"
              href="https://www.behance.net/gallery/101582319/The-Whole-Story"
            >
              <Image src={TWS} alt="TWS Screen" />
              <p style={{ textAlign: "center", color: "black", opacity: 0.6 }}>
                One line description maybe. One line description maybe.
              </p>
            </a>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="projectContainer">
            <h4 style={{ float: "left" }}>RE</h4>
            <p style={{ float: "right", paddingTop: "12px" }}>2020</p>{" "}
            <a
              target="newTab"
              href="https://www.behance.net/gallery/101712551/RE-Web-App"
            >
              <Image src={RE} />
              <p style={{ textAlign: "center", color: "black", opacity: 0.6 }}>
                One line description maybe. One line description maybe.
              </p>
            </a>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="projectContainer">
            <h4 style={{ float: "left" }}>JAG</h4>
            <p style={{ float: "right", paddingTop: "12px" }}>2020</p>
            <a
              target="newTab"
              href="https://www.behance.net/gallery/92505293/JAG"
            >
              <Image src={JAG} alt="JAG Screen" />
              <p style={{ textAlign: "center", color: "black", opacity: 0.6 }}>
                One line description maybe. One line description maybe.
              </p>
            </a>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="projectContainer">
            <h4 style={{ float: "left" }}>Screen Time</h4>
            <p style={{ float: "right", paddingTop: "12px" }}>2020</p>{" "}
            <a
              target="newTab"
              href="https://www.behance.net/gallery/102711929/ScreenTime-Adobe-Creative-Jam-x-Netflix"
            >
              <Image src={ScreenTime} alt="Screen Time Screen" />
              <p style={{ textAlign: "center", color: "black", opacity: 0.6 }}>
                One line description maybe. One line description maybe.
              </p>
            </a>
          </div>
        </Grid.Column>
      </Grid>
      {/* <footer>© 2021 Talia Bahar</footer> */}
    </div>
  );
}

export default Projects2;
