import React, { useEffect } from 'react';
import { Card } from '../Card/Card';
import { Phone } from '../../Types/Types';
import './Cardlist.scss';
import { FoundNothing } from '../FoundNothing';

/* eslint-disable */
interface Props {
  phonesToShow: Phone[];
  phoneIdsInCart: number[];
  handleAddToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  phoneIdsInFavourites: number[];
  handleAddToFavourites: (id: number) => void;
  removeFromFavourites: (id: number) => void;
  appliedQuery: string;
}

export const Cardlist: React.FC<Props> = ({
  phonesToShow,
  phoneIdsInCart,
  handleAddToCart,
  removeFromCart,
  phoneIdsInFavourites,
  handleAddToFavourites,
  removeFromFavourites,
  appliedQuery,
}) => {
  useEffect(() => {
    localStorage.setItem('phoneIds', JSON.stringify(phoneIdsInCart))
  }, [phoneIdsInCart])

  useEffect(() => {
    localStorage.setItem('phoneIdsInFavourites', JSON.stringify(phoneIdsInFavourites))
  }, [phoneIdsInFavourites])

  return (
    <div className='grid'>
      {phonesToShow.length
        ? phonesToShow.map((phone: Phone) => (
          <div key={phone.id} className="card-container">
            <Card
              phone={phone}
              handleAddToCart={handleAddToCart}
              removeFromCart={removeFromCart}
              phoneIdsInCart={phoneIdsInCart}
              handleAddToFavourites={handleAddToFavourites}
              removeFromFavourites={removeFromFavourites}
              phoneIdsInFavourites={phoneIdsInFavourites}
            />
          </div>
        )) : ( <FoundNothing appliedQuery={appliedQuery} />
      )}
    </div>
  );
};

