import React, { Component } from "react";
import "../App.css";
import Top from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <div id='home'>
        <Top />
        <About />
        <Services />
        <Contact />
        <Footer /> 
      </div>
    );
  }
}

export default Home;
