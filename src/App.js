import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Button, Form, Navbar, Nav, NavDropdown, Carousel, Image, Card, Stack } from 'react-bootstrap';

import redPipes from './img/red-pipes.jpg';
import valves from './img/valves.jpg';
import waterSupply from './img/water-supply.jpg';
import hose from './img/fire-hose.png';
import aboutUs from './img/aboutUs.jpg';
import sprinkler from './img/sprinkler.png';
import steelPipes from './img/steel-pipes.png';

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
      <Navbar expand="lg" className='bg-primary p-3' data-bs-theme="dark" fluid>
        <Navbar.Brand className='px-4 fs-1' href="#home">
          Direcionaco
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">{t('aboutUs')}</Nav.Link>
            <NavDropdown title={t('partners')} id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://www.tubosapolo.com.br" target="_blank" rel="noopener noreferrer">Apolo</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.secur.com.br" target="_blank" rel="noopener noreferrer">Secur</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.ipcbrasil.ind.br/" target="_blank" rel="noopener noreferrer">IPC Brasil</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('Languages')}>
              <NavDropdown.Item onClick={() => handleLanguageChange('pt')}>Pt</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => handleLanguageChange('en')}>En</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/*Hero Section*/}
      <Carousel fade >
        <Carousel.Item style={carouselStyle} interval={4000}>
          <Image alt='First slide' src={waterSupply} style={imageStyle}/>
          <Carousel.Caption>
            <p className='fs-3 fw-bold'>{t('slide1Title')}</p>
            <p>{t('slide1Description')}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={carouselStyle} interval={4000}>
          <Image alt='Second slide' src={redPipes} style={imageStyle}/>
          <Carousel.Caption>
            <p className='fs-3 fw-bold'>{t('slide2Title')}</p>
            <p>{t('slide2Description')}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={carouselStyle} interval={4000}>
          <Image alt='Third slide' src={valves} style={imageStyle}/>
          <Carousel.Caption>
            <p className='fs-3 fw-bold'>{t('slide3Title')}</p>
            <p>{t('slide3Description')}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/*Nossos Produtos section */}
      <Container className="text-center my-5">
        <h1>Amostra de produtos</h1>
        <Row md={4} xs={1} className='my-5'>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={hose} style={imageStyle} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={hose} style={imageStyle} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={hose} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={hose} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* About us section */}
      <Container className='bg-primary my-5 text-center text-light' fluid>
        <Row md={2} xs={1}>
          <Col className='p-0'>
            <Image alt='about us' src={aboutUs} style={imageStyle} />
          </Col>
          <Col className='mt-5 text-light'>
            <h1 className='text-light mb-5'>Why Choose Us?</h1>
            <Stack gap={5}>
              <div>
                <p className='fw-semibold fs-4'>Loyal Customer Base</p>
                <p className='fw-light'>Trusted by thousands across Brazil for consistent, reliable service.</p>
              </div>
              <div>
                <p className='fw-semibold fs-4'>Nationwide Reach</p>
                <p className='fw-light'>Delivering to every corner of Brazil, no matter the distance.</p>
              </div>
              <div>
                <p className='fw-semibold fs-4'>Customer Support</p>
                <p className='fw-light'>Dedicated support to assist with all your requirements.</p>
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>

      {/* Contact Form Section */}
      <Container className="my-5 text-center">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1>{t('contactUs')}</h1>
            <Form action="YOUR_FORM_HANDLER_URL" method="post">
              <Form.Group controlId="formName" className="mb-3 mt-5">
                <Form.Control type="text" name="name" placeholder={t('name')} required />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control type="email" name="email" placeholder={t('email')} required />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Control as="textarea" name="message" rows="5" placeholder={t('message')} required />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">{t('submit')}</Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <Container fluid className="bg-primary text-light py-5 text-center">
        <Row>
          <Col>
            <p className='fs-3'><i class="bi bi-whatsapp"></i>  +55 21 99443-9571</p>
            <p>© 2023 Direcionaco. {t('All Rights Reserved')}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
