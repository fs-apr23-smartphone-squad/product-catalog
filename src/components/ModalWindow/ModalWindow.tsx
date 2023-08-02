import { useState } from 'react';
import cn from 'classnames';
import './ModalWindow.scss';

export const ModalWindow = () => {
  const [isModal, setIsModal] = useState(true);

  return (
    <div
      className={cn(
        'modal', { 'is-active': isModal },
      )}
    >
      <div
        className="modal__content"
        onClick={() => setIsModal(false)}
      >
        <div className="modal__header">
          thx

          <button className="icon icon--close"></button>
        </div>

        <div className="modal__message">
          Thank you for shopping in our store!
        </div>

        <button className="modal__button">
          OK
        </button>
      </div>
    </div>
  );
};
