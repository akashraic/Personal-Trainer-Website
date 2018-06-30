import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid text-center Heading">
                    <Col xs={3} />
                    <Col className="Head-wrap-1" xs={2}>
                        <h1 className="Head-1">Holistic</h1>
                    </Col>
                    <Col className="Logo-wrapper" xs={2}>
                        <Image src="assests/Main_Logo.png" circle className="logo"/>
                    </Col>
                    <Col className="Head-wrap-2" xs={2}>
                        <h1 className="Head-2">Bodies</h1>
                    </Col>
                    <Col xs={3} />
                </Row>
                <Row className="show-grid text-center Menu">
                    <Col xs={2} />
                    <Col className="Items">
                        <h6>About</h6>
                        <h6>Videos</h6>
                        <h6>Blog</h6>
                        <h6>Merchandise</h6>
                        <h6>Training</h6>
                        <h6>Subscribe</h6>
                    </Col>
                </Row>
                <hr />
            </Grid>
        );
    }
}

export default Home;
