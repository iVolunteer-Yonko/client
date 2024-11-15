import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import InputField from "../../partials/InputField";
// import customFetch from "../../../../../utils/customFetch";
// import { toast } from 'react-toastify';

// export const action = async ({request}) => {
//     const formData = await request.formData()
//     const data = Object.fromEntries(formData)
  
//     try{
//       await customFetch.post('/auth/signup', data)
//       toast.success('Registration Successful')
//       return redirect('/login')
//     }catch(error){
//       toast.error(error?.response?.data?.msg)
//       return error
//     }
//   }

const VolSignup = () => {
  
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  return (
    <div className="flex  bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Sign Up
        </h2>
        <Form method='post' className="mt-4">
          <InputField
            label="Username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md"
          >
            Sign Up
          </button>
        </Form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default VolSignup