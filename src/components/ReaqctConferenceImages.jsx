// ReaqctConferenceImages.jsx

import React from 'react';

const ReaqctConferenceImages = ({ imagePaths }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {imagePaths.map((imagePath, index) => (
        <img
          key={index}
          src={imagePath}
          alt={`Conference Image ${index}`}
          className="h-[200px] w-full object-cover rounded-sm"
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
};

export default ReaqctConferenceImages;
