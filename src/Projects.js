import React from "react";
import { Grid, Image } from "semantic-ui-react";
import TWS from "./images/TWSScreen.png";
import PetMatch from "./images/PetMatchScreen.png";
import RE from "./images/REScreen.png";
import ScreenTime from "./images/ScreenTimeScreen 2.png";
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

      <Grid container columns={3} stackable doubling>
        <Grid.Column>
          <a target="_blank" href="https://github.com/taliabahar/pet-match">
            <Image src={PetMatch} alt="Pet Match Screen" />
          </a>
          <h4 style={{ textAlign: "center" }}>Pet Match</h4>
          <p>
            Pet Match is a web app I collaborated on with three other students
            that uses the Petfinder API to help users find adoptable animals
            near them that match their needs and desires by taking a short quiz.
            Came up with concept and served as Project Manager for this web app
            with the goal to promote the adoption of shelter animals to help
            save animals who are being put down due to shelters closing down and
            help mitigate the anxiety and boredom quarantining has caused. Coded
            in JavaScript and React and uses React Router and Semantic UI.
          </p>
        </Grid.Column>
        <Grid.Column>
          <a
            target="_blank"
            href="https://github.com/taliabahar/package-tracker"
          >
            <Image src={PackTrack} alt="Package Tracker Screen" />
          </a>
          <h4 style={{ textAlign: "center" }}>Package Tracker</h4>
          <p>
            For my Interaction Design semester project, I created a web app that
            consolidates shipments so users can easily and more efficiently
            track their packages given a carrier and tracking number. I
            wireframed then created a single-page React Hooks web app designed
            to satisfy Nielson’s 5 usability metrics. Researched popular
            usability guidelines and utilized 2 APIs (Shippo and MapBox) to
            display a package’s current status and location on a map within a
            React Modal. Coded in React, JavaScript, and HTML and utilized Adobe
            Illustrator for background illustration.
          </p>
        </Grid.Column>
        <Grid.Column>
          <a
            target="_blank"
            href="https://www.behance.net/gallery/101582319/The-Whole-Story"
          >
            <Image src={TWS} alt="TWS Screen" />
          </a>
          <h4 style={{ textAlign: "center" }}>TWS</h4>
          <p>
            The Whole Story is a news centered web app I worked on as the UX/UI
            lead + Front End Developer on with two other students as part of the
            Mozilla Builders LMU Spring 2020 Hackternship. The Whole Story's
            goal was to help the younger generation become politically-informed
            in a holistic manner by removing avenues for implicit bias to enter
            their news stream leading to a deeper and more individualistic
            political understanding. Coded in React, JavaScript, HTML, and
            utilized Semantic UI. Also, individually wire-framed, created all
            artwork for the app using Adobe Illustrator, collected user
            research, created user personas, and ran user tests.
          </p>
        </Grid.Column>

        <Grid.Column>
          <a target="_blank" href="">
            <Image src={RE} />
          </a>
          <h4 style={{ textAlign: "center" }}>RE</h4>
          <p>
            RE is a web and (soon to be) mobile environmental app I am currently
            working on as the UX/UI lead and a Front End Developer. Coded in
            React Hooks, JavaScript, HTML, and individually created all artwork
            for the app using Adobe Illustrator.
          </p>
        </Grid.Column>
        <Grid.Column>
          <a
            target="_blank"
            href="https://www.behance.net/gallery/92505293/JAG"
          >
            <Image src={JAG} alt="JAG Screen" />
          </a>
          <h4 style={{ textAlign: "center" }}>JAG</h4>
          <p>
            JAG served as my semester project for my Intro to User Experience
            Design class. My partner and I came up with the app concept to help
            college students form genuine connections amidst social and academic
            anxieties. Created low, mid, and high fidelity wireframes, user
            journey maps, an information architecture, style guide, and
            storyboard. Conducted user interviews and tests multiple times
            throughout the design process. Utilized Adobe XD and Illustrator.
          </p>
        </Grid.Column>
        <Grid.Column>
          <Image src={ScreenTime} alt="Screen Time Screen" />
          <h4 style={{ textAlign: "center" }}>Screen Time</h4>
          <p>
            ScreenTime is an app a partner and I created for an Adobe + Netflix
            sponsored UX Design Challenge in 24 hours. Came up with the concept
            ourselves then created an animated high fidelity prototype with 30
            screens using Adobe XD.
          </p>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Projects;