import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import './PhoneActions.scss';
import { NavLink } from 'react-router-dom';
import {
  getProductIdWithoutColor,
  replaceProderty,
} from '../../Helpers/helpersFunctions';
import { getPhones } from '../../Helpers/fetchClient';
import { phoneDescription } from '../../Types/Types';
import { Loader } from '../Loader';

/* eslint-disable */
interface Props {
  capacity: string;
  capacityAvailable: string[];
  color: string;
  avalibleColors: string[];
  productId: string | undefined;
  category: string | undefined;
  priceRegular: number;
  priceDiscount: number | undefined,
  phoneIdsInCart: number[];
  handleAddToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  phoneIdsInFavourites: number[];
  handleAddToFavourites: (id: number) => void;
  removeFromFavourites: (id: number) => void;
  product: phoneDescription;
}

export const PhoneActions: React.FC<Props> = ({
  product,
  avalibleColors,
  capacityAvailable,
  productId,
  category,
  phoneIdsInCart,
  handleAddToCart,
  removeFromCart,
  phoneIdsInFavourites,
  handleAddToFavourites,
  removeFromFavourites,

}) => {
  const {
    capacity,
    color,
    priceRegular,
    priceDiscount,
  } = product;

  const [selectedColor, setSelectedColor] = useState(color);
  const [selectedCapacity, setSelectedCapacity] = useState(capacity);
  const [id, setId] = useState<number | undefined>();

  useEffect(() => { const fetchId = async () => {
      try {
        const phonesFromServer = await getPhones();
        const id = phonesFromServer
          .find(phone => phone.itemId === productId)?.id;

        setId(id);
      } catch (error) {
        console.error('Error fetching phones:', error);
      }
    };

  fetchId();
  }, [productId]);

  if (!id) {
    return <Loader />
  }

  console.log(priceRegular);


  const isPhoneInCart = phoneIdsInCart.includes(id);
  const isPhoneInFavs = phoneIdsInFavourites.includes(id);

  return (
    <div className="phone-actions">
      <div className="phone-actions__title">
        <h4>Avaliable colors</h4>
        <span>ID: 802390</span>
      </div>

      <div className="phone-actions__color">
        {(avalibleColors && productId) && avalibleColors.map(col => (
          <NavLink
            to={`/${category}/${getProductIdWithoutColor(productId)}${col}`}
            key={col}
            onClick={() => setSelectedColor(col)}
          >
            <button className={cn(
              `phone-actions__color-select ${col}`,
              { 'selected': selectedColor === col },
            )}></button>
          </NavLink>
        ))}
      </div>

      <div className="phone-actions__capacity">
        <h4>Select capacity</h4>
        {(capacityAvailable && productId) && capacityAvailable.map(cap => (
          <NavLink
            key={cap}
            to={`/${category}/${replaceProderty(productId, selectedCapacity, cap)}`}
          >
            <button
              className={cn(
                'phone-actions__capacity-select',
                { 'selected': selectedCapacity === cap },
              )}
              onClick={() => setSelectedCapacity(cap)}
            >
              {cap}
            </button>
          </NavLink>

        ))}
      </div>

    {priceDiscount
      ? (
        <div className="phone-actions__priceRegular">
          <span>${priceDiscount}</span>
          <span className="phone-actions__priceRegular-discount">${priceRegular}</span>
        </div>
      ) : (
        <div className="phone-actions__priceRegular">
          <span>${priceRegular}</span>
        </div>
      )
    }

      <div className="phone-actions__buttons">
        {isPhoneInCart ? (
          <button
            className="phone-actions__buttons-cart disabled"
            onClick={() => removeFromCart(id)}
          >
            Added
          </button>
        ) : (
          <button
            className="phone-actions__buttons-cart"
            onClick={() => handleAddToCart(id)}
          >
            Add to cart
          </button>
        )}

        {isPhoneInFavs ? (
          <button
            className="phone-actions__buttons-like disabled"
            onClick={() => removeFromFavourites(id)}
          ></button>
        ) : (
          <button
            className="phone-actions__buttons-like"
            onClick={() => handleAddToFavourites(id)}
          ></button>
        )}
      </div>

      <div className="phone-actions__info">
        {product.screen && (
          <div>
            <h4>Screen</h4>
            <span>{product.screen}</span>
          </div>
        )}

        {product.resolution && (
          <div>
            <h4>Resolution</h4>
            <span>{product.resolution}</span>
          </div>
        )}

        {product.processor && (
          <div>
            <h4>Processor</h4>
            <span>{product.processor}</span>
          </div>
        )}

        {product.ram && (
          <div>
            <h4>RAM</h4>
            <span>{product.ram}</span>
          </div>
        )}
      </div>
    </div>
  );
};
