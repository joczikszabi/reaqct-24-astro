import React from 'react';

const ReaqctConferenceImages = ({ imagePaths }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {imagePaths.map((imagePath, index) => (
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
            className="h-[250px] w-full object-cover rounded-md cursor-pointer"
            loading="lazy"
            decoding="async"
          />
        </a>
      ))}
    </div>
  );
};

export default ReaqctConferenceImages;