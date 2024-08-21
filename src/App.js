import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';

import EmailForm from './Components/Form/EmailForm';
import Products from './Components/Products/Products';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import HeroSection from './Components/HeroSection/HeroSection';
import TopNav from './Components/TopNav/TopNav';

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
      {/* Navbar */}
      <TopNav t={t} handleLanguageChange={handleLanguageChange}/>

      {/*Hero Section*/}
      <HeroSection t={t} imageStyle={imageStyle} carouselStyle={carouselStyle}/>

      {/*Nossos Produtos section */}
      <Products t={t} />

      {/* About us section */}
      <AboutUs t={t} imageStyle={imageStyle} />

      <EmailForm t={t} imageStyle={imageStyle} />

      {/* Footer Section */}
      <Footer t={t} />
    </Container>
  );
}

export default App;
