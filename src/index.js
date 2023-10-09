import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { YoutubeProvider } from './context/youtubeContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <YoutubeProvider>
      <App />
    </YoutubeProvider>
  </React.StrictMode>
);
