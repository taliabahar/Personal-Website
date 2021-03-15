import React from "react";
import "./App.css";
import "./sectionStyles/PackageTracker.css";
import trackVideo from "./videos/PackTrackVid.mov";
import { Grid, Image } from "semantic-ui-react";
import PackTrackScreen from "./images/PackTrackScreen.png";
import pack1 from "./images/pack1.png";
import pack2 from "./images/pack2.png";
import packWire from "./images/packWire.png";
import taskFlow from "./images/taskFlow.png";
import packBG from "./images/packBG.png";

function PackageTracker() {
  return (
    <div className="PackageTracker">
      <div className="top">
        <a href="https://github.com/taliabahar/package-tracker" target="_blank">
          <img
            src="http://pngimg.com/uploads/github/github_PNG40.png"
            style={{ width: "5%", float: "right" }}
          ></img>
        </a>
        <a
          href="https://www.behance.net/gallery/92691197/Package-Tracker-Web-App"
          target="_blank"
        >
          <img
            src="https://cdn3.iconfinder.com/data/icons/picons-social/57/77-behance-512.png"
            style={{ width: "4.7%", float: "right" }}
          ></img>
        </a>
        <h2 id="title">Package Tracker</h2>
        <p>Full-Stack Developer • React Web App • 2019 </p>
        <p style={{ fontStyle: "oblique" }}>
          CMSI 370 Interaction Design Final Project
        </p>
      </div>
      <Grid stackable>
        <Grid.Row centered>
          <img src={PackTrackScreen} style={{ width: "70%" }} />
          <Grid.Column
            width={9}
            style={{ textAlign: "center", marginBottom: "80px" }}
          >
            <h3>The Problem</h3>
            <p>
              With the rise of online shopping, it can be diificult to keep
              track of shipments through emails.
            </p>{" "}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="check" style={{ marginBottom: "30px" }}>
          <Grid.Column width={8}>
            <h3 style={{ textAlign: "center" }}>The Proposal</h3>
            <p>
              A web app that consolidates shipments so users can easily and more
              efficiently track their packages. Instead of having to dig through
              emails and constantly find the tracking status of all online
              orders made the user can provide my web app with the carrier and
              tracking number related to each of their orders and track
              everything at once and on one page. The delivery status and ETA of
              the user’s package will also be accompanied by a map to display
              the package's current location. Users will also be able to assign
              a name to their package so that they know which package is which
              on the tracking page. With this tool, users can see when all their
              packages will arrive at their destination in one place.
            </p>{" "}
          </Grid.Column>
          <Grid.Column width={8}>
            <h3 style={{ textAlign: "center" }}>User Benefits</h3>
            <ul>
              <li>
                This app could be used by all types of online shoppers looking
                for an easy way to track all their orders made across different
                sites
              </li>
              <li>
                Gives user the freedom to plan their day around their estimated
                ETAs if they need to be home when their package is delivered
              </li>
              <li>
                If any packages are delayed or arrive earlier than expected it
                will also be easier to see these changes through my web app{" "}
              </li>
            </ul>{" "}
          </Grid.Column>
        </Grid.Row>
        <img
          src={packWire}
          alt="initial wireframes"
          style={{ width: "70%", margin: "0 auto" }}
        />
        <Grid.Row>
          <Grid.Column className="check">
            <h3>App Breakdown</h3>
            <p>
              <span>How It Works</span>
              <br></br> The app tracks packages given a carrier and tracking
              number and utilizes the Shippo and Mapbox APIs to display a
              package’s current status and location on a map within a React
              Modal.
            </p>
            <p>
              My package tracker is a single-page web app that initially loads
              with a single form for users to fill out complete with a dropdown
              of carriers, one text field for the tracking number, and one text
              field for the package name. The form also includes a track button
              and a remove package button. Users are also given the option to
              add as many package input forms as they like through the add
              package button. Users can thus easily track multiple packages at
              once then use the remove package button to remove packages from
              the form once they no longer need to track said package.
            </p>
            <p>
              Upon completing all three inputs and clicking the track button if
              the user’s data is valid a modal will appear in the middle of the
              screen. This modal displays the user’s package name, package
              status accompanied by a status indicator symbol, the status
              detail, and the Mapbox map to display their package’s current
              location. If the user inputs a tracking number or carrier that
              does not correlate to a real package the modal will not pop up.
              Instead, an error message appears.
            </p>
            <img src={taskFlow} style={{ margin: "45px 0px" }} />

            <p>
              <span>My Role</span>
              <br></br>I individually wireframed, developed, and tested this
              single-page React Hooks package tracker web app in order to
              satisfy Nielson’s five usability metrics. I started off by
              researching usability guidelines to inform my design decisions and
              using Postman and Curl to test the API endpoints I would be
              utilzing. I then designed all the app artwork myseelf and
              integrated both mock data and real data from two different APIs
              into the app.
            </p>

            <p>
              <span>Design</span>
              <br></br>
              <p>
                My package tracking web app is a single page app, with only
                three input fields, three buttons, designed to not overwhelm the
                user, to prevent errors, and to be visually satisfying. Users
                would not have a hard time tracking packages through my app
                because there are only 3 main functionalities (track package,
                add package, and remove package) presented to them that I have
                designed to be intuitive.{" "}
              </p>
              <p>
                {" "}
                Since users only are required to manipulate three fields that
                means there is less room for user-caused error ands it should be
                easy for users to learn and remember the process of tracking
                packages on my web app. By adding the carriers entry as a
                dropdown menu, instead of a text field, it prevents a lot of
                errors that could be caused by spelling inconsistencies. For
                example if users type usps vs USPS. Having the dropdown also
                allows a user to quickly determine whether or not their carrier
                can be accessed through my web app. I also added to the site’s
                efficiency by having the user assign a name to their package.
                With this option users won’t have to memorize which tracking
                order number relates to which package in their tracking log,
                which also makes the information more digestible.
              </p>
              <p>
                All 3 buttons were designed with click affordances in mind to
                easily indicate to the user their functionality. The track
                button includes a delivery truck image and is animated to
                indicate its activity. The remove package button is a red X
                which are two things commonly associated with removal and prompt
                caution. Finally, the add package button has a green plus on it.
                I also incorporated a red error message that is prompted when a
                user attempts to track a non existent package.
              </p>
              <p>
                Aside from its usability, my web app's consistent and organized
                design adds to my user's subjective satisfaction. I kept the
                color scheme consistent; I used mostly the same shades of blues,
                greys, and greens throughout. My centered layout doesn’t look
                unbalanced and as users add more packages it will never look to
                cluttered and thus never overwhelm the user visually.
              </p>
              <p>
                I choose to group related elements by giving every package its
                own box and making the three necessary inputs for each package
                each be in separate boxes as well but with more subtle borders
                to show they all belong to the same package. The tracking status
                information is also all grouped in an organized way within the
                modal. My grouped layout makes it easier for the user to parse
                through information adding to the site’s efficiency and user
                satisfaction. I placed interactive controls in the center and
                placed the add package button in the upper-left corner since it
                is an element that initiates a task. Moreover, I included an
                animated color coded tracking status indicator in the modal
                which further added to the aesthetic and efficiency of the web
                app.
              </p>
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ marginTop: "60px" }}>
          <Grid.Column width={8}>
            {" "}
            <img src={pack1} />
          </Grid.Column>
          <Grid.Column width={8}>
            {" "}
            <img src={pack2} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className="check">
            <p>
              <span>Issues</span>
              <br></br>
              As this was my first large-scale solo project I encountered two
              major issues. The first one resulted in me having to fake a
              network call and use a relay because the API post method was not
              working correctly because when called the network would recognize
              it as an OPTIONS method. So I had to fake an OPTIONS request
              method which I had never done before. The second error came after
              I had changed the HTTP 200 status code to HTTP 201 in my error
              checking function after errors were thrown but checking the
              networks showed that the API call was successful. Days later my
              app failed to track packages because errors were being prompted
              again so I reverted my code base to the last working commit and
              went through all the code and added console logs to no avail. I
              then checked the network tab in the Chrome Developer tools and saw
              the API was sending a status of 200 again so had to change the 201
              back to 200. While these issues were out of my comfort zone they
              helped me become better at debugging and learn more about
              networks.
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{ margin: "40px 0px" }}>
          <Grid.Column className="check">
            <h3>Design Assets</h3>
            <img src={packBG} style={{ margin: "0 auto", width: "100%" }}></img>
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
                <span>Frameworks: </span>React
              </li>
              <li>
                <span>APIs:</span> Shippo, Mapbox
              </li>
              <li>
                <span>Graphics:</span> Adobe Illustrator
              </li>
              <li>
                <span>Wireframes:</span> InVision
              </li>
            </ul>
          </Grid.Column>
        </Grid.Row>
        <video
          src={trackVideo}
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
{
}

export default PackageTracker;
