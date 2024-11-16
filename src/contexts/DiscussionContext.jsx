import React, { createContext, useState, useContext } from 'react';
import dummyDiscussions from './dummyDiscussions'; // Import dummy discussions

// Create the DiscussionContext
const DiscussionContext = createContext();

// Create the DiscussionProvider component to wrap the app
export const DiscussionProvider = ({ children }) => {
  const [discussionsList, setDiscussionsList] = useState(dummyDiscussions);

  const addDiscussion = (eventId, discussion) => {
    setDiscussionsList(prevDiscussions => [
      ...prevDiscussions,
      { eventId, discussion },
    ]);
  };

  const getDiscussionsByEventId = (eventId) => {
    return discussionsList.filter(discussion => discussion.eventId === eventId);
  };

  return (
    <DiscussionContext.Provider value={{ discussionsList, addDiscussion, getDiscussionsByEventId }}>
      {children}
    </DiscussionContext.Provider>
  );
};

// Named export for the custom hook
export const useDiscussionContext = () => {
  const context = useContext(DiscussionContext);
  if (!context) {
    throw new Error('useDiscussionContext must be used within a DiscussionProvider');
  }
  return context;
};
