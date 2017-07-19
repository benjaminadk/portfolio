import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Aboutme from './Landing.js';
import SummaryHppt from './Summary-hppt.js';
import SummaryMm from './Summary-mm.js';
import SummaryGol from './Summary-gol.js';




class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            direction: null
        }
        this.handleSelect = this.handleSelect.bind(this);
    }
         handleSelect(selectedIndex, e) {
           this.setState({
           index: selectedIndex,
           direction: e.direction
           });
           }
        render () {
            return(
                <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                    <Carousel.Item>
                    <div id="slide0">
                    <Aboutme/>
                    </div>
                    </Carousel.Item>
        
                    <Carousel.Item>
                        <div id="slide1">
                        <img width={900} height={500} alt="900x500" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1216298/mockup-highpeakpt.svg"/>
                        </div>
                    <Carousel.Caption>
                        <h2 className="Caption">High Peak PT</h2>
                        <SummaryHppt/>
                    </Carousel.Caption>
                    </Carousel.Item>
                   
                    <Carousel.Item>
                        <div id="slide2">
                        <img width={900} height={500} alt="900x500" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1216298/mockup-momsmap.svg"/>
                        </div>
                    <Carousel.Caption>
                        <h2 className="Caption">MOM'S MAP</h2>
                        <SummaryMm/>
                    </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <div id="slide3">
                        <img width={900} height={500} alt="900x500" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1216298/mockup-game-of-life.svg"/>
                        </div>
                    <Carousel.Caption>
                        <h2 className="Caption">GAME OF LIFE</h2>
                        <SummaryGol/>
                        
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                  );
    }
}

export default SlideShow;

