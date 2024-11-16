import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Left Section: Brand Logo */}
          <div className="flex items-center mb-4 sm:mb-0">
            <Link to="/" className="text-2xl font-bold text-white">
              iVolunteer
            </Link>
          </div>

          {/* Center Section: Links */}
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition duration-300 text-sm"
            >
              About
            </Link>
            <Link
              to="/discover"
              className="text-gray-300 hover:text-white transition duration-300 text-sm"
            >
              Discover
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition duration-300 text-sm"
            >
              Contact
            </Link>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300 text-lg"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300 text-lg"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300 text-lg"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300 text-lg"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Volunteer Connect. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
