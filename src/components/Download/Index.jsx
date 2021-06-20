import React from "react";
import { Button } from "react-bootstrap";
import "./download.css";

function Index() {
  return (
    <div style={{ backgroundColor: "#6261B9", padding: 0 }} id="download">
      <style type="text/css">
        {`
    .btn-flat {
      background-color: white;
      color: #2486E6;
      text-transform: uppercase;
      height: 35px
      font-family: "Poppins", sans-serif;
      font-weight: bold
    }
    `}
      </style>
      <div className="dnParent">
        <div className="download">
          <h4> What are you waiting for?</h4>{" "}
          <h6>create more inclusive communities with DIGI-CLUSIVE </h6>
        </div>
        <div className="button2">
          <a
            href="https://github.com/noelanimanini/zoom_app/tree/python_backend"
            target="_blank"
          >
            <Button variant="flat">Download</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Index;
