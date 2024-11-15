import React from "react";
import { Link } from "react-router-dom";

const OrganizationProfile = () => {
  // Dummy Organization Data
  const organization = {
    photo: "/images/iVolunteer.jpg", // Replace with actual image URL
    name: "Helping Hands Organization",
    location: "Kathmandu, Nepal",
    eventsHosted: 35,
    description:
      "Helping Hands Organization has been actively supporting community development through various initiatives. We focus on education, environmental clean-ups, and public health awareness programs.",
  };

  // Dummy Event Data
  const events = [
    {
      banner: "/images/iVolunteer.jpg", // Replace with actual image URL
      name: "Tree Plantation Drive",
      date: "12/03/2024",
      description: "Join us for a tree plantation drive to make our community greener.",
      location: "Kathmandu Park",
      facilities: "Merch: Yes, Food: No, Paid: No",
    },
    {
      banner: "/images/iVolunteer.jpg", // Replace with actual image URL
      name: "Community Clean-Up",
      date: "18/03/2024",
      description: "Help us clean the streets and parks of our community.",
      location: "Lalitpur District",
      facilities: "Merch: No, Food: Yes, Paid: Yes",
    },
    // Add more events as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Organization Details */}
        <div className="flex items-center space-x-6">
          <img
            src={organization.photo}
            alt="Organization Logo"
            className="w-32 h-32 rounded-full object-cover border"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{organization.name}</h1>
            <p className="text-lg text-gray-600">{organization.location}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">About Us</h2>
          <p className="mt-4 text-gray-600">{organization.description}</p>
        </div>

        {/* Events Hosted */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Events Hosted</h2>
          <p className="mt-4 text-gray-600">{organization.eventsHosted} Events</p>
        </div>

        {/* Add Event Button */}
        <div className="mt-6 text-right">
          <Link
            to="/add-event"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg transition duration-300"
          >
            Add Event
          </Link>
        </div>

        {/* Events List */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Our Events</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <div key={index} className="bg-white border shadow-md rounded-lg overflow-hidden">
                <img
                  src={event.banner}
                  alt={event.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{event.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">{event.date}</p>
                  <p className="text-gray-600 mt-4">{event.description}</p>
                  <p className="text-gray-600 mt-2">
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p className="text-gray-600 mt-2">
                    <strong>Facilities Provided:</strong> {event.facilities}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationProfile;
