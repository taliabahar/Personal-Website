import React from "react";
import "./App.css";
import "./sectionStyles/ScreenTime.css";
import { Grid } from "semantic-ui-react";
import ScreenTimeScreen from "./images/ScreenTimeScreen.png";
import styleGuide from "./images/ScreenTime_StyleGuide.png";
import wire1 from "./images/STWire1.png";
import wire2 from "./images/STWire2.png";
import wire2b from "./images/STWire2b.png";
import wire3 from "./images/STWire3.png";
import wire4 from "./images/STWire4.png";
import wire5 from "./images/STWire5.png";
import STVid1 from "./videos/STVid1.mp4";
import STVid2 from "./videos/STVid2.mp4";

import hifi1 from "./images/STHiFi1.png";
import hifi2 from "./images/STHiFi2.png";
import hifi3 from "./images/STHiFi3.png";
import hifi4 from "./images/STHiFi4.png";
import hifi5 from "./images/STHiFi5a.png";
import hifi6 from "./images/STHiFi5.png";
import hifi7 from "./images/STHiFi6.png";
import hifi8 from "./images/STHiFi7.png";

function ScreenTime() {
  return (
    <div className="ScreenTime">
      <div className="top">
        <a
          href="https://www.behance.net/gallery/102711929/ScreenTime-Adobe-Creative-Jam-x-Netflix"
          target="_blank"
        >
          <img
            src="https://cdn3.iconfinder.com/data/icons/picons-social/57/77-behance-512.png"
            style={{ width: "4.7%", float: "right" }}
          ></img>
        </a>
        <h2 id="title">ScreenTime</h2>
        <p>UX Designer • Web Experience • 2020 </p>
        <p>
          Collaborated on with
          <a href="https://www.behance.net/nataliestainton">
            {" "}
            Natalie Stainton
          </a>
        </p>
        <p style={{ fontStyle: "oblique" }}>Adobe x Netflix Creative Jam</p>
      </div>
      <Grid stackable>
        <Grid.Row centered>
          <img src={ScreenTimeScreen} style={{ width: "70%" }} />
          <Grid.Column
            width={9}
            style={{ textAlign: "center", marginBottom: "80px" }}
          >
            <h3>The Problem</h3>
            <p>
              Amid a global pandemic where people have more free time than ever
              yet are more isolated than ever, Netflix asked us to design an
              enhanced streaming service that allows communities to virtually
              watch a TV show or movie together.
            </p>{" "}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="check" style={{ marginBottom: "30px" }}>
          <Grid.Column width={8}>
            <h3 style={{ textAlign: "center" }}>The Proposal</h3>
            <p>
              A web app that allows users to form connections based on their
              favorite TV shows and movies. Users can create custom playlists to
              share with other users, schedule watch parties, and interact with
              custom polls during their viewing experiences. ScreenTime makes
              the steaming experience more immersive and communal by sparking
              conversation.{" "}
            </p>{" "}
          </Grid.Column>
          <Grid.Column width={8}>
            <h3 style={{ textAlign: "center" }}>User Benefits</h3>
            <ul>
              <li>
                Users can find those they share common interests with all from
                the comfort and safety of their own home
              </li>
              <li>
                Users can easily discover new favorites and share their own
                through the playlist feature
              </li>
              <li>
                Makes it easier for groups to simultaneously watch the same show
                or movie
              </li>
              <li>
                Users can enage in unqiue debates and see things from different
                perspectives as they watch a series or movie
              </li>
            </ul>{" "}
          </Grid.Column>
        </Grid.Row>
        <Grid centered style={{ margin: "60px 0" }}>
          <Grid.Row>
            <img src={wire1} style={{ width: "40%", margin: "0 20px" }} />
            <img src={wire2} style={{ width: "40%", margin: "0 20px" }} />
          </Grid.Row>
          <Grid.Row>
            <img src={wire2b} style={{ width: "40%", margin: "0 20px" }} />
            <img src={wire3} style={{ width: "40%", margin: "0 20px" }} />
          </Grid.Row>
          <Grid.Row>
            <img src={wire4} style={{ width: "40%", margin: "0 20px" }} />
            <img src={wire5} style={{ width: "40%", margin: "0 20px" }} />
          </Grid.Row>
        </Grid>

        <Grid.Row>
          <Grid.Column className="check">
            <h3>App Breakdown</h3>
            <p>
              <span>How It Works</span>
              <br></br>
              Upon signing up ScreenTime users are prompted to input their
              favorite genres, movies, and TV shows that will be displayed on
              their profile. From there they can view the profiles of others and
              find those with common viewing interests. Logged-in users can
              create custom viewing playlists or watch those of others.
              Playlists feature user-created polls before, during, and after
              users can choose to interact with. Users can join watch parties
              that are happening, upcoming, recommended, or that feature
              something out of their comfort zone. They can also schedule their
              own public or private watch parties.
            </p>
            <p>
              During viewings, users can react live, chat, and bookmark their
              favorite scenes which are saved to their profiles. After viewings,
              users can rate and review the show or movie they watched. They can
              also explore discussion topics related to a series or movie, view
              scenes favorited by other users, and view or submit polls.
            </p>

            <p>
              <span>My Role</span>
              <br></br>I came up with the idea of centering our experience
              around shareable user playlists. As a binge-watcher, I often
              struggle with remembering what shows I've watched when friends ask
              me for recommendations. So I wanted to create a platform where I
              could organize all the content I want to watch and have watched. I
              also came up with the idea of having scheduled watch parties to
              create a stronger sense of community within the platform.
            </p>
            <p>
              When it came to creating our wireframes my partner and I worked
              very closely together and distributed all work equally.
            </p>
            <p>
              <span>Design</span>
              <br></br>
              <p>
                As this was a Netflix-sponsored UX Jam my partner and I expanded
                upon their original layout and made it work for our concept. We
                focused on grouping content so that users do not get overwhelmed
                with their options and various visuals throughout the app. We
                chose to keep colors neutral for the most part as the cover
                images of the playlists and watch parties bring a lot of
                vibrancy to the app on their own. We used a calming mint color
                as our main accent color to differentiate ourselves from other
                brands.
              </p>
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={8}>
            {" "}
            <img src={styleGuide} style={{ margin: "45px 0px" }} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className="check">
            <p>
            <span>Challenges</span>
              <br></br>
              As we only had a 24-hour window to work on this project my partner
              and I did not run into any large-scale issues. We communicated
              very well and developed the idea together rather quickly before
              moving onto creating our high-fidelity wireframes. We were both
              passionate about the idea and excited to bring it to fruition. The
              only struggle we really had was deciding a name and color scheme
              to capture our experience. We tested a few ideas on our friends
              which helped us come to a final decision.
            </p>
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
        <Grid.Row centered>
          <video
            src={STVid1}
            width="650"
            height="550"
            controls
            style={{ marginBottom: "50px", marginRight: "10px" }}
          />
          <video
            src={STVid2}
            width="650"
            height="550"
            controls
            style={{ marginBottom: "50px", marginLeft: "10px" }}
          />
        </Grid.Row>

        <Grid centered style={{ margin: "60px 0" }}>
          <Grid.Row>
            <img src={hifi1} style={{ width: "40%", margin: "0 20px" }} />
            <img src={hifi2} style={{ width: "40%", margin: "0 20px" }} />
          </Grid.Row>
          <Grid.Row>
            <img src={hifi3} style={{ width: "40%", margin: "0 20px" }} />
            <img src={hifi4} style={{ width: "40%", margin: "0 20px" }} />
          </Grid.Row>
          <Grid.Row>
            <img src={hifi5} style={{ width: "40%", margin: "0 20px" }} />
            <img src={hifi6} style={{ width: "40%", margin: "0 20px" }} />
          </Grid.Row>
          <Grid.Row>
            <img src={hifi7} style={{ width: "40%", margin: "0 20px" }} />
            <img src={hifi8} style={{ width: "40%", margin: "0 20px" }} />
          </Grid.Row>
        </Grid>
      </Grid>
      <footer>© 2021 Talia Bahar</footer>
    </div>
  );
}
{
}

export default ScreenTime;
