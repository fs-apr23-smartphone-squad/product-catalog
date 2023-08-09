import { useEffect, useState } from 'react';

import './CartPage.scss';

import { CartItem } from '../../components/CartItem';
import { ModalWindow } from '../../components/ModalWindow';
import { getPhonesByIds } from '../../Helpers/fetchClient';
import { Phone } from '../../Types/Types';
import { Link } from 'react-router-dom';
import { EmptyCart } from '../../components/EmptyCart';

/* eslint-disable */
interface Props {
  phoneIdsInCart: number[];
  removeFromCart: (id: number) => void;
  removeAllFromCart: () => void;
}

export const CartPage: React.FC<Props> = ({
  phoneIdsInCart,
  removeFromCart,
  removeAllFromCart,
}) => {
  const [isModal, setIsModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [
    phonesInCartFromServer, setPhonesInCartFromServer,
  ] = useState<Phone[]>([]);

  useEffect(() => {
    async function getPhonesFromServer(ids: number[]) {
      if (ids.length === 0) {
        setPhonesInCartFromServer([]);

        return;
      }

      try {
        const phonesFromServer = await getPhonesByIds(
          ids.map((id) => String(id)),
        );

        setPhonesInCartFromServer(phonesFromServer);
      } catch {
        throw new Error('Unable to load data');
      }
    }

    getPhonesFromServer(phoneIdsInCart);
  }, [phoneIdsInCart]);

  useEffect(() => {
    localStorage.setItem('phoneIds', JSON.stringify(phoneIdsInCart));
  }, [phoneIdsInCart]);

  useEffect(() => {
    const priceArray = phoneIdsInCart.map((id) => {
      const phoneKey = `id#${id} phone in cart`;
      const phoneDataRaw = localStorage.getItem(phoneKey);

      if (phoneDataRaw !== null) {
        const phoneData = JSON.parse(phoneDataRaw);

        const price = phoneData.price;
        const itemCount = phoneData.itemCount;

        return price * itemCount;
      }

      return 0;
    });

    const total = priceArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    setTotalPrice(total);
  }, [phoneIdsInCart, totalItems, isLoaded]);

  useEffect(() => {
    const amountsArray = phoneIdsInCart.map((id) => {
      const phoneKey = `id#${id} phone in cart`;
      const phoneDataRaw = localStorage.getItem(phoneKey);

      if (phoneDataRaw !== null) {
        const phoneData = JSON.parse(phoneDataRaw);
        const itemCount = phoneData.itemCount;

        return itemCount;
      }

      return 0;
    });

    const total = amountsArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    setTotalItems(total);
  }, [phoneIdsInCart, totalItems, isLoaded]);

  const isSmthInCart = phonesInCartFromServer.length !== 0;

  return (
    isSmthInCart
      ? (
        <div className="cart">
        <div className='breadcrumbs'>
      <Link
      className='breadcrumbs__home'
      to='/home'
      ></Link>
      <div className='breadcrumbs__arrow'></div>
      <p>Cart</p>
    </div>
    <a href="#" className="cart__link">Back</a>

        <h1 className="cart__title">Cart</h1>

        <div className="cart__wrapper">
          <div className="cart__items">
            <div className="cart__item">
              {phonesInCartFromServer.map((phone) => (
                <CartItem
                  onRemoveFromCart={removeFromCart}
                  phone={phone}
                  key={phone.id}
                  setTotalItems={setTotalItems}
                  setIsLoaded={setIsLoaded}
                />
              ))}
            </div>
          </div>
          <div className="cart__total">
            <h3 className="cart__price">${totalPrice}</h3>
            <span className="cart__amount">Total for {totalItems} items</span>
            <button
              className="cart__button"
              onClick={() => setIsModal(true)}
            >
              Checkout
            </button>
          </div>
        </div>

        {isModal && <ModalWindow
          phoneIdsInCart={phoneIdsInCart}
          removeAllFromCart={removeAllFromCart}
          isModal={isModal}
          setIsModal={setIsModal}
        />}
      </div>
    )
      : <EmptyCart />
  );
};
