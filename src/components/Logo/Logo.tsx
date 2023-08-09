import { Link } from 'react-router-dom';

import './Logo.scss';

export const Logo = () => (
  <div className="logo">
    <Link to="home">
      <img
        className="logo__img"
        src="../../images/logo.svg"
        alt="Nice gadgets logo"
      >
      </img>
    </Link>
  </div>
);
