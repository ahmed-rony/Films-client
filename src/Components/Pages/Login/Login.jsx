import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { FcGoogle } from "react-icons/fc";
import "./Login.scss";
import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";

const initialValues = {
  email: "",
  password: "",
};
const contactSchema = yup.object().shape({
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
});

const Login = () => {
  const handleSubmit = () => {
    console.log(value);
  };

  return (
    <>
    <Navbar/>
      <section className="login">
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
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
            <form onSubmit={handleSubmit} className="login-form">
              <div elevation={3} className="login-box">
                <h2>Sign In</h2>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />

                <button className="brand-btn login-btn">Submit</button>
                <button className="brand-btn google-btn ">
                  <FcGoogle className="me-2 google-icon" />
                  Google
                </button>
                <small>
                  Don't have an account? <Link to="/register">register</Link>
                </small>
              </div>
            </form>
          )}
        </Formik>
      </section>
    </>
  );
};

export default Login;
