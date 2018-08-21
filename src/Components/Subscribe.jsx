import React, { Component } from 'react';
import  {Grid, Row, Col, Button, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import './Subscribe.css';

class Subscribe extends Component {

    render() {
        return (
            <div className="Subscribe">
                <h1>Subscribe</h1>
                <Grid>
                    <Row className="Description-wrapper">
                        <Col md={3} />
                        <Col className="Description" md={6}>
                            <p className="Video-description">Subscribe to get access to more videos</p>
                        </Col>
                        <Col md={3} />
                    </Row>
                    <Row className="Field-wrapper-wrap">
                        <Col md={1} />
                        <Col className="Form-Wrapper" md={10}>
                            <Form inline>
                                <FormGroup controlId="formFirstName">
                                    <ControlLabel>First Name</ControlLabel>{' '}
                                    <FormControl type="text" placeholder="Jane" />
                                </FormGroup>{' '}
                                <FormGroup controlId="formLastName">
                                    <ControlLabel>Last Name</ControlLabel>{' '}
                                    <FormControl type="text" placeholder="Doe" />
                                </FormGroup>{' '}
                                <FormGroup controlId="formInlineEmail">
                                    <ControlLabel>Email</ControlLabel>{' '}
                                    <FormControl type="email" placeholder="jane.doe@example.com" />
                                </FormGroup>{' '}
                                <Button type="submit">Subscribe</Button>
                            </Form>
                        </Col>
                        <Col md={1} />
                    </Row>
                </Grid>

            </div>
        );
    }
}

export default Subscribe;
