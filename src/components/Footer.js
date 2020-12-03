import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";
import { Button } from "@material-ui/core";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h3 className="nav__title">Jeswin George</h3>
            <Button className="footer__contact" href="tel:+919496102561">
              Contact Me
            </Button>
          </MDBCol>
          <MDBCol md="6">
            <ul className="list-unstyled list-inline text-center">
              <li className="list-inline-item">
                <a
                  className="btn-floating btn-fb mx-1 footer__icon"
                  href="#home"
                >
                  <i className="fab fa-facebook-f"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn-floating btn-tw mx-1 footer__icon"
                  href="https://www.instagram.com/george__jeswin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn-floating btn-gplus mx-1 footer__icon"
                  href="#home"
                >
                  <i className="fab fa-google-plus-g"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn-floating btn-li mx-1 footer__icon"
                  href="https://www.linkedin.com/in/jeswin-george-396b531a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn-floating btn-dribbble mx-1 footer__icon"
                  href="https://github.com/georgejeswin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"> </i>
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: All Rights Reserved
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
