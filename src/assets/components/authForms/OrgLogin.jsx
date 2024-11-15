import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import InputField from "../../partials/InputField";
// import customFetch from "../../../../../utils/customFetch";
// import { toast } from 'react-toastify';

// Uncomment this section for integrating authentication with a backend
// export const action = async ({request}) => {
//     const formData = await request.formData()
//     const data = Object.fromEntries(formData)
  
//     try{
//       const response = await customFetch.post('/auth/login', data)
//       toast.success('Login Successful')
//       return redirect('/dashboard')
//     }catch(error){
//       toast.error(error?.response?.data?.msg)
//       return error
//     }
//   }

const OrgLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
          Login
        </h2>
        <Form method="post" className="mt-4">
          <InputField
            label="Username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md"
          >
            Login
          </button>
        </Form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-indigo-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default OrgLogin;
