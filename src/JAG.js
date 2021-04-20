import React from "react";
import "./App.css";
import "./sectionStyles/JAG.css";
import { Grid } from "semantic-ui-react";
import JAGScreen from "./images/JAGScreen.png";
import packWire from "./images/packWire.png";
import JAGstyle from "./images/JAGStyleGuide.png";
import JAGLoFi from "./images/JAGLoFi.png";

import JAGHiFi from "./images/JAGHiFi.png";
import JAGMidFi from "./images/JAGMidFi.png";
import JAGPersonas from "./images/JAGPersonas.png";
import JAGProcess from "./images/JAGProcess.png";

function JAG() {
  return (
    <div className="JAG">
      <div className="top">
        <a href="https://www.behance.net/gallery/92505293/JAG" target="_blank">
          <img
            src="https://cdn3.iconfinder.com/data/icons/picons-social/57/77-behance-512.png"
            style={{ width: "4.7%", float: "right" }}
          ></img>
        </a>
        <h2 id="title">JAG</h2>
        <p>UX Designer • Mobile App • 2019 </p>
        <p style={{ fontStyle: "oblique" }}>
          ART498 Intro to UX Design Semester Project
        </p>
      </div>
      <Grid stackable>
        <Grid.Row centered>
          <img src={JAGScreen} style={{ width: "70%" }} />
          <Grid.Column
            width={9}
            style={{ textAlign: "center", marginBottom: "80px" }}
          >
            <h3>The Problem</h3>
            <p>
              How can we facilitate and encourage connecting with others on
              college campuses amongst social and academic anxieties?
            </p>{" "}
            <img
              src={JAGProcess}
              alt="process"
              style={{ margin: "0 auto", margin: "40px 0 15px 0" }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="check" style={{ marginBottom: "30px" }}>
          <Grid.Column width={8}>
            <h3 style={{ textAlign: "center" }}>The Proposal</h3>
            <p>
              JAG is an experience made to help connect people on college
              campuses through their interests or needs, whether it be for
              social or academic purposes, to be able to share experiences.
              "JAG" stands for Join A Group because we believe that given a
              platform, students can work together to alleviate their academic
              and social anxieties in a safe and easy way.
            </p>{" "}
          </Grid.Column>
          <Grid.Column width={8}>
            <h3 style={{ textAlign: "center" }}>User Benefits</h3>
            <ul>
              <li>
                Connections made on JAG transcend the limitations of regular
                on-campus interactions by helping students: make new friends
                with similar and/or niche interests, meet people who possess
                skills they want to learn, form study groups that work with
                their schedules and needs, gain awareness of all on and
                off-campus events
              </li>
              <li>
                An app that facilitates connection is especially good for
                commuters, transfers, first years, and those not involved with
                sororities or sports
              </li>
              <li>Promotes a healthy work-life balance</li>
              <li>
                Working with others helps increase increase academic
                accountability
              </li>
            </ul>{" "}
          </Grid.Column>
        </Grid.Row>
        <img
          src={JAGPersonas}
          className="image"
          alt="user personas"
          style={{ width: "90%", margin: "40px 0 35px 0" }}
        />
        <img
          src={JAGLoFi}
          className="image"
          alt="initial wireframes"
          style={{ width: "70%", marginBottom: "25px", marginTop: "45px" }}
        />
        <Grid.Row>
          <Grid.Column className="check">
            <h3>App Breakdown</h3>
            <p>
              <span>How It Works</span>
              <br></br> The app tracks packages given a carrier and tracking
              number and utilizes the Shippo and Mapbox APIs to display a
              package’s current status and location on a map within a React
              Modal.
            </p>

            <p>
              <span>My Role</span>
              <br></br>My partner and I worked very closely on this project from
              creating our low-fi, mid-fi, and hi-fi prototypes to conducting
              multiple rounds of prototype testing and general user interviews.
            </p>

            <p>
              <span>Design</span>
              <br></br>
              <p>
                My package tracking web app is a single-page app, with only
                three input fields, three buttons, designed to not overwhelm the
                user, prevent errors, and be visually satisfying. Users would
                not have a hard time tracking packages through my app because
                there are only 3 main functionalities (track package, add
                package, and remove package) presented to them that I have
                designed to be intuitive.
              </p>
            </p>
            <img
              src={JAGMidFi}
              alt="mid-fi wireframes"
              className="image"
              style={{
                width: "75%",
                marginTop: "40px",
                marginBottom: "35px",
                display: "flex",
                justifyContent: "center",
              }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className="check">
            <p>
              <span>Issues</span>
              <br></br>
              Our biggest challenege was deciding on whether or not our app
              should be split into a social and education mode as some might
              find education based activities to be social. To better understand
              this overlap we conducted user interviews asking the question "Do
              you associate education with learning for a grade or learning for
              personal enrichment?"
            </p>
            <p>
              {" "}
              Our low-fi testing revealed to us that we needed to define the
              social and education modes upon app entry. We did so by adding pop
              ups with short descriptive text on the app entry screeen that asks
              users to select either education or social mode. We also added
              user profiles to make user's feel safer and on the profile page we
              also added event goals for user accountability.
            </p>
            <p>
              Our mid-fi testing revealed to us that we needed to go further and
              differentiate between our two modes more visually. In our high-fi
              wireframes we used color and our logo to display to users what
              mode they were in. Purple and the logo variation where the jaguar
              is wearing a party hat denotes a user is in social mode. Orange
              and the logo variation where the jaguar is wearing a graduation
              cap denotes a user is in education mode.
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{ margin: "40px 0px" }}>
          <Grid.Column className="check">
            <h3>Design Assets</h3>
            <img
              src={JAGstyle}
              style={{ margin: "0 auto", width: "100%" }}
            ></img>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className="check">
            <h3>Tech Used</h3>
            <ul>
              <li>
                <span>Graphics:</span> Adobe Illustrator
              </li>
              <li>
                <span>Wireframes:</span> Adobe XD
              </li>
            </ul>
          </Grid.Column>
        </Grid.Row>
        <img
          className="image"
          src={JAGHiFi}
          alt="hi-fi wireframes"
          style={{
            width: "80%",
            marginTop: "40px",
            marginBottom: "35px",
          }}
        />
      </Grid>
      <footer>© 2021 Talia Bahar</footer>
    </div>
  );
}
{
}

export default JAG;
