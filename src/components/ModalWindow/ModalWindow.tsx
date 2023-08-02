import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './ModalWindow.scss';

export const ModalWindow = () => {
  const [isModal, setIsModal] = useState(true);
  const closeModal = () => {
    return () => setIsModal(false);
  }

  return (
    <div
      className={cn(
        'modal', { 'is-active': isModal },
      )}
    >
      <div className="modal__content">
        <div className="modal__header">
          thx

          <NavLink
            onClick={closeModal}
            to="/"
          >
            <button
              className="icon icon--close"
              onClick={closeModal}
            ></button>
          </NavLink>
        </div>

        <div className="modal__message">
          Thank you for shopping in our store!
        </div>

        <NavLink
          onClick={closeModal}
          to="/"
        >
          <button className="modal__button">
            OK
          </button>
        </NavLink>
      </div>
    </div>
  );
};
