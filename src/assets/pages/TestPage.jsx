import React from "react";
import { Link } from "react-router-dom";

const TestPage = () => {
  const routes = [
    { path: "/", label: "Home" },
    { path: "/discover", label: "Discover" },
    { path: "/about", label: "About" },
    { path: "/volunteer-signup", label: "Volunteer Signup" },
    { path: "/volunteer-login", label: "Volunteer Login" },
    { path: "/organizer-signup", label: "Organizer Signup" },
    { path: "/organizer-login", label: "Organizer Login" },
    { path: "/profile", label: "Profile" },
    { path: "/event-submit", label: "Submit Event" },
    { path: "/event", label: "Event Page" },
    { path: "/profile-volunteer", label: "Volunteer Profile" },
    { path: "/profile-organization", label: "Organization Profile" },
    { path: "/review-volunteer", label: "Review Volunteer" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Testing Page</h1>
      <p className="text-lg text-gray-600 mb-8">
        Use the links below to navigate to different pages for testing purposes.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full px-6">
        {routes.map((route, index) => (
          <Link
            key={index}
            to={route.path}
            className="block bg-white shadow-md hover:shadow-lg rounded-lg p-4 text-center transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {route.label}
            </h2>
            <p className="text-sm text-gray-600 mt-2">{route.path}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
