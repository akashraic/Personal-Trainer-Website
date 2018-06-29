import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect fixedTop inverse fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Holistic Bodies </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} to ="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} to ="/">
                            About
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} to ="/">
                            Videos
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} to ="/">
                            Blog
                        </NavItem>
                        <NavItem eventKey={5} componentClass={Link} to ="/">
                            Merchandise
                        </NavItem>
                        <NavItem eventKey={6} componentClass={Link} to ="/">
                            Training
                        </NavItem>
                        <NavItem eventKey={7} componentClass={Link} to ="/">
                            Subscribe
                        </NavItem>
                        <NavItem eventKey={8} componentClass={Link} to ="/">
                            Footer
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


