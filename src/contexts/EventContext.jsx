// src/contexts/EventContext.jsx
import React, { createContext, useState, useContext } from 'react';
import dummyEvents from "./dummyEvents"; // Import the dummy data

// Create the EventContext
const EventContext = createContext();

// Create the EventProvider component to wrap the app
export const EventProvider = ({ children }) => {
  const [eventsList, setEventsList] = useState(dummyEvents);

  const addEvent = (event) => {
    setEventsList((prevEvents) => [...prevEvents, event]);
  };

  const deleteEvent = (id) => {
    setEventsList((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  return (
    <EventContext.Provider value={{ eventsList, addEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
};

// Named export for the custom hook
export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
};
