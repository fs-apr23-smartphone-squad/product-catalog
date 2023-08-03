import React from 'react';
import { Header } from '../Header';
import './Page.scss';

interface Props {
  phoneIdsInFavourites: number[];
}

export const Page: React.FC<Props> = ({ phoneIdsInFavourites }) => {
  return (
    <>
      <Header phoneIdsInFavourites={phoneIdsInFavourites} />
    </>
  );
};
