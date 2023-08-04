import React, { useEffect } from 'react';
import { Card } from '../Card/Card';
import { Phone } from '../Types/Types';
import './Cardlist.scss';
import { Filter } from '../Filter/Filter';


/* eslint-disable */
interface Props {
  phonesToShow: Phone[];
  phoneIdsInCart: number[];
  handleAddToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  phoneIdsInFavourites: number[];
  handleAddToFavourites: (id: number) => void;
  removeFromFavourites: (id: number) => void;
}

export const Cardlist: React.FC<Props> = ({
  phonesToShow,
  phoneIdsInCart,
  handleAddToCart,
  removeFromCart,
  phoneIdsInFavourites,
  handleAddToFavourites,
  removeFromFavourites,
}) => {
  useEffect(() => {
    localStorage.setItem('phoneIds', JSON.stringify(phoneIdsInCart))
  }, [phoneIdsInCart])

  useEffect(() => {
    localStorage.setItem('phoneIdsInFavourites', JSON.stringify(phoneIdsInFavourites))
  }, [phoneIdsInFavourites])

  const handlePerPage = (option: number) => {
    setPerPage(option);
    setCurrentPage(1);
  };

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const start = perPage * currentPage - perPage;
  const end = perPage * currentPage <= phones.length
    ? perPage * currentPage
    : phones.length;

  const phonesToShow = phones.slice(start, end);

  return (
    <div className='grid'>
      {phonesToShow.map((phone: Phone) => (
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
      ))}
    </div>
  );
};

