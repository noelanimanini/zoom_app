import React from "react";
import "./team.css";
import Barbara from "../images/Barbara.jpg";
import Linda from "../images/Linda.jpg";
import Crystal from "../images/Crystal.jpg";
import { Card } from "react-bootstrap";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

function Index() {
  return (
    <div className="team" id="team">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" className="cardImage" src={Barbara} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>Barbara</Card.Title>
          <Card.Text>
            Mental health counselor with experience in serving blind and
            visually impaired adults and children as well as severely and
            persistently mentally ill adults.
          </Card.Text>
          <div className="align-self-center mt-auto">
            <AiFillLinkedin className="icon" />
            <AiFillGithub className="icon" />
            <a class="mailto" href="mailto:betrest@gmail.com">
              <HiOutlineMail className="icon" />
            </a>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" className="cardImage" src={Linda} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>Linda</Card.Title>
          <Card.Text>
            I am an innovative young entrepreneur passionate about software
            development and social issues
          </Card.Text>
          <div className="align-self-center mt-auto">
            <AiFillLinkedin className="icon" />
            <AiFillGithub className="icon" />
            <a class="mailto" href="mailto:lindawang0719@gmail.com">
              <HiOutlineMail className="icon" />
            </a>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" className="cardImage" src={Crystal} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>Crystal</Card.Title>
          <Card.Text>
            Fullstack software engineer with a background in neuroscience and a
            love for language.
          </Card.Text>
          <div className="align-self-center mt-auto p-1 ">
            <AiFillLinkedin className="icon" />
            <AiFillGithub className="icon" />
            <a class="mailto" href="mailto:noelani.villanueva@gmail.com">
              <HiOutlineMail className="icon" />
            </a>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          className="cardImage"
          src="holder.js/100px180"
        />
        <Card.Body>
          <Card.Title>Elisabeth</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Index;
