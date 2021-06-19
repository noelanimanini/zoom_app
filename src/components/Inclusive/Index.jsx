import React from "react";
import Jumbotron from "../Jumbtron/Index2";
import Behaviors from "../Behaviors/Index";
import Submission from "../Submission/Index";
import Resources from "../Resources/Index";
import Pitch from "../Pitch/Index";
import Team from "../Team/Index";
import Meetings from "../Meetings/Index";
import image from "../images/digi1.png";

function Index() {
  return (
    <div>
      {" "}
      <Jumbotron />
      <Behaviors />
      <Submission />
      <Meetings />
      <Resources />
      <Pitch />
      <div style={{ height: "5vh" }}></div>
      <div style={{ backgroundColor: "#EBB86C" }}>
        <Team />
      </div>
      <img src={image} style={{ width: "48%" }} />
    </div>
  );
}

export default Index;
