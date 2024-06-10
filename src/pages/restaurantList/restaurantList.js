import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './restaurantList.css';
import Pagination from '../../components/pagination/pagination';

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

  const [currentPage, setCurrentPage] = useState(1);
  const restaurantsPerPage = 10;

  const indexOfLastRestaurant = currentPage * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
  const currentRestaurants = filteredRestaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container restaurant-list">
      {filteredRestaurants.length > 0 ? (
        <>
          <h2>Restaurants in {capitalize(city)}, {capitalize(state)}</h2>
          <ul>
            {currentRestaurants.map(restaurant => (
              <li key={restaurant.id}>
                <h3>{restaurant.name}</h3>
                <p>{restaurant.address}</p>
              </li>
            ))}
          </ul>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredRestaurants.length / restaurantsPerPage)}
            paginate={paginate}
          />
        </>
      ) : (
        <div className="error-message">
          <h2>No restaurants found in {capitalize(city)}, {capitalize(state)}</h2>
        </div>
      )}
    </div>
  );
}

export default RestaurantList;
