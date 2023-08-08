import React from 'react';
import { Navigation } from '../Navigation';
import { Logo } from '../Logo';
import { Buttons } from '../Buttons';

import './Header.scss';

/* eslint-disable */
interface Props {
  phoneIdsInFavourites: number[];
  phoneIdsInCart: number[];
}

export const Header: React.FC<Props> = ({ phoneIdsInFavourites, phoneIdsInCart }) => {
  return (
    <header className="header">
    <div className="header__left">
      <Logo />

      <Navigation />
    </div>

    <Buttons
      phoneIdsInFavourites={phoneIdsInFavourites}
      phoneIdsInCart={phoneIdsInCart}
    />
  </header>
  );
};
