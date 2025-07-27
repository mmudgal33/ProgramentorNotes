import * as Yup from 'yup'

// const PASSWORD_REGEX = /^[A-Za-z0-9]\w{8,}$/;
// This regex ensures the password has at least 8 characters and includes 
// at least one digit, one lowercase letter, and one uppercase letter.

// const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
// Triveni_kaul123

export const FormSchema = Yup.object({
    name:Yup.string().min(3,'too short').max(20,'too long').required('name is required'),
    email:Yup.string().email('Invalid Email').required('email is required'),
    age:Yup.number().min(10,'too young').max(50,'too old').required('age is required'),
    password:Yup.string().required("password is required").matches( /^[A-Za-z0-9]\w{8,}$/ ,'enter strong password'),
    cpassword:Yup.string().required('confirm password').oneOf([Yup.ref('password'),null],'confirm correct password')
})



// function chaining
// require has custom error message, min(), max() present
















// PASSWORD REGEX FOR YOUR NEXT JAVASCRIPT APP

// regex for a basic password must be
// more than 8 chars 
// const PASSWORD_REGEX_1=  ^[A-Za-z0-9]\w{8,}$/;

// more secure regex password must be
// more than 8 chars 
// at least one number
// const PASSWORD_REGEX_2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

// more secure regex password must be :
// more than 8 chars  
// at least one number
// at least one special character
// const PASSWORD_REGEX_3=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;