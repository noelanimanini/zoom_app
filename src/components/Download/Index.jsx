import React from "react";
import { Button } from "react-bootstrap";
import "./download.css";

function Index() {
  return (
    <div style={{ backgroundColor: "#6261B9", padding: 0 }}>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: #2486E6;
      color: white;
      text-transform: uppercase;
    }
    `}
      </style>
      <div>
        <h4> What are you waiting for?</h4>{" "}
        <h6>create more inclusive communities with *APP NAME* </h6>
        <Button variant="flat">Download</Button>
      </div>
    </div>
  );
}

export default Index;
