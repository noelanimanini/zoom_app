import React from "react";
import "./features.css";
import { Button, Card } from "react-bootstrap";

function Index() {
  return (
    <div className="something" id="features">
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Chat Notifications</Card.Title>
          <Card.Text>
            zoom chat notification bot that reminds people at the beginning of
            the meeting to participate in inclusive behaviors
          </Card.Text>
        </Card.Body>
      </Card>
      <div />
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Auto Captions</Card.Title>
          <Card.Text>
            look into auto captions when people join the meeting
          </Card.Text>
        </Card.Body>
      </Card>
      <div />
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Image Description</Card.Title>
          <Card.Text>
            image description alert (if images are posted in a chat, ask the
            sender to describe it)
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Index;
