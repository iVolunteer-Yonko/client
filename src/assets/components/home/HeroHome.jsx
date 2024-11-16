import React from "react";

const HeroHome = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-32 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Make a Difference <br />
            <span className="text-indigo-500">Volunteer</span> Today
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of volunteers who are making an impact in their
            communities. Whether you want to lend a hand or manage events, we
            make it easy for you to connect and contribute.
          </p>

          {/* Call to Action Buttons */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row">
            <a
              href="/volunteer-login"
              className="bg-indigo-500 hover:bg-indigo-600 text-white hover:text-white font-medium py-3 px-8 rounded-lg shadow-md transform transition-transform hover:scale-105"
            >
              Volunteer Login
            </a>

            <a
              href="/volunteer-signup"
              className="bg-green-500 hover:bg-green-600 text-white hover:text-white font-medium py-3 px-8 rounded-lg shadow-md transform transition-transform hover:scale-105"
            >
              Volunteer Sign Up
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative">
          <div className="w-80 h-80 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/Logo.jpeg" // Replace with your image path
              alt="Volunteering"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Organizer Section */}
      <div className="relative bg-gray-100 py-12 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Organize Impactful Events
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Are you an organizer? Manage your events with ease and collaborate
            with volunteers to bring meaningful projects to life.
          </p>
          <a
            href="/organizer-login"
            className="bg-red-500 hover:bg-red-600 text-white hover:text-white font-medium py-3 px-8 rounded-lg shadow-md transform transition-transform hover:scale-105"
          >
            Organizer Login
          </a>
          <p className="mt-4 text-sm text-gray-600">
            New to organizing?{" "}
            <a
              href="/organizer-signup"
              className="text-indigo-500 hover:underline font-medium"
            >
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
