import React from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Button } from "@material-ui/core";

const NavBar = () => {
  return (
    <div className="nav__bar">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand className="nav__title" href="#home">
          Jeswin George
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto nav__items ml-auto">
            <Nav.Link href="#home" className="nav__item">
              Home
            </Nav.Link>

            <Nav.Link href="#about" className="nav__item">
              About Me
            </Nav.Link>

            <Nav.Link href="#skills" className="nav__item">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="nav__item">
              Projects
            </Nav.Link>
          </Nav>
          <Button
            href="https://drive.google.com/file/d/1C823M-8FS9yxlk0BW49nOmqk4N4KHDUe/view?usp=sharing"
            target="_blank"
            className="nav__resume ml-auto"
          >
            View Resume
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
