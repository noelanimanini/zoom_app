import React from "react";
import "./jumbotron.css";
import { Jumbotron, Container } from "react-bootstrap";

function Jumbo() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1> Making zoom accessible for </h1>
          <h1> everyone.</h1>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Jumbo;
