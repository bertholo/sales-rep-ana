import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';

import EmailForm from './Components/Form/EmailForm';
import Products from './Components/Products/Products';
import WhyUs from './Components/WhyUs/WhyUs';
import Footer from './Components/Footer/Footer';
import HeroSection from './Components/HeroSection/HeroSection';
import TopNav from './Components/TopNav/TopNav';
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  const carouselStyle = {
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  return (
    <Container className='p-0' fluid>
      <TopNav t={t} handleLanguageChange={handleLanguageChange}/>
      <HeroSection t={t} imageStyle={imageStyle} carouselStyle={carouselStyle}/>
      <Products t={t} />
      <AboutUs t={t} imageStyle={imageStyle} />
      <WhyUs t={t} imageStyle={imageStyle} />
      <EmailForm t={t} imageStyle={imageStyle} />
      <Footer />
    </Container>
  );
}

export default App;
