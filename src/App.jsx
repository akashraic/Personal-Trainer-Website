import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Videos from './Components/Videos';
import Blog from './Components/Blog';
import Merchandise from './Components/Merchandise';
import Training from './Components/Training';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
import Navbar from './Components/CustomNavbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram);

class App extends Component {
  render() {
    return (
          <div className="App">
            <Home className="section1"/>
            <About/>
            <Videos/>
            <Blog/>
            <Merchandise/>
            <Training/>
            <Subscribe/>
            <Footer className="section6"/>
          </div>

    );
  }
}

export default App;
