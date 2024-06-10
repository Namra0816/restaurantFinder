import React from 'react';
import './pagination.css';  // Importing the CSS file for pagination styles

// Pagination component accepts currentPage, totalPages, and paginate as props
const Pagination = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];

  // Generating an array of page numbers based on total pages
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    
    <nav className="pagination-container">  {/* Navigation container for pagination buttons */}

      {/* Mapping through the page numbers to create button elements */}
      {pageNumbers.map(number => (
        <button 
          key={number} 
          onClick={() => paginate(number)} // Setting the page number on click
          className={`page-item ${currentPage === number ? 'active' : ''}`}>  {/* Adding active class if the page is the current page */}
          {number}  {/* Displaying the page number */}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
