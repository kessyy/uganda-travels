import {faLinkedinIn,faInstagram,faFacebook,faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../App.css";


class Footer extends Component {
  render() {
    return (
      <div id="footerBody">
        <Container>
          <header className="headerTitle text-center">
            <p>
              <b>follow us</b>
            </p>
          </header>
          <footer className=" text-center">
            <ul>
                <li><FontAwesomeIcon icon={faFacebook}/></li>
                <li><FontAwesomeIcon icon={faInstagram}/></li> 
                <li><FontAwesomeIcon icon={faTwitter}/></li> 
                <li><FontAwesomeIcon icon={faLinkedinIn}/></li>
            </ul>
            <br />
            <p>copyright 2020 | Uganda-Travels</p>
          </footer>
        </Container>
      </div>
    );
  }
}

export default Footer;
