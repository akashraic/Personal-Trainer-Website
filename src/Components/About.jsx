import React, { Component } from 'react';
import  {Grid, Row, Col, Image, Nav, NavItem} from 'react-bootstrap';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="About">
                <Grid>
                    <h1>About</h1>
                    <Row className="about-us">
                        <h2>About Us</h2>
                        <Col xs={1} />
                        <Col xs={5} className="triangle-wrapper">
                            <Image src="assests/Triangle.png" responsive className="triangle"/>
                        </Col>
                        <Col xs={5} className="About-us-wrapper">
                            <p>Holistic bodies is about creating an holistic self. Holistic way of living involves the commitment to growth. Growth requires you to understand your own individual self, keeping an audit of your strength and weaknesses, and seizing the opportunities provided to you.
                                Holistics bodies is a space where you can learn about yourself, use tools to improve yourself, and share your improvements with the rest of the community.
                                We believe in empowering individuals through helping them explore their ethos, pathos and logos.
                            </p>
                        </Col>
                        <Col xs={1} />
                    </Row>
                    <Row className="about-me">
                        <h2>About Us</h2>
                        <Col xs={1} />
                        <Col xs={5} className="triangle-wrapper">
                            <Image src="assests/Triangle.png" responsive className="triangle"/>
                        </Col>
                        <Col xs={5} className="About-us-wrapper">
                            <p>Holistic bodies is about creating an holistic self. Holistic way of living involves the commitment to growth. Growth requires you to understand your own individual self, keeping an audit of your strength and weaknesses, and seizing the opportunities provided to you.
                                Holistics bodies is a space where you can learn about yourself, use tools to improve yourself, and share your improvements with the rest of the community.
                                We believe in empowering individuals through helping them explore their ethos, pathos and logos.
                            </p>
                        </Col>
                        <Col xs={1} />
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default About;
