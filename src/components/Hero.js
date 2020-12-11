import React from "react";
import { Button } from "reactstrap";
import "../App.css";
const Top = () => (
  <div>
    <main className="cover-page" id="top">
      <section className="wrapped-page">
        <div className="item-center">
          <h3><i>Uganda Travels</i></h3>
          <h3>Tours | Travel | Places Uganda</h3>
          <Button id="placesbtn" outline color="warning" href="#about-us">
            See Places
          </Button>
        </div>
      </section>
    </main>
  </div>
);

export default Top;
