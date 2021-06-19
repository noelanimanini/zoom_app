import React from "react";
import { Button } from "react-bootstrap";
import Group from "../images/group.png";
import "./pitch.css";

function Index() {
  return (
    <div>
      <style type="text/css">
        {`
    .btn-screen {
      background-color: #2486E6;
      color: white;
      text-transform: uppercase;
      height: 50px
      font-family: "Poppins", sans-serif;
      font-weight: bold
      
    }
    `}
      </style>
      <div className="message2">
        <h1>What are you waiting for?</h1>
        <h3>Small acts can go a long way</h3>
      </div>

      <div className="groupPic">
        <img src={Group} className="imageStyle" />
      </div>
      <div className="button">
        <Button variant="screen">download Digi-clusive</Button>
      </div>
    </div>
  );
}

export default Index;
