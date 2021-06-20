import React from "react";
import "./about.css";
import video from "../images/video.jpg";

function Index() {
  return (
    <div className="aboutBackground" id="about">
      <h1 className="aboutHeader">What is DIGI-CLUSIVE?</h1>
      <div className="aboutParent">
        <p className="aboutPara">
          An app that brings more inclusivity to online video calling. Since
          COVID-19 began, Zoom and other video conferencing applications have
          been able to connect more communities together with the magic of
          technology. But unfortunately, not everyone has the same easy access
          to zoom, for example, those with disabilities both visible and
          invisible. [name] is an easily downloadable chat bot for zoom that
          sends reminders of inclusive behaviors, such as muting when not
          speaking to prevent overhead sound, turning on closed captions or
          descriptions for images, all to be more encourage more natural
          inclusivity.
        </p>
        <div className="videoParent">
          <img src={video} className="videoImage" />
        </div>
      </div>
    </div>
  );
}

export default Index;
