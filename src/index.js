import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';   // Importing global CSS styles
import App from './App';  // Importing the main App component
import { BrowserRouter } from 'react-router-dom';   // Importing BrowserRouter for routing
import { HelmetProvider } from 'react-helmet-async';  // Importing HelmetProvider for managing document head


const root = ReactDOM.createRoot(document.getElementById('root'));  // Creating a root element for rendering the app
root.render(

  <HelmetProvider>  {/* HelmetProvider to enable document head management */}
    
    <BrowserRouter>   {/* BrowserRouter to enable routing */}
      
      <App />   {/* Rendering the main App component */}
    </BrowserRouter>
  </HelmetProvider>
);
