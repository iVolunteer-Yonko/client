import React, { useState, useContext, useEffect } from "react";
import { Form, useNavigation, useActionData } from "react-router-dom";
import InputField from "../partials/InputField";
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify';
import { LayoutContext } from './Layout';


export const action = async ({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  try {
    await customFetch.post('/auth/volunteer-login', data);
    toast.success('Logged In Successfully');
    const { data: userData } = await customFetch.get('/user/volunteer-current-user');
    return userData.user;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/login');
  }
};

const VolLogin = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'
  const userData = useActionData();
  const { setCurrentUser } = useContext(LayoutContext);

  useEffect(() => {
    if (userData) {
      setCurrentUser(userData);
    }
  }, [userData, setCurrentUser]);

  const [formData, setFormData] = useState({
    email: "",
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Volunteer Login
        </h2>
        <Form method="post" className="mt-4">
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
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md"
            disabled={isSubmitting}> 
            {isSubmitting ? 'Logging in' : 'Log In'}
          </button>
        </Form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/volunteer-signup" className="text-indigo-600 hover:underline">
            Register
          </a>
          
        </p>
        <div className="mt-6 text-center">
  <h3 className="text-lg font-semibold text-gray-800">For Organizers</h3>
  <p className="mt-2 text-sm text-gray-600">
    Are you an organizer{" "}
    <a href="/organizer-login" className="text-indigo-600 hover:underline font-medium">
      Login here
    </a>
  </p>
</div>
      </div>
    </div>
  );
};

export default VolLogin;
