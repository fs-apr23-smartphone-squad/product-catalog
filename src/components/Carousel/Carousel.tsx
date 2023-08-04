import React, { useRef } from 'react';
import './Carousel.scss';
import { Card } from '../Card';
import { Phone } from '../Types/Types';

/* eslint-disable */
interface Props {
  title: string,
  phones: Phone[];
  phoneIdsInCart: number[];
  handleAddToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}

export const Carousel: React.FC<Props> = ({ title, phones, phoneIdsInCart, handleAddToCart, removeFromCart }) => {
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

  return (
    <div className="carousel">
      <div className="carousel__top">
        <h3 className="carousel__title">{title}</h3>

        <div className="carousel__slider">
          <button
            className="carousel__button"
            onClick={handlePrevClick}
          >
            <span
              className="
                carousel__button-icon
                carousel__button-icon--left"
            ></span>
          </button>
          <button
            className="carousel__button"
            onClick={handleNextClick}
          >
            <span
              className="
                carousel__button-icon
                carousel__button-icon--right"
            ></span>
          </button>
        </div>
      </div>

      <div className="carousel__content" ref={listRef}>
        <div className="carousel__scroll-wrapper">
          {phones.map(phone => <Card
            key={phone.phoneId}
            phone={phone}
            phoneIdsInCart={phoneIdsInCart}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={removeFromCart}
          />)}
        </div>
      </div>
    </div>
  );
};
