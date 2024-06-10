import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import restaurantData from '../../assets/restaurantData/restaurantData.json';
import './searchBar.css';

const SearchBar = () => {
  // State to store the filtered search results
  const [filteredData, setFilteredData] = useState([]);

  // State to store the current input value in the search bar
  const [wordEntered, setWordEntered] = useState("");

  // State to store error messages if the search yields no results
  const [errorMessage, setErrorMessage] = useState("");

  // Hook to navigate programmatically
  const navigate = useNavigate();

  // Function to handle filtering the restaurant data based on user input
  const handleFilter = (event) => {
    
    const searchWord = event.target.value;  // Get the current input value from the event
   
    setWordEntered(searchWord);    // Update the search input state
    
    setErrorMessage("");  // Clear any existing error messages

    // Object to keep track of unique city-state combinations to avoid duplicates
    let uniqueEntries = {};

    // Filter the restaurant data based on the input value
    const newFilter = restaurantData.filter((value) => {
      const key = `${value.city.toLowerCase()}-${value.state.toLowerCase()}`;

      // Check if the city or state matches the input and if it is a unique entry
      if (!uniqueEntries[key] && 
          (value.city.toLowerCase().includes(searchWord.toLowerCase()) || 
          value.state.toLowerCase().includes(searchWord.toLowerCase()))) {
        uniqueEntries[key] = true;    // Mark the entry as seen
        return true;    // Include this entry in the filtered results
      }
      return false;    // Exclude this entry from the filtered results
    });

    // Update the state with the filtered data or display an error if no results found
    if (searchWord === "") {
      setFilteredData([]);    // Clear the filtered data if input is empty
    } else {
      setFilteredData(newFilter);   // Set the filtered data
      if (newFilter.length === 0) {
        setErrorMessage("City/State not found. Please enter a correct city/state."); // Show error if no results
      }
    }
  };

  // Function to clear the search input and reset the states
  const clearInput = () => {
    setFilteredData([]);  // Clear the filtered data
    setWordEntered("");   // Reset the search input value
    setErrorMessage("");  // Clear any error messages
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Enter a City or State..."
          value={wordEntered}
          onChange={handleFilter} // Handle input changes to filter data
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />    // Show the search icon if there is no search result
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />  // Show the clear icon if there are search results
          )}
        </div>
      </div>
      {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>   {/* Display error message if any */}
        </div>
      )}
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <div 
                key={key} 
                className="dataItem" 
                onClick={() => {
                  setWordEntered(`${value.city}, ${value.state}`);  // Update the search input with the selected city/state
                  setFilteredData([]);    // Clear the filtered data
                  navigate(`/${value.city}/${value.state}`);   // Navigate to the selected city/state
                }}>
                <p>{value.city}, {value.state}</p>   {/* Display the city and state */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
