import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { products } from '../../productsData';

const Products = ({ t }) => {

    return (
        <Container className="text-center my-5" id="products">
            <h1>{t('productSection')}</h1>
            <Row className='py-5'>
                {products.map((product, idx) => (
                    <Col key={idx}>
                        <Card className='my-3' style={{ width: '16rem', height: '18rem' }}>
                            <Card.Img variant='top' src={product.image} style={{ height: '14rem' }} />
                            <Card.Body>
                                <Card.Title>{t(product.title)}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Container>
    )
};

export default Products;