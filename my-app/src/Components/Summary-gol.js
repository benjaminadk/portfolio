import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button, Modal, Col, Row, Grid, Image, Table, ResponsiveEmbed } from 'react-bootstrap';
import logo from './assets/logo.svg';
 

class SummaryGol extends Component {
    constructor(){
        super();
        this.state = {
            show: false
        }
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }
    showModal(){
        this.setState({
            show: true
        })
    }
    hideModal(){
        this.setState({
            show: false
        })
    }
    render(){
        return(
          
             <ButtonToolbar>
             <ButtonGroup>
        <Button onClick={this.showModal} bsSize="large">PROJECT SUMMARY</Button>
            <Button bsSize="large" href="https://www.youtube.com/watch?v=R9Plq-D1gEk" target="_blank">LIVE SITE</Button>
            <Button bsSize="large">FREE CODE CAMP</Button>
            </ButtonGroup>
            
            <Modal show={this.state.show}
                   bsSize='large'
                   onHide={this.hideModal}
                   dialogClassName='Modal-Gol'>
                   <Modal.Header closeButton>
                     <Modal.Title id="Title-Gol"
                                  componentClass="h1">
                                 Game Of Life
                     </Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                   <Grid>
                   <Row>
                   <Col md={6}xs={12}>
                   <h3>PROJECT SCOPE</h3>
                   <p>The goal of this project was to create my own rendition of John Conway's Game of Life.  <a href="" target="_blank">In this Video </a>, Conway, a British Mathematician, explains some of the backstory to Game of Life.  This was a FreeCodeCamp project.  The only rules were to use React and Sass.  No other information was provided.  After learning what exactly the game was doing, I knew this would be a good challenge for me, having just started using React a few days prior.</p>
                   </Col>
                   <Col md={2} xs={12}>
                   <Image src={logo} id="react-logo"/>
                   </Col>
                   <Col md={4} xs={12}>
                   <Table striped bordered condensed hover>
                  
                     <tbody>
                     <tr><td>CSS FRAMEWORK</td><td>FOUNDATION</td></tr>
                     <tr><td>JS LIBRARY</td><td>REACT</td></tr>
                     <tr><td>TOOLS</td><td>SASS</td></tr>
                     </tbody>
                   </Table>
                   </Col>
                   </Row>
                   <h3>FEATURES</h3>
                   <Row>
                   <Col md={4} xs={12}>
                   <h5>REACT</h5>
                   <p>Built with React.  React is an ideal library to deal with the rapid changes to the view that occur in this simulation.  React lets each component manage its own state.  The medium size board has 2500 different components, each with their own state.</p>
                   <p>The React Community is big and getting bigger.  With React Fiber being launched soon, it doesn't look like React is going anywhere.  I have chose to focus a lot of my effort into learning React for these reasons.</p>
                   <h5>FOUNDATION</h5>
                   <p>Built upon the Foundation CSS Framework</p>
                   </Col>
                   <Col md={4} xs={12}>
                   <h5>HOW IT WORKS</h5>
                   <ResponsiveEmbed a4by3>
                   <iframe src="https://www.youtube.com/embed/gPj431S-7iE" allowfullscreen></iframe>
                   </ResponsiveEmbed>
                   <a href="https://www.youtube.com/watch?v=gPj431S-7iE" target="_blank">Fullscreen</a>
                   </Col>
                   <Col md={4} xs={12}>
                   <h5>COMPLEX METHODS</h5>
                   <p>I made a 4 part series that explains the different functions/methods that power the Game of Life.  These are a step up from basic javascript.  The design of this game required me to apply what I knew about iterating over large sets of data.  However, instead of using those functions to read data, I use them to create components.  Watch <a href="https://www.youtube.com/playlist?list=PLh6ckU65UHavdxseK6PUa0r7tCilni-94" target="_blank">this You Tube Playlist </a>see me explain how I made my version of Game of Life.</p>
                   <h5>CSS3 SPECIFICATIONS & SASS</h5>
                   <p>I utilize Flexbox and CSS Custom Properies in this project.  SASS nesting and variables as well.</p>
                   </Col>
                   </Row>
                  
                   </Grid>
                   </Modal.Body>
                   
                   <Modal.Footer>
                    <Button onClick={this.hideModal}>Close</Button>
                   </Modal.Footer>
          
                   </Modal>
              </ButtonToolbar>
                  
            )
    }
}

export default SummaryGol;