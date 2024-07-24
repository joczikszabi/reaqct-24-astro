import React, { useState } from 'react';
import Pagination from './Pagination';

const IMAGES_PER_PAGE = 12;

const ReaqctConferenceImages = ({ imagePaths }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(imagePaths.length / IMAGES_PER_PAGE);

  const currentImages = imagePaths.slice(
    (currentPage - 1) * IMAGES_PER_PAGE,
    currentPage * IMAGES_PER_PAGE
  );

  return (
    <div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentImages.map((imagePath, index) => (
          <a
            href={imagePath}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="group relative"
          >
            <img
              src={imagePath}
              alt={`Conference Image ${index}`}
              className="h-[200px] w-full object-cover rounded-sm cursor-pointer"
              loading="lazy"
              decoding="async"
            />
          </a>
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ReaqctConferenceImages;
