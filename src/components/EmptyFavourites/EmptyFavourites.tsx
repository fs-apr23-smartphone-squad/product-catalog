import { NavLink } from 'react-router-dom';
import './EmptyFavourites.scss';

export const EmptyFavourites = () => {
  return (
    <div className="empty_state">
    <i className="ion-sad-outline"></i>
    <h3 className="">Your favorites list is empty ❤️</h3>
    <p>Start adding items now!</p>
    <NavLink
      to="/"
      className='button'
    >
        Go to store
    </NavLink>
  </div>
  );
};
