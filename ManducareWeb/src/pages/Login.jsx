// Login.js
import React from 'react';
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { BASE_URL } from '../api/Axios';
import { useAuth } from '../utils/AuthProvider';
import { useNavigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});


const Login = () => {

  const auth = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      console.log(values);
      await axios.post(
        BASE_URL + "/users/login",
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => {
        console.log(response);

        if (response.status === 200 && response.data.token){
          const userData = {
            token: response.data.token, 
            userId: response.data.data.user._id,
            role: response.data.data.user.role
          }
          if(userData.token && userData.role === "user") {

            localStorage.setItem("token", JSON.stringify(userData.token))
            localStorage.setItem("userId", JSON.stringify(userData.userId))
            localStorage.setItem("role", JSON.stringify(userData.role))

            auth.setIsAuthenticatedUser(true);
            navigate('/user-dashboard')
          }
          else if(userData.token && userData.role === "nutritionist"){
            auth.setIsAuthenticatedNutr(true);
            navigate('/nutritionist-dashboard')
          }
        }

      })
      .catch((error) => console.error("Error:", error));;
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`mt-1 p-2 w-full border rounded-md ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`p-2 w-full border rounded-md ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md w-full mt-1"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
