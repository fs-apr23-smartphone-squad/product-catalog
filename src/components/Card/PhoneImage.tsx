import React, { useState } from 'react';
/* eslint-disable */
export interface Props {
  src: string;
}

const Base = 'https://api.smartphonesquad.shop/';
export const PhoneImage: React.FC<Props> = ({ src }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="card_image-container">
      {!imageError ? (
        <img
          src={Base + src}
          alt="Apple iPhone Xs 64GB Silver"
          className="card_image"
          onError={handleImageError}
        />
      ) : (
        <span>Image not available</span>
      )}
    </div>
  );
};
