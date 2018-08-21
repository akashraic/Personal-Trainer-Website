import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Grid, Row, Col, Button, Collapse, Well} from 'react-bootstrap';
import './Training.css';
import Table from "react-bootstrap/es/Table";

class Training extends Component {
    constructor(props, context) {
        super(props,context);

        this.state = {
            open:false
        };
    }
    render() {
        return (

            <div className="Training">
                <h1>Training</h1>
                <Grid>
                    <Row className="Description-wrapper">
                        <Col md={3} />
                        <Col className="Description" md={6}>
                            <p className="Training-description">Click on the button below to
                                learn more about my packages. Contact me for more information</p>
                        </Col>
                        <Col md={3} />
                    </Row>
                    <Row className="Button-wrapper-wrap">
                        <Col md={3}/>
                        <Col md={6} className="Button-wrapper">
                            <Button block onClick={() => this.setState({open: !this.state.open})}>
                                View packages
                            </Button>
                            <Collapse in={this.state.open}>
                                <div className="packages">
                                    <Well>
                                      <Table responsive striped bordered condense>
                                            <thead>

                                            </thead>
                                            <tbody>

                                            </tbody>
                                      </Table>
                                    </Well>
                                </div>
                            </Collapse>
                        </Col>
                        <Col md={3}/>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Training;
