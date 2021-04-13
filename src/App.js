import React from "react";
import "./App.css";
import AboutMe from "./AboutMe";
import Nav from "./Nav";
import PetMatch from "./PetMatch";
import PackageTracker from "./PackageTracker";
import TWS from "./TWS";
import Footer from "./Footer";
import Home from "./Home";
import RE from "./RE";
import JAG from "./JAG";
import ScreenTime from "./ScreenTime";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <div>
          <Switch>
            <Route exact path="/Personal-Website/">
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
            <Route exact path="/re">
              <RE />
            </Route>
            <Route exact path="/jag">
              <JAG />
            </Route>
            <Route exact path="/screentime">
              <ScreenTime />
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
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
