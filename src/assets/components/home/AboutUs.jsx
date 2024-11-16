import React from "react";
import { FaHandsHelping, FaTasks, FaUsers } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">
            About Volunteer Connect
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Volunteer Connect is a platform designed to connect passionate individuals with local community
            needs. Whether you're looking to tutor a student, help organize a community event, or make a
            positive impact in your area, we provide an easy way for volunteers and organizations to work
            together.
          </p>
        </div>

        {/* Features Section */}
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {/* Our Mission */}
          <div className="flex flex-col items-center text-center md:w-1/3 border border-indigo-600 rounded-lg p-8 shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            <div className="text-indigo-600 mb-4">
              <FaHandsHelping size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              We strive to build stronger, more connected communities by making it easy for people to
              engage in meaningful volunteer work, helping both individuals and organizations reach their
              goals for positive change.
            </p>
          </div>

          {/* What We Do */}
          <div className="flex flex-col items-center text-center md:w-1/3 border border-green-600 rounded-lg p-8 shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            <div className="text-green-600 mb-4">
              <FaTasks size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">What We Do</h3>
            <p className="text-gray-600 text-sm">
              We provide an intuitive platform for users to discover and register for local volunteer
              opportunities, helping local organizations manage their events while empowering volunteers to
              make a meaningful impact in their communities.
            </p>
          </div>

          {/* Get Involved */}
          <div className="flex flex-col items-center text-center md:w-1/3 border border-red-600 rounded-lg p-8 shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            <div className="text-red-600 mb-4">
              <FaUsers size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Involved</h3>
            <p className="text-gray-600 text-sm">
              Whether you're a volunteer looking to make a difference or an organizer in need of helping
              hands, Volunteer Connect makes it simple to connect with others and take action in your local
              community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
