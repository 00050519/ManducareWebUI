import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { BASE_URL } from "../api/Axios";
import { useQuery } from "react-query";
import axios from "axios";

const SignUp = () => {
  const validationSchema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });



  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      await axios.post(
        BASE_URL + "/users/signup",
        {
          email: values.email,
          name: values.username,
          password: values.password,
          passwordConfirm: values.passwordConfirm,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => {
        console.log(response.status);
        if(response.status === 201){
          window.location.href = '/login';
        }
      })
      .catch((error) => console.error("Error:", error));;
    },
  });

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 space-y-8 bg-white shadow-md">
        <h2 className="text-3xl font-semibold text-center">Sign Up</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className={`mt-1 p-2 w-full border rounded-md ${
                formik.touched.username && formik.errors.username
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.username}
              </p>
            )}
          </div>

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

          <div>
            <label
              htmlFor="passwordConfirm"
              className="block text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.passwordConfirm}
              className={`mt-1 p-2 w-full border rounded-md ${
                formik.touched.passwordConfirm && formik.errors.passwordConfirm
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formik.touched.passwordConfirm &&
              formik.errors.passwordConfirm && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.passwordConfirm}
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

export default SignUp;
