// Carousel in bootstrap Image slider function

import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// <Carousel fade slide={true}> slide change not seen, fade gives fade effect
// <Carousel > slide change seen
// interval={1000} 1000 millisecond = 1 second, only interval makes animation
// variant='dark' makes image and description(present on image) color dark


export function V80CreatingCarouselReactBootstrap() {
    return (
        <>
            {/* <Container>
                <div style={{ border: '20px', width: '800px', height: 'auto' }}>
                    <Row>
                        <Col>
                            <Carousel>
                                <Carousel.Item><img src={require('./carousal/Angie Mead King.png')} alt='not found' /><Carousel.Caption> <h3>Image</h3><p>Description</p> </Carousel.Caption></Carousel.Item>
                                <Carousel.Item><img src={require('./carousal/Ariella Scarcella.jpg')} alt='not found' /><Carousel.Caption> <h3>Image</h3><p>Description</p> </Carousel.Caption></Carousel.Item>
                                <Carousel.Item><img src={require('./carousal/Gazal Dhaliwal.jpg')} alt='not found' /><Carousel.Caption> <h3>Image</h3><p>Description</p> </Carousel.Caption></Carousel.Item>
                                <Carousel.Item><img src={require('./carousal/Great Scotts.png')} alt='not found' /><Carousel.Caption> <h3>Image</h3><p>Description</p> </Carousel.Caption></Carousel.Item>
                                <Carousel.Item><img src={require('./carousal/machmaking group.png')} alt='not found' /><Carousel.Caption> <h3>Image</h3><p>Description</p> </Carousel.Caption></Carousel.Item>
                                <Carousel.Item><img src={require('./carousal/payal rohatgi.png')} alt='not found' /><Carousel.Caption> <h3>Image</h3><p>Description</p> </Carousel.Caption></Carousel.Item>
                                <Carousel.Item><img src={require('./carousal/Triveni Kaul.jpg')} alt='not found' /><Carousel.Caption> <h3>Image</h3><p>Description</p> </Carousel.Caption></Carousel.Item>
                                <Carousel.Item><img src={require('./carousal/yogita nain.png')} alt='not found' /><Carousel.Caption> <h3>Image</h3><p>Description</p> </Carousel.Caption></Carousel.Item>


                            </Carousel>

                        </Col>
                    </Row>
                </div>
            </Container> */}


            <Container fluid >
                <div style={{ border: '20px', width: '800px', height: 'auto' }}>
                    <Row>
                        <Col>
                            {/* <Carousel > */}
                            {/* <Carousel fade slide={true} variant='dark'> */}
                            <Carousel fade>
                            
                                <Carousel.Item interval={1000}><img src={require('./carousal/Angie Mead King.png')} alt='not found' className='d-block w-100'/><Carousel.Caption> <h3>Image</h3><p>Description</p> </Carousel.Caption></Carousel.Item>
                                <Carousel.Item interval={900}><img src={require('./carousal/Ariella Scarcella.jpg')} alt='not found' className='d-block w-100'/><Carousel.Caption> <h3>Image</h3><p>Description</p> </Carousel.Caption></Carousel.Item>
                                <Carousel.Item interval={800}><img src={require('./carousal/Gazal Dhaliwal.jpg')} alt='not found' className='d-block w-100'/><Carousel.Caption> <h3>Image</h3><p>Description</p> </Carousel.Caption></Carousel.Item>
                                <Carousel.Item interval={700}><img src={require('./carousal/Great Scotts.png')} alt='not found' className='d-block w-100'/><Carousel.Caption> <h3>Image</h3><p>Description</p> </Carousel.Caption></Carousel.Item>
                                <Carousel.Item interval={600}><img src={require('./carousal/machmaking group.png')} alt='not found' className='d-block w-100'/><Carousel.Caption> <h3>Image</h3><p>Description</p> </Carousel.Caption></Carousel.Item>
                                <Carousel.Item interval={500}><img src={require('./carousal/payal rohatgi.png')} alt='not found' className='d-block w-100'/><Carousel.Caption> <h3>Image</h3><p>Description</p> </Carousel.Caption></Carousel.Item>
                                <Carousel.Item interval={400}><img src={require('./carousal/Triveni Kaul.jpg')} alt='not found' className='d-block w-100'/><Carousel.Caption> <h3>Image</h3><p>Description</p> </Carousel.Caption></Carousel.Item>
                                <Carousel.Item interval={300}><img src={require('./carousal/yogita nain.png')} alt='not found' className='d-block w-100'/><Carousel.Caption> <h3>Image</h3><p>Description</p> </Carousel.Caption></Carousel.Item>


                            </Carousel>

                        </Col>
                    </Row>
                </div>
            </Container>

        </>
    )
}






