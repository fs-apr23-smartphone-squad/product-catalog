import React, { useEffect, useState } from 'react';

import { Cardlist } from '../../components/Cardlist';
import { getPhonesForPagination } from '../../components/Helpers/fetchClient';
import { Select } from '../../components/Select/Select';
import { Sorting } from '../../components/Sorting/Sorting';
import { Phone } from '../../components/Types/Types';
import { Pagination } from '../../components/Pagination/Pagination';
import './TabletsPage.scss';
import { Link } from 'react-router-dom';

/* eslint-disable no-console */
/* eslint-disable */
interface Props {
  phoneIdsInCart: number[];
  handleAddToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  phoneIdsInFavourites: number[];
  handleAddToFavourites: (id: number) => void;
  removeFromFavourites: (id: number) => void;
}

export const TabletsPage: React.FC<Props> = ({ phoneIdsInCart,
  handleAddToCart,
  removeFromCart,
  phoneIdsInFavourites,
  handleAddToFavourites,
  removeFromFavourites,
}) => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPhones, setTotalPhones] = useState(0);
  const [perPage, setPerPage] = useState(16);
  const [filter, setFilter] = useState('Newest');
  const [sorting, setSorting] = useState('year');
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('DESC');

  useEffect(() => {
    fetchPhones();
  }, [currentPage, perPage, filter, sorting, sortOrder]);

  interface PhoneApiResponse {
    count: number;
    rows: Phone[];
  }

  const fetchPhones = async () => {
    console.log(filter, sorting, sortOrder);
    try {
      let updatedSorting = sorting;
      let updatedSortOrder = sortOrder;

      if (filter === 'Newest') {
        updatedSorting = 'year';
        updatedSortOrder = 'DESC';
      } else if (filter === 'priceRegular ⇂') {
        updatedSorting = 'priceRegular';
        updatedSortOrder = 'DESC';
      } else if (filter === 'priceRegular ↾') {
        updatedSorting = 'priceRegular';
        updatedSortOrder = 'ASC';
      }

      const response = await getPhonesForPagination(
        perPage,
        (currentPage - 1) * perPage,
        updatedSorting,
        updatedSortOrder,
        'tablets'
      );

      setTotalPhones(response.count);
      setPhones(response.rows);
      setSorting(updatedSorting);
      setSortOrder(updatedSortOrder);
    } catch (error) {
      console.error('Error fetching phones:', error);
    }
  };


  const handlePerPage = (option: number) => {
    setPerPage(option);
    setCurrentPage(1);
  };

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='phones_page'>
      <div className='breadcrumbs1'>
        <Link
        className='breadcrumbs__home'
        to='/home'
        ></Link>
        <div className='breadcrumbs__arrow'></div>
        <p>Tablets</p>
      </div>

      <div className='phones_page__header'>
        <h1 className='phones_page__title'>Tablets</h1>
        <h4 className='phones_page__quantity'>{`${totalPhones} models`}</h4>
      </div>

      <div className='phones_page__filter'>
        <Sorting
          title="Sort by"
          filter={filter}
          setFilter={setFilter}
          setCurrentPage={setCurrentPage}
        />

        <Select
          title="Items on page"
          handlePerPage={handlePerPage}
          perPage={perPage}
        />
      </div>

      <Cardlist
        phonesToShow={phones}
        phoneIdsInCart={phoneIdsInCart}
        handleAddToCart={handleAddToCart}
        removeFromCart={removeFromCart}
        phoneIdsInFavourites={phoneIdsInFavourites}
        handleAddToFavourites={handleAddToFavourites}
        removeFromFavourites={removeFromFavourites}
      />

      <Pagination
        total={totalPhones}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />

    </div>
  );
};
