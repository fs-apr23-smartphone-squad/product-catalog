import React, { useEffect, useState } from 'react';

import { Cardlist } from '../../components/Cardlist';
import { getPhonesForPagination } from '../../Helpers/fetchClient';
import { Select } from '../../components/Select/Select';
import { Sorting } from '../../components/Sorting/Sorting';
import { Phone } from '../../Types/Types';
import { Pagination } from '../../components/Pagination/Pagination';
import './TabletsPage.scss';
import { Link } from 'react-router-dom';
import { Search } from '../../components/Search/Search';
import { Loader } from '../../components/Loader';

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
  const [perPage, setPerPage] = useState(12);
  const [filter, setFilter] = useState('Newest');
  const [sorting, setSorting] = useState('year');
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('DESC');
  const [appliedQuery, setAppliedQuery] = useState('');
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  useEffect(() => {
    fetchPhones();
  }, [currentPage, perPage, filter, sorting, sortOrder, appliedQuery]);

  interface PhoneApiResponse {
    count: number;
    rows: Phone[];
  }

  const fetchPhones = async () => {
    try {
      const formattedQuery = appliedQuery.toLowerCase().trim();
      let updatedSorting = sorting;
      let updatedSortOrder = sortOrder;

      if (filter === 'Newest') {
        updatedSorting = 'year';
        updatedSortOrder = 'DESC';
      } else if (filter === 'Price 🠣') {
        updatedSorting = 'price';
        updatedSortOrder = 'DESC';
      } else if (filter === 'Price 🠡') {
        updatedSorting = 'price';
        updatedSortOrder = 'ASC';
      }

      const response = await getPhonesForPagination(
        perPage,
        (currentPage - 1) * perPage,
        updatedSorting,
        updatedSortOrder,
        'tablets',
        formattedQuery,
      );

      setTotalPhones(response.count);
      setPhones(response.rows);
      setSorting(updatedSorting);
      setSortOrder(updatedSortOrder);
      setTimeout(() => (setIsLoaderVisible(false)), 500);
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
    isLoaderVisible
      ? <Loader />
      : (
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

          <Search
            setAppliedQuery={setAppliedQuery}
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
      )
  );
};
