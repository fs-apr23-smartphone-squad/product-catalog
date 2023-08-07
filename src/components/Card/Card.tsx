import cn from 'classnames';
import { PhoneImage } from './PhoneImage';
import { Phone } from '../Types/Types';
import './Card.scss';

/* eslint-disable */
interface Props {
  phone: Phone;
  handleAddToCart: (id: number) => void;
  phoneIdsInCart: number[];
  removeFromCart: (id: number) => void;
  phoneIdsInFavourites: number[];
  handleAddToFavourites: (id: number) => void;
  removeFromFavourites: (id: number) => void;
}

export const Card: React.FC<Props> = ({
  phone,
  handleAddToCart,
  phoneIdsInCart,
  removeFromCart,
  phoneIdsInFavourites,
  handleAddToFavourites,
  removeFromFavourites,
}) => {
  const {
    id,
    name: phoneName,
    fullPrice,
    price,
    screen: phoneScreen,
    capacity,
    ram,
    image,
  } = phone;

  const isPhoneInCart = phoneIdsInCart.includes(id);
  const isPhoneInFavs = phoneIdsInFavourites.includes(id);

  return (
    <article className={cn('card', {})}>
      <PhoneImage src={image} />
      <div className="card_title--container">
        <h3 className="card_title">{phoneName}</h3>
      </div>
      <div className="card_price">
        <p className="card_price-new">{`$${price}`}</p>
        <p className="card_price-old">{`$${fullPrice}`}</p>
      </div>
      <div className="card_divider"></div>
      <div className="card_specs">
        <div className="card_specs--1">
          <p className="card_specs--description">Screen</p>
          <p className="card_specs--value">{phoneScreen}</p>
        </div>
        <div className="card_specs--2">
          <p className="card_specs--description">Capacity</p>
          <p className="card_specs--value">{capacity}</p>
        </div>
        <div className="card_specs--3">
          <p className="card_specs--description">RAM</p>
          <p className="card_specs--value">{ram}</p>
        </div>
      </div>
      <div className="card_buttons_container">
        {isPhoneInCart ? (
          <button
            className="card_button-disabled"
            onClick={() => removeFromCart(id)}
          >
            Added
          </button>
        ) : (
          <button
            className="card_button-active"
            onClick={() => handleAddToCart(id)}
          >
            Add to cart
          </button>
        )}

        {isPhoneInFavs ? (
          <button
            className="card_like_button--red"
            onClick={() => removeFromFavourites(id)}
          ></button>
        ) : (
          <button
            className="card_like_button"
            onClick={() => handleAddToFavourites(id)}
          ></button>
        )}
      </div>
    </article >
  );
};
