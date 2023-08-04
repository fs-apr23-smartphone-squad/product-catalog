import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './BurgerMenu.scss';

export const BurgerMenu = () => (
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
      <NavLink
        to="favourites"
        className="burger__icon"
      >
        <div className="icon icon--favourites"></div>
      </NavLink>

      <NavLink
        to="cart"
        className={({ isActive }) => cn(
          'burger__icon', { 'is-active': isActive },
        )}
      >
        <div className="icon icon--cart"></div>
      </NavLink>
    </div>
  </div>
);
