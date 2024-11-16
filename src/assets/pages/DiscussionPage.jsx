import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDiscussionContext } from '../../contexts/DiscussionContext';

const DiscussionPage = () => {
  const { eventId } = useParams(); // Get eventId from URL
  const { getDiscussionsByEventId, addDiscussion } = useDiscussionContext(); // Use context to get and add discussions
  const [discussions, setDiscussions] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State for authentication
  const eventPassword = eventId; // Password is the eventId

  // Load discussions when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const eventDiscussions = getDiscussionsByEventId(parseInt(eventId));
      setDiscussions(eventDiscussions);
    }
  }, [eventId, getDiscussionsByEventId, isAuthenticated]);

  // Handle adding new discussion
  const handleAddDiscussion = () => {
    if (!username.trim() || !newMessage.trim()) {
      alert('Please enter both a username and a message.');
      return;
    }

    const newDiscussion = {
      id: (discussions[0]?.discussion.length || 0) + 1, // Increment the ID
      user: username,
      message: newMessage,
    };

    // Add to the context
    addDiscussion(parseInt(eventId), newDiscussion);

    // Update local state without re-fetching all discussions
    setDiscussions((prev) => {
      const updatedDiscussions = [...prev];
      if (updatedDiscussions.length > 0) {
        updatedDiscussions[0].discussion.push(newDiscussion);
      } else {
        updatedDiscussions.push({ eventId: parseInt(eventId), discussion: [newDiscussion] });
      }
      return updatedDiscussions;
    });

    // Clear input fields
    setNewMessage('');
    setUsername('');
  };

  const handlePasswordSubmit = () => {
    if (enteredPassword === eventPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
          <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
            Enter Event Password
          </h1>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Please provide the event password to access the discussion.
          </p>
          <input
            type="password"
            placeholder="Enter password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handlePasswordSubmit}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
  

  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-8">
      <h1 className="text-3xl font-bold mb-4">Event Discussions</h1>
      {discussions.length === 0 || discussions[0]?.discussion.length === 0 ? (
        <p>No discussions available for this event.</p>
      ) : (
        discussions[0]?.discussion.map((discussion, index) => (
          <div key={index} className="bg-white p-4 my-2 rounded-lg shadow-sm">
            <p>
              <strong>{discussion.user}:</strong> {discussion.message}
            </p>
          </div>
        ))
      )}

      <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Add to the Discussion</h2>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddDiscussion}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Discussion
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscussionPage;
