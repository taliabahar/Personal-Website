import React from "react";
import "./App.css";
import circle from "./images/circle.png";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";

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
        <img class="contactIcons" src={circle}></img>

        <button>RESUME</button>
        <button>CONTACT ME</button>
      </div>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
