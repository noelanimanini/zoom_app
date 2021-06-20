import React, { useEffect } from "react";
import "./jumbotron.css";
import { Jumbotron, Container } from "react-bootstrap";
import { useSpring, animated, config } from "react-spring";
import Aos from "aos";
import "aos/dist/aos.css";

function Jumbo() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
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
            <div
              className="h1Strong2"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              DIGI-CLUSIVE meetings
            </div>
            <div className="under">
              <div
                className="name"
                data-aos="fade-down"
                data-aos-easing="ease-in-sine"
                data-aos-delay="250"
              >
                Making zoom accessible for{" "}
              </div>

              <h1
                className="h1Strong"
                data-aos="fade-right"
                data-aos-delay="1500"
                data-aos-easing="ease-in-sine"
              >
                {" "}
                <strong> everyone</strong>
              </h1>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Jumbo;
