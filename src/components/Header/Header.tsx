import React from 'react';
import { Buttons } from '../Buttons';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation/Navigation';
import './Header.scss';

interface Props {
  phoneIdsInFavourites: number[];
}

export const Header: React.FC<Props> = ({ phoneIdsInFavourites }) => (
  <header className="header">
    <div className="header__left">
      <Logo />

      <Navigation />
    </div>

    <Buttons phoneIdsInFavourites={phoneIdsInFavourites} />
  </header>
);
