import React, { useEffect } from "react";
import "./jumbotron.css";
import { Jumbotron, Container } from "react-bootstrap";
import { useSpring, animated, config } from "react-spring";
import Aos from "aos";
import "aos/dist/aos.css";

function Index2() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const fade = useSpring({
    from: {
      // position: "fixed",
      opacity: 0,
      transform: "translateY(-20px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)",

      config: { duration: 250 },
    },
  });
  return (
    <div>
      <Jumbotron fluid className="jumbo">
        {" "}
        <Container>
          <div className="inclusive2">
            <h1
              className="inclu2"
              data-aos="fade-down"
              data-aos-easing="ease-in-sine"
              data-aos-delay="150"
            >
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
