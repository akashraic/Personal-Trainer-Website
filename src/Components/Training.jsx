import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Grid, Row, Col, Button, Collapse, Well, PanelGroup, Panel} from 'react-bootstrap';
import './Training.css';
import Table from "react-bootstrap/es/Table";

class Training extends Component {
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
                        <Col md={2}/>
                        <Col md={8} className="Panel-wrapper">
                            <PanelGroup
                                accordion
                                id="accordion-example">

                                <Panel eventKey="1">
                                    <Panel.Heading>
                                        <Panel.Title toggle>Collapsible Group Item #1</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                        moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                                        butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                        aesthetic synth nesciunt you probably haven't heard of them accusamus
                                        labore sustainable VHS.
                                    </Panel.Body>
                                </Panel>
                                <Panel eventKey="2">
                                    <Panel.Heading>
                                        <Panel.Title toggle>Collapsible Group Item #2</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                        moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                                        butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                        aesthetic synth nesciunt you probably haven't heard of them accusamus
                                        labore sustainable VHS.
                                    </Panel.Body>
                                </Panel>
                                <Panel eventKey="3">
                                    <Panel.Heading>
                                        <Panel.Title toggle>Collapsible Group Item #3</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                        moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                                        butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                        aesthetic synth nesciunt you probably haven't heard of them accusamus
                                        labore sustainable VHS.
                                    </Panel.Body>
                                </Panel>
                            </PanelGroup>
                        </Col>
                        <Col md={2}/>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Training;
