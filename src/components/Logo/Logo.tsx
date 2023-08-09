import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

import './Logo.scss';

export const Logo = () => (
  <div className="logo">
    <Link to="home">
      <img
        className="logo__img"
        src={`${logo}`}
        alt="Nice gadgets logo"
      >
      </img>
    </Link>
  </div>
);
