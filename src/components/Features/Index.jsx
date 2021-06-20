import React from "react";
import "./features.css";
import { Card, Row, Col, Container } from "react-bootstrap";

function Index() {
  return (
    <div>
      <div className="featureTitle">
        <h1>Features</h1>
        <h6>
          Digi-Clusive is an easily downloadable extension for Zoom to help make
          digital meet-ups more welcoming for people with a variety of
          accessibility needs.{" "}
        </h6>
      </div>

      <div className="something" id="features">
        <Container className="childsome">
          <Card
            style={{
              width: "18rem",
              cursor: "pointer",
              borderRadius: "30px 30px 30px 30px",
            }}
            className="h-100"
          >
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Chat Notifications</Card.Title>
              <Card.Text>
                Every participant that joins the Zoom meeting will receive an
                automated private message that encourages them to be mindful of
                inclusive behaviors.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              cursor: "pointer",
              borderRadius: "30px 30px 30px 30px",
            }}
            className="h-100"
          >
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Auto Captions</Card.Title>
              <Card.Text>Turn on Auto Captions when you're speaking!</Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              cursor: "pointer",
              borderRadius: "30px 30px 30px 30px",
            }}
            className="h-100"
          >
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Resources</Card.Title>
              <Card.Text>
                Every reminder Digi-Clusive sends includes a link to resources
                for the user to check out and further their awareness on
                inclusivity.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              cursor: "pointer",
              borderRadius: "30px 30px 30px 30px",
            }}
            className="h-100"
          >
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Image Description</Card.Title>
              <Card.Text>
                image description alert (if images are posted in a chat, ask the
                sender to describe it)
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default Index;
