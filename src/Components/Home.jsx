import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid tet-center">
                    <Col xs={4}>
                        <h1>Holistic</h1>
                    </Col>
                    <Col className="Logo-wrapper" xs={6}>
                        <Image src="assests/Main_Logo.png" circle className="logo"/>
                    </Col>
                    <Col xs={2}>
                        <h1>Bodies</h1>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Home;
