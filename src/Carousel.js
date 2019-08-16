import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class Carousel extends Component {
    render() {
        return (
            <div>
                <Container className="bg-light">
                    <Row style={{float: "right"}}>

                        <FontAwesomeIcon style={{
                        }} icon={ faArrowLeft }/>
                        <FontAwesomeIcon style={{
                        }} icon={ faArrowRight }/>
                    </Row>
                    <Row >

                        <Col style={{padding: '20px'}}>

                            <div style={{border: "2px solid black"}}></div>
                            <h3>Quick Starts</h3>
                            <h6>Access your most used tools</h6>
                            <div style={{border: "1px solid black", marginBottom: "20px"}}></div>
                            <h6>Shortcut Link 1</h6>
                            <h6>Shortcut Link 2</h6>
                            <h6>Shortcut Link 3</h6>
                        </Col>
                        <Col style={{padding: '20px'}}>
                            <Card style={{ width: '15rem' }}>
                                <Card.Body>
                                    <h6 className="font-weight-bold">Create New Report</h6>
                                    <div style={{border: "1px solid black", marginTop: "40px"}}></div>
                                    <Card.Text>
                                        Add Data and update measures and dimensions
                                    </Card.Text>
                                    <Card.Link href="#" style={{float: "right"}}>Another</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col style={{padding: '20px'}}>
                            <Card style={{ width: '15rem' }}>
                                <Card.Body>
                                    <h6 className="font-weight-bold">Create New Report</h6>
                                    <div style={{border: "1px solid black", marginTop: "40px"}}></div>
                                    <Card.Text>
                                        Add Data and update measures and dimensions
                                    </Card.Text>
                                    <Card.Link href="#" style={{float: "right"}}>Another</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col style={{padding: '20px'}}>
                            <Card style={{ width: '15rem' }}>
                                <Card.Body>
                                    <h6 className="font-weight-bold">Create New Report</h6>
                                    <div style={{border: "1px solid black", marginTop: "40px"}}></div>
                                    <Card.Text>
                                        Add Data and update measures and dimensions
                                    </Card.Text>
                                    <Card.Link href="#" style={{float: "right"}}>Another</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Carousel;