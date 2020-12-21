import React, { Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "../App.css";

class Contact extends Component {
  render() {
    return (
      <Form id ="contactBody" className="container-fluid">
        <br />
        <FormGroup row>
          <Label for="email" sm={2}> Your Email</Label>
          <Col lg="4" md="4">
            <Input type="email" name="email" id="email" placeholder=" enter email" required/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="purpose" sm={2}>Purpose of inquiry</Label>
          <Col lg="4" md="4">
            <Input type="text" name="text" id="purpose" required/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="message" sm={2}>Message</Label>
          <Col lg="4" md="4">
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
    );
  }
}
export default Contact;