import React from "react";
import "./jumbotron.css";
import { Jumbotron, Container } from "react-bootstrap";

function Jumbo() {
  return (
    <div className="jumbo" id="jumbo">
      <Jumbotron fluid>
        <Container className="d-inline-flex justify-content-start flex-lg-column ">
          <div className="name">APP NAME</div>
          <div className="name">Making zoom accessible for </div>
          <h1> everyone.</h1>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Jumbo;
