import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from "../../restaurantFinder/src/components/Navbar/Navbar";
import RestaurantList from './pages/restaurantList/restaurantList';
import restaurantData from './assets/restaurantData/restaurantData.json';
import Contact from './pages/Contact/Contact';

function App() {
  const [restaurants] = useState(restaurantData);

  return (
    <div>
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