import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import  {Grid, Row, Col, Button} from 'react-bootstrap';
import './Blog.css';

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <h1>Blog</h1>
                <Grid>
                    <Row className="Description-wrapper">
                        <Col md={4} />
                        <Col className="Description" md={4}>
                            <p>Click on the button below to view some of my blogs</p>
                        </Col>
                        <Col md={4} />
                    </Row>
                    <Row className="Button-wrapper-wrap">
                        <Col md={3}/>
                        <Col md={6} className="Button-wrapper">
                            <Button block>
                                Continue to Blog
                            </Button>
                        </Col>
                        <Col md={3}/>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Blog;
