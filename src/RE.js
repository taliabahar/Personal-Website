import React from "react";
import "./App.css";
import "./sectionStyles/RE.css";
import trackVideo from "./videos/PackTrackVid.mov";
import { Grid, Image } from "semantic-ui-react";
import REScreen from "./images/REScreen.png";

import packBG from "./images/packBG.png";

import HabitCards from "./images/RE_HabitCards.png";
import Icons from "./images/RE_CategoryIcons.png";
import Backgrounds from "./images/RE_HabitBackgrounds.png";

function RE() {
  return (
    <div className="RE">
      <div className="top">
        <a href="https://github.com/lmu-climate" target="_blank">
          <img
            src="http://pngimg.com/uploads/github/github_PNG40.png"
            style={{ width: "5%", float: "right" }}
          ></img>
        </a>
        <a
          href="https://www.behance.net/gallery/101712551/RE-Web-App"
          target="_blank"
        >
          <img
            src="https://cdn3.iconfinder.com/data/icons/picons-social/57/77-behance-512.png"
            style={{ width: "4.7%", float: "right" }}
          ></img>
        </a>
        <h2 id="title">RE</h2>
        <p>
          Lead UX/UI Designer / Front-End Developer / Illustrator • React Native
          App • 2021{" "}
        </p>
        <p>
          Collaborated on with
          <a href="https://github.com/mb0606"> Marco Berardini</a>
        </p>
        <p style={{ fontStyle: "oblique" }}>LMU funded internship project</p>
      </div>
      <Grid stackable>
        <Grid.Row centered>
          <img src={REScreen} style={{ width: "70%" }} />
          <Grid.Column
            width={9}
            style={{ textAlign: "center", marginBottom: "80px" }}
          >
            <h3>The Problem</h3>
            <p>
              As climate change worsens people need to become more
              environmentally conscious but might not know where to start and
              need something to keep them accountable.
            </p>{" "}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="check" style={{ marginBottom: "30px" }}>
          <Grid.Column width={8}>
            <h3 style={{ textAlign: "center" }}>The Proposal</h3>
            <p>
              An environemntal habit tracking app with resources to help people
              better understand the impact taking up included habits has.
            </p>{" "}
          </Grid.Column>
          <Grid.Column width={8}>
            <h3 style={{ textAlign: "center" }}>User Benefits</h3>
            <ul>
              <li>
                Creates a simple and organized way to track environmental
                related habits
              </li>
              <li>Keeps users accountablee for daily habit completion</li>
              <li>
                Gives people new ways to improve their carbon footprint and to
                learn about the impact these good habits have
              </li>
            </ul>{" "}
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column className="check">
            <h3>App Breakdown</h3>
            <p>
              <span>How It Works</span>
              <br></br> Users can sort through different habits based on their
              related environmental category to add to their personal habits.
              Clicking on a habit reveals a pop up card that gives users quick
              insight into the habit. User are also provided with a learn more
              page that gives a detailed look into the habit with links to more
              information on the environmental impact. After adding habits user
              can keep track of them in their user dashboard where they can go
              to daily to check off habits as they complete them to receive a
              badge.
            </p>
            <p>
              <span>My Role</span>
              <br></br>I served as the lead and only designer for the initial
              stages of this developing web and mobile environmental habit
              tracker app. I started by creating all digital artwork and
              iconagrphy for web and mobile app versions using Adobe XD and
              Illustrator. Using my designs and typography I then created a
              style guide to establish the brand identity.
            </p>
            <p>
              I then created high-fidelity wireframes and translated them into
              to React and React Native code on a team of 2 developers.
              Throughout my involvement with the app I engaged in weekly
              meetings with non-tech and non-design focused team members
              effectively communicating engineering principles and explaining
              design decisions.
            </p>
            <p>
              Once the app was functional I also helped lead rounds of user
              testing for which I crafted user surveys for.
            </p>

            <p>
              <span>Design</span>
              <br></br>
              <p>
                I designed the app keeping in mind we wanted to attract a
                younger audience new to environmentally conscious living. I used
                earthy mid-tone colors for the icons and graphics. The app
                layout is intuitive and simple. Habits are organized in grids
                and the information for each habit is grouped into their
                individual cards.
              </p>
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ marginTop: "60px", marginBottom: "35px" }} centered>
          <img src={HabitCards} width="65%" />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className="check">
            <p>
              <span>Challenges</span>
              <br></br> In the beginning of the app we struggled with finding
              the best way to gameify the app to give users motivation to
              complete habits daily. My initial solution was to give users
              different badges as they complete more and more habits. Through
              user interviews, we decided that future versions of RE will
              incorporate streaks and leaderboards to create a fun sense of
              competition between all users.
            </p>
          </Grid.Column>
        </Grid.Row>
        <h3 className="check">Design Assets</h3>
        <Grid.Row style={{ marginTop: "30px" }} className="check">
          <Grid.Column width={8}>
            {" "}
            <img src={Backgrounds} />
          </Grid.Column>
          <Grid.Column width={8}>
            {" "}
            <img src={Icons} />
          </Grid.Column>
        </Grid.Row>
        {/* <Grid.Row style={{ margin: "40px 0px" }} centered>
          <Grid.Column className="check">
            <img src={Backgrounds} width="70%" />
            <img src={Icons} width="70%" />
          </Grid.Column>
        </Grid.Row> */}
        <Grid.Row>
          <Grid.Column className="check">
            <h3>Tech Used</h3>
            <ul>
              <li>
                <span>Languages:</span> JavaScript, HTML, CSS
              </li>
              <li>
                <span>Frameworks: </span>React, React Native
              </li>
              {/* <li>
                <span>APIs:</span>
              </li> */}
              <li>
                <span>Graphics:</span> Adobe Illustrator
              </li>
              <li>
                <span>Wireframes:</span> AdobeXD
              </li>
            </ul>
          </Grid.Column>
        </Grid.Row>
        {/* <video
          src={trackVideo}
          width="750"
          height="500"
          controls
          style={{ margin: "0 auto", marginBottom: "50px" }}
        /> */}
      </Grid>
      <footer>© 2021 Talia Bahar</footer>
    </div>
  );
}
{
}

export default RE;
