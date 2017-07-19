import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button, Form, Col, ListGroup, ListGroupItem} from 'react-bootstrap';

class Email extends Component {
    constructor(){
        super();
        this.state = {
            value: ''
        }
        this.getValidationState = this.getValidationState.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    getValidationState(){
        const len = this.state.value.length;
        const str = this.state.value;
        if(len > 10 && str.includes('@')) return 'success';
        else if(str.includes('@')) return 'warning';
        else if(len > 0) return 'error';
}
    handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render(){
      return(
          <div id="form-slide">
          <h1>CONTACT</h1>
          <h4>FILL OUT THIS FORM IF...</h4>
          <ListGroup>
          <ListGroupItem>YOU ARE A POTENTIAL EMPLOYER</ListGroupItem>
          <ListGroupItem>YOU WANT A PRICE QUOTE FOR FREELANCE WORK</ListGroupItem>
          <ListGroupItem>YOU HAVE A QUESTION FOR ME</ListGroupItem>
          <ListGroupItem>YOU HAVE A COMMENT ABOUT THIS SITE</ListGroupItem>
          </ListGroup>
          <Form horizontal>
            
            <FormGroup controlId="formHorizontalEmail"
                       validationState={this.getValidationState()}>
              <Col componentClass={ControlLabel} sm={2}>EMAIL</Col>
              <Col sm={10}>
                <FormControl type="email"
                             placeholder="ENTER A VALID EMAIL"
                             value={this.state.value}
                             onChange={this.handleChange}/>
                <FormControl.Feedback/>
              </Col>
            </FormGroup>
           
           <FormGroup controlId="formControlsTextarea">
             <Col componentClass={ControlLabel} sm={2}>MESSAGE</Col>
             <Col sm={10}>
             <FormControl componentClass="textarea" placeholder="AND THEN DROP ME A LINE..." />
             </Col>
           </FormGroup>
    
           <Button type="submit">SUBMIT</Button>
          </Form>
          </div>
          );
  }
}

export default Email;