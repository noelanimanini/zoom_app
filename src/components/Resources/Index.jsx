import React, { useEffect } from "react";
import "./resources.css";
import { Card, Container } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

function Index() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="resourcesBack">
        <h2>Learn More About Actions You Can Take</h2>
      </div>
      <div>
        <Container className="resourceCards">
          <Card
            style={{
              width: "18rem",
              borderRadius: "30px 30px 30px 30px",
              backgroundColor: "#2486e6",
            }}
            className="card mt-5"
            data-aos="flip-up"
          >
            <Card.Img
              variant="top"
              className="imageSt"
              style={{ borderRadius: "30px 30px 30px 30px", padding: "10px" }}
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/39981876_329420277799502_962880020781465600_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=e3f864&_nc_ohc=FdknQ-K_tAQAX_ildhx&_nc_ht=scontent-sea1-1.xx&oh=8f76683a517cc501034ed50d5e79fa3f&oe=60D2ED7F"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title className="cardTitle">
                CU Boulder Accessible Technology Guide{" "}
              </Card.Title>

              <a
                className="mt-auto"
                href="https://www.colorado.edu/accessible-technology/resources/zoom-accessibility-best-practices"
              >
                CU Boulder Resources
              </a>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              borderRadius: "30px 30px 30px 30px",
              backgroundColor: "#2486e6",
            }}
            className="card mt-5"
            data-aos="flip-up"
            data-aos-offset="300"
          >
            <Card.Img
              variant="top"
              style={{ borderRadius: "30px 30px 30px 30px", padding: "10px" }}
              className="imageSt"
              src="https://www.fccnn.com/incoming/6579257-k2ixpq-UM-Logo.jpg/alternates/LANDSCAPE_640/UM-Logo.jpg"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title className="cardTitle">
                {" "}
                The Trajectory of Zoom: Analyzing the Development of Video
                Conferencing Software and Accessibility in an Age of Remote Work
              </Card.Title>
              <a
                className="mt-auto"
                href="https://conservancy.umn.edu/handle/11299/219600"
              >
                University of Minnesota digital conservancy
              </a>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              borderRadius: "30px 30px 30px 30px",
              backgroundColor: "#2486e6",
            }}
            data-aos="flip-up"
            data-aos-offset="400"
            className="card mt-5"
          >
            <Card.Img
              variant="top"
              className="imageSt"
              style={{ borderRadius: "30px 30px 30px 30px", padding: "10px" }}
              src="https://ypsymposium.yale.edu/sites/default/files/yaleodi.jpeg"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title className="cardTitle">
                Yale Office of Diversity and Inclusion
              </Card.Title>
              <a
                className="mt-auto"
                href="https://usability.yale.edu/web-accessibility/articles/zoom"
              >
                {" "}
                Yale Zoom Resources{" "}
              </a>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default Index;
