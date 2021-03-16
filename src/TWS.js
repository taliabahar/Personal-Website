import React from "react";
import "./App.css";
import "./sectionStyles/TWS.css";
import { Grid, Image } from "semantic-ui-react";
import TWSScreen from "./images/TWSScreen.png";
import persona1 from "./images/persona1.png";
import persona2 from "./images/persona2.png";
import stat1 from "./images/stat1.png";
import stat2 from "./images/stat2.png";
import stat3 from "./images/stat3.png";
import stat4 from "./images/stat4.png";
import twsLowFi from "./images/twsLowFi.png";
import twsHiFi from "./images/twsHiFi.png";
import twsGraphics from "./images/twsGraphics.png";
import twsFooter from "./images/twsFooter.png";
import twsModal from "./images/twsModal.png";
import twsArticle from "./images/twsArticle.png";

function TWS() {
  return (
    <div className="TWS">
      <div className="top">
        <a href="https://github.com/The-Whole-Story/tws-client" target="_blank">
          <img
            src="http://pngimg.com/uploads/github/github_PNG40.png"
            style={{ width: "5%", float: "right" }}
          ></img>
        </a>
        <a
          href="https://www.behance.net/gallery/101582319/The-Whole-Story"
          target="_blank"
        >
          <img
            src="https://cdn3.iconfinder.com/data/icons/picons-social/57/77-behance-512.png"
            style={{ width: "4.7%", float: "right" }}
          ></img>
        </a>
        <a href="https://tws-client-marcob.vercel.app/" target="_blank">
          <img
            src="https://icon-library.com/images/website-icon-png-black/website-icon-png-black-1.jpg
            "
            style={{
              width: "4.2%",
              float: "right",
              marginTop: "5px",
              marginRight: "5px",
            }}
          ></img>
        </a>
        <h2 id="title">The Whole Story</h2>
        <p>
          UX Designer/Front-End Developer/Illustrator • React Web App • 2020{" "}
        </p>
        <p>
          Collaborated on with
          <a href="https://github.com/mb0606"> Marco Berardini</a> and{" "}
          <a href="https://github.com/anacanm">Anacan Mangelsdorf</a>
        </p>
        <p style={{ fontStyle: "oblique" }}>
          Mozilla Fix-the-Internet Internship MVP
        </p>
      </div>
      <Grid stackable>
        <Grid.Row centered>
          <img src={TWSScreen} style={{ width: "70%" }} />
          <Grid.Column
            width={9}
            style={{ textAlign: "center", marginBottom: "80px" }}
          >
            <h3>The Problem</h3>
            <p>
              Current news media culture is divisive and hurts the public's
              media literacy and sense of individualism. News is both written
              from biased points of views and consumed by people looking for
              news that caters to their own opinions. Thus, people are not open
              to reading news from sources they do not feel align with their own
              politics. No one is ever forced to challenge their own perspective
              and get out of their political comfort zone.
            </p>{" "}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ marginBottom: "60px" }}>
          <Grid.Column width={4}>
            <img src={stat1} style={{ width: "500px" }}></img>
          </Grid.Column>
          <Grid.Column width={4}>
            <img src={stat2} style={{ width: "500px" }}></img>
          </Grid.Column>
          <Grid.Column width={4}>
            <img src={stat3} style={{ width: "500px" }}></img>
          </Grid.Column>
          <Grid.Column width={4}>
            <img src={stat4} style={{ width: "500px" }}></img>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="check" style={{ marginBottom: "30px" }}>
          <Grid.Column width={8}>
            <h3 style={{ textAlign: "center" }}>The Proposal</h3>
            <p>
              A news centered web app that removes avenues for implicit bias to
              affect the reader's perception of a news topic. Upon choosing a
              topic, they would be served a chain of articles that have all
              branding, titles, and images stripped so as to not influence their
              POV before actually reading the article. At the end of every
              article readers are asked to vote on whether or not they liked the
              article before the source of the article is revealed. After
              reading several articles about one topic through this format we
              hope readers would truly be able to get the whole story and check
              their own biases.
            </p>{" "}
          </Grid.Column>
          <Grid.Column width={8}>
            <h3 style={{ textAlign: "center" }}>User Benefits</h3>
            <ul>
              <li>
                The Whole Story can help the younger generation become
                politically-informed in a holistic manner by removing avenues
                for implicit bias to enter their news stream leading to a deeper
                and more individualistic political understanding
              </li>
              <li>
                Forces users to confront their own implicit bias by reading
                articles from sources they normally wouldn't
              </li>
              <li>
                Delivers several curated articles from different political
                leaning sources on a single topic so a user can understand all
                sides of the issue
              </li>
            </ul>{" "}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ marginTop: "20px" }}>
          <Grid.Column width={8}>
            <img src={persona1} style={{ height: "500px" }} />
          </Grid.Column>
          <Grid.Column width={8}>
            <img src={persona2} style={{ height: "500px" }} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className="check">
            <h3>App Breakdown</h3>
            <p>
              <span>How It Works</span>
              <br></br> Articles presented on the home page contain a topic and
              related categories. Choosing a topic leads the user to a chain of
              articles from different credible sources related to the topic and
              categories mentioned. Users can either choose a news topic from
              the home page or search for their own.
            </p>
            <p>
              Unlike other sites that redirect users to a list of flashy article
              titles designed to grab their attention, The Whole Story's search
              leads to a list of subtopics, where users can choose any topic
              that interests them free of any external influences. Users are
              presented with a chain of articles to read surrounding the chosen
              topic from varying sources on the political party spectrum to help
              them grasp the whole story. Articles are presented with their
              title, images, and branding removed to bring the focus back to the
              written word.
            </p>
            <p>
              Upon finishing reading an article users are asked to up or
              downvote what they have read. Only then will the source be
              revealed. Begging the question, does the user's reaction to the
              article match the news outlet?
            </p>

            <p>
              <span>My Role</span>
              <br></br> I served as the User Experience(UX)/User Interface(UI)
              Design lead on the project as well as a Front-End developer. As
              the UX lead, I led the first phase of the project conducting user
              surveys, research on existing news applications, and creating low
              and mid-fi wireframes individually. I also crafted our user
              personas, ran user tests once we had a working product, and
              created all artwork for the app. Through this project I
              strengthened my React programming and UX skills, gained experience
              working with a team on a large web app, and received product
              design mentorship from Mozilla professionals.
            </p>

            <p>
              <span>Design</span>
              <br></br>
              <p>
                Intending to bring back the focus to the text and remove imagery
                we wanted The Whole Story site to be clean and not busy. The
                site needed to be neutral to show we are not associated with any
                political party, but since our demographic was younger people
                still needed to have elements of intrigue. I chose to use a teal
                shade as our pop of color as it is not a color associated with
                any political parties. After conducting mid-fi wireframe
                surveys, I created the footer graphic to bring life to the site
                and as a way to brand The Whole Story. The set of 4 promotional
                images that appear throughout the site serve the same purpose.
                Pages were also optimized for readability with the use of grids
                and additional information was put into modals.
              </p>
            </p>
            <img src={twsLowFi}></img>
            <img src={twsHiFi}></img>

            <p>
              <span>Issues</span>
              <p>
                At the beginning of the project, we struggled with figuring out
                how to gamify our app to attract users. We ultimately came up
                with the idea of giving users medals as they read a chain of
                articles. If they read 2/7 articles, for example, they would be
                a bronze medal and be somewhat familiar with the topic and if
                they read 7/7 articles they would be a gold medal and be an
                expert on the topic.
              </p>
              <br></br>
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{ margin: "40px 0px" }}>
          <Grid.Column className="check">
            <h3>Design Assets</h3>
            <img
              src={twsGraphics}
              style={{ margin: "0 auto", width: "100%" }}
            ></img>
            <img
              src={twsFooter}
              style={{ margin: "0 auto", width: "100%" }}
            ></img>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column className="check">
            <h3>Tech Used</h3>
            <ul>
              <li>
                <span>Languages:</span> JavaScript, HTML, CSS
              </li>
              <li>
                <span>Frameworks: </span>React, Semantic UI
              </li>
              {/* <li>
                <span>APIs:</span> Shippo, Mapbox
              </li> */}
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
          <img src={twsModal} style={{ width: "90%" }}></img>
          <img
            src={twsArticle}
            style={{
              width: "90%",
              marginTop: "40px",
              border: "solid 1px black",
            }}
          ></img>
        </Grid.Row>
      </Grid>
      <footer>© 2021 Talia Bahar</footer>
    </div>
  );
}

export default TWS;
