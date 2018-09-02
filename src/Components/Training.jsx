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
                        <Col md={1}/>
                        <Col md={10} className="Panel-wrapper">
                            <PanelGroup
                                accordion
                                id="accordion-example"
                                defaultActiveKey="1">

                                <Panel eventKey="1">
                                    <Panel.Heading className="Title-Heading">
                                        <Panel.Title toggle>Session Packs</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        <div className="Columns">
                                            <ul className="Price">
                                                <div className="Pack-Heading"><li className="Head">10 Sessions Pack</li></div>
                                                <div className="Price-Tag"><li className="Grey">$ 550.00 (CAD)</li></div>
                                                <li>
                                                    The private coaching pack is a comprehensive plan for
                                                    individuals who are getting ready to get started on
                                                    achieving strength, and losing weight. This session pack
                                                    outlines intense training sessions with the personal
                                                    trainer you are signing up with. Please be advised that
                                                    you are on your journey to become a better you!
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="Columns">
                                            <ul className="Price">
                                                <div className="Pack-Heading"><li className="Head">15 Session Pack</li></div>
                                                <div className="Price-Tag"><li className="Grey">$ 932.00 (CAD)</li></div>
                                                <li>
                                                    The private coaching pack is a comprehensive plan for
                                                    individuals who are getting ready to get started on
                                                    achieving strength, and losing weight. This session pack
                                                    outlines intense training sessions with the personal
                                                    trainer you are signing up with. Please be advised that
                                                    you are on your journey to become a better you!
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="Columns">
                                            <ul className="Price">
                                                <div className="Pack-Heading"><li className="Head">25 Sessions Pack</li></div>
                                                <div className="Price-Tag"><li className="Grey">$ 1,130.00 (CAD)</li></div>
                                                <li>
                                                    The private coaching pack is a comprehensive plan for
                                                    individuals who are getting ready to get started on
                                                    achieving strength, and losing weight. This session pack
                                                    outlines intense training sessions with the personal
                                                    trainer you are signing up with. Please be advised that
                                                    you are on your journey to become a better you!
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="Columns">
                                            <ul className="Price">
                                                <div className="Pack-Heading"><li className="Head">5 Session Pack</li></div>
                                                <div className="Price-Tag"><li className="Grey">$ 300.00 (CAD)</li></div>
                                                <li>
                                                    The private coaching pack is a comprehensive plan for
                                                    individuals who are getting ready to get started on
                                                    achieving strength, and losing weight. This session pack
                                                    outlines intense training sessions with the personal
                                                    trainer you are signing upwith. Please be advised that
                                                    you are on your journey to become a better you!
                                                </li>
                                            </ul>
                                        </div>
                                    </Panel.Body>
                                </Panel>
                                <Panel eventKey="2">
                                    <Panel.Heading>
                                        <Panel.Title toggle className="Title-Heading">Sports Specific Private Sessions</Panel.Title>
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
                                        <Panel.Title toggle className="Title-Heading">Nutrition Guidance & Planning</Panel.Title>
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
                                <Panel eventKey="4">
                                    <Panel.Heading>
                                        <Panel.Title toggle className="Title-Heading">Sample Session Training (1-4 Weeks Samples Available)</Panel.Title>
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
                                <Panel eventKey="5">
                                    <Panel.Heading>
                                        <Panel.Title toggle className="Title-Heading">Subscriptions</Panel.Title>
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
                        <Col md={1}/>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Training;
