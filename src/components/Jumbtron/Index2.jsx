import React from "react";
import "./jumbotron.css";
import { Jumbotron, Container } from "react-bootstrap";
import { useSpring, animated, config } from "react-spring";

function Index2() {
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
            <animated.h1 className="inclu2" style={fade}>
              Inclusive behaviors in every community, starting with{" "}
              <strong>Zoom</strong>
            </animated.h1>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Index2;
