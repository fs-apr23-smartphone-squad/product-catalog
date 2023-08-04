import React from 'react';
import './PhoneDetailsPage.scss';
import { Carousel } from '../../components/Carousel';
import { PhoneActions } from '../../components/PhoneActions';

/* eslint-disable */
interface Props {
  phoneIdsInCart: number[];
  handleAddToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  phoneIdsInFavourites: number[];
  handleAddToFavourites: (id: number) => void;
  removeFromFavourites: (id: number) => void;
}

export const PhoneDetailsPage: React.FC<Props> = ({
  phoneIdsInCart,
  handleAddToCart,
  removeFromCart,
  phoneIdsInFavourites,
  handleAddToFavourites,
  removeFromFavourites
}) => {
  const phones = [
    {
      "id": 3,
      "category": "phones",
      "phoneId": "apple-iphone-8-64gb-gold",
      "itemId": "apple-iphone-8-64gb-gold",
      "name": "Apple iPhone 8 64GB Gold",
      "fullPrice": 600,
      "price": 550,
      "screen": "4.7' IPS",
      "capacity": "64GB",
      "color": "gold",
      "ram": "2GB",
      "year": 2017,
      "image": "img/phones/apple-iphone-8/gold/00.jpg"
  },
  {
      "id": 4,
      "category": "phones",
      "phoneId": "apple-iphone-11-64gb-black",
      "itemId": "apple-iphone-11-64gb-black",
      "name": "Apple iPhone 11 64GB Black",
      "fullPrice": 932,
      "price": 880,
      "screen": "6.1' IPS",
      "capacity": "64GB",
      "color": "black",
      "ram": "4GB",
      "year": 2019,
      "image": "img/phones/apple-iphone-11/black/00.jpg"
  },
  {
      "id": 5,
      "category": "phones",
      "phoneId": "apple-iphone-11-128gb-yellow",
      "itemId": "apple-iphone-11-128gb-yellow",
      "name": "Apple iPhone 11 128GB Yellow",
      "fullPrice": 1100,
      "price": 1050,
      "screen": "6.1' IPS",
      "capacity": "128GB",
      "color": "yellow",
      "ram": "4GB",
      "year": 2019,
      "image": "img/phones/apple-iphone-11/yellow/00.jpg"
  },
  {
      "id": 6,
      "category": "phones",
      "phoneId": "apple-iphone-11-256gb-green",
      "itemId": "apple-iphone-11-256gb-green",
      "name": "Apple iPhone 11 256GB Green",
      "fullPrice": 1172,
      "price": 1115,
      "screen": "6.1' IPS",
      "capacity": "256GB",
      "color": "green",
      "ram": "4GB",
      "year": 2019,
      "image": "img/phones/apple-iphone-11/green/00.jpg"
  },
  {
      "id": 7,
      "category": "phones",
      "phoneId": "apple-iphone-11-pro-64gb-gold",
      "itemId": "apple-iphone-11-pro-64gb-gold",
      "name": "Apple iPhone 11 Pro 64GB Gold",
      "fullPrice": 1312,
      "price": 1270,
      "screen": "5.8' OLED",
      "capacity": "64GB",
      "color": "gold",
      "ram": "4GB",
      "year": 2019,
      "image": "img/phones/apple-iphone-11-pro/gold/00.jpg"
  },
  {
      "id": 8,
      "category": "phones",
      "phoneId": "apple-iphone-11-pro-256gb-midnightgreen",
      "itemId": "apple-iphone-11-pro-256gb-midnightgreen",
      "name": "Apple iPhone 11 Pro 256GB Midnight green",
      "fullPrice": 1640,
      "price": 1570,
      "screen": "5.8' OLED",
      "capacity": "256GB",
      "color": "midnightgreen",
      "ram": "4GB",
      "year": 2019,
      "image": "img/phones/apple-iphone-11-pro/midnightgreen/00.jpg"
  },
  {
      "id": 9,
      "category": "phones",
      "phoneId": "apple-iphone-11-pro-512gb-silver",
      "itemId": "apple-iphone-11-pro-512gb-silver",
      "name": "Apple iPhone 11 Pro 512GB Silver",
      "fullPrice": 1880,
      "price": 1780,
      "screen": "5.8' OLED",
      "capacity": "512GB",
      "color": "silver",
      "ram": "4GB",
      "year": 2019,
      "image": "img/phones/apple-iphone-11-pro/silver/00.jpg"
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
          <PhoneActions />
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
            phoneIdsInFavourites={phoneIdsInFavourites}
            handleAddToFavourites={handleAddToFavourites}
            removeFromFavourites={removeFromFavourites}
          />
        </div>
      </div>
    </div>
  );
};
