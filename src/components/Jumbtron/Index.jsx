import React from "react";
import "./jumbotron.css";
import { Jumbotron, Container } from "react-bootstrap";

function Jumbo() {
  return (
    <div id="jumbo">
      <Jumbotron className="jumbotro" fluid>
        {" "}
        <Container>
          <div
            style={{
              display: "inline-block",
              position: "relative",
              bottom: "30px",
            }}
          >
            <div className="h1Strong2">DIGI-CLUSIVE meetings</div>
            <div className="under">
              <div className="name">Making zoom accessible for </div>

              <h1 className="h1Strong">
                {" "}
                <strong> everyone</strong>
              </h1>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Jumbo;
