import React from 'react';
import './PhoneDetailsPage.scss';
import { Recommended } from '../../components/Recommended';

/* eslint-disable */
interface Props {
  phoneIdsInCart: number[];
  handleAddToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}

export const PhoneDetailsPage: React.FC<Props> = ({ phoneIdsInCart, handleAddToCart, removeFromCart }) => {
  return (
    <div className="phone">
      <a href="#" className="phone__back-link">Back</a>

      <h1 className="phone__title">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>

      <div className="phone__container">
        <div className="phone__details">
          <div className="phone__photos">
            <img
              className='phone__photo--big'
              src="https://api.smartphonesquad.shop/img/phones/apple-iphone-7/gold/00.jpg"
              alt="Phone photo"
            />
            <div className="phone__photos--small">
              <img
                className='phone__photo--small'
                src="https://api.smartphonesquad.shop/img/phones/apple-iphone-7/gold/01.jpg"
                alt="Phone photo"
              />

              <img
                className='phone__photo--small'
                src="https://api.smartphonesquad.shop/img/phones/apple-iphone-7/gold/02.jpg"
                alt="Phone photo"
              />

              <img
                className='phone__photo--small'
                src="https://api.smartphonesquad.shop/img/phones/apple-iphone-7/gold/03.jpg"
                alt="Phone photo"
              />

              <img
                className='phone__photo--small'
                src="https://api.smartphonesquad.shop/img/phones/apple-iphone-7/gold/04.jpg"
                alt="Phone photo"
              />
            </div>
          </div>
          <div className="phone__actions-block"></div>
        </div>
        <div className="phones__description">
          <div className="phone__about"></div>
        <div className="phone__tech-specs"></div>
        </div>
        <div className="phone__recommended">
          <Recommended
            phoneIdsInCart={phoneIdsInCart}
            handleAddToCart={handleAddToCart}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>
    </div>
  );
};
