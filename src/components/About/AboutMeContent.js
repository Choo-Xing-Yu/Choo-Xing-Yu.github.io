import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function AboutMeContent(props) {
    return (
        <Container fluid={true} className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMeContent;