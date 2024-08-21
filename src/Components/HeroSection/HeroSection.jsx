import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

import redPipes from '../../img/red-pipes.jpg';
import valves from '../../img/valves.jpg';
import waterSupply from '../../img/water-supply.jpg';

function HeroSection({ t, imageStyle, carouselStyle }) {
    return (
        <Carousel fade >
            <Carousel.Item style={carouselStyle} interval={4000}>
                <Image alt='First slide' src={waterSupply} style={imageStyle} />
                <Carousel.Caption>
                    <p className='fs-3 fw-bold'>{t('slide1Title')}</p>
                    <p>{t('slide1Description')}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={carouselStyle} interval={4000}>
                <Image alt='Second slide' src={redPipes} style={imageStyle} />
                <Carousel.Caption>
                    <p className='fs-3 fw-bold'>{t('slide2Title')}</p>
                    <p>{t('slide2Description')}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={carouselStyle} interval={4000}>
                <Image alt='Third slide' src={valves} style={imageStyle} />
                <Carousel.Caption>
                    <p className='fs-3 fw-bold'>{t('slide3Title')}</p>
                    <p>{t('slide3Description')}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HeroSection