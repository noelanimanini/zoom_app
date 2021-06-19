import React from "react";
import "./navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div>
      {" "}
      <Navbar expand="lg" className="nav">
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
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
