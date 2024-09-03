import React from 'react';
import { Container, Row, Col, Stack, Image } from 'react-bootstrap';

import whyUs from '../../img/whyUs.jpg';

function WhyUs({ t, imageStyle }) {
    return (
        <Container className='bg-primary mb-5 text-center text-light' id="whyUs" fluid>
            <Row md={2} xs={1}>
                <Col className='p-0'>
                    <Image alt='about us' src={whyUs} style={imageStyle} rounded/>
                </Col>
                <Col className='my-5 px-5'>
                    <h1 className='text-light mb-5'>{t('whyUsSection')}</h1>
                    <Stack gap={5}>
                        <div>
                            <p className='fw-semibold fs-4'>{t('whyUsSectionTitle1')}</p>
                            <p className='fw-light'>{t('whyUsSectionDescription1')}</p>
                        </div>
                        <div>
                            <p className='fw-semibold fs-4'>{t('whyUsSectionTitle2')}</p>
                            <p className='fw-light'>{t('whyUsSectionDescription2')}</p>
                        </div>
                        <div>
                            <p className='fw-semibold fs-4'>{t('whyUsSectionTitle3')}</p>
                            <p className='fw-light'>{t('whyUsSectionDescription3')}</p>
                        </div>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default WhyUs;