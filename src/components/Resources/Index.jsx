import React from "react";
import "./resources.css";
import { Card, Button } from "react-bootstrap";

function Index() {
  return (
    <div>
      <div className="resourcesBack">
        <h2>Learn More About Actions You Can Take</h2>
      </div>
      <div className="resourceCards">
        <Card style={{ width: "18rem" }} className="mt-5">
          <Card.Img
            variant="top"
            className="imageSt"
            src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/39981876_329420277799502_962880020781465600_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=e3f864&_nc_ohc=FdknQ-K_tAQAX_ildhx&_nc_ht=scontent-sea1-1.xx&oh=8f76683a517cc501034ed50d5e79fa3f&oe=60D2ED7F"
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title>CU Boulder Accessible Technology Guide </Card.Title>

            <a
              className="mt-auto"
              href="https://www.colorado.edu/accessible-technology/resources/zoom-accessibility-best-practices"
            >
              CU Boulder Resources
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mt-5">
          <Card.Img
            variant="top"
            className="imageSt"
            src="https://ypsymposium.yale.edu/sites/default/files/yaleodi.jpeg"
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title>Yale Office of Diversity and Inclusion</Card.Title>
            <a
              className="mt-auto"
              href="https://usability.yale.edu/web-accessibility/articles/zoom"
            >
              {" "}
              Yale Zoom Resources{" "}
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Index;
