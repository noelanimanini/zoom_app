import React from "react";
import Jumbotron from "../Jumbtron/Index2";
import Behaviors from "../Behaviors/Index";
import Submission from "../Submission/Index";
import Resources from "../Resources/Index";
import Pitch from "../Pitch/Index";

function Index() {
  return (
    <div>
      {" "}
      <Jumbotron />
      <Behaviors />
      <Submission />
      <Resources />
      <Pitch />
    </div>
  );
}

export default Index;
