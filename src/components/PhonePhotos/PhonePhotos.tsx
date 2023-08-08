import React from 'react';
import './PhonePhotos.scss';

interface Props {
  BASE_API_URL: string;
  setShowedPhoto: () => void;
  showedPhoto: string;
  productImages: string[];
}

export const PhonePhotos: React.FC<Props>  = ({
  BASE_API_URL,
  setShowedPhoto,
  showedPhoto,
  productImages,
}) => (
  <div className="phone__photos">
    <img
      className='phone__photo--big'
      src={
        showedPhoto
        ? (`${BASE_API_URL}/${showedPhoto}`)
        : (`${BASE_API_URL}/${productImages?.[0]}`)
      }
      alt="Phone photo"
    />

    <div className="phone__photos--small">
      {productImages?.map(image => (
        <img
          key={image}
          className='phone__photo--small'
          src={`${BASE_API_URL}/${image}`}
          onMouseEnter={() => setShowedPhoto(image)}
          onClick={() => setShowedPhoto(image)}

          alt="Phone photo"
        />
      ))}
    </div>
  </div>
);
