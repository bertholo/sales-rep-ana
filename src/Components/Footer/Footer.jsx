import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <Container fluid className="bg-primary py-5 text-center text-light">
            <Row>
                <Col>
                    <p className='fs-3'><i class="bi bi-whatsapp text-success"></i>  +55 21 99443-9571</p>
                    <p className='fs-3'><i class="bi bi-whatsapp text-success"></i>  +55 31 98440-8660</p>
                    <p className='fs-3'><i class="bi bi-whatsapp text-success"></i>  +55 31 98463-5005</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer