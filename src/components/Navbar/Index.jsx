import React from "react";
import "./navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import digi1 from "../images/digi2.png";

function Index() {
  return (
    <div>
      {" "}
      <Navbar expand="lg" className="nav">
        <img src={digi1} className="digi1css" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/#features">Features</Nav.Link>
            <Nav.Link href="/#team">Creators</Nav.Link>
            <Nav.Link href="/#download">Download</Nav.Link>
            {/* <Link to="/inclusive"> */}
            <Nav.Link as={Link} to="/inclusive">
              Inclusive Behaviors
            </Nav.Link>
            {/* </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Index;
