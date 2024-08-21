import React from 'react';
import { Container, Row, Col, Stack, Image } from 'react-bootstrap';

import aboutUs from '../../img/aboutUs.jpg';

function AboutUs({ t, imageStyle }) {
    return (
        <Container className='bg-primary my-5 text-center text-light' id="aboutUs" fluid>
            <Row md={2} xs={1}>
                <Col className='p-0'>
                    <Image alt='about us' src={aboutUs} style={imageStyle} />
                </Col>
                <Col className='mt-5 '>
                    <h1 className='text-light mb-5'>{t('aboutUsSection')}</h1>
                    <Stack gap={5}>
                        <div>
                            <p className='fw-semibold fs-4'>{t('aboutUsSectionTitle1')}</p>
                            <p className='fw-light'>{t('aboutUsSectionDescription1')}</p>
                        </div>
                        <div>
                            <p className='fw-semibold fs-4'>{t('aboutUsSectionTitle2')}</p>
                            <p className='fw-light'>{t('aboutUsSectionDescription2')}</p>
                        </div>
                        <div>
                            <p className='fw-semibold fs-4'>{t('aboutUsSectionTitle3')}</p>
                            <p className='fw-light'>{t('aboutUsSectionDescription3')}</p>
                        </div>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUs;