import React, { Component } from 'react'
import { ButtonToolbar, ButtonGroup, Button, Modal, Col, Row, Grid, Image, Table, ResponsiveEmbed } from 'react-bootstrap'

class SummaryMm extends Component {
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
            <Button bsSize="large" href="https://benjaminadk.github.io/momsmap/index.html" target="_blank">LIVE SITE</Button>
            <Button bsSize="large">FREELANCE</Button>
            </ButtonGroup>
            <Modal show={this.state.show}
                   bsSize='large'
                   onHide={this.hideModal}
                   dialogClassName='Modal-Mm'>
                   <Modal.Header closeButton>
                     <Modal.Title id="Title-Mm"
                                  componentClass="h1">
                                 Mom's Map
                     </Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                   <Grid>
                   <Row>
                   <Col md={6}xs={12}>
                   <h3>PROJECT SCOPE</h3>
                   <p>Mom's Map is a Freelance Project that I made for my mom.  She had moved to a new area and it was larger and more complex than what she was used to.  Navigation from her house to a particular spot was difficult, and having to navigate between two spots - a resturant and a department store for example - was impossible.  My goal was to design an easy to use solution using the Google Maps Javascript Api.</p>
                   </Col>
                   <Col md={2} xs={12}>
                   <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1216298/new-old-lady.png" alt="mom cartoon" id="mom-cartoon" height={150}/>
                   </Col>
                   <Col md={4} xs={12}>
                   <Table striped bordered condensed hover>
                  
                     <tbody>
                     <tr><td>GOOGLE MAPS API</td><td>BASIC ACCESS TO MAPS</td></tr>
                     <tr><td>GOOGLE MAPS JAVASCRIPT API</td><td>CREATE YOUR OWN MAP WITH JAVASCRIPT</td></tr>
                     <tr><td>GOOGLE FUSION TABLES</td><td>STORES ALL YOUR DATA.  INTEGRATES WITH GOOGLE MAPS VIA THE JAVASCRIPT API</td></tr>
                     </tbody>
                   </Table>
                   </Col>
                   </Row>
                   <h3>FEATURES</h3>
                   <Row>
                   <Col md={4} xs={12}>
                   <h5>CUSTOM MAP COLORS</h5>
                   <p>With Google Styling Wizard I was able to design my own color scheme.  This tool lets you configure your scheme with a GUI.  Then I was able to output the JSON for my custom map and place it into the javascript that creates my map instance.</p>
                   <p>I designed Mom's Map to run the custom colors on page load but the regular Roadmap, Satellite and Terrain options are all still available in the app.</p>
                   <h5>STYLING WIZARD</h5>
                   <a href="https://mapstyle.withgoogle.com/" target="_blank">Make your own custom map</a>
                   </Col>
                   <Col md={4} xs={12}>
                   <h5>HOW IT WORKS</h5>
                   <ResponsiveEmbed a4by3>
                   <iframe src="https://www.youtube.com/embed/EuriXAPICxw" allowfullscreen></iframe>
                   </ResponsiveEmbed>
                   <a href="https://www.youtube.com/watch?v=EuriXAPICxw" target="_blank">Fullscreen</a>
                   </Col>
                   <Col md={4} xs={12}>
                   <h5>FUSION TABLES</h5>
                   <p><a href="https://chrome.google.com/webstore/detail/fusion-tables-experimenta/pfoeakahkgllhkommkfeehmkfcloagkl"target="_blank">Fusion Tables </a>is an experiemental extension for Google Chrome that allows you to enter data into a spreadsheet then integrate that data set into a Google Map.</p>
                   <p>It sounds complex, but Google has many tutorials on how to use their various map and fusion table apis.  I was able to design this relatively simple app with just a few hours worth of research.</p>
                   <h5>MORE INFORMATION</h5>
                   <a href="https://developers.google.com/maps/"target="_blank">Google Map Developer's Page</a>
                   </Col>
                   </Row>
                   <Row>
                   <Col md={4} xs={12}>
                    <h5>NOTES</h5>
                   <p>This application is a good example of my ability to learn new Platforms quickly and produce something worthwhile.  Since Google Maps has the Javascript Api I am able to take my overall knowledge of Javascript and apply it to their specific way of doing things.  So knowing Javascipt opens the doors to many exciting technologies.</p>
                   </Col>
                   <Col md={4} xs={12}>
                   
                    <Image src="https://i.stack.imgur.com/Mmww2.png" height={200} width={200}
                           className="javascript-logo" alt="insert here"/>
                    
                   </Col>
                   <Col md={4} xs={12}>
                    <h5>SCALABILITY</h5>
                   <p>With the skill set aquired through this project I have the ability to take on larger data visualizaion projects.  Here I integrate a simple HTML 5 Select element.  The Input Search element can also be integrated allowing a user to search a much larger data set than I have used here. Multiple data sets can also be layered into the same map and toggled.  The sky is the limit.</p>
                   <a href="http://maps.tnc.org/globalmaps.html" target="_blank">Global Conservation Map</a>
                   
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

export default SummaryMm;