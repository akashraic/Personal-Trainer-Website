import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2> Intro </h2>
                </Jumbotron>
            </Grid>
        );
    }
}

export default Home;
