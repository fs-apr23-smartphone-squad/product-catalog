import { CartItem } from '../../components/CartItem';
import './CartPage.scss';

export const CartPage = () => {
  return (
  <div className="cart">
    <a href="#" className="cart__link">Back</a>

    <h1 className="cart__title">Cart</h1>

    <div className="cart__wrapper">
      <div className="cart__items">
        <div className="cart__item">
          <CartItem />
        </div>
      </div>
      <div className="cart__total">
        <h3 className="cart__price">$2657</h3>
        <span className="cart__amount">Total for 3 items</span>
        <button className="cart__button">Checkout</button>
      </div>
    </div>
  </div>
  );
};
