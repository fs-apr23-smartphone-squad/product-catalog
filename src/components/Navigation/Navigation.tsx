import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import './Navigation.scss';

export const Navigation = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink
          className={({ isActive }) => cn(
            'nav__link', { 'is-active': isActive },
          )}
          to="home"
        >
          home
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink
          className={({ isActive }) => cn(
            'nav__link', { 'is-active': isActive },
          )}
          to="phones"
        >
          phones
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink
          className={({ isActive }) => cn(
            'nav__link', { 'is-active': isActive },
          )}
          to="tablets"
        >
          tablets
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink
          className={({ isActive }) => cn(
            'nav__link', { 'is-active': isActive },
          )}
          to="accessories"
        >
        accessories
        </NavLink>
      </li>
    </ul>
  </nav>
);
