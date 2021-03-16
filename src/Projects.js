import React from "react";
import { Grid, Image } from "semantic-ui-react";
import TWS from "./images/TWSScreen.png";
import PetMatch from "./images/PetMatchScreen.png";
import RE from "./images/REScreen.png";
import ScreenTime from "./images/ScreenTimeScreen.png";
import JAG from "./images/JAGScreen.png";
import PackTrack from "./images/PackTrackScreen.png";

import "./App.css";
import "./sectionStyles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <p id="subtext">
        Here are some of my technical and design projects. More projects can be
        found on my <a href="https://github.com/taliabahar">GitHub</a> and
        <a href="https://www.behance.net/taliabahar"> Behance</a>.
      </p>

      <Grid
        container
        columns={3}
        stackable
        doubling
        relaxed
        style={{ display: "inline" }}
      >
        <Grid.Column>
          <div className="projectContainer">
            <a target="newTab" href="https://github.com/taliabahar/pet-match">
              <Image src={PetMatch} alt="Pet Match Screen" />
            </a>
            <h4 style={{ textAlign: "center" }}>Pet Match</h4>
            <p>
              Pet Match is a web app I collaborated on with three other students
              that uses the Petfinder API to help users find adoptable animals
              near them that match their needs and desires by taking a short
              quiz. I came up with concept and served as Project Manager for
              this web app with the goal to promote the adoption of shelter
              animals to help save animals amidst shelters closing down and to
              help mitigate the anxiety and boredom quarantining has caused.
              Coded in React, JavaScript, HTML/CSS and utilizes React Router and
              Semantic UI.
            </p>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="projectContainer">
            <a
              target="newTab"
              href="https://github.com/taliabahar/package-tracker"
            >
              <Image src={PackTrack} alt="Package Tracker Screen" />
            </a>
            <h4 style={{ textAlign: "center" }}>Package Tracker</h4>
            <p>
              For my Interaction Design semester project, I created a web app
              that consolidates shipments so users can easily and more
              efficiently track their packages given a carrier and tracking
              number. I wireframed then created a single-page React Hooks web
              app designed to satisfy Nielson’s 5 usability metrics. Researched
              popular usability guidelines and utilized 2 APIs (Shippo and
              MapBox) to display a package’s current status and location on a
              map within a React Modal. Coded in React, JavaScript, HTML and
              utilized Adobe Illustrator for background illustration.
            </p>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="projectContainer">
            <a
              target="newTab"
              href="https://www.behance.net/gallery/101582319/The-Whole-Story"
            >
              <Image src={TWS} alt="TWS Screen" />
            </a>
            <h4 style={{ textAlign: "center" }}>TWS</h4>
            <p>
              The Whole Story is a news centered web app I worked on as the
              UX/UI lead and as a Front End Developer on with two other students
              as part of Mozilla's Fix-the-Internet Spring 2020 Hackternship to
              address misinformation online. The Whole Story's goal was to help
              the younger generation become politically-informed in a holistic
              manner by removing avenues for implicit bias to enter their news
              stream leading to a deeper and more individualistic political
              understanding. Coded in React, JavaScript, HTML/CSS, and utilized
              Semantic UI. Individually wire-framed, created all artwork for the
              app using Adobe Illustrator, collected user research, created user
              personas, and ran user tests.
            </p>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="projectContainer">
            <a
              target="newTab"
              href="https://www.behance.net/gallery/101712551/RE-Web-App"
            >
              <Image src={RE} />
            </a>
            <h4 style={{ textAlign: "center" }}>RE</h4>
            <p>
              RE is a developing web and mobile environmental app I am currently
              working on as the UX/UI lead and a Front End Developer. Coded in
              both React and React Native in collaboration with one other
              developer. Individually wireframed and created all digital artwork
              for web and mobile app versions using Adobe XD and Illustrator.
            </p>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="projectContainer">
            <a
              target="newTab"
              href="https://www.behance.net/gallery/92505293/JAG"
            >
              <Image src={JAG} alt="JAG Screen" />
            </a>
            <h4 style={{ textAlign: "center" }}>JAG</h4>
            <p>
              JAG served as my semester project for my Intro to User Experience
              Design class. My partner and I developed an original app idea to
              help college students form genuine connections amidst social and
              academic anxieties. We created low, mid, and high fidelity
              wireframes, user journey maps, an information architecture, a
              style guide, and a storyboard. And conducted multiple user
              interviews and tests throughout the design process. Utilized Adobe
              XD and Illustrator.
            </p>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="projectContainer">
            <a
              target="newTab"
              href="https://www.behance.net/gallery/102711929/ScreenTime-Adobe-Creative-Jam-x-Netflix"
            >
              <Image src={ScreenTime} alt="Screen Time Screen" />
            </a>
            <h4 style={{ textAlign: "center" }}>Screen Time</h4>
            <p>
              ScreenTime is a web app geared towards collaborative viewing,
              which incorporated watch parties, playlists, and polls I created
              with a creative partner in 24 hours for a Netflix sponsored Adobe
              UX Design Jam. I came up with the concept then created an animated
              high fidelity prototype with 30 screens using Adobe XD.
            </p>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Projects;
