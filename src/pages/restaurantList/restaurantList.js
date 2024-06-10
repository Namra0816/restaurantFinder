import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';  // Importing Helmet for managing document head
import './restaurantList.css';  // Importing the CSS file for restaurant list
import Pagination from '../../components/pagination/pagination';  // Importing the Pagination component

function RestaurantList({ restaurants }) {
  // Getting the city and state parameters from the URL
  const { city, state } = useParams();

  // Function to capitalize the first letter of a string
  const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Filtering restaurants based on the city and state parameters
  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.city.toLowerCase() === city.toLowerCase() &&
    restaurant.state.toLowerCase() === state.toLowerCase()
  );

  // State to manage the current page
  const [currentPage, setCurrentPage] = useState(1);
  const restaurantsPerPage = 10;  // Number of restaurants to display per page

  // Calculating the indices for slicing the restaurant list
  const indexOfLastRestaurant = currentPage * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
  const currentRestaurants = filteredRestaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant);

  // Function to handle pagination
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container restaurant-list">
      
      <Helmet>  {/* Helmet for setting the page title and meta description */}
        <title>Restaurants in {capitalize(city)}, {capitalize(state)} - DineDiscover</title>
        <meta name="description" content={`Discover the best restaurants in ${capitalize(city)}, ${capitalize(state)}. Browse menus, reviews, and more.`} />
      </Helmet>
      {filteredRestaurants.length > 0 ? (
        <>
          <h2>Restaurants in {capitalize(city)}, {capitalize(state)}</h2>
          <ul>
            
            {/* Mapping through the current list of restaurants and displaying them */}
            {currentRestaurants.map(restaurant => (
              <li key={restaurant.id}>
                <h3>{restaurant.name}</h3>
                <p>{restaurant.address}</p>
              </li>
            ))}
          </ul>
          
          {/* Pagination component */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredRestaurants.length / restaurantsPerPage)}
            paginate={paginate}
          />
        </>
      ) : (
        // Message to display if no restaurants are found
        <div className="error-message">
          <h2>No restaurants found in {capitalize(city)}, {capitalize(state)}</h2>
        </div>
      )}
    </div>
  );
}

export default RestaurantList;
