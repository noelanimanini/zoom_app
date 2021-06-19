import React from "react";
import { CardDeck, Card } from "react-bootstrap";

function Index() {
  return (
    <div>
      <div>features</div>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Feature 1</Card.Title>
            <Card.Text>
              zoom chat notification bot that reminds people at the beginning of
              the meeting to participate in inclusive behaviors
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Feature 2</Card.Title>
            <Card.Text>
              image description alert (if images are posted in a chat, ask the
              sender to describe it)
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Feature 3</Card.Title>
            <Card.Text>
              look into auto captions when people join the meeting
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}

export default Index;
