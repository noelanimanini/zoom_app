import React, { useEffect } from "react";
import computer from "../images/computer4.jpg";
import "./meetings.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Index() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="parentBlurb">
        <div className="subParent">
          <h1
            className="titleTag"
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
          >
            {" "}
            DIGI-CLUSIVE MEETINGS
          </h1>
          <div className="paraParent">
            <div className="para1">
              <p>
                Digi-Clusive is an easily downloadable extension for Zoom to
                help make digital meet-ups more welcoming for people with a
                variety of accessibility needs. <br />
              </p>
            </div>
            <div className="para2">
              <p>
                {" "}
                To encourage digital inclusion, the Digi-Clusive sends automatic
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
