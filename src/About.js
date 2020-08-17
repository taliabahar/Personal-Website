import React from "react";
import "./App.css";

function About() {
  return (
    <div className="about">
      <h1>Hi! Nice to Meet You, I'm Talia</h1>
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

        <div class="button-container">
          <div class="glass-btn blue-btn">
            <img
              src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png"
              alt="linkedin"
              style={{ width: "50px" }}
            />
          </div>
          <div class="glass-btn purple-btn">
            <img
              src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/GitHub-512.png"
              alt="github"
              style={{ width: "50px" }}
            />
          </div>
          <div class="glass-btn darkblue-btn">
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Behance-512.png"
              alt="behance"
              style={{ width: "45px" }}
            />
          </div>
          <div class="glass-btn pink-btn">
            <img
              src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Dribbble-128.png"
              alt="dribble"
              style={{ width: "40px" }}
            />
          </div>
        </div>
        <button className="aboutBtn">RESUME</button>
        <button className="aboutBtn">CONTACT ME</button>
      </div>
    </div>
  );
}

export default About;
