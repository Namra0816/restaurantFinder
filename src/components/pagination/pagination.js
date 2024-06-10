import React from 'react';
import './pagination.css';

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-container">
      {pageNumbers.map(number => (
        <button key={number} onClick={() => paginate(number)} className={`page-item ${currentPage === number ? 'active' : ''}`}>
          {number}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
