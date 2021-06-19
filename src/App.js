import "./App.css";
import Jumbotron from "./components/Jumbtron/Index";
import NavBar from "./components/Navbar/Index";
import About from "./components/About/Index";
import Team from "./components/Team/Index";
import Features from "./components/Features/Index";
import Download from "./components/Download/Index";
import Video from "./components/Video/Index";
import Inclusive from "./components/Inclusive/Index";
import Home from "./components/Home/Index";
import { Switch, Link, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/inclusive" render={() => <Inclusive />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
