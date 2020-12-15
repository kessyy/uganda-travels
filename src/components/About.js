import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
import MainCarousel from "./Carousel";
// import { ReactComponent as Award } from "../assets/svg/award.svg";
// import { ReactComponent as Shield } from "../assets/svg/shield.svg";
// import { ReactComponent as Compass } from "../assets/svg/compass.svg";
// import { ReactComponent as Heart } from "../assets/svg/heart.svg";

class About extends Component {
  render() {
    return (
      <div id='about-us'>
        {/* <MainCarousel /> */}
        <div class ="container-fluid" id="aboutBody">
          <p><h3>Uganda Travels</h3></p>
          <div class="row">
          <p id="description" class="col-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
          velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim 
          ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
          consequatur? Quis autem vel eum iure reprehenderit qui in ea 
          voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
          <div class="col-6" id="aboutImg">
            
          </div>
          </div>
          
          
          
        </div>
      </div>
    );
  }
}

export default About;
