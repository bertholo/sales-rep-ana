import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import hose from '../../img/fire-hose.png';
import connections from '../../img/conexoes.png';
import sprinklers from '../../img/sprinkler.jpg';
import valves from '../../img/valve.jpg';
import protection from '../../img/protection.jpg';
import firePipes from '../../img/fire-pipes.png';
import electroducts from '../../img/electroducts.png';
import otherMaterials from '../../img/other-materials.jpg';

const Products = ({ t }) => {

    return (
        <Container className="text-center my-5" id="products">
            <h1>{t('productSection')}</h1>
            <Row className='my-5'>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hose} style={{ height: '14rem' }} />
                        <Card.Body>
                            <Card.Title>{t('productTitle1')}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={connections} style={{ height: '14rem' }} />
                        <Card.Body>
                            <Card.Title>{t('productTitle2')}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sprinklers} style={{ height: '14rem' }} />
                        <Card.Body>
                            <Card.Title>{t('productTitle3')}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={valves} style={{ height: '14rem' }} />
                        <Card.Body>
                            <Card.Title>{t('productTitle4')}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={protection} style={{ height: '14rem' }} />
                        <Card.Body>
                            <Card.Title>{t('productTitle5')}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={firePipes} style={{ height: '14rem' }} />
                        <Card.Body>
                            <Card.Title>{t('productTitle6')}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={electroducts} style={{ height: '14rem' }} />
                        <Card.Body>
                            <Card.Title>{t('productTitle7')}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={otherMaterials} style={{ height: '14rem' }} />
                        <Card.Body>
                            <Card.Title>{t('productTitle8')}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default Products;