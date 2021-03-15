import React from "react";
import "./App.css";
import Nav from "./Nav";
import Resume from "./documents/Resume-TaliaBahar.pdf";
import DesignResume from "./documents/TaliaBahar_DesignResume.pdf";
import profilePic from "./images/talia.jpeg";
import { Grid, Image } from "semantic-ui-react";
import TWS from "./images/TWSScreen.png";
import PetMatch from "./images/PetMatchScreen.png";
import RE from "./images/REScreen.png";
import ScreenTime from "./images/ScreenTimeScreen.png";
import JAG from "./images/JAGScreen.png";
import PackTrack from "./images/PackTrackScreen.png";

import { Link } from "react-router-dom";

import "./App.css";
// import "./sectionStyles/Projects2.css";
// import "./sectionStyles/About.css";

import "./sectionStyles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <a id="about"></a>
        <Nav></Nav>
        <Grid columns={2} stackable>
          <Grid.Column className="introText">
            <h1>Hi! Nice to meet you, I'm Talia.</h1>
            <p className="subTitle">A Design-Focused Developer.</p>
          </Grid.Column>
          <Grid.Column>
            <div className="about">
              <p id="aboutBlurb">
                <img src={profilePic} id="profilePic"></img>
              </p>

              <div className="button-container">
                <div className="glass-btn blue-btn">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/talia-bahar-b65920145/ "
                  >
                    <img
                      src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png"
                      alt="linkedin"
                      style={{ width: "65px" }}
                    />
                  </a>
                </div>
                <div className="glass-btn purple-btn">
                  <a target="_blank" href="https://github.com/taliabahar">
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/GitHub-512.png"
                      alt="github"
                      style={{ width: "65px" }}
                    />
                  </a>
                </div>
                <div className="glass-btn darkblue-btn">
                  <a target="_blank" href="https://www.behance.net/taliabahar">
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Behance-512.png"
                      alt="behance"
                      style={{ width: "55px" }}
                    />
                  </a>
                </div>
                <a target="_blank" href="https://dribbble.com/taliabahar">
                  <div className="glass-btn pink-btn">
                    <img
                      src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Dribbble-128.png"
                      alt="dribble"
                      style={{ width: "50px" }}
                    />
                  </div>
                </a>
              </div>
              <div className="aboutBtns">
                <a href={Resume} target="newTab">
                  <button className="aboutBtn">TECHNICAL RESUME</button>
                </a>
                <a href="mailto:tbahar@lion.lmu.edu.com">
                  <button className="aboutBtn">CONTACT ME :)</button>
                </a>
              </div>
            </div>
          </Grid.Column>
        </Grid>
        {/* <a id="projects"></a> */}
        <div className="projects">
          <nav>
            <Grid
              container
              columns={2}
              stackable
              // doubling
              // relaxed
              style={{ display: "inline" }}
            >
              <Grid.Column>
                <Link to="/petmatch">
                  <div className="projectContainer">
                    <div>
                      <h4 style={{ float: "left" }}>Pet Match</h4>
                      <p style={{ float: "right", paddingTop: "12px" }}>2020</p>
                    </div>
                    <Image
                      src={PetMatch}
                      alt="Pet Match Screen"
                      // style={{ width: "20px" }}
                    />
                    <p
                      style={{
                        textAlign: "center",
                        color: "black",
                        opacity: 0.6,
                      }}
                    >
                      One line description maybe. One line description maybe.
                    </p>
                  </div>
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Link to="/packagetracker">
                  <div className="projectContainer">
                    <h4 style={{ float: "left" }}>Package Tracker</h4>
                    <p style={{ float: "right", paddingTop: "12px" }}>2020</p>

                    <Image src={PackTrack} alt="Package Tracker Screen" />
                    <p
                      style={{
                        textAlign: "center",
                        color: "black",
                        opacity: 0.6,
                      }}
                    >
                      One line description maybe. One line description maybe.
                    </p>
                  </div>
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Link to="/tws">
                  <div className="projectContainer">
                    <h4 style={{ float: "left" }}>TWS</h4>
                    <p style={{ float: "right", paddingTop: "12px" }}>2020</p>
                    <Image
                      src={TWS}
                      alt="TWS Screen"
                      style={{ marginBottom: "66px" }}
                    />
                    <p
                      style={{
                        textAlign: "center",
                        color: "black",
                        opacity: 0.6,
                      }}
                    >
                      One line description maybe. One line description maybe.
                    </p>
                  </div>
                </Link>
              </Grid.Column>
              <Grid.Column>
                <div className="projectContainer">
                  <h4 style={{ float: "left" }}>RE</h4>
                  <p style={{ float: "right", paddingTop: "12px" }}>
                    2020
                  </p>{" "}
                  <a
                    target="newTab"
                    href="https://www.behance.net/gallery/101712551/RE-Web-App"
                  >
                    <Image src={RE} />
                    <p
                      style={{
                        textAlign: "center",
                        color: "black",
                        opacity: 0.6,
                      }}
                    >
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
                    <p
                      style={{
                        textAlign: "center",
                        color: "black",
                        opacity: 0.6,
                      }}
                    >
                      One line description maybe. One line description maybe.
                    </p>
                  </a>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="projectContainer">
                  <h4 style={{ float: "left" }}>Screen Time</h4>
                  <p style={{ float: "right", paddingTop: "12px" }}>
                    2020
                  </p>{" "}
                  <a
                    target="newTab"
                    href="https://www.behance.net/gallery/102711929/ScreenTime-Adobe-Creative-Jam-x-Netflix"
                  >
                    <Image src={ScreenTime} alt="Screen Time Screen" />
                    <p
                      style={{
                        textAlign: "center",
                        color: "black",
                        opacity: 0.6,
                      }}
                    >
                      One line description maybe. One line description maybe.
                    </p>
                  </a>
                </div>
              </Grid.Column>
            </Grid>
          </nav>
          <footer>© 2021 Talia Bahar</footer>
        </div>
      </div>
    </div>
  );
}

export default Home;
