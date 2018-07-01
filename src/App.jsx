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
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={About} />
            <Route exact path="/" component={Videos} />
            <Route exact path="/" component={Blog} />
            <Route exact path="/" component={Merchandise} />
            <Route exact path="/" component={Training} />
            <Route exact path="/" component={Subscribe} />
            <Route exact path="/" component={Footer} />
          </div>
        </Router>
    );
  }
}

export default App;
