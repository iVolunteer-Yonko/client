import React, { useState } from "react";
import { Form,  useNavigation, redirect } from "react-router-dom";
import InputField from "../partials/InputField";
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify';

export const action = async ({request}) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
  
    try{
      await customFetch.post('/auth/organizer-signup', data)
      toast.success('Registration Successful')
      return redirect('/organizer-login')
    }catch(error){
      toast.error(error?.response?.data?.msg)
      return error
    }
}

const OrgSignup = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactemail: "",
    password: "",
    confirmPassword: "",
    typeoforg: "",
    website: "",
    about: "",
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
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Organization Sign Up
        </h2>
        <Form method="post" className="mt-4">
          <InputField
            label="Organization Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your organization name"
          />
          <InputField
            label="Organization Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter organization email"
          />
          <InputField
            label="Contact Person Email"
            name="contactemail"
            type="email"
            value={formData.contactemail}
            onChange={handleChange}
            placeholder="Enter contact person email"
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
            placeholder="Enter your password"
          />
          <div className="mb-4">
            <label
              htmlFor="type"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Type
            </label>
            <select
              id="type"
              name="typeoforg"
              value={formData.typeoforg}
              onChange={handleChange}
              className="w-full p-2 bg-gray-200 text-black rounded-md"
              required
            >
              <option value="" disabled>
                Select type
              </option>
              <option value="NGO">NGO</option>
              <option value="Charity">Charity</option>
              <option value="Foundation">Foundation</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <InputField
            label="Website"
            name="website"
            type="url"
            value={formData.website}
            onChange={handleChange}
            placeholder="Enter website URL"
          />
          <div className="mb-4">
            <label
              htmlFor="about"
              className="block mb-1 text-sm font-medium text-black-200"
            >
              About
            </label>
            <textarea
              id="about"
              name="about"
              value={formData.about}
              onChange={handleChange}
              placeholder="Tell us about your organization"
              rows="4"
              className="w-full p-2 bg-gray-200 text-black rounded-md"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md"
            disabled={isSubmitting}> 
            {isSubmitting ? 'Signing in' : 'Sign In'}
          </button>
        </Form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/organizer-login"
            className="text-indigo-600 hover:underline"
          >
            Login
          </a>
        </p>
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800">For Volunteer</h3>
          <p className="mt-2 text-sm text-gray-600">
            Go Back!!{" "}
            <a
              href="/volunteer-signup"
              className="text-indigo-600 hover:underline font-medium"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrgSignup;
