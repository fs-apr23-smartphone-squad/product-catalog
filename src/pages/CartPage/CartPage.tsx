import { useState } from 'react';
import { CartItem } from '../../components/CartItem';
import { ModalWindow } from '../../components/ModalWindow';
import './CartPage.scss';

export const CartPage = () => {
  const [isModal, setIsModal] = useState(false);

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
        <button
          className="cart__button"
          onClick={() => setIsModal(true)}
        >
          Checkout
        </button>
      </div>
    </div>

    {isModal && <ModalWindow />}
  </div>
  );
};
