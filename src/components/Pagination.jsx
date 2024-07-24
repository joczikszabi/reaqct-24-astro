import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handleClick = (page) => {
    onPageChange(page);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-4 space-x-2">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded font-medium ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        &lt;
      </button>

      <button
        onClick={() => handleClick(1)}
        className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-primary-orange text-white font-medium' : 'opacity-75'}`}
      >
        1
      </button>

      {currentPage > 3 && <span className="px-3 py-1">...</span>}

      {pages
        .filter((page) => page > 1 && page < totalPages)
        .slice(Math.max(0, currentPage - 4), currentPage <= 3 ? currentPage + 2 : currentPage + 1)
        .map((page) => (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className={`px-3 py-1 rounded ${
              page === currentPage ? 'bg-primary-orange text-white font-medium' : 'text-normal opacity-75'
            }`}
          >
            {page}
          </button>
        ))}

      {currentPage < totalPages - 3 && <span className="px-3 py-1">...</span>}

      <button
        onClick={() => handleClick(totalPages)}
        className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-primary-orange text-white font-medium' : 'opacity-75'}`}
      >
        {totalPages}
      </button>

      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded font-medium ${
          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
