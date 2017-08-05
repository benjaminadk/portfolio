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
          <MenuItem eventKey={1.1} disabled>FREELANCE</MenuItem>
          <MenuItem eventKey={1.2} href="https://www.highpeakpt.com" target="_blank">HIGH PEAK PT</MenuItem>
          <MenuItem eventKey={1.3} href="https://benjaminadk.github.io/momsmap/index.html" target="_blank">MOM'S MAP</MenuItem>
          <MenuItem eventKey={1.4} href="https://benjaminadk.github.io/recovery-advocate/" target="_blank">NE RECOVERY</MenuItem>
          <MenuItem eventKey={1.5} href="http://www.css-sandbox.net" target="_blank">CSS SANDBOX</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={1.6} disabled>FREE CODE CAMP</MenuItem>
          <MenuItem eventKey={1.7} href="https://benjaminadk.github.io/recipebox/" target="_blank">RECIPE BOX</MenuItem>
          <MenuItem eventKey={1.8} href="http://fcc-leaders.surge.sh/" target="_blank">FCC LEADERS</MenuItem>
          <MenuItem eventKey={1.9} href="https://benjaminadk.github.io/markdown-previewer/index.html" target="_blank">MARKDOWN PREVIEWER</MenuItem>
          <MenuItem eventKey={1.10} href="http://game-of-life-benjaminadk.surge.sh/" target="_blank">GAME OF LIFE</MenuItem>
          <MenuItem eventKey={1.11} href="https://benjaminadk.github.io/usa-education-map/" target="_blank">D3 EDUCATION MAP</MenuItem>
          <MenuItem eventKey={1.12} href="https://benjaminadk.github.io/usaGDP/" target="_blank">D3 GDP BAR CHART</MenuItem>
          <MenuItem eventKey={1.13} href="https://benjaminadk.github.io/pomodoroclock/" target="_blank">POMODORO CLOCK</MenuItem>
          <MenuItem eventKey={1.14} href="https://benjaminadk.github.io/weatherapp/" target="_blank">WEATHER WINDOW</MenuItem>
          <MenuItem eventKey={1.15} href="https://benjaminadk.github.io/simon/index.html" target="_blank">SIMON</MenuItem>
          <MenuItem eventKey={1.16} href="https://benjaminadk.github.io/calculator/" target="_blank">CALCULATOR</MenuItem>
          <MenuItem eventKey={1.17} href="https://benjaminadk.github.io/wikiviewer/" target="_blank">WIKIPEDIA VIEWER</MenuItem>
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