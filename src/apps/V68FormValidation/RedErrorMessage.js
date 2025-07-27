import { ErrorMessage } from "formik";

import React from 'react'

export function RedErrorMessage({name}){
    return(
        <div style={{color:'red'}}>
            <ErrorMessage name={name} />
        </div>
    )
}