import React from 'react';
import { Buttons } from '../Buttons';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation/Navigation';
import './Header.scss';

/* eslint-disable */
interface Props {
  phoneIdsInFavourites: number[];
  phoneIdsInCart: number[];
}

export const Header: React.FC<Props> = ({ phoneIdsInFavourites, phoneIdsInCart }) => (
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
