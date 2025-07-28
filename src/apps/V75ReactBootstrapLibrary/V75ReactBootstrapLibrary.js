// similat to Formik, Form components React-Bootstrap also has components npm i bootstrap react-bootstrap
// bootstrap normal. react-bootstrap is library
// rfce

import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';



export function V75ReactBootstrapLibrary1() {
    const [show, setShow] = useState(true);

    if (show) {
    return (
        <div>

            <Alert variant='danger' dismissible onClose={() => setShow(false)}>
                <Alert><p> paragraph </p></Alert>
                <Alert.Link><p> paragraph </p></Alert.Link>
                <Alert.Heading><p> paragraph </p></Alert.Heading>
            </Alert>


        </div>
    )
    }

}




export function V75ReactBootstrapLibrary() {
    
        return (
            <div>
                <Button> Submit </Button>&nbsp;
                <Button variant='danger'> Danger </Button>&nbsp;
                <Button variant='dark'> Dark </Button>&nbsp;
                <Button variant='success'> Success </Button><br /><br />
                <Button variant='warning'> Warning </Button>&nbsp;
                <Button variant='secondary'> Secondary </Button>&nbsp;

                <Button variant='danger' size='lg'> Danger </Button>&nbsp;
                <Button variant='danger' size='sm'> Danger </Button><br /><br />
                <Button variant='danger' active> Danger Active </Button>&nbsp;
                <Button variant='danger' disabled> Danger Disabled</Button>&nbsp;
                <Button href="https://www.google.com/" variant='danger' > Danger Google Button</Button>&nbsp;
                <V75ReactBootstrapLibrary1 />
            </div>
        )
    
}


