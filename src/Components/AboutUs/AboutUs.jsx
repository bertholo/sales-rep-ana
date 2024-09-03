import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import aboutUs from '../../img/aboutUs.jpg';

function AboutUs({ t, imageStyle }) {

    return (
        <Container className='bg-primary text-center text-light' id="aboutUs" fluid>
            <Row md={2} xs={1}>
                <Col className='p-5'>
                    <h1 className='text-light py-5'>{t('AboutUsTitle')}</h1>
                    <p className='lh-lg fw-light fs-4'>{t('AboutUsDescription1')}</p>
                    <p className='lh-lg fw-light fs-4'>{t('AboutUsDescription2')}</p>
                </Col>
                <Col className='p-0'>
                    <Image alt='about us pic' src={aboutUs} style={imageStyle} rounded/>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUs;