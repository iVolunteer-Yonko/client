import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LayoutContext } from "../pages/Layout";
import customFetch from "../utils/customFetch";
import { toast } from 'react-toastify';

const NavBar = () => {
  const { currentUser, setCurrentUser } = useContext(LayoutContext); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const apiEndpoint =
        currentUser.role === "volunteer"
          ? "/auth/volunteer-logout"
          : "/auth/organizer-logout";

      const afterLogout = 
        currentUser.role === "volunteer"
          ? "/volunteer-login"
          : "/organizer-login";


      await customFetch.get(apiEndpoint);
      toast.success('Logged Out')
      setCurrentUser(null);
      navigate(afterLogout);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

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
                  className="bg-blue-600 hover:bg-blue-700 hover:text-white transition duration-300 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Signup
                </Link>
                <Link
                  to="/volunteer-login"
                  className="bg-gray-700 hover:bg-gray-800 transition hover:text-white duration-300 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              </>
            ) : (
              // When user is logged in
              <>
                {currentUser.role === "organizer" && (
                  <Link
                    to="/event-submit"
                    className="bg-green-600 hover:bg-green-700 transition duration-300 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Host an Event
                  </Link>
                )}

                {/* Dropdown Menu */}
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center text-gray-300 hover:text-white transition duration-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                  >
                    {currentUser.name || currentUser.username}
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg py-1 z-99">
                      <Link
                        to="/profile"
                        className="block w-full text-left px-4 py-2 text-sm text-gray-50 bg-gray-700 hover:text-blue"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-50 bg-gray-700 hover:text-blue"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

