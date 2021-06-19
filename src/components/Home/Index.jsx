import React from "react";
import Jumbo from "../Jumbtron/Index";
import About from "../About/Index";
import Download from "../Download/Index";
import Features from "../Features/Index";
import Team from "../Team/Index";

function Home() {
  return (
    <div>
      <Jumbo />
      <About />
      <Features />
      <Download />
      <Team />
    </div>
  );
}

export default Home;
