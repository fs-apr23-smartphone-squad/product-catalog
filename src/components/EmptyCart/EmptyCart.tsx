import { NavLink } from 'react-router-dom';
import './EmptyCart.scss';

export const EmptyCart = () => {
  return (
    <div className="empty_state">
      <i className="ion-sad-outline"></i>
      <h3 className="">Your cart is empty 🛒</h3>
      <p>Start shopping now!</p>
      <NavLink
        to="/"
        className='button'
      >
          Go to store
      </NavLink>
    </div>
  );
};
