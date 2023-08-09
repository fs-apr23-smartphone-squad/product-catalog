import React from 'react';
import './PhonePhotos.scss';

/* eslint-disable */
interface Props {
  BASE_API_URL: string;
  setShowedPhoto: (url: string) => void;
  showedPhoto: string | null;
  productImages: string[];
  phoneName: string;
}

export const PhonePhotos: React.FC<Props>  = ({
  BASE_API_URL,
  setShowedPhoto,
  showedPhoto,
  productImages,
  phoneName,
}) => (
  <div className="photos">
    <img
      className='photo--big'
      src={
        showedPhoto
          ? (`${BASE_API_URL}/${showedPhoto}`)
          : (`${BASE_API_URL}/${productImages?.[0]}`)
      }
      alt={`${phoneName} photo`}
    />

    <div className="photos--small">
      {productImages?.map(image => (
        <img
          key={image}
          className='photo--small'
          src={`${BASE_API_URL}/${image}`}
          onMouseEnter={() => setShowedPhoto(image)}
          onClick={() => setShowedPhoto(image)}

          alt={`${phoneName} photo`}
        />
      ))}
    </div>
  </div>
);
