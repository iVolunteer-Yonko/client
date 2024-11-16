import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEventContext } from '../../contexts/EventContext';

const EventPage = () => {
  const { eventId } = useParams(); // Get event ID from URL
  const { eventsList } = useEventContext(); // Assuming eventsList comes from context
  const [event, setEvent] = useState(null);

  // Find the event based on the event ID
  useEffect(() => {
    if (eventsList && eventId) {
      const foundEvent = eventsList.find(event => event.id === parseInt(eventId));
      setEvent(foundEvent);
    }
  }, [eventId, eventsList]);

  if (!eventsList || eventsList.length === 0) {
    return <p>Loading events...</p>;
  }

  if (!event) {
    return <p>Event not found. Please check the event ID or try again later.</p>;
  }

  return (
    <div className="min-h-screen text-gray-800">
      {/* Event Name */}
      <div className="text-center my-6">
        <h1 className="text-3xl sm:text-4xl font-bold">{event.name}</h1>
      </div>

      {/* Banner Section */}
      <section className="w-full max-w-3xl mx-auto aspect-[16/9] rounded-xl overflow-hidden">
        <img
          src={event.eventimage}
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
              <span className="font-semibold">Date:</span> {event.startdate}
            </p>
          </div>
          <div>
            <p className="text-gray-600">{event.description}</p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Location:</span>{' '}
              <a
                href={event.website}
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
              <span className="font-semibold">Type:</span> {event.categories}
            </p>
          </div>
        </div>

        {/* Join Now Button */}
        <div className="text-center mt-8">
          <a
            href="/join-event"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-sm sm:text-base transition-transform transform hover:scale-105 shadow-md"
          >
            Join Now
          </a>
        </div>

        {/* Discussion Button */}
        <div className="text-center mt-4">
          <Link
            to={`/discussion/${event.id}`}
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg text-sm sm:text-base transition-transform transform hover:scale-105 shadow-md"
          >
            View Discussions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
