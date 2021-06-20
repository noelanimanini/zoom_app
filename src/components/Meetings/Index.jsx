import React from "react";
import computer from "../images/computer4.jpg";
import "./meetings.css";

function Index() {
  return (
    <div>
      <div className="parentBlurb">
        <div className="subParent">
          <h1 className="titleTag"> DIGI-CLUSIVE MEETINGS</h1>
          <div className="paraParent">
            <div className="para1">
              <p>
                Digi-Clusive is an easily downloadable chatbot for Zoom to help
                make digital meet-ups more welcoming for people with a variety
                of accessibility needs. <br />
              </p>
            </div>
            <div className="para2">
              <p>
                {" "}
                To encourage digital inclusion, the bot sends automatic
                reminders to:
                <ul>
                  <li>mute the mic when not speaking</li>
                  <li>turn on closed captioning</li>
                  <li>include image descriptions</li>
                  <li>and much more...</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="imageParent">
          <img src={computer} className="imageComputer" />
        </div>
      </div>

      {/* <div className="blurb">
        <p>
          Digi-Clusive is an easily downloadable chatbot for Zoom to help make
          digital meet-ups more welcoming for people with a variety of
          accessibility needs. <br />
        </p>

        <p>
          {" "}
          To encourage digital inclusion, the bot sends automatic reminders to:
          <ul>
            <li>mute the mic when not speaking</li>
            <li>turn on closed captioning</li>
            <li>include image descriptions</li>
            <li>and much more...</li>
          </ul>
        </p>
      </div>
      <div className="parentDiv">
        <div>
          <img src={computer} className="imageComputer" />
        </div>
      </div> */}
    </div>
  );
}

export default Index;
