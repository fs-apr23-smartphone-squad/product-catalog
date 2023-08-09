import React, { useRef } from 'react';
import './Carousel.scss';
import { Card } from '../Card';
import { Phone } from '../../Types/Types';

/* eslint-disable */
interface Props {
  title: string;
  phones: Phone[];
  phoneIdsInCart: number[];
  handleAddToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  phoneIdsInFavourites: number[];
  handleAddToFavourites: (id: number) => void;
  removeFromFavourites: (id: number) => void;
}

export const Carousel: React.FC<Props> = ({
  title,
  phones,
  phoneIdsInCart,
  handleAddToCart,
  removeFromCart,
  phoneIdsInFavourites,
  handleAddToFavourites,
  removeFromFavourites,
}) => {
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
    <div className="recommended">
      <div className="recommended__top">
        <h3 className="recommended__title">{title}</h3>

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
          {phones.map(phone => <Card
            key={phone.id}
            phone={phone}
            phoneIdsInCart={phoneIdsInCart}
            handleAddToCart={handleAddToCart}
            removeFromCart={removeFromCart}
            phoneIdsInFavourites={phoneIdsInFavourites}
            handleAddToFavourites={handleAddToFavourites}
            removeFromFavourites={removeFromFavourites}
          />)}
        </div>
      </div>
    </div>
  );
};
