import React from "react";
import logo from "./logo.svg";
import "./App.css";
import circle from "./images/circle.png";
import { Grid, Image, Card } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <div class="content">
        <h1>Hi! Nice to Meet You, I'm Talia</h1>
      </div>
      {/* <img class="splatter" src="http://static.indigoimages.ca/2015/shop/orange-paint-splatter.png"></img> */}
      <div className="about">
        <p id="aboutBlurb">
          and I'm looking for a Summer 2020 internship. I am a ____ in Los
          Angeles, CA. I enjoy. I have a passion for. I am looking for. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas ex
          enim, id imperdiet elit ultricies vel. Donec nec iaculis turpis. Sed
          gravida ipsum at arcu consectetur, eu semper nunc congue. Nam eu
          sagittis odio. Integer nisi mauris, vulputate eu elit dapibus,
          venenatis cursus turpis. Vivamus vestibulum nisi eget tempus ornare.
          Nunc metus lectus, porttitor nec elementum nec, suscipit at nisi.
          Vivamus finibus nunc vitae aliquet pulvinar. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Duis sit amet rhoncus eros. Integer
          nisi mauris, vulputate eu elit dapibus, venenatis cursus turpis.
          Vivamus vestibulum nisi eget tempus ornare. Nunc metus lectus,
          porttitor nec elementum nec, suscipit at nisi. Vivamus finibus nunc
          vitae aliquet pulvinar. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis sit amet rhoncus eros
        </p>
        <img class="contactIcons" src={circle}></img>
        <img class="contactIcons" src={circle}></img>
        <img class="contactIcons" src={circle}></img>
        <button>RESUME</button>
      </div>

      <div className="education">
        <h2>Education</h2>
        <div class="educationBlurb">
          <p>
            Loyola Marymount University Bachelor of Science, Computer Science
            Graphic Arts Minor August 2017-May 2021 GPA: 3.47
          </p>
          <div id="classes">
            <p>
              Design Courses: User Experience Design, Computer Graphics, 2D
              Design
            </p>
            <p>
              Technical Courses: Data Structures, Algorithms, Interaction
              Design, Programming Languages, Intro to Databases, Logic Design,
              Computer Systems Organization
            </p>
          </div>
        </div>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <div id="leftSide">
          <h3>1 - Graphic Design</h3>
          <ul>
            <li>UI Design</li>
            <li>Website &amp; Digital Design</li>
            <li>Brading &amp; Visual Identity</li>
            <li>Print Design</li>
          </ul>

          <h3>2 - Front End Development</h3>
          <ul>
            <li>HTML / CSS</li>
            <li>JS &amp; Jquery Startup</li>
            <li>WordPress</li>
            <li>Jomla</li>
          </ul>
          <h3>3 - Illustration</h3>
          <ul>
            <li>Editorial</li>
            <li>Narrative</li>
            <li>Motion Graphics</li>
            <li>Animation</li>
            <li>Visual Effects</li>
          </ul>
        </div>
        <div id="rightSide">
          <h3>Languages</h3>
          <ul>
            <li>Editorial</li>
            <li>Narrative</li>
            <li>Motion Graphics</li>
            <li>Animation</li>
            <li>Visual Effects</li>
          </ul>
          <h3>Technologies</h3>
          <ul>
            <li>Sales Marketing</li>
            <li>Invoice</li>
            <li>eCommerce</li>
          </ul>
        </div>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <p id="subtext">Here are some of my technical and design projects</p>

        <Grid container columns={4} stackable>
          <Grid.Column>
            <Image src={circle} />
            <h4 style={{ textAlign: "center" }}>RE</h4>
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
    </div>
  );
}

export default App;
