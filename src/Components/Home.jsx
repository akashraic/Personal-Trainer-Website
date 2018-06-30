import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  {Grid, Row, Col, Image, Button, ListGroup, ListGroupItem, Nav, NavItem} from 'react-bootstrap';
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
                <Row className="show-grid text-center Menu-row">
                    <Col xs={3} />
                    <Col xs={6} className="Menu-items">
                        <Nav bsStyle="pills" justified className="Items">
                            <NavItem eventKey={1} className="item_1">About</NavItem>
                            <NavItem eventKey={2} className="item_2">Videos</NavItem>
                            <NavItem eventKey={3} className="item_3">Blog</NavItem>
                            <NavItem eventKey={4} className="item_4">Merchandise</NavItem>
                            <NavItem eventKey={5} className="item_5">Training</NavItem>
                            <NavItem eventKey={6} className="item_6">Subscribe</NavItem>
                        </Nav>
                        <Col xs={3} />
                    </Col>
                </Row>
                <hr />
            </Grid>
        );
    }
}

export default Home;
