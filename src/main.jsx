import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import App from './App.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { EventProvider } from "./contexts/EventContext"; // This assumes the file is in src/contexts/EventContext.jsx
import { DiscussionProvider } from './contexts/DiscussionContext';
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <DiscussionProvider>
    <EventProvider>
      <App />
      <ToastContainer position="top-center" />
    </EventProvider>
    </DiscussionProvider>
  // </StrictMode>
);
