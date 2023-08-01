import React from 'react';
import cn from 'classnames';
import { PhoneImage } from './PhoneImage';
import { Phone } from '../Types/Types';
import './Card.scss';
/* eslint-disable eol-last */
/* eslint-disable no-console */
/* eslint-disable */
interface Props {
  phone: Phone;
}

export const Card: React.FC<Props> = ({ phone }) => {
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

  return (
    <article className={cn('card', {})}>
        <PhoneImage src={image} />
        <div className='card_title--container'>
        <h3 className="card_title">
        {phoneName}
      </h3>
        </div>
      <div className="card_price">
        <p className="card_price-new">
          {`$${price}`}
        </p>
        <p className="card_price-old">
        {`$${fullPrice}`}
        </p>
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
        <button className="card_button">
          Add to cart
        </button>
        <button className="card_like_button">
        </button>
      </div>
    </article>
  );
};
