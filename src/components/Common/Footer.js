import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiPhone } from 'react-icons/bi';
import { FaTelegramPlane, FaGithub } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

function Footer() {
    return(
        <footer className="mt-5">
            <Container fluid={true} >
                <Row className="border-top justify-content-between p-3 text-center">
                    <Col md={3} sm={12}>
                        <BiPhone size={30} className="mr-1"/>+65 9662 5596
                    </Col>

                    <Col md={3} sm={12}>
                        <a href="http://t.me/tadrandomperson" target="_blank" rel="noopener noreferrer"><FaTelegramPlane size={30} className="mr-1"/>tadrandomperson</a>
                    </Col>

                    <Col md={3} sm={12}>
                        <a href="https://github.com/Choo-Xing-Yu" target="_blank" rel="noopener noreferrer"><FaGithub size={30} className="mr-1"/>Choo-Xing-Yu</a>
                    </Col>

                    <Col md={3} sm={12}>
                        <MdMail size={30} className="mr-1"/>chooxingyu@u.nus.edu
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;