// import { AddLocation } from '@material-ui/icons/AddLocation';
import React, { Component } from 'react';
import '../App.css';

class Services extends Component {
  render() {
    return (
      <div id='services'>
        {/* <MainCarousel /> */}

        <div className="subComponent" id="aboutServices">
          <div class ="container">
            <header className="headerTitle text-center">
              <h1>Uganda Travels</h1>
              <p>What we offer</p>
            </header>
            <section className="text-center subComponent">
              <div class ="row">
                <div class ="col-6">
                  {/* <AddLocation>
                      <p> Available</p>
                  </AddLocation> */}
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
