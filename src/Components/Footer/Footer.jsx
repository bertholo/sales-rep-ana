import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <Container fluid className="bg-primary py-5 text-center text-light">
            <Row>
                <Col>
                    <p className='fs-3'>Ana Maria: <i class="bi bi-whatsapp text-success"></i>  +55 21 99443-9571</p>
                    <p className='fs-3'>Lucas Pilar: <i class="bi bi-whatsapp text-success"></i>  +55 21 99379-0939</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer