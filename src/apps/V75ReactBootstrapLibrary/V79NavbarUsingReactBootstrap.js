import React, {useState} from 'react'
import { Container, Row, Col, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// <Navbar.Brand href='#'> to make it home page

export function V79NavbarUsingReactBootstrap() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let [check, setCheck] = useState(true);

    const handleLoginLogout = () => { setIsLoggedIn(check === false ? true : false); setCheck(check === true ? false : true); }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Navbar bg='primary' expand='sm' variant='dark' >
                            <Container>

                                <Navbar.Brand href='#'>
                                    <img src={require('./images/zoey black.jpg')} height='30' width='30' className='align-top' alt='not found' /> &nbsp;
                                    <Navbar.Toggle aria-controls='my-nav' />
                                </Navbar.Brand>
                                <Navbar.Collapse id='my-nav' >
                                    <Nav className='me-auto fw-bold' >
                                        <Nav.Link href='#'>Home</Nav.Link>
                                        {/* <Nav.Link href='#'>Services</Nav.Link> */}
                                        <NavDropdown title='services' id='my-nav'>
                                            <NavDropdown.Header>Heading 1</NavDropdown.Header>
                                            <NavDropdown.Item href='#'>Services 1</NavDropdown.Item>
                                            <NavDropdown.Item href='#'>Services 2</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Header>Heading 2</NavDropdown.Header>
                                            <NavDropdown.Item href='#'>Services 3</NavDropdown.Item>
                                            <NavDropdown.Item href='#'>Services 4</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href='#'>About</Nav.Link>
                                        <Nav.Link href='#'>Contacts</Nav.Link>
                                    </Nav>
                                    {/* <Navbar.Text>
                                        signin here &nbsp;
                                        <a href='#'>Login</a>
                                    </Navbar.Text> */}

                                    <Nav.Item>
                                        <Button variant="primary" onClick={handleLoginLogout}>
                                            {isLoggedIn === true ? 'Login' : 'Logout'}
                                        </Button>
                                    </Nav.Item>

                                </Navbar.Collapse>




                            </Container>
                        </Navbar>
                    </Col>
                </Row>

                <Row className='mt-4'>
                    <Col>
                        <h2>Big Paragraph</h2>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}


