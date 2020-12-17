import { faHome, faBus, faRoute, faAtlas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from 'react';
import '../App.css';

class Services extends Component {
  render() {
    return (
      <div id='services'>

        <div className="subComponent" id="aboutServices">
          <div class ="container">
            <header className="headerTitle text-center">
              <h1>Uganda Travels</h1>
              <p>What we offer</p>
            </header>
            <section className="text-center subComponent">
              <div class ="row">
              <div class ="col-3">
                  <div>
                    <FontAwesomeIcon icon={faAtlas} size="5x"/>
                    <p>Ticketing</p>
                  </div>
                </div>
                <div class ="col-3">
                  <div>
                    <FontAwesomeIcon icon={faHome} size="5x"/>
                    <p>Accomodation</p>
                  </div>
                </div>
                <div class ="col-3">
                  <div>
                    <FontAwesomeIcon icon={faBus} size="5x"/>
                    <p>Transportation</p>
                  </div>
                </div>
                <div class ="col-3">
                  <div>
                    <FontAwesomeIcon icon={faRoute} size="5x"/>
                    <p>Tour destinations</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
