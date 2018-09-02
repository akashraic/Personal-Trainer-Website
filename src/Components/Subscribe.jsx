import React, { Component } from 'react';
import  {Grid, Row, Col, Button, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import './Subscribe.css';
import Mailchimp from 'react-mailchimp-form';

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
                            <Mailchimp
                            action='https://facebook.us19.list-manage.com/subscribe/post?u=f63cb56768fba0c0f62eb7e2b&amp;id=01f405136b'
                            fields={[
                                {
                                    name: 'MERGE1',
                                    placeholder:'John',
                                    type: 'text',
                                    required: true,
                                },
                                {
                                    name: 'MERGE2',
                                    placeholder:'Doe',
                                    type: 'text',
                                    required: true
                                },
                                {
                                    name: 'MERGE0',
                                    placeholder:'johndoe@email.com',
                                    type: 'email',
                                    required: true
                                }
                            ]}
                            className="Form-class"
                            />
                            <Form inline method='post' target="_blank" action='https://facebook.us19.list-manage.com/subscribe/post' >
                                <input type="hidden" name="u" value="f63cb56768fba0c0f62eb7e2b" />
                                <input type="hidden" name="id" value="01f405136b" />

                                <FormGroup controlId="formFirstName">
                                    <ControlLabel>First Name:</ControlLabel>{' '}
                                    <FormControl type="text" placeholder="Jane" name="FNAME" />
                                </FormGroup>{' '}
                                <FormGroup controlId="formLastName">
                                    <ControlLabel>Last Name:</ControlLabel>{' '}
                                    <FormControl type="text" placeholder="Doe" name="LNAME" />
                                </FormGroup>{' '}
                                <FormGroup controlId="formInlineEmail">
                                    <ControlLabel>Email:</ControlLabel>{' '}
                                    <FormControl type="email" placeholder="jane.doe@example.com" name="EMAIL"/>
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
