import React, { Component } from 'react';
import Navigation from './Components/Navigation.js';
import SlideShow from './Components/Carousel.js';;
import './sass/App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      test: "Ben Rules"
    }
  }
  render() {
    return (
      <div className="App">
       <Navigation test={this.state.test} />
       <SlideShow />
      </div>
    );
  }
}

export default App;
