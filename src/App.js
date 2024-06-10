import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Home from './pages/Home/Home';
import Navbar from "../../restaurantFinder/src/components/Navbar/Navbar";
import RestaurantList from './pages/restaurantList/restaurantList';
import restaurantData from './assets/restaurantData/restaurantData.json';
import Contact from './pages/Contact/Contact';

function App() {
  const [restaurants] = useState(restaurantData);

  return (
    <div>
      <Helmet>
        <title>DineDiscover - Find the Best Restaurants</title>
        <meta name="description" content="Discover the best restaurants in your city. Browse menus, reviews, and make reservations online." />
        <meta name="keywords" content="restaurants, food, dining, reservations, reviews" />
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city/:state" element={<RestaurantList restaurants={restaurants} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
