import React from 'react';
import { Helmet } from 'react-helmet-async'; // Importing Helmet for managing the document head
import Hero from './Hero/Hero'; // Importing the Hero component
import SearchBar from '../../components/searchBar/searchBar'; // Importing the SearchBar component

const Home = () => {
  return (
    <div>

      <Helmet>  {/* Helmet is used to set the page title and meta description */}
        <title>DineDiscover - Home</title>
        <meta name="description" content="Discover top restaurants in your area. Search by city or state to find the best dining options." />
      </Helmet>

      <Hero>  {/* Hero component wraps the SearchBar component */}
        <SearchBar />
      </Hero>
    </div>
  );
};

export default Home;
