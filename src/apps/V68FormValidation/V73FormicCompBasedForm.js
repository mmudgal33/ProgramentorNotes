import React, { useState } from 'react'
import { ErrorMessage, Form, Formik, Field, useFormik, validateYupSchema } from 'formik'

import * as Yup from 'yup'
import { RedErrorMessage } from './RedErrorMessage';



export function V73FormicCompBasedForm() {
    // const [formData, setFormData] = useState({})

    const newValidation = Yup.object({
        name: Yup.string().min(3, 'too short').max(20, 'too long').required('name is required'),
        age: Yup.number().min(10, 'too young').max(50, 'too old').required('age is required'),
        password: Yup.string().required("password is required").matches(/^[A-Za-z0-9]\w{8,}$/, 'enter strong password'),
        gender: Yup.string().required('gender is required'),
        hobby: Yup.array().min(1, 'hobby is must').required('hobby required'),
        country: Yup.string().required('country is required'),
        comment: Yup.string().max(500).required('comment is required')
    })


    return (
        <div>
            <Formik
                validationSchema={newValidation}
                initialValues={{ name: '', age: '', password: 'Triveni_kaul123', gender: '', hobby: [], country: '', comment: 'it is better place' }}
                onSubmit={(values) => {
                    console.log(values);
                    // setFormData(values) 
                }}>
                <Form>
                    <label htmlFor="name">Enter Name:&nbsp;</label>
                    <Field type='text' id='name' name='name' />
                    <RedErrorMessage name='name' />
                    <br /><br />

                    <label htmlFor="age">Enter Age:&nbsp;</label>
                    <Field type='text' id='age' name='age' />
                    <RedErrorMessage name='age' />
                    <br /><br />

                    <label htmlFor="password">Enter Password:&nbsp;</label>
                    <Field type='password' id='password' name='password' />
                    <RedErrorMessage name='password' />
                    <br /><br />

                    <label htmlFor="gender">Gender: &nbsp;</label>
                    <label htmlFor="male">Male</label>
                    <Field type='radio' name='gender' value='male' /> &nbsp;
                    <label htmlFor="female">Female</label>
                    <Field type='radio' name='gender' value='female' />
                    <RedErrorMessage name='gender' />
                    <br /><br />

                    <label htmlFor="hobbies">Hobbies: &nbsp;</label>&nbsp;&nbsp;
                    <label htmlFor="writing">Writing </label>
                    <Field type='checkbox' id='writing' name='hobby' value='writing' />  &nbsp;
                    <label htmlFor="reading">Reading </label>
                    <Field type='checkbox' id='reading' name='hobby' value='reading' />  &nbsp;
                    <label htmlFor="playing">Playing </label>
                    <Field type='checkbox' id='playing' name='hobby' value='playing' />  &nbsp;
                    <RedErrorMessage name='hobby' />
                    <br /><br />

                    <label htmlFor="country">Country: &nbsp;</label>&nbsp;&nbsp;
                    <Field name='country' as='select'>
                        <option value=''>Select</option>
                        <option value='canada'>Canada</option>
                        <option value='USA'>USA</option>
                        <option value='UK'>UK</option> 
                    </Field>
                    <RedErrorMessage name='country' />
                    <br /><br />

                    <label htmlFor="comment">Comment: &nbsp;</label>&nbsp;&nbsp;
                    <Field name='comment' as='textarea' />
                    <RedErrorMessage name='comment' />
                    <br /><br />




                    <button type='submit'>submit</button>
                    
                    
                    
                    
                    
                    
                    

                    {/* <h2>{JSON.stringify(formData)}</h2> */}
                    {/* <h3>{formData.name}</h3>
                    <h3>{formData.age}</h3>
                    <h3>{formData.password}</h3>
                    <h3>{formData.gender}</h3>
                    <h3>{formData.hobby}</h3>
                    <h3>{formData.country}</h3>
                    <h3>{formData.comment}</h3> */}

                </Form>
            </Formik>






        </div>
    )
}


// Triveni_kaul123