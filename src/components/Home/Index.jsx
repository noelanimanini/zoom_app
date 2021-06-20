import React from "react";
import Jumbo from "../Jumbtron/Index";
import About from "../About/Index";
import Download from "../Download/Index";
import Features from "../Features/Index";
import Team from "../Team/Index";
import image from "../images/digi1.png";

function Home() {
  return (
    <div>
      <Jumbo />
      <About />
      <Features />
      <Download />
      <Team />
      <img src={image} style={{ width: "48%" }} />
    </div>
  );
}

export default Home;
