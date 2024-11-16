import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useEventContext } from "../../contexts/EventContext";

const Discover = () => {
  const { eventsList } = useEventContext();
  const [events, setEvents] = useState(eventsList);

  // Sort events by most recently added (optional if fetched in order)
  useEffect(() => {
    setEvents((prevEvents) => [...prevEvents].reverse());
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Discover Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Event Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={event.eventimage}
                  alt={`${event.name} Banner`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Event Details */}
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{event.name}</h2>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Date:</span> {event.startdate}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Location:</span> {event.location}
                </p>
                <Link
                  to={`/event/${event.id}`} // Passing event ID in the URL
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
