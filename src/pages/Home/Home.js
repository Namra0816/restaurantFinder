import React from 'react';
import Hero from './Hero/Hero';
import SearchBar from '../../components/searchBar/searchBar'; 

const Home = () => {
  return (
    <div>
      <Hero>
        <SearchBar />
      </Hero>
    </div>
  );
};

export default Home;
