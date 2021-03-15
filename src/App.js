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

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <AboutMe />
            </Route>
            <Route exact path="/petmatch">
              <PetMatch />
            </Route>
            <Route exact path="/packagetracker">
              <PackageTracker />
            </Route>
            <Route exact path="/tws">
              <TWS />
            </Route>
          </Switch>
        </div>
        {/* <Home></Home> */}
        {/* <About></About> */}
        {/* <Projects></Projects> */}
        {/* <AboutMe></AboutMe> */}
        {/* <Projects2> </Projects2> */}
        {/* <PetMatch></PetMatch> */}
        {/* <PackageTracker></PackageTracker> */}
        {/* <TWS></TWS> */}
        {/* <p className="footer">© 2021 Talia Bahar</p> */}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
