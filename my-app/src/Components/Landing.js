import React, { Component } from 'react';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { bio } from './bio.js';
import { welcome } from './welcome.js';
import { about } from './about.js';
import { mission } from './mission.js';
import Email from './form.js';
import Fun from './fun.js';
import { projects } from './projects.js';



class Aboutme extends Component {
    render(){
        return(
<Router>
  <Tab.Container id="left-tabs" defaultActiveKey={1}>
      <Row className="clearfix">
        <Col sm={2}>
          <Nav bsStyle="pills" stacked>
   <LinkContainer to="/home"><NavItem eventKey={1}>WELCOME</NavItem></LinkContainer>
   <LinkContainer to="/about"><NavItem eventKey={2}>ABOUT</NavItem></LinkContainer>
   <LinkContainer to="/bio"><NavItem eventKey={3}>BIO</NavItem></LinkContainer>
   <LinkContainer to="/mission"><NavItem eventKey={4}>MISSION</NavItem></LinkContainer>
   <LinkContainer to="/blackjack"><NavItem eventKey={5}>FUN</NavItem></LinkContainer>
   <LinkContainer to="/contact"><NavItem eventKey={6}>CONTACT ME</NavItem></LinkContainer>
   <LinkContainer to="/projects"><NavItem eventKey={7}>PROJECTS</NavItem></LinkContainer>
          </Nav>
        </Col>
        <Col sm={8}>
    
         
          <Tab.Content animation>
            
            <Tab.Pane eventKey={1}>
              <Route path="/" component={welcome}/>
            </Tab.Pane>
            
            <Tab.Pane eventKey={2}>
        <Route path="/about" component={about}/>
            </Tab.Pane>
            
            <Tab.Pane eventKey={3}>
              <h1>DEVELOPER BIO</h1>
        <Route path="/bio" component={bio}/>
            </Tab.Pane>
            
            <Tab.Pane eventKey={4}>
              <h1>MISSION STATEMENT</h1>
        <Route path="/mission" component={mission}/>
            </Tab.Pane>
            
            <Tab.Pane eventKey={5}>
        <Route path="/blackjack" component={Fun}/>
            </Tab.Pane>
            
            <Tab.Pane eventKey={6}>
        <Route path="/contact" component={Email}/>
            </Tab.Pane>
          
            <Tab.Pane eventKey={7}>
            <h1>PROJECT LINK INVENTORY</h1>
        <Route path="/projects" component={projects}/>
            </Tab.Pane>
          </Tab.Content>
        
        </Col>
        <Col sm={2}></Col>
      </Row>
    </Tab.Container>
  
 </Router>
            );
    }
}

export default Aboutme;