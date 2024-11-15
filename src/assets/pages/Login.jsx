import React, { useState } from "react";
import { VolLogin, OrgLogin } from "../components/authForms";

const Signup = () => {
  const [activeForm, setActiveForm] = useState("volunteer");

  return (
    <div className="flex flex-row  items-center justify-center  bg-gray-100 h-[100vh]">
    <div className="flex flex-col items-center justify-center h-[100%] ">
      {/* Buttons to toggle between forms */}
      <div className="flex space-x-4">
  <button
    onClick={() => setActiveForm("volunteer")}
    className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ease-in-out ${
      activeForm === "volunteer"
        ? "bg-indigo-600 text-white"
        : "bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-100"
    }`}
  >
    Volunteer Signup
  </button>
  <button
    onClick={() => setActiveForm("organization")}
    className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ease-in-out ${
      activeForm === "organization"
        ? "bg-indigo-600 text-white"
        : "bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-100"
    }`}
  >
    Organization Signup
  </button>
</div>


      {/* Display the selected form */}
      <div className="w-full max-w-md mt-4">
        {activeForm === "volunteer" ? <VolLogin /> : <OrgLogin />}
      </div>
    </div>
    </div>
  );
  
};

export default Signup;
