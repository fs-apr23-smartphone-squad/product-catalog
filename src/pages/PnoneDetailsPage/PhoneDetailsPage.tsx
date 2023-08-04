import React from 'react';
import './PhoneDetailsPage.scss';
import { Carousel } from '../../components/Carousel';

/* eslint-disable */
interface Props {
  phoneIdsInCart: number[];
  handleAddToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}

export const PhoneDetailsPage: React.FC<Props> = ({ phoneIdsInCart, handleAddToCart, removeFromCart }) => {
  const phones = [
    {
      id: 1,
      category: 'phones',
      phoneId: 'apple-iphone-7-32gb-black',
      itemId: 'apple-iphone-7-32gb-black',
      name: 'Apple iPhone 7 32GB Black',
      fullPrice: 400,
      price: 375,
      screen: '4.7` IPS',
      capacity: '32GB',
      color: 'black',
      year: 2016,
      ram: '2GB',
      image: 'img/phones/apple-iphone-7/black/00.jpg',
    },
    {
      id: 1,
      category: 'phones',
      phoneId: 'apple-iphone-7-32gb-black',
      itemId: 'apple-iphone-7-32gb-black',
      name: 'Apple iPhone 7 32GB Black',
      fullPrice: 400,
      price: 375,
      screen: '4.7` IPS',
      capacity: '32GB',
      color: 'black',
      year: 2016,
      ram: '2GB',
      image: 'img/phones/apple-iphone-7/black/00.jpg',
    },
    {
      id: 1,
      category: 'phones',
      phoneId: 'apple-iphone-7-32gb-black',
      itemId: 'apple-iphone-7-32gb-black',
      name: 'Apple iPhone 7 32GB Black',
      fullPrice: 400,
      price: 375,
      screen: '4.7` IPS',
      capacity: '32GB',
      color: 'black',
      year: 2016,
      ram: '2GB',
      image: 'img/phones/apple-iphone-7/black/00.jpg',
    },
  ];

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
              // eslint-disable-next-line max-len
              src="https://api.smartphonesquad.shop/img/phones/apple-iphone-7/gold/00.jpg"
              alt="Phone photo"
            />
            <div className="phone__photos--small">
              <img
                className='phone__photo--small'
                // eslint-disable-next-line max-len
                src="https://api.smartphonesquad.shop/img/phones/apple-iphone-7/gold/01.jpg"
                alt="Phone photo"
              />

              <img
                className='phone__photo--small'
                // eslint-disable-next-line max-len
                src="https://api.smartphonesquad.shop/img/phones/apple-iphone-7/gold/02.jpg"
                alt="Phone photo"
              />

              <img
                className='phone__photo--small'
                // eslint-disable-next-line max-len
                src="https://api.smartphonesquad.shop/img/phones/apple-iphone-7/gold/03.jpg"
                alt="Phone photo"
              />

              <img
                className='phone__photo--small'
                // eslint-disable-next-line max-len
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
          <Carousel
            title="You may also like"
            phones={phones}
            phoneIdsInCart={phoneIdsInCart}
            handleAddToCart={handleAddToCart}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>
    </div>
  );
};
