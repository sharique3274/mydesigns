import React, {Component} from 'react';
import {Container, Row, Col} from "react-bootstrap";

class SectionTwo extends Component {
    render() {
        return (
            <div style={{marginTop: "40px"}}>
                <Container>
                    <Row>
                        <Col sm={9}>
                            <div style={{border: "2px solid black"}}></div>

                        </Col>
                        <Col sm={3}>
                            <div style={{border: "2px solid black"}}></div>
                            Hello
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SectionTwo;