import './CartItem.scss';

export const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <button className="cart-item__delete"></button>
        <img
          className="cart-item__image"
          src="../../images/cart-item.png"
          alt="Apple iPhone 14 Pro 128GB Silver (MQ023)"
        />
        <div className='cart-item__title'>
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </div>
      </div>

      <div className="cart-item__details">
        <div className="cart-item__amount-info">
          <button className="cart-item__button">
            <span
              className="
                cart-item__button-icon
                cart-item__button-icon--reduce"
              ></span>
          </button>
          <span className="cart-item__amount">1</span>
          <button className="cart-item__button">
            <span
              className="
                cart-item__button-icon
                cart-item__button-icon--increase"
            ></span>
          </button>
        </div>

        <h4 className='cart-item__price'>$999</h4>
      </div>
    </div>
  );
};
