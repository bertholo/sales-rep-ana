import { React, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

function EmailForm({ t }) {

  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      e.stopPropagation();
      setStatus('Please fill out the form correctly.');
      return;
    }

    emailjs.sendForm('service_jmgw9id', 'template_7vddtwb', e.target, 'fE9dw3CgQrerbRQQ_')
      .then((result) => {
        setStatus(t('submitSuccess'));
        e.target.reset();
      }, (error) => {
        setStatus(t('submitError'));
      });
  };

  return (
    <Container className="my-5 py-1 text-center" id="contact">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>{t('contactUs')}</h1>
          <Form action="#" onSubmit={handleSubmit} method="post">
            <Form.Group controlId="formName" className="mb-3 mt-5">
              <Form.Control type="text" name="from_name" placeholder={t('name')} required />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control type="email" name="from_email" placeholder={t('email')} required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Control as="textarea" name="message" rows="5" placeholder={t('message')} required />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">{t('submit')}</Button>
          </Form>
        </Col>
      </Row>
      {status && <p className='mt-2 fs-3'>{status}</p>}
    </Container>
  )
}

export default EmailForm