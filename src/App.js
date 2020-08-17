import React from "react";
import "./App.css";
import circle from "./images/circle.png";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Hi! Nice to Meet You, I'm Talia</h1>
      </div>
      <div className="about">
        <p id="aboutBlurb">
          and I'm looking for a ____. I am a ____ in Los Angeles, CA. I enjoy. I
          have a passion for. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec egestas ex enim, id imperdiet elit ultricies vel. Donec
          nec iaculis turpis. Sed gravida ipsum at arcu consectetur, eu semper
          nunc congue. Nam eu sagittis odio. Integer nisi mauris, vulputate eu
          elit dapibus, venenatis cursus turpis. Vivamus vestibulum nisi eget
          tempus ornare. Nunc metus lectus, porttitor nec elementum nec,
          suscipit at nisi. Vivamus finibus nunc vitae aliquet pulvinar. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet
          rhoncus eros. Integer nisi mauris, vulputate eu elit dapibus,
          venenatis cursus turpis. Vivamus vestibulum nisi eget tempus ornare.
          Nunc metus lectus, porttitor nec elementum nec, suscipit at nisi.
          Vivamus finibus nunc vitae aliquet pulvinar. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Duis sit amet rhoncus eros
        </p>

        <div class="button-container">
          <div class="glass-btn blue-btn">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/talia-bahar-b65920145/ "
            >
              <img
                src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png"
                alt="linkedin"
                style={{ width: "50px" }}
              />
            </a>
          </div>
          <div class="glass-btn purple-btn">
            <a target="_blank" href="https://github.com/taliabahar">
              <img
                src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/GitHub-512.png"
                alt="github"
                style={{ width: "50px" }}
              />
            </a>
          </div>
          <div class="glass-btn darkblue-btn">
            <a target="_blank" href="https://www.behance.net/taliabahar">
              <img
                src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Behance-512.png"
                alt="behance"
                style={{ width: "45px" }}
              />
            </a>
          </div>
          <a target="_blank" href="https://dribbble.com/taliabahar">
            <div class="glass-btn pink-btn">
              <img
                src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Dribbble-128.png"
                alt="dribble"
                style={{ width: "40px" }}
              />
            </div>
          </a>
        </div>
        <button className="aboutBtn">RESUME</button>
        <button className="aboutBtn">CONTACT ME :)</button>
      </div>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
