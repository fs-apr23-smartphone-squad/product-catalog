import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="icon--menu-wrapper">
        <div
          className={cn(
            'icon icon--menu', { 'is-active': isActiveBurger },
          )}
          onClick={() => setIsActiveBurger(!isActiveBurger)}
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
        <div className="icon-wrapper">
          <Link
            to="favourites"
            className="icon icon--favourites with-ellipse" //
          >
            <div className='ellipse'>{phoneIdsInFavourites.length}</div>
          </Link>
        </div>
      ) : (
        <div className="icon-wrapper">
          <Link
            to="favourites"
            className="icon icon--favourites" //
          >
          </Link>
        </div>
      )}

      <div className="icon-wrapper">
        <Link
          to="cart"
          className="icon icon--cart"
        ></Link>
      </div>
    </div>
  );
};
