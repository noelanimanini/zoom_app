import "./App.css";
import Jumbotron from "./components/Jumbtron/Index";
import NavBar from "./components/Navbar/Index";
import About from "./components/About/Index";
import Team from "./components/Team/Index";
import Features from "./components/Features/Index";
import Download from "./components/Download/Index";
import Video from "./components/Video/Index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <About />
      <Video />
      <Features />
      <Download />
      <Team />
    </div>
  );
}

export default App;
