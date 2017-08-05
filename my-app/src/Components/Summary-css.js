import React, { Component } from 'react'
import { ButtonToolbar, ButtonGroup, Button, Modal, Col, Row, Grid, Thumbnail, Image, Table } from 'react-bootstrap'

class SummaryCss extends Component {
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
            <Button bsSize="large" href="http://www.css-sandbox.net" target="_blank">LIVE SITE</Button>
            <Button bsSize="large">FREELANCE</Button>
            </ButtonGroup>
            <Modal show={this.state.show}
                   bsSize='large'
                   onHide={this.hideModal}
                   dialogClassName='Modal-Css'>
                   <Modal.Header closeButton>
                     <Modal.Title id="Title-Css"
                                  componentClass="h1">
                                  CSS SANDBOX
                     </Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                   <Grid>
                   <Row>
                   <Col md={6}xs={12}>
                   <h3>PROJECT SCOPE</h3>
                   <p>CSS-Sanbox is a project I took on to synthesize all the skills I had learned in my first month of learning to code.  I wanted to use CSS Custom Properties, sometimes called CSS Variables.  I ended up designing this multipage CSS learning tool.  My goal was to have any user, regardless of skill level, come away from my site learning at least one new piece of information about Cascading Style Sheets.</p>
                   </Col>
                 
                   <Col md={2} xs={12}>
                   <Image className="css-logo"
                   src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1216298/Screenshot%202017-07-21%20at%203.51.08%20AM.png"
                       height={150} width={150}/>
                   </Col>
                   <Col md={4} xs={12}>
                   <Table striped bordered condensed hover>
                     <tbody>
                     <tr><td>FRAMEWORK</td><td>FOUNDATION</td></tr>
                     <tr><td>LIBRARY</td><td>JQUERY, JQUERY UI, JS COLOR</td></tr>
                     <tr><td>JQUERY UI</td><td>BUTTONS, CUSTOM YOU TUBE DIALOGS, SLIDERS, DRAG AND DROP</td></tr>
                     </tbody>
                   </Table>
                   </Col>
                   </Row>
                   <h3>FEATURES</h3>
                   <Row>
                   <Col md={4} xs={12}>
                   <h5>SANDBOX CONCEPT</h5>
                   <p>The heart of the site is the SANDBOX.  The user can interact with sliders, dropdown selections, color pickers and other inputs.  They design their HTML element through my GUI.  They can then get the HTML and CSS code for that design with the click of a button.  There is also real time feeback for all values.</p>
                   <h5>DRAG AND DROP</h5>
                   <p>JQUERY UI simplifies using drap and drop.  I used a graphic editor and drag and drop to design a small puzzle that the user can quickly complete for a laugh.  I added this just to show some of the cool things that are possible with the right tools.</p>
                   </Col>
                   <Col md={4} xs={12}>
                   <Thumbnail src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1216298/Screenshot%202017-07-21%20at%203.35.51%20AM.png" 
                       width={225} height={225} className="cssThumb"/>
                   </Col>
                   <Col md={4} xs={12}>
                   <h5>CSS VARIABLES</h5>
                   <p>I take full advantage of CSS Variable/CSS Custom Properties</p>
                   <p>CSS Variables are easy to use and when combined with javascript, give a developer maximum control over the elements in the DOM.  Besides the Sandbox itself, I have created a small color guessing game and designed a random color generator that updates the screen every two seconds, plus much more.</p>
                   <h5>USER CONTROL</h5>
                   <p>User can actually change site colors and timing functions with sliders for cubic bezier of transitions.</p>
                   </Col>
                   </Row>
                   <Row>
                   <Col md={4} xs={12}>
                    <h5>YOU TUBE EMBEDS</h5>
                   <p>I guide visitors through the site through a popup video system.  There are You Tube Buttons throughout the site that a user can click to get general information about the site as well as my personal explanation of parts of the source code.</p>
                   <h5>LEARNING RESOURCE</h5>
                   <p>As developers, and as people, I feel like it is important to share knowledge amongst one another.  In addition to my own creations, I also provide documentation for all the site features as well as links to many CSS resources that I have found helpful in my learning process.</p>
                   </Col>
                   <Col md={4} xs={12}>
                    <Thumbnail src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1216298/Screenshot%202017-07-21%20at%203.37.17%20AM.png"
                           width={225} height={225} className="cssThumb"/>
                   </Col>
                   <Col md={4} xs={12}>
                    <h5>BUILD TO LEARN</h5>
                   <p>By configuring a wide range of CSS values, the user may discover CSS properties they were unaware of, or learn how to more effectively use those that they do know.  At any point during creation the user can click a button and view the HTML and CSS of their project.  Building something can sometimes be more effective than simply reading about something.</p>
                   <h5>SOMETHING FOR EVERYONE</h5>
                   <p>I am mainly appealing to web developers.  Both new and expienced web devs will learn something from the site.  Even those not familiar with programming languages can design a custom snippet with CSS Sandbox.</p>
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

export default SummaryCss;