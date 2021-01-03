import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col md={8} sm={12}>
                        { props.name && <h1 className="display-3 font-weight-bolder mt-2 text-center">{props.name}</h1> }
                        { props.title && <h1 className="display-5 font-weight-bolder mt-2 text-center">{props.title}</h1> }
                        { props.text && <h3 className="lead font-weight-light text-center">{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;