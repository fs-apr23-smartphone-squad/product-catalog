import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './BurgerMenu.scss';
import React from 'react';

/* eslint-disable */
interface Props {
  productsInFavorites: number;
  productsInCart: number;
}

export const BurgerMenu: React.FC<Props> = ({
  productsInFavorites,
  productsInCart,
}) => (
  <div className='burger'>
    <nav className="burger__nav">
      <ul className="burger__list">
        <li className="burger__item">
          <NavLink
            className={({ isActive }) => cn(
              'burger__link', { 'is-active': isActive },
            )}
            to="home"
          >
            home
          </NavLink>
        </li>

        <li className="burger__item">
          <NavLink
            className={({ isActive }) => cn(
              'burger__link', { 'is-active': isActive },
            )}
            to="phones"
          >
            phones
          </NavLink>
        </li>

        <li className="burger__item">
          <NavLink
            className={({ isActive }) => cn(
              'burger__link', { 'is-active': isActive },
            )}
            to="tablets"
          >
            tablets
          </NavLink>
        </li>

        <li className="burger__item">
          <NavLink
            className={({ isActive }) => cn(
              'burger__link', { 'is-active': isActive },
            )}
            to="accessories"
          >
          accessories
          </NavLink>
        </li>
      </ul>
    </nav>

    <div className="burger__buttons">
      {productsInFavorites
        ? (
          <NavLink
          to="favourites"
          className="burger__icon"
        >
          <div className="icon icon--favourites">
            <div className='ellipse'>{productsInFavorites}</div>
          </div>
        </NavLink>
        ) : (
          <NavLink
            to="favourites"
            className="burger__icon"
          >
            <div className="icon icon--favourites"></div>
          </NavLink>
        )}

        {productsInCart
        ? (
          <NavLink
            to="cart"
            className={({ isActive }) => cn(
              'burger__icon', { 'is-active': isActive },
            )}
          >
            <div className="icon icon--cart">
              <div className='ellipse'>{productsInCart}</div>
            </div>
          </NavLink>
        ) : (
          <NavLink
            to="cart"
            className={({ isActive }) => cn(
              'burger__icon', { 'is-active': isActive },
            )}
          >
            <div className="icon icon--cart"></div>
          </NavLink>
        )}
    </div>
  </div>
);
