
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// <Card bg='warning'> change card color primary, secondary, success, danger
import React from 'react'

export function V78CreateCardsUsingReactBootstrap() {
    return (
        <>


            <Container>
                <div style={{ border: '20px', width: '700px', height: 'auto'}}>
                    <Row>
                        <Col>
                            <Card bg='primary' border='success'>
                                <Card.Header style={{ color: 'blue', backgroundColor: 'gold' }}> This is card header</Card.Header>
                                <Card.Img src={require('./images/Trivveni Kaul.jpg')} height='400' alt="not found" />
                                <Card.Body>
                                    <Card.Title style={{ color: 'blue', backgroundColor: 'pink', fontSize: '20px', fontWeight: 'bold' }}>
                                        Card.Title
                                    </Card.Title>
                                    <Card.Subtitle style={{ color: 'blue', backgroundColor: 'skyblue', fontSize: '20px', fontWeight: 'bold' }}>
                                        Card.Subtitle
                                    </Card.Subtitle>
                                    <Card.Text style={{ color: 'blue', backgroundColor: 'brown', fontSize: '20px', fontWeight: 'bold' }}>
                                        Something Paragraph
                                    </Card.Text>
                                    <Button variant='danger'> Danger Button </Button>&nbsp;<br />
                                    <Card.Link href='href="https://www.google.com/"'>Click Here...</Card.Link>

                                    <Card.Footer style={{ color: 'blue', backgroundColor: 'orange' }}> This is card footer</Card.Footer>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </div>

                <br />


                <div style={{ border: '20px', width: '700px' }}>

                    <Row className='mt-2'>
                        <Col>
                            <Card bg='secondary' border='success'>
                                <Card.Header style={{ color: 'blue', backgroundColor: 'gold' }}> This is card header</Card.Header>
                                <Card.Img src={require('./images/Ruchi Sharma Soniya Chauhan.png')} height='400' alt="not found" />
                                <Card.Body>
                                    <Card.Title style={{ color: 'blue', backgroundColor: 'pink', fontSize: '20px', fontWeight: 'bold' }}>
                                        Card.Title
                                    </Card.Title>
                                    <Card.Subtitle style={{ color: 'blue', backgroundColor: 'skyblue', fontSize: '20px', fontWeight: 'bold' }}>
                                        Card.Subtitle
                                    </Card.Subtitle>
                                    <Card.Text style={{ color: 'blue', backgroundColor: 'brown', fontSize: '20px', fontWeight: 'bold' }}>
                                        Something Paragraph
                                    </Card.Text>
                                    <div className='d-grid' style={{ color: 'violet', backgroundColor: 'green' }}> <Button variant='danger'>Full Strech Button </Button></div>
                                    <Card.Link href='href="https://www.google.com/"'>Click Here...</Card.Link>
                                    <Card.Footer style={{ color: 'blue', backgroundColor: 'orange' }}> This is card footer</Card.Footer>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </div>

                <div style={{ border: '20px', width: '700px' }}>

                    <Row className='mt-2'>
                        <Col>
                            <Card bg='secondary' border='success'>

                                <Card.Img src={require('./images/Meenakshi Kandwal.png')} height='400' alt="not found" />

                                <Card.ImgOverlay>
                                    <Card.Header style={{ color: 'silver', top: 0 }}> This is card header</Card.Header>
                                    <Card.Title style={{ color: 'silver', fontSize: '20px', fontWeight: 'bold' }}>
                                        Card.Title
                                    </Card.Title>
                                    <Card.Subtitle style={{ color: 'silver',  fontSize: '20px', fontWeight: 'bold' }}>
                                        Card.Subtitle
                                    </Card.Subtitle>
                                    <Card.Text style={{ color: 'silver',  fontSize: '20px', fontWeight: 'bold' }}>
                                        Something Paragraph
                                    </Card.Text>
                                    <Button variant='success'> Danger Button </Button>&nbsp;<br />
                                    <Card.Link href='href="https://www.google.com/"' style={{ color: 'silver' }}>Click Here...</Card.Link>
                                    <Card.Footer style={{ color: 'silver', bottom: 0 }}> This is card footer</Card.Footer>
                                </Card.ImgOverlay>

                            </Card>

                        </Col>
                    </Row>
                </div>
            </Container>

        </>
    )
}


