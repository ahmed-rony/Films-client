import React from 'react';
import { Formik } from 'formik';
import * as yup from "yup";
import { FcGoogle } from 'react-icons/fc';
import './Register.scss';
import { Link } from 'react-router-dom';

const initialValues2 = {
    email: '',
    password: '',
};
const contactSchema = yup.object().shape({
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    country: yup.string().required("Country is required")
});

const Register = () => {

    const handleSubmit = () => {
        console.log(value)
    }

    return (
        <section className='register'
        >

            <Formik
                onSubmit={handleSubmit}
                initialValues={initialValues2}
                validationSchema={contactSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit} className='register-form'>
                        <div className="register-box">
                            <h2>Create an Account</h2>
                            <input
                                type="text"
                                placeholder='Username'
                                name='username'
                                value={values.username}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.username && !!errors.username}
                                helperText={touched.username && errors.username}
                            />
                            <input
                                type="text"
                                placeholder='Full Name'
                                name='fullname'
                                value={values.fullname}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.fullname && !!errors.fullname}
                                helperText={touched.fullname && errors.fullname}
                            />
                            <input
                                type="text"
                                placeholder='Email'
                                name='email'
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                            />
                            <input
                                type="password"
                                placeholder='Password'
                                name='password'
                                value={values.password}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.password && !!errors.password}
                                helperText={touched.password && errors.password}
                            />

                            <button type='submit' className="brand-btn register-btn">Submit</button>
                            <button className='brand-btn google-btn '><FcGoogle className='me-2 google-icon' />Google</button>
                            <small>Have an account? <Link to='/login'>login</Link></small>
                        </div>
                    </form>
                )}
            </Formik>

        </section>
    );
};

export default Register;