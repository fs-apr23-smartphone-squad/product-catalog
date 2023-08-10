import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import './Buttons.scss';
import { BurgerMenu } from '../BurgerMenu';

/* eslint-disable */
interface Props {
  phoneIdsInFavourites: number[];
  phoneIdsInCart: number[];
}

export const Buttons: React.FC<Props> = ({ phoneIdsInFavourites, phoneIdsInCart }) => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  return (
    <div className="buttons">
      <div
        className="icon-wrapper icon-wrapper--menu"
        onClick={() => setIsActiveBurger(!isActiveBurger)}
      >
        <div
          className={cn(
            'icon icon--menu', { 'is-active': isActiveBurger },
          )}
        ></div>
      </div>

      {isActiveBurger && (
        <div
          onClick={() => setIsActiveBurger(false)}
        >
          <BurgerMenu
            productsInFavorites={phoneIdsInFavourites.length}
            productsInCart={phoneIdsInCart.length}
          />
        </div>
      )}

      {phoneIdsInFavourites.length ? (
        <NavLink
          to="favourites"
          className='icon-wrapper'
        >
          <div className="icon icon--favourites">
            <div className='ellipse'>{phoneIdsInFavourites.length}</div>
          </div>
        </NavLink>
      ) : (
        <NavLink
          to="favourites"
          className="icon-wrapper" //
        >
          <div className="icon icon--favourites"></div>
        </NavLink>
      )}

      {phoneIdsInCart.length ? (
        <NavLink
          to="cart"
          className='icon-wrapper'
        >
          <div className="icon icon--cart">
            <div className='ellipse'>{phoneIdsInCart.length}</div>
          </div>
        </NavLink>
      ) : (
        <NavLink
          to="cart"
          className="icon-wrapper" //
        >
          <div className="icon icon--cart"></div>
        </NavLink>
      )}
    </div>
  );
};
