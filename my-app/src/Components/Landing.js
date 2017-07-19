import React, { Component } from 'react';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';

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

  <Tab.Container id="left-tabs" defaultActiveKey={1}>
      <Row className="clearfix">
        <Col sm={2}>
          <Nav bsStyle="pills" stacked>
            <NavItem eventKey={1}>WELCOME</NavItem>
            <NavItem eventKey={2}>ABOUT</NavItem>
            <NavItem eventKey={3}>BIO</NavItem>
            <NavItem eventKey={4}>MISSION</NavItem>
            <NavItem eventKey={5}>FUN</NavItem>
            <NavItem eventKey={6}>CONTACT ME</NavItem>
            <NavItem eventKey={7}>PROJECTS</NavItem>
          </Nav>
        </Col>
        <Col sm={8}>
          <Tab.Content animation>
            
            <Tab.Pane eventKey={1}>
              {welcome}
            </Tab.Pane>
            
            <Tab.Pane eventKey={2}>
             {about}
            </Tab.Pane>
            
            <Tab.Pane eventKey={3}>
              <h1>DEVELOPER BIO</h1>
                     {bio}
            </Tab.Pane>
            
            <Tab.Pane eventKey={4}>
              <h1>MISSION STATEMENT</h1>
                 {mission}
            </Tab.Pane>
            
            <Tab.Pane eventKey={5}>
             <Fun/>
            </Tab.Pane>
            
            <Tab.Pane eventKey={6}>
              <Email/>
            </Tab.Pane>
          
            <Tab.Pane eventKey={7}>
            <h1>PROJECT LINK INVENTORY</h1>
                  {projects}
            </Tab.Pane>
          </Tab.Content>
        </Col>
        <Col sm={2}></Col>
      </Row>
    </Tab.Container>
 
            );
    }
}

export default Aboutme;