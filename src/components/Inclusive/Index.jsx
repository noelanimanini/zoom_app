import React from "react";
import Jumbotron from "../Jumbtron/Index2";
import Behaviors from "../Behaviors/Index";
import Submission from "../Submission/Index";
import Resources from "../Resources/Index";

function Index() {
  return (
    <div>
      {" "}
      <Jumbotron />
      <Behaviors />
      <Submission />
      <Resources />
    </div>
  );
}

export default Index;
