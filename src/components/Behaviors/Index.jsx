import React from "react";
import Pic from "../images/inclusive.jpg";
import "./behaviors.css";
function Index() {
  return (
    <div className="message">
      <div className="titleBox">
        <h1 className="title">
          Digital Accessibility & Inclusion are <em> Essential</em>
        </h1>
      </div>

      <div className="behavior">
        <img src={Pic} className="behaviorImage" />
        <div>
          <h2 id="boxhead">
            <p id="boxhead2">
              From school, work, to casual socialization, video conferencing has
              been an efficient way to connect and share information, especially
              since the COVID-19 shutdown.
            </p>
            <p id="boxhead2">
              However, video conferencing creates many accessibility barriers,
              meaning not all communities can participate equally.
            </p>
            Digi-Clusive Meeting intends to remove those barriers, because,{" "}
            <strong>
              {" "}
              in order to have true community, every voice is necessary.
            </strong>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Index;
