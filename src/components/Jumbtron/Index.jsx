import React from "react";
import "./jumbotron.css";
import { Jumbotron, Container } from "react-bootstrap";
import { useSpring, animated, config } from "react-spring";

function Jumbo() {
  const fade = useSpring({
    from: {
      // position: "fixed",
      opacity: 0,
      transform: "translateY(-16px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)",
    },
    // delay: 100,
  });

  const fade2 = useSpring({
    from: {
      // position: "fixed",
      opacity: 0,
      transform: "translateY(-16px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)",
    },
    delay: 300,
  });

  const fade3 = useSpring({
    from: {
      // position: "fixed",
      opacity: 0,
      transform: "translateY(-16px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)",
    },
    config: { friction: 30 },
    delay: 500,
  });

  return (
    <div id="jumbo">
      <Jumbotron className="jumbotro" fluid>
        {" "}
        <Container>
          <div
            style={{
              display: "inline-block",
              position: "relative",
              bottom: "30px",
            }}
          >
            <animated.div className="h1Strong2" style={fade}>
              DIGI-CLUSIVE meetings
            </animated.div>
            <div className="under">
              <animated.div className="name" style={fade2}>
                Making zoom accessible for{" "}
              </animated.div>

              <animated.h1 className="h1Strong" style={fade3}>
                {" "}
                <strong> everyone</strong>
              </animated.h1>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Jumbo;
