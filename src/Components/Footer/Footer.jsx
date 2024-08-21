import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer({ t }) {
    return (
        <Container fluid className="bg-primary text-light py-5 text-center">
            <Row>
                <Col>
                    <p className='fs-3'><i class="bi bi-whatsapp"></i>  +55 21 99443-9571</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer