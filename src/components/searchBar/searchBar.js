import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import restaurantData from '../../assets/restaurantData/restaurantData.json';
import './searchBar.css';

const SearchBar = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    setErrorMessage("");

    let uniqueEntries = {};
    const newFilter = restaurantData.filter((value) => {
      const key = `${value.city.toLowerCase()}-${value.state.toLowerCase()}`;
      if (!uniqueEntries[key] && 
          (value.city.toLowerCase().includes(searchWord.toLowerCase()) || 
          value.state.toLowerCase().includes(searchWord.toLowerCase()))) {
        uniqueEntries[key] = true;
        return true;
      }
      return false;
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
      if (newFilter.length === 0) {
        setErrorMessage("City/State not found. Please enter a correct city/state.");
      }
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    setErrorMessage("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Enter a City or State..."
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      )}
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <div key={key} className="dataItem" onClick={() => {
                setWordEntered(`${value.city}, ${value.state}`);
                setFilteredData([]);
                navigate(`/${value.city}/${value.state}`);
              }}>
                <p>{value.city}, {value.state}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
