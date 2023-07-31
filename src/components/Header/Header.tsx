import { Link } from 'react-router-dom';

import { Buttons } from '../Buttons';

export const Header = () => (
  <header className="header">
    <div className="header__left">
      <div className="logo">
        <Link to="home">
          <img
            className="logo__img"
            src="images/logo.svg"
            alt="Nice gadgets logo"
          >
          </img>
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link is-active" to="home">
              home
            </Link>
          </li>

          <li className="nav__item">
            <Link className="nav__link" to="phones">
              phones
            </Link>
          </li>

          <li className="nav__item">
            <Link className="nav__link" to="tablets">
              tablets
            </Link>
          </li>

          <li className="nav__item">
            <Link
              className="nav__link"
              to="accessories"
            >
            accessories
            </Link>
          </li>
        </ul>
      </nav>
    </div>

      <Buttons />
  </header>
);
