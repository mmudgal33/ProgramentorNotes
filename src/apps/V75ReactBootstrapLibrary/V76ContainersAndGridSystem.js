// Grid Table
// Table rows & column
// Grid System Built-in Components in react-bootstrap like <Col> <Row>

// Container types 1)Container 2)Container-Fluid
// component always applied fluid but until size of device drop by provided size (sm, md, xl etc) container applied.
// so always apply <Container fluid='lg'> size according to app

// <Col> <Row> <Container> are react-bootstrap component
// normal bootstrap rules applied to rows and col but here on component
// bg-primary, bg-danger are color themes
// p-0 p-5 are padding size, 
// p-5 is maximum padding, p-0 is minimum padding
// if <Col> used 6 times in single <Row>, they took 2 col each, so that 12 col covered
// if <Col> used 4 times in single <Row>, they took 3 col each, so that 12 col covered  
// if <Col> used 3 times in single <Row>, they took 4 col each, so that 12 col covered 
// if <Col> used 2 times in single <Row>, they took 6 col each, so that 12 col covered 
// if <Col> used 1 times in single <Row>, they took 12 col each, so that 12 col covered 

// <Row className='mt-2'> margin from top by 2%, if <br/> not gives required break 
// <Container fluid='lg'> if screen size less than large size Container fluid apply
// xs, sm, md, lg, xl, xxl
// xs< 576 =sm< 768 =md< 992 =lg< 1200 =xl< 1400 =xxl<
// px size, 576 =s<m 768 means, sm is equal to 576 or less than 768

// <Row> <Col sm={6}> <Col > <Col sm={4}> <Row>  in single <Row> three <Col> 
// with sm={6} means 6col taken, sm={4} means 4col taken, remaining 2col for third <col>
// sm applied so, this ratio work till size = 576

//  <Col md={8} sm={6} xs={4}> means if >768 <Col> take 8col, if >576 <Col> take 6col, if <576 4col taken by <Col>

// <Col md={{offset:2}} > for md (768 to 992) this <Col> move right by two col.
// <Col md={{span:6}} >  for md (768 to 992) this <Col> take 6col. remaining 6col taken by remaining <Col>
// <Col md={{offset:2,span:6}} > for md (768 to 992) this <Col> take 6col and 2col offset(move right by 2col) remaining 4col taken by remaining <Col> 

import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export function V76ContainersAndGridSystem1() {
    return (
        <div>
            <Button variant='outline-danger'> Danger </Button>&nbsp;
            <Button variant='outline-dark'> Dark </Button>&nbsp;
            <Button variant='outline-success'> Success </Button><br /><br />
            <Button variant='outline-warning'> Warning </Button>&nbsp;
            <Button variant='outline-secondary'> Secondary </Button>&nbsp;

            <Button variant='outline-danger' size='lg'> Danger </Button>&nbsp;
            <Button variant='outline-danger' size='sm'> Danger </Button><br /><br />
            <Button variant='outline-danger' active> Danger Active </Button>&nbsp;
            <Button variant='outline-danger' disabled> Danger Disabled</Button>&nbsp;
            <Button href="https://www.google.com/" variant='outline-danger' > Danger Google Button</Button>&nbsp;
        </div>
    )
}



export function V76ContainersAndGridSystem2() {
    return (
        <div>
            {/* <Container> */}
            <Container fluid='lg'>

            <h3> 12 columns </h3>
                <Row>
                    <Col>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                </Row>
                
                <br />
                <h3>6-6 columns</h3>
                <Row>
                    <Col>
                        <div className='bg-primary'> bg-danger </div>
                    </Col>
                    <Col>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                    

                </Row>
                
                <br />
                <h3>4-4-4 columns</h3>
                <Row>
                    <Col>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                    <Col>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                    <Col>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                </Row>

                <br />
                <h3> 3-3-3-3 columns </h3>
                <Row>
                    <Col>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                    <Col>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                    <Col>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                    <Col>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                </Row>
                
                <br />
                <h3>2-2-2-2-2-2 columns</h3>
                <Row>
                    <Col>
                        <div className='bg-success'> bg-success </div>
                    </Col>
                    <Col>
                        <div className='bg-success'> bg-success </div>
                    </Col>
                    <Col>
                        <div className='bg-success'> bg-success </div>
                    </Col>
                    <Col>
                        <div className='bg-success'> bg-success </div>
                    </Col>
                    <Col>
                        <div className='bg-success'> bg-success </div>
                    </Col>
                    <Col>
                        <div className='bg-success'> bg-success </div>
                    </Col>
                </Row>
                <br />


                

            </Container>
            {/* </Container> */}
        </div>
    )
}



export function V76ContainersAndGridSystem() {
    return (
        <div>
            
            <Container fluid='lg'>

            


                <br />
                <h3>Specify Width of columns</h3>
                <Row>
                    <Col sm={6}>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                    <Col>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                    <Col sm={4}>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                </Row>

                <Row className='mt-4'>
                    <Col md={8} sm={6} xs={4}>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                    <Col>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                    <Col>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                </Row>

                <Row className='mt-4'>
                    <Col md={{offset:2}} >
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                    <Col>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                    <Col>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                </Row>

                <Row className='mt-4'>
                    <Col md={{span:6}} >
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                    <Col>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                    <Col>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                </Row>

                <Row className='mt-4'>
                    <Col md={{offset:2,span:6}} >
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                    <Col>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                    <Col>
                        <div className='bg-danger'> bg-danger </div>
                    </Col>
                </Row>

            </Container>
            
        </div>
    )
}


