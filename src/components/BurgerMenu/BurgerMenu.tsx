import { Link, NavLink } from 'react-router-dom';
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
      <div className="burger__icon">
        <Link
          to="favourites"
          className="icon icon--favourites"
        ></Link>
      </div>

      <div className="burger__icon">
        <Link
          to="cart"
          className="icon icon--cart"
        ></Link>
      </div>
    </div>
  </div>
);
