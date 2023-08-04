import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import './Buttons.scss';
import { BurgerMenu } from '../BurgerMenu';

interface Props {
  phoneIdsInFavourites: number[];
}

export const Buttons: React.FC<Props> = ({ phoneIdsInFavourites }) => {
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
          <BurgerMenu />
        </div>
      )}

      {phoneIdsInFavourites.length ? (
        <NavLink
          to="favourites"
          className='icon-wrapper'
        >
          <div className="icon icon--favourites with-ellipse">
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

      <NavLink
        to="cart"
        className="icon-wrapper" //
      >
        <div className="icon icon--cart"></div>
      </NavLink>
    </div>
  );
};
