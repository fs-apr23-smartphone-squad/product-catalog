import { Link } from 'react-router-dom';

import './Buttons.scss';

export const Buttons = () => (
  <div className="buttons">
    <div className="icon--menu-wrapper">
      <Link
        to="menu"
        className="icon icon--menu"
      ></Link>
    </div>

    <div className="icon-wrapper">
      <Link
        to="favourites"
        className="icon icon--favourites"
      ></Link>
    </div>

    <div className="icon-wrapper">
      <Link
        to="cart"
        className="icon icon--cart"
      ></Link>
    </div>
  </div>
);
