import React from "react";
import Pic from "../images/inclusive.png";
import "./behaviors.css";
function Index() {
  return (
    <div className="message">
      <div className="behavior">
        <img src={Pic} className="behaviorImage" />
        <div className="box">
          <h2 className="boxhead">
            bringing welcoming, empathetic, & open minds listening to all
            opinions ensuring mutual understanding uplifting voices that may not
            always be heard
          </h2>
          <ul className="ulDecoration">
            <h3>
              <li>lol</li>
              <li>lol</li>
              <li>lol</li>
            </h3>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Index;
