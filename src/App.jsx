import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Videos from './Components/Videos';
import Blog from './Components/Blog';
import Merchandise from './Components/Merchandise';
import Training from './Components/Training';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram);

class App extends Component {
  render() {
    return (
          <div className="App">
            <Home className="Home"/>
            <About className="About"/>
            <Videos className="Videos"/>
            <Blog className="Blog"/>
            <Merchandise className="Merchandise"/>
            <Training className="Training"/>
            <Subscribe className="Subscribe"/>
            <Footer className="Footer"/>
          </div>

    );
  }
}

export default App;
