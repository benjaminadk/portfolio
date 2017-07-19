import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, OverlayTrigger } from 'react-bootstrap';
import {githubTooltip,jekyllTooltip} from './tooltips.js';



class Navigation extends Component {
    
    render() {
        return (
         <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">PORTFOLIO</a>
           </Navbar.Brand>
           <Navbar.Toggle />
           </Navbar.Header>
           <Navbar.Collapse>
      <Nav>
        <NavDropdown eventKey={1} title="PROJECTS" id="fcc-proj-dropdown">
          <MenuItem eventKey={1.1} href="http://game-of-life-benjaminadk.surge.sh/" target="_blank">Game of Life</MenuItem>
          <MenuItem eventKey={1.2}>Recipe Box</MenuItem>
          <MenuItem eventKey={1.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={1.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight id="navRight">
        <OverlayTrigger placement="bottom" overlay={githubTooltip} delay={100}>
        <NavItem eventKey={1} href="https://github.com/benjaminadk"><span className="devicons devicons-github_badge"></span></NavItem>
        </OverlayTrigger>
        <OverlayTrigger placement="bottom" overlay={jekyllTooltip} delay={100}>
        <NavItem eventKey={2} href="https://benjaminadk.github.io/"><span className="devicons devicons-jekyll_small"></span></NavItem>
        </OverlayTrigger>
        <NavItem eventKey={3} href="mailto:ben@benjaminadk.com?Subject=Portfolio" target='_blank'>EMAIL ME</NavItem>
      </Nav>
    </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default Navigation;