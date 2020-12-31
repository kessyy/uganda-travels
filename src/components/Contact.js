import React, { Component} from 'react';
import { Col,Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { faHome, faBus, faRoute, faAtlas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";

class Contact extends Component {
  render() {
    return (
      <div className="container-fluid" id ="contactBody">
        <div className="row">
          <div className="col-6">
            <Form>
              <br />
              <FormGroup row>
                <Label for="email" sm={2}> Your Email</Label>
                <Col lg="6" md="6">
                  <Input type="email" name="email" id="email" placeholder=" enter email" required/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="purpose" sm={2}>Purpose of inquiry</Label>
                <Col lg="6" md="6">
                  <Input type="text" name="text" id="purpose" required/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="message" sm={2}>Message</Label>
                <Col lg="6" md="6">
                  <Input type="textarea" name="message" id="textarea" required/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="file" sm={2}>File</Label>
                <Col lg="4" md="4">
                  <Input type="file" name="file" id="exampleFile"/>
                  <FormText color="muted">
                    Show us your fun adventure photos
                  </FormText>
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                  <Button>Submit</Button>
                </Col>
              </FormGroup>
            </Form>
            </div> 
            <div className="col-6">
            <Row>
              <Col lg="4" md="4">
                <div >
                  {/* <Phone width="50" height="55" strokeWidth="1" /> */}
                  <p>0912 345 6789</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div >
                  {/* <MapPin width="55" height="55" strokeWidth="1" /> */}
                  <p>Kampala, Uganda</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div >
                  {/* <Mail width="55" height="55" strokeWidth="1" /> */}
                  <p>manilatourism@manila.ph</p>
                </div>
              </Col>
            </Row>
            </div> 
        </div>   
      </div>
    );
  }
}
export default Contact;