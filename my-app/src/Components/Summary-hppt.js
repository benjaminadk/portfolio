import React, { Component } from 'react'
import { ButtonToolbar, ButtonGroup, Button, Modal, Col, Row, Grid, Thumbnail, Image, Table } from 'react-bootstrap'

class SummaryHppt extends Component {
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
            <Button bsSize="large" href="http://www.highpeakpt.com" target="_blank">LIVE SITE</Button>
            <Button bsSize="large">FREELANCE</Button>
            </ButtonGroup>
            <Modal show={this.state.show}
                   bsSize='large'
                   onHide={this.hideModal}
                   dialogClassName='Modal-Hppt'>
                   <Modal.Header closeButton>
                     <Modal.Title id="Title-Hppt"
                                  componentClass="h1">
                                  HIGH PEAK PT
                     </Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                   <Grid>
                   <Row>
                   <Col md={6}xs={12}>
                   <h3>PROJECT SCOPE</h3>
                   <p>High Peak PT is a multipage Wordpress website and blog.  High Peak Physical Therapy is a brand new physical therapy practice set to open in October 2017.  They were in need of a modern website and specified that it be designed with Wordpress.  Their primary goals were to obtain a functional blog and a professional look.  I host the site and will provide ongoing management and maintaince.</p>
                   </Col>
                 
                   <Col md={2} xs={12}>
                   <Image className="hppt-logo"
                   src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1216298/hppt-logo-200x100.png"/>
                   </Col>
                   <Col md={4} xs={12}>
                   <Table striped bordered condensed hover>
                     <tbody>
                     <tr><td>CMS</td><td>WORDPRESS</td></tr>
                     <tr><td>THEME</td><td>AVADA</td></tr>
                     <tr><td>PLUGINS</td><td>CONTACT FORM 7, FUSION BUILDER, FLAMINGO, UPDRAFT, YOAST, WPCHAT, CALL NOW BUTTON</td></tr>
                     <tr><td>ADMIN</td><td>I REMAIN SITE ADMIN TO PROVIDE MAINTAINCE AND FUTURE SITE CHANGES.  I ADD EMPLOYEES AT DIFFERENT USER LEVELS DEPENDING ON HOW THEY WISH TO CONTRIBUTE TO SITE EI: BLOG POSTS</td></tr>
                     </tbody>
                   </Table>
                   </Col>
                   </Row>
                   <h3>FEATURES</h3>
                   <Row>
                   <Col md={4} xs={12}>
                   <h5>AVADA THEME</h5>
                   <p>High Peak is built on top of the Avada Theme.  Fusion Builder will allow the relatively inexperienced owner to create relatively complex blog post without any working knowledge of web languages.</p>
                   <h5>SEO OPTIMIZATION</h5>
                   <p>High Google Search results.  Google Analytics track page traffic.  This gives me the ability to see what works and adjust the site over time</p>
                   </Col>
                   <Col md={4} xs={12}>
                   <h5>CUSTOM LOGO AND ICON SETS</h5>
                   <p>Using Scalable Vector Graphics (SVG) for custom logos and icons means that how matter what size the graphics are displayed at, they will always be perfectly sharp and clear.  These graphics also add a unique visual quality to the site and enhance user experience.  Site also features multiple staff/patient image carousels with floating text that serve as headings for many pages, adding a dynamic element to the presentation without over styling.</p>
                   </Col>
                   <Col md={4} xs={12}>
                   <h5>RESPONSIVE DESIGN</h5>
                   <p>The site is constructed in accordance with responsive design.</p>
                   <p>A good example is multi-column layouts.  These will be displayed on large screens.  On a small screen each column might be displayed as a row.  The easiest way to understand how this works is to view the site on multiple devices and note the differencs.  Just know that when I design a website I want users on ALL devices to have a similar expereince.</p>
                   </Col>
                   </Row>
                   <Row>
                   <Col md={4} xs={12}>
                    <h5>RECAPTCHA FORM SECURITY</h5>
                   <p>Multiple forms are protected from spam attacks and hackers with ReCAPTCHA.  Patient form results will be routed to a preset email address and also pushed into a database upon submission</p>
                   <h5>LIVE CHAT SUPPORT</h5>
                   <p>Installed a live chat client that can optionally persist on all pages if desired.  Allows a potential patent to interact with a staff member in real time while they are on the site.  Toggles on/off easily.</p>
                   <h5>FLEXIBLE</h5>
                   <p>Features can be easily added.  Content can be adjusted since I have admin access.</p>
                   </Col>
                   <Col md={4} xs={12}>
                    <Thumbnail src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1216298/mockup-icon-set.svg"
                           width={250} height={250} className="iconSet"/>
                   </Col>
                   <Col md={4} xs={12}>
                    <h5>VIDEOS MAPS ANIMATIONS</h5>
                   <p>All the bells and whistles of a modern website.  Menu dynamically grows and shrinks based on scroll position.  Sticky Header and Footer, remain in view relaying important links and company information.</p>
                   <p>Toggles and Flip Cards make user interaction more interesting and also display more content with less space.</p>
                   <p>Google Maps and You Tube embeds deliver high quality custom content.</p>
                   <p>Animations are subtle, but add to the overall interactivity of the site.</p>
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

export default SummaryHppt;