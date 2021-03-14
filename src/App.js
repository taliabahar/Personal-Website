import React from "react";
import "./App.css";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Projects2 from "./Projects2";
import petmatch from "./PetMatch";
import About from "./About";
import AboutMe from "./AboutMe";
import Nav from "./Nav";
import PetMatch from "./PetMatch";
import PackageTracker from "./PackageTracker";
import TWS from "./TWS";
import Footer from "./Footer";
import Home from "./Home";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      {/* <About></About> */}
      {/* <Projects></Projects> */}
      {/* <AboutMe></AboutMe> */}
      {/* <Projects2> </Projects2> */}
      {/* <PetMatch></PetMatch> */}
      {/* <PackageTracker></PackageTracker> */}
      {/* <TWS></TWS> */}
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
