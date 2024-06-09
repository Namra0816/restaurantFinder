import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero/Hero';
import restaurantData from '../../assets/restaurantData/restaurantData.json'; 

const Home = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const citySet = new Set();
    const stateSet = new Set();
    restaurantData.forEach(restaurant => {
      citySet.add(restaurant.city);
      stateSet.add(restaurant.state);
    });
    setCities([...citySet].sort());
    setStates([...stateSet].sort());
  }, []);

  const handleSearch = () => {
    if (city && state) {
      navigate(`/${city}/${state}`);
    }
  };

  const searchBar = (
    <div className="search-container">
      <input
        list="cities"
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <datalist id="cities">
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </datalist>
      <input
        list="states"
        type="text"
        placeholder="State"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <datalist id="states">
        {states.map(state => (
          <option key={state} value={state}>{state}</option>
        ))}
      </datalist>
      <button onClick={handleSearch}>Search</button>
    </div>
  );

  return (
    <div>
      <Hero>{searchBar}</Hero>
    </div>
  );
};

export default Home;
