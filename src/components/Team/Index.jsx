import React from "react";
import "./team.css";
import Barbara from "../images/Barbara.jpg";
import Linda from "../images/Linda.jpg";
import Crystal from "../images/Crystal.jpg";
import Elisabeth from "../images/Elisabeth.jpg";
import { Card, Row, Col } from "react-bootstrap";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

function Index() {
  return (
    <div style={{ paddingTop: "30px" }}>
      <div style={{ backgroundColor: "#EBB86C" }}>
        <h1 className="DevTeam">Developer Team</h1>
        <div className="team" id="team">
          <Row
            xs={1}
            sm={1}
            md={4}
            lg={4}
            xl={4}
            style={{
              // margin: "1em",
              justifyContent: "center",
              justifyContent: "space-evenly",
              // width: "90%",
            }}
          >
            <Card
              style={{
                width: "18rem",
                height: "28em",
                margin: ".5em",
                borderRadius: "30px 30px 30px 30px",
              }}
            >
              <Card.Img variant="top" className="cardImage" src={Barbara} />
              <Card.Body className="d-flex flex-column ">
                <Card.Title>Barbra</Card.Title>
                <Card.Text>
                  Mental health counselor with experience in serving blind and
                  visually impaired adults and children as well as severely and
                  persistently mentally ill adults.
                </Card.Text>
                <div className="align-self-center mt-auto">
                  <a
                    href="https://www.linkedin.com/in/btreston/"
                    rel="noreferrer"
                    aria-hidden="true"
                    target="_blank"
                  >
                    <AiFillLinkedin className="icon" />
                  </a>
                  <a
                    href="https://github.com/betrest"
                    target="_blank"
                    aria-hidden="true"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="icon" />
                  </a>
                  <a class="mailto" href="mailto:betrest@gmail.com">
                    <HiOutlineMail className="icon" />
                  </a>
                </div>
              </Card.Body>
            </Card>{" "}
            <Card
              style={{
                width: "18rem",
                height: "28em",
                margin: ".5em",
                borderRadius: "30px 30px 30px 30px",
              }}
            >
              <Card.Img variant="top" className="cardImage" src={Linda} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Linda</Card.Title>
                <Card.Text>
                  I am an innovative young entrepreneur passionate about
                  software development and social issues
                </Card.Text>
                <div className="align-self-center mt-auto">
                  <a
                    href="https://www.linkedin.com/in/linda-wang-250b85180/"
                    rel="noreferrer"
                    aria-hidden="true"
                    target="_blank"
                  >
                    <AiFillLinkedin className="icon" />
                  </a>
                  <a
                    href="https://github.com/LindaWang7"
                    target="_blank"
                    aria-hidden="true"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="icon" />
                  </a>

                  <a class="mailto" href="mailto:lindawang0719@gmail.com">
                    <HiOutlineMail className="icon" />
                  </a>
                </div>
              </Card.Body>
            </Card>{" "}
            <Card
              style={{
                width: "18rem",
                height: "28em",
                margin: ".5em",
                borderRadius: "30px 30px 30px 30px",
              }}
            >
              <Card.Img variant="top" className="cardImage" src={Crystal} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Crystal</Card.Title>
                <Card.Text>
                  Fullstack software engineer with a background in neuroscience
                  and a love for language.
                </Card.Text>
                <div className="align-self-center mt-auto p-1 ">
                  <a
                    href="https://www.linkedin.com/in/crystal-villanueva-151353145/"
                    rel="noreferrer"
                    aria-hidden="true"
                    target="_blank"
                  >
                    <AiFillLinkedin className="icon" />
                  </a>
                  <a
                    href="https://github.com/noelanimanini"
                    target="_blank"
                    aria-hidden="true"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="icon" />
                  </a>
                  <a class="mailto" href="mailto:noelani.villanueva@gmail.com">
                    <HiOutlineMail className="icon" />
                  </a>
                </div>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "18rem",
                height: "28em",
                margin: ".5em",
                borderRadius: "30px 30px 30px 30px",
              }}
            >
              <Card.Img variant="top" className="cardImage" src={Elisabeth} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Elisabeth</Card.Title>
                <Card.Text>
                  High school student interested in pursuing a mix of design,
                  technology, and business!
                </Card.Text>
                <div className="align-self-center mt-auto">
                  <a
                    href="https://www.linkedin.com/in/linda-wang-250b85180/"
                    rel="noreferrer"
                    aria-hidden="true"
                    target="_blank"
                  >
                    <AiFillLinkedin className="icon" />
                  </a>
                  <a
                    href="https://github.com/LindaWang7"
                    target="_blank"
                    aria-hidden="true"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="icon" />
                  </a>

                  <a class="mailto" href="mailto:lindawang0719@gmail.com">
                    <HiOutlineMail className="icon" />
                  </a>
                </div>
                {/* <div className="align-self-center mt-auto p-1 ">
                  <a
                    href="https://github.com/lishyl26"
                    target="_blank"
                    aria-hidden="true"
                    rel="noreferrer"
                  >
                    {" "}
                    <AiFillGithub className="icon" />
                  </a>
                  <a class="mailto" href="mailto:lishyl26@gmail.com">
                    <HiOutlineMail className="icon" />
                  </a>
                </div> */}
              </Card.Body>
            </Card>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Index;
