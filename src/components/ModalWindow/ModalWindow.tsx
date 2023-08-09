import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './ModalWindow.scss';

/* eslint-disable */
interface Props {
  phoneIdsInCart: number[];
  removeAllFromCart: () => void;
  isModal: boolean;
  setIsModal: (state: boolean) => void;
}

export const ModalWindow: React.FC<Props> = ({
  phoneIdsInCart,
  removeAllFromCart,
  isModal,
  setIsModal,
}) => {
  const confirmOrder = () => {
    removeAllFromCart();

    return () => setIsModal(false);
  };

  return (
    <div
      onClick={() => setIsModal(false)}
      className={cn(
        'modal', { 'is-active': isModal },
      )}
    >
      <div className="modal__content">
        <div className="modal__message">
          Thanks for shopping!
        </div>

        <NavLink
          onClick={confirmOrder}
          to="/"
        >
          <button className="modal__button">
            Back to Store
          </button>
        </NavLink>
      </div>
    </div>
  );
};
