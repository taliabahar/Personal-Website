import React from "react";
import "./App.css";
import "./sectionStyles/PetMatch.css";
import quizVideo from "./videos/PetMatch.mp4";
import { Grid, Image } from "semantic-ui-react";
import PetMatchScreen from "./images/PetMatchScreen.png";

function PetMatch() {
  return (
    <div className="PetMatch">
      <div className="top">
        <a href="https://github.com/taliabahar/pet-match" target="_blank">
          <img
            src="http://pngimg.com/uploads/github/github_PNG40.png"
            style={{ width: "5%", float: "right" }}
          ></img>
        </a>
        <h2 id="title">PetMatch</h2>
        <p>Project Manager / Developer • React Web App • 2020 </p>
        <p>
          Collaborated on with
          <a href="https://github.com/JigarSwam"> Jigar Swaminarayan</a>,{" "}
          <a href="https://github.com/nraymundo">Nico Raymundo</a>, and{" "}
          <a href="https://github.com/jennifer-s19">Jennifer Siao</a>
        </p>
        <p style={{ fontStyle: "oblique" }}>
          CMSI 399 App Development Practicum Final Project
        </p>
      </div>
      <Grid stackable>
        <Grid.Row centered>
          <img src={PetMatchScreen} style={{ width: "70%" }} />
          <Grid.Column
            width={9}
            style={{ textAlign: "center", marginBottom: "80px" }}
          >
            <h3>The Problem</h3>
            <p>
              Shelters are closing down due to the Coronavirus pandemic and are
              in need of people to adopt or foster dogs.
            </p>{" "}
          </Grid.Column>
        </Grid.Row>
        {/* <img
          src="https://i.imgur.com/wpZq6zy.png"
          alt="PetMatch homepage"
          style={{ width: "50%" }}
        ></img> */}

        <Grid.Row className="check" style={{ marginBottom: "30px" }}>
          <Grid.Column width={8}>
            <h3 style={{ textAlign: "center" }}>The Proposal</h3>
            <p>
              A web app that promotes the adoption of shelter animals to help
              save animals and also help potentially mitigate the anxiety and
              boredom Coronavirus has caused by helping users find local
              shelters and allowing them to easily see what animals can be
              adopted or fostered.
            </p>{" "}
          </Grid.Column>
          <Grid.Column width={8}>
            <h3 style={{ textAlign: "center" }}>User Benefits</h3>
            <ul>
              <li>
                Adopting from a shelter is much more cost effective than
                purchasing a dog from a breeder
              </li>
              <li>
                Owning a pet has psychological, emotional and physical benefits
              </li>
              <li>Helps relieve quarantined people of boredness</li>
              <li>
                People are home all day so they have the time to train a new
                animal
              </li>
            </ul>{" "}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            {" "}
            <img
              src="https://i.imgur.com/6ho7x8H.png"
              style={{ border: "solid 1px black" }}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            {" "}
            <img
              src="https://i.imgur.com/F1GNCzl.png"
              style={{ border: "solid 1px black" }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className="check">
            <h3>App Breakdown</h3>
            <p>
              <span>How It Works</span>
              <br></br> Users take a quiz where they can specify their pet wants
              and needs before being a shown a gallery of their potential pet
              matches. PetMatch simplifies the pet matching process by
              narrowinng down search results based on location, type of animal,
              size, and if the desired pet is good with kids and other animals.
              Aside from the quiz, PetMatch also provides users with information
              on shelters and a resources page to help them take care of their
              newly adopted pets.
            </p>

            <p>
              <span>My Role</span>
              <br></br>I came up with concept and served as Project Manager
              intending to promote the adoption of shelter animals to help save
              animals who are being put down due to shelters closing down and
              help mitigate the anxiety and boredom quarantining has caused. I
              delegated roles to team mates and personally worked on the home
              and quiz pages. I also spearheaded the site's visual and
              interaction design.
            </p>

            <p>
              <span>Design</span>
              <br></br>
              With the goal in mind to make the process of finding a pet to
              adopt as easy as possible, I wanted the site design to be clean
              and intutive. We kept colors and pages to a minimum and employed
              animal graphics to set the tone of the site.
            </p>

            <p>
              <span>Issues</span>
              <br></br>
              Integrating the Petfinder API was more difficult than expected.
              Unlike APIs I was used to working with the Petfiner API constantly
              generated a new token that had to be fed into the function call
              Each time a token was generated, we needed to log that a token had
              been taken but not log the actual token. Token had to be stashed
              in memory. Working with my teammate and our professor we were able
              to succesfully integrate the Petfinder API which helped me become
              more comfortable with API integration as a whole.
            </p>
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
                <span>Frameworks: </span>React, Semantic UI, Bootstrap
              </li>
              <li>
                <span>APIs:</span> Petfinder API
              </li>
              <li>
                <span>Database:</span> Firebase
              </li>
            </ul>
          </Grid.Column>
        </Grid.Row>
        <video
          src={quizVideo}
          width="750"
          height="500"
          controls
          style={{ margin: "0 auto", marginBottom: "50px" }}
        />
      </Grid>
      <footer>© 2021 Talia Bahar</footer>
    </div>
  );
}

export default PetMatch;
