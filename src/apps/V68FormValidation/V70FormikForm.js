import React from 'react'
import { Formik, useFormik } from 'formik'

import {FormSchema} from './FormSchema'

export function V70FormikForm() {
    const formInitialValue = {
        name:'',
        email:'',
        age:'',
        password:'',
        cpassword:''
    }

    const {handleSubmit, handleChange, values, errors, handleBlur, touched} = useFormik({
        initialValues : formInitialValue,
        validationSchema: FormSchema,
        onSubmit : (values, action) => {
            console.log(values);
            console.log(values.name);
            console.log(values.email);
            console.log(values.age);
            console.log(values.password);
            console.log(values.cpassword);
            action.resetForm();
        }
        
        
    });

    



    return (
        <div>
            <h1>Formik Demo</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter Name: &nbsp; </label>
                <input type="text" required id='name' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}/> 
                <br />
                {/* <br /><span style={{ color: 'red' }}> {errors.name} </span><br /> */}
                {errors.name && touched.name ? (<span style={{ color: 'red' }}> {errors.name} </span>) : null } 
                <br />

                <label htmlFor="email">Enter Email: &nbsp; </label>
                <input type="text" required id='email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                <br />
                {/* <br /><span style={{ color: 'red' }}> {errors.email} </span><br /> */}
                {errors.email && touched.email ? (<span style={{ color: 'red' }}> {errors.email} </span>) : null } 
                <br />

                <label htmlFor="age">Enter Age: &nbsp; </label>
                <input type="text" required id='age' name='age' value={values.age} onChange={handleChange} onBlur={handleBlur}/>
                <br />
                {errors.age && touched.age ? (<span  style={{ color: 'red' }}> {errors.age} </span>) : null }
                <br />

                <label htmlFor="password">Enter password: &nbsp; </label>
                <input type="password" required id='password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                <br />
                {errors.password && touched.password ? (<span  style={{ color: 'red' }}> {errors.password} </span>) : null }
                <br />

                <label htmlFor="cpassword">Confirm password: &nbsp; </label>
                <input type="password" required id='cpassword' name='cpassword' value={values.cpassword} onChange={handleChange} onBlur={handleBlur}/>
                <br />
                {errors.cpassword && touched.cpassword ? (<span  style={{ color: 'red' }}> {errors.cpassword} </span>) : null }
                <br />


                

                <input type="submit" value="submit" />
            </form>

        </div>
    )
}

// rfce
// npm i formik
