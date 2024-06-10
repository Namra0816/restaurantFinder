import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero/Hero';
import SearchBar from '../../components/searchBar/searchBar'; 

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>DineDiscover - Home</title>
        <meta name="description" content="Discover top restaurants in your area. Search by city or state to find the best dining options." />
      </Helmet>
      <Hero>
        <SearchBar />
      </Hero>
    </div>
  );
};

export default Home;
