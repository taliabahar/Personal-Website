import React from "react";
import "./App.css";

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div id="leftSide">
        <h3>1 - Graphic Design</h3>
        <ul>
          <li>UI Design</li>
          <li>Website &amp; Digital Design</li>
          <li>Brading &amp; Visual Identity</li>
          <li>Print Design</li>
        </ul>

        <h3>2 - Front End Development</h3>
        <ul>
          <li>HTML / CSS</li>
          <li>JS &amp; Jquery Startup</li>
          <li>WordPress</li>
          <li>Jomla</li>
        </ul>
        <h3>3 - Illustration</h3>
        <ul>
          <li>Editorial</li>
          <li>Narrative</li>
          <li>Motion Graphics</li>
          <li>Animation</li>
          <li>Visual Effects</li>
        </ul>
      </div>
      <div id="rightSide">
        <h3>Languages</h3>
        <ul>
          <li>Editorial</li>
          <li>Narrative</li>
          <li>Motion Graphics</li>
          <li>Animation</li>
          <li>Visual Effects</li>
        </ul>
        <h3>Technologies</h3>
        <ul>
          <li>Sales Marketing</li>
          <li>Invoice</li>
          <li>eCommerce</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
