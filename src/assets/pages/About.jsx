import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg font-medium">
            Empowering communities through volunteerism, innovation, and
            collaboration.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
        <p className="text-center text-lg leading-relaxed max-w-3xl mx-auto">
          We aim to bridge the gap between organizations and passionate
          individuals eager to create positive change. Our platform connects
          volunteers and organizations to foster impactful collaborations and
          meaningful contributions.
        </p>
      </section>

      {/* Core Values */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-sm">
                We uphold honesty and transparency in every interaction and
                decision we make.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-sm">
                We believe in the power of teamwork to achieve extraordinary
                results.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-sm">
                We encourage creativity and embrace new ideas to drive
                meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Team Member */}
          <div className="text-center">
            <img
              src="/images/roshan-profile.jpeg"
              alt="Roshan Pandey"
              className="w-36 h-36 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Roshan Pandey</h3>
            <p className="text-sm text-gray-600">Team Lead</p>
          </div>
          {/* Repeat for other members */}
          <div className="text-center">
            <img
              src="/images/ranish-profile.jpeg"
              alt="Ranish Ghimire"
              className="w-36 h-36 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Ranish Ghimire</h3>
            <p className="text-sm text-gray-600">Lead Developer</p>
          </div>
          <div className="text-center">
            <img
              src="/images/rujan-profile.jpeg"
              alt="Rujan Bastola"
              className="w-36 h-36 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Rujan Bastola</h3>
            <p className="text-sm text-gray-600">Lead System Designer</p>
          </div>
          <div className="text-center">
            <img
              src="/images/sujal-profile.jpeg"
              alt="Sujal Sangraula"
              className="w-36 h-36 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Sujal Sangraula</h3>
            <p className="text-sm text-gray-600">Lead UI/UX Engineer</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 mb-0">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
          <p className="text-lg mb-6">
            Together, we can create a brighter future for communities
            everywhere.
          </p>
          <Link
            to="/volunteer-signup"
            className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
