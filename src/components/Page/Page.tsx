import React from 'react';
import { Header } from '../Header';
import './Page.scss';

interface Props {
  phoneIdsInFavourites: number[];
  phoneIdsInCart: number[];
}

export const Page: React.FC<Props> = ({ phoneIdsInFavourites, phoneIdsInCart }) => {
  return (
    <>
      <Header
        phoneIdsInFavourites={phoneIdsInFavourites}
        phoneIdsInCart={phoneIdsInCart}
      />
    </>
  );
};
