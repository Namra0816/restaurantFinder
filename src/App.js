import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Home from './pages/Home/Home';
import Navbar from "../../restaurantFinder/src/components/Navbar/Navbar";
import RestaurantList from './pages/restaurantList/restaurantList';
import restaurantData from './assets/restaurantData/restaurantData.json';
import Contact from './pages/Contact/Contact';

function App() {
  
  const [restaurants] = useState(restaurantData); // Initialize state with restaurant data

  return (
    <div>
      
      <Helmet>  {/* Helmet is used to manage the document head */}
        <title>DineDiscover - Find the Best Restaurants</title>
        <meta name="description" content="Discover the best restaurants in your city. Browse menus, reviews, and make reservations online." />
        <meta name="keywords" content="restaurants, food, dining, reservations, reviews" />
      </Helmet>
      
      <Navbar />  {/* Navbar component for navigation */}
      
      <Routes>  {/* Routes to define the different pages/components */}
        
        <Route path="/" element={<Home />} />   {/* Home page route */}

        {/* Dynamic route for city and state to display restaurant list */}
        <Route path="/:city/:state" element={<RestaurantList restaurants={restaurants} />} />
        
        <Route path="/contact" element={<Contact />} />   {/* Contact page route */}
      </Routes>
    </div>
  );
}

export default App;
