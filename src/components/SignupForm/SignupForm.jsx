import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignupForm.scss";

const SignupForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Replace this with your signup logic or API call
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <div className="onefield">
            <label className="label" htmlFor="name">
              Name
            </label>
            <Field className="input" type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div className="onefield">
            <label className="label" htmlFor="email">
              Email
            </label>
            <Field className="input" type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="onefield">
            <label className="label" htmlFor="password">
              Password
            </label>
            <Field className="input" type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div className="onefield">
            <label className="label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <Field className="input" type="password" name="confirmPassword" />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error"
            />
          </div>
          <div className="onefield">
            <button type="submit" className="submitbtn" disabled={isSubmitting}>
              Sign Up
            </button>
          </div>
          <p>
            Already have account?<a className="clicksign">Sign In</a>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
