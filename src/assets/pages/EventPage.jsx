import React from "react";
import { Link } from "react-router-dom";

const EventPage = () => {
  // Dummy Event Data
  const event = {
    name: "Community Clean-Up",
    host: "Green Nepal",
    date: "02/03/2024 - 02/03/2024",
    time: "09:00 AM - 03:00 PM",
    description:
      "Join us for a day of community service and help make a difference. Together, we can create a cleaner and greener environment.",
    location: "Kantipur Engineering College, Dhapakhel",
    googleMapsLink: "https://goo.gl/maps/xyz123", // Replace with actual map link
    type: "Unpaid",
    facilities: { merch: "Yes", food: "No", paid: "No" },
    bannerImage: "/images/iVolunteer.jpg", // Replace with your banner image path
  };

  return (
    <div className="min-h-screen text-gray-800">
      {/* Event Name */}
      <div className="text-center my-6">
        <h1 className="text-3xl sm:text-4xl font-bold">{event.name}</h1>
      </div>

      {/* Banner Section */}
      <section className="w-full max-w-3xl mx-auto aspect-[16/9] rounded-xl overflow-hidden">
        <img
          src={event.bannerImage}
          alt={`${event.name} Banner`}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Event Details Section */}
      <div className="max-w-3xl mx-auto p-6 sm:p-8">
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-lg font-semibold">Hosted by {event.host}</h2>
          </div>
          <div>
            <p>
              <span className="font-semibold">Date:</span> {event.date}
            </p>
            <p>
              <span className="font-semibold">Time:</span> {event.time}
            </p>
          </div>
          <div>
            <p className="text-gray-600">{event.description}</p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Location:</span>{" "}
              <a
                href={event.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {event.location}
              </a>
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Type:</span> {event.type}
            </p>
          </div>
          <div>
            <p className="font-semibold">Facilities:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Merch: {event.facilities.merch}</li>
              <li>Food: {event.facilities.food}</li>
              <li>Paid: {event.facilities.paid}</li>
            </ul>
          </div>
        </div>

        {/* Join Now Button */}
        <div className="text-center mt-8">
          <Link
            to="/join-event"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-sm sm:text-base transition-transform transform hover:scale-105 shadow-md"
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
