import { useEffect, useState } from 'react';
import { CartItem } from '../../components/CartItem';
import { ModalWindow } from '../../components/ModalWindow';
import './CartPage.scss';
import { getPhonesByIds } from '../../components/Helpers/fetchClient';
import { Phone } from '../../components/Types/Types';

interface Props {
  phoneIdsInCart: number[];
  removeFromCart: (id: number) => void;
}

export const CartPage: React.FC<Props> = ({
  phoneIdsInCart,
  removeFromCart,
 }) => {
  const [isModal, setIsModal] = useState(false);

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

  return (
  <div className="cart">
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
            />
          ))}
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
