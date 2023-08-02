import React, { useRef } from 'react';
import './Recommended.scss';
import { Card } from '../Card';

/* eslint-disable */
interface Props {
  phoneIdsInCart: number[];
  handleAddToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}

export const Recommended: React.FC<Props> = ({ phoneIdsInCart, handleAddToCart, removeFromCart }) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  const handlePrevClick = () => {
    if (listRef.current) {
      listRef.current.scrollLeft -= 250;
    }
  };

  const handleNextClick = () => {
    if (listRef.current) {
      listRef.current.scrollLeft += 250;
    }
  };

  const phone = {
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
  };

  return (
    <div className="recommended">
      <div className="recommended__top">
        <h3 className="recommended__title">You may also like</h3>

        <div className="recommended__slider">
          <button
            className="recommended__button"
            onClick={handlePrevClick}
          >
            <span
              className="
                recommended__button-icon
                recommended__button-icon--left"
            ></span>
          </button>
          <button
            className="recommended__button"
            onClick={handleNextClick}
          >
            <span
              className="
                recommended__button-icon
                recommended__button-icon--right"
            ></span>
          </button>
        </div>
      </div>

      <div className="recommended__content" ref={listRef}>
        <div className="recommended__scroll-wrapper">
          <Card
            phone={phone}
            phoneIdsInCart={phoneIdsInCart}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={removeFromCart}
          />
          <Card
            phone={phone}
            phoneIdsInCart={phoneIdsInCart}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={removeFromCart}
          />
          <Card
            phone={phone}
            phoneIdsInCart={phoneIdsInCart}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={removeFromCart}
          />
          <Card
            phone={phone}
            phoneIdsInCart={phoneIdsInCart}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={removeFromCart}
          />
          <Card
            phone={phone}
            phoneIdsInCart={phoneIdsInCart}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={removeFromCart}
          />
        </div>
      </div>
    </div>
  );
};
