import React, { useEffect } from "react";
import "./about.css";
import video from "../images/video.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function Index() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="aboutBackground" id="about">
      <h1 className="aboutHeader">What is DIGI-CLUSIVE?</h1>
      <div className="aboutParent">
        <div className="aboutPara">
          <p data-aos="fade-right">
            When work from home became the new norm and using Zoom to conduct
            conference meetings became a necessity, individuals with
            disabilities became marginalized even further due to the structure
            and exclusivity of the Zoom platform.
          </p>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <strong>Digital accessibility and inclusion are essential. </strong>
          </p>
          <p>
            From school, to work, to casual socialization, video conferencing
            has become an efficient way to connect and share information with
            people near and far, especially since the COVID-19 shutdown.
            However, video conferencing creates many accessibility barriers,
            meaning not all communities can participate equally. Digi-Clusive
            Meeting intends to remove those barriers, because, in order to have
            true community, EVERY VOICE IS NECESSARY.
          </p>
        </div>
        <div className="videoParent">
          <img src={video} className="videoImage" />
        </div>
      </div>
    </div>
  );
}

export default Index;
