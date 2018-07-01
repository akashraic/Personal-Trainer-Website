import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  {Grid, Row, Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faSnapchat} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <Grid>
                    <Row>
                        <Col md={2} />
                        <Col md={4}>
                            <h1>Contact</h1>
                        </Col>
                        <Col md={6}/>
                    </Row>
                    <Row>
                        <Col md={2} />
                        <Col md={2}>
                            <FontAwesomeIcon icon={faInstagram} color="black"/>
                        </Col>
                        <Col md={2}>
                            <FontAwesomeIcon icon={faSnapchat} color="black"/>
                        </Col>
                        <Col md={6}/>
                    </Row>
                </Grid>

            </div>
        );
    }
}

export default Footer;
