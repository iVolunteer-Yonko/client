import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LayoutContext } from "../pages/Layout"; // Assuming Layout provides the currentUser context

const NavBar = () => {
  const { currentUser } = useContext(LayoutContext); // Access the context

  return (
    <nav className="sticky top-0 bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-around h-16">
          {/* Left Section: Brand Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold">
              iVolunteer
            </Link>
            <div className="hidden md:flex ml-12 space-x-8">
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/discover"
                className="text-gray-300 hover:text-white transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Discover
              </Link>
            </div>
          </div>

          {/* Middle Section: Search Bar */}
          <div className="flex-grow mx-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 text-sm bg-gray-800 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {!currentUser ? (
              // When user is not logged in
              <>
                <Link
                  to="/volunteer-signup"
                  className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Signup
                </Link>
                <Link
                  to="/volunteer-login"
                  className="bg-gray-700 hover:bg-gray-800 transition duration-300 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              </>
            ) : currentUser.role === "organizer" ? (
              // When user is an organizer
              <>
                <Link
                  to="/event-submit"
                  className="bg-green-600 hover:bg-green-700 transition duration-300 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Host an Event
                </Link>
                <Link
                  to="/profile"
                  className="text-gray-300 hover:text-white transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {currentUser.name}
                </Link>
              </>
            ) : (
              // When user is a volunteer
              <Link
                to="/profile"
                className="text-gray-300 hover:text-white transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                {currentUser.username}
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
