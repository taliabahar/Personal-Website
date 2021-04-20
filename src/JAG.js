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
              <br></br> Upon opening the app for the first time users are
              prompted to create their profile. After adding a profile picture,
              filling out basic info, then defining their general interests,
              skills they have, and skills they want to learn they are
              introduced to the dual world of JAG.
            </p>
            <p>
              JAG Education mode is used when users want to find or create posts
              to form study groups with other students or learn new skills that
              fit their interests. JAG Social mode is used when users want to
              find or create posts to meet new people on campus though more
              social activities. These can be facilitated by the JAG community
              or their university.
            </p>
            <p>
              Events can be filtered by category, day of the week, distance,
              time, and cost. Users can bookmark events if they are unsure if
              they will attend when they first see it but also have the option
              to withdraw from any of their joined events as well. Event posters
              can choose whether or not they want to allow comments on their
              posts or to allow DMs from other users regarding their event.
              Users can switch between education and social events at any time
              depending on their needs.
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
                Our mid-fi testing revealed to us that we needed to go further
                and differentiate between our two modes more visually. In our
                high-fi wireframes we used color and our logo to display to
                users what mode they were in. Purple and the logo variation
                where the jaguar is wearing a party hat denotes a user is in
                social mode. Orange and the logo variation where the jaguar is
                wearing a graduation cap denotes a user is in education mode. We
                also created a custom gradient of our two main colors for when
                the mode did not matter such as when on the profile page. We
                chose orange and purple to be our two main colors because of the
                inviting tone of the colors and it is a combo not heavily
                associated with any other product.
              </p>
              <p>
                The app's main features are divided into home, events,
                bookmarks, and my profile and features a toggle button to switch
                between education and social mode. We desgined the app with
                screen real estate in mind making sure to keep the optimal
                amount of white space. All event information is grouped together
                in boxes for easier viewing as well.
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
