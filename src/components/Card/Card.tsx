import { PhoneImage } from './PhoneImage';
import './Card.scss';
/* eslint-disable eol-last */

export const Card = () => {
  return (
    <article className="card">
      <div className='card_image-container'>
        <PhoneImage />
      </div>
      <h3 className="card_title">
        Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
      </h3>
      <div className="card_price">
        <p className="card_price-new">
          $799
        </p>
        <p className="card_price-old">
          $899
        </p>
      </div>
      <div className="card_divider"></div>
      <div className="card_specs">
        <div className="card_specs--1">
          <p className="card_specs--description">Screen</p>
          <p className="card_specs--value">5.8” OLED</p>
        </div>
        <div className="card_specs--2">
          <p className="card_specs--description">Capacity</p>
          <p className="card_specs--value">64 GB</p>
        </div>
        <div className="card_specs--3">
          <p className="card_specs--description">RAM</p>
          <p className="card_specs--value">4 GB</p>
        </div>
      </div>
      <div className="card_buttons_container">
        <button className="card_button">
          Add to cart
        </button>
        <button className="card_like_button">
          <img
            className="card_like_button--image"
            src='../../images/logo.svg'
            alt="like"
          />
        </button>
      </div>
    </article>
  );
};
