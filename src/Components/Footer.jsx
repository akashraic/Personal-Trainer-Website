import React, { Component } from 'react';
import  {Grid, Row, Col} from 'react-bootstrap';
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
                        <Col md={3} />
                        <Col md={6}>
                            <h1>Contact</h1>
                        </Col>
                        <Col md={3}/>
                    </Row>
                    <Row>
                        <Col md={4} />
                        <Col md={4} className="Social-media">
                            <a href="#"><FontAwesomeIcon className="instant" icon={faInstagram} color="black"/></a>
                            <a href="#"><FontAwesomeIcon className="snap" icon={faSnapchat} color="black"/></a>
                        </Col>
                        <Col md={4}/>
                    </Row>
                </Grid>

            </div>
        );
    }
}

export default Footer;
