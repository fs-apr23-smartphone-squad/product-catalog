import React, { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { Phone } from '../Types/Types';
import { Pagination } from '../Pagination/Pagination';
import './Cardlist.scss';
/* eslint-disable */
interface Props {
  phones: Phone[];
}

export const Cardlist: React.FC<Props> = ({ phones }) => {
  const [phoneIdsInCart, setPhoneIdsInCart] = useState<number[]>(() => {
    const storedIds = localStorage.getItem('phoneIds');
    return storedIds ? JSON.parse(storedIds) : []
  });
  const [currentPage, setCurrentPage] = useState(2);
  const [perPage, setPerPage] = useState(5);

  const handleAddToCart = (id: number) => {
    setPhoneIdsInCart(prevIds => [...prevIds, id])
  }

  useEffect(() => {
    localStorage.setItem('phoneIds', JSON.stringify(phoneIdsInCart))
  }, [phoneIdsInCart])

  const handlePerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(+e.target.value);
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
    <>
    <h1 className='cardList__title'>Mobile phones</h1>
    <h4 className='cardList__quantity'>{`${phones.length} models`}</h4>

    <Filter
      handlePerPage={handlePerPage}
      perPage={perPage}
    />

    <div className='grid'>
      {phonesToShow.map((phone: Phone) => (
        <div key={phone.id} className="card-container">
          <Card
            phone={phone}
            onAddToCart={handleAddToCart}
            phoneIdsInCart={phoneIdsInCart}
          />
        </div>
      ))}
    </div>

    <Pagination
      total={phones.length}
      perPage={perPage}
      currentPage={currentPage}
      onPageChange={onPageChange}
    />
  </>
  );
};

