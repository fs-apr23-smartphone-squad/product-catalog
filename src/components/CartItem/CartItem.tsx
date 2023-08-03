import React, { useState, useEffect } from 'react';
import { Phone } from '../Types/Types';
import './CartItem.scss';

type Props = {
  onRemoveFromCart: (id: number) => void;
  phone: Phone;
  setTotalItems: React.Dispatch<React.SetStateAction<number>>;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
};

const Base = 'https://api.smartphonesquad.shop/';

export const CartItem: React.FC<Props> = ({
  onRemoveFromCart,
  phone,
  setTotalItems,
  setIsLoaded,
}) => {
  const {
    id,
    name: phoneName,
    price,
    image,
  } = phone;

  const [itemCount, setItemCount] = useState<number>(() => {
    const storedCounter = localStorage.getItem(`id#${id} phone in cart`);

    return storedCounter ? JSON.parse(storedCounter).itemCount : 1;
  });

  const storedItem = {
    id,
    itemCount,
    price,
  };

  useEffect(() => {
    localStorage.setItem(`id#${id} phone in cart`, JSON.stringify({ ...storedItem, itemCount }));
    setIsLoaded(true);
  }, [itemCount]);

  const handleIncreaseCount = () => {
    setItemCount((prevCount) => prevCount + 1);
    setTotalItems((prevTotal) => prevTotal + 1);
  };

  const handleDecreaseCount = () => {
    setItemCount((prevCount) => prevCount - 1);
    setTotalItems((prevTotal) => prevTotal - 1);
  };

  const handleRemoveFromCart = () => {
    onRemoveFromCart(id);

    localStorage.removeItem(`id#${id} phone in cart`);
  };

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <button
          className="cart-item__delete"
          onClick={handleRemoveFromCart}
        ></button>
        <img
          className="cart-item__image"
          src={`${Base + image}`}
          alt={phoneName}
        />
        <div className="cart-item__title">{phoneName}</div>
      </div>

      <div className="cart-item__details">
        <div className="cart-item__amount-info">
          <button
            className={(itemCount === 1)
              ? 'cart-item__button-disabled'
              : 'cart-item__button'
            }
            onClick={handleDecreaseCount}
          >
            <span
              className="
                cart-item__button-icon
                cart-item__button-icon--reduce"
            ></span>
          </button>
          <span className="cart-item__amount">{itemCount}</span>
          <button className="cart-item__button" onClick={handleIncreaseCount}>
            <span
              className="
                cart-item__button-icon
                cart-item__button-icon--increase"
            ></span>
          </button>
        </div>

        <h4 className="cart-item__price">{'$' + price * itemCount}</h4>
      </div>
    </div>
  );
};
