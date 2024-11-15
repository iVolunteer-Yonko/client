import React from "react";

const HeroHome = () => {
  return (
    <section className="h-screen flex items-center bg-gray-100">
      {/* Left Column: Image */}
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/rjGen.jpeg')", // Replace with your image path
        }}
      ></div>

      {/* Right Column: Content */}
      <div className="w-1/2 flex flex-col justify-center px-12 text-gray-800">
        {/* Volunteer Section */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">I want to volunteer</h1>
        <p className="text-lg sm:text-xl mb-6 text-gray-600">
          Login to access your volunteer dashboard or sign up to join us.
        </p>
        <div className="flex space-x-6 mb-12">
          <a
            href="/volunteer-login"
            className="bg-indigo-600 hover:bg-indigo-700 text-white hover:text-white font-medium py-3 px-8 rounded-lg text-lg transform transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Login
          </a>
          <a
            href="/volunteer-signup"
            className="bg-green-600 hover:bg-green-700 text-white  hover:text-white font-medium py-3 px-8 rounded-lg text-lg transform transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Sign Up
          </a>
        </div>

        {/* Organizing Section */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">About Organizing</h2>
        <p className="text-lg sm:text-xl mb-6 text-gray-600">
          Are you an organizer? Login to manage events or learn more about how to collaborate with us.
        </p>
        <div>
        <a
          href="/organizer-login"
          className="bg-red-600 hover:bg-red-700 text-white   hover:text-white font-medium py-3 px-8 rounded-lg text-lg transform transition-all hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Organizer Login
        </a>
        <p className="mt-4 text-sm text-gray-600">
    Are you Creating an organizer Profile?{" "}
    <a href="/organizer-signup" className="text-indigo-600 hover:underline font-medium">
      Signup here
    </a>
  </p>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
