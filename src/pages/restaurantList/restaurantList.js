import React from 'react';
import { useParams } from 'react-router-dom';
import './restaurantList.css';

function RestaurantList({ restaurants }) {
  const { city, state } = useParams();

  const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.city.toLowerCase() === city.toLowerCase() &&
    restaurant.state.toLowerCase() === state.toLowerCase()
  );

  return (
    <div className="container restaurant-list">
      <h2>Restaurants in {capitalize(city)}, {capitalize(state)}</h2>
      <ul>
        {filteredRestaurants.map(restaurant => (
          <li key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;
