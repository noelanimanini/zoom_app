import React from "react";
import computer from "../images/computer.png";
import "./meetings.css";

function Index() {
  return (
    <div className="parentBlurb">
      <div className="blurb">
        <h1>DIGI-CLUSIVE MEETINGS</h1>
        <p>
          Digi-Clusive is an easily downloadable chat bot for zoom to help make
          digital meet-ups more welcoming for people with a variety of
          accessibility needs. To encourage natural inclusivity, the bot sends
          automatic reminders to: mute the mic when not speaking turn on closed
          captioning include image descriptions and much more...
        </p>
      </div>
      <div className="parentDiv">
        <div>
          <img src={computer} className="imageComputer" />
        </div>
      </div>
    </div>
  );
}

export default Index;
