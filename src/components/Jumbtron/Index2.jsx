import React from "react";
import "./jumbotron.css";
import { Jumbotron, Container } from "react-bootstrap";

function Index2() {
  return (
    <div>
      <Jumbotron fluid className="jumbo">
        {" "}
        <Container>
          <div className="inclusive2">
            <h1 className="inclu2">
              Inclusive behaviors in every community, starting with{" "}
              <strong>Zoom</strong>
            </h1>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Index2;
