import React, { useEffect, useState } from 'react';
import './PhoneDetailsPage.scss';
import { Carousel } from '../../components/Carousel';
import { PhoneActions } from '../../components/PhoneActions';
import { Phone } from '../../components/Types/Types';
import { getRecommendedById } from '../../components/Helpers/fetchClient';
import { Link } from 'react-router-dom';

/* eslint-disable */
interface Props {
  phoneIdsInCart: number[];
  handleAddToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  phoneIdsInFavourites: number[];
  handleAddToFavourites: (id: number) => void;
  removeFromFavourites: (id: number) => void;
}

export const PhoneDetailsPage: React.FC<Props> = ({
  phoneIdsInCart,
  handleAddToCart,
  removeFromCart,
  phoneIdsInFavourites,
  handleAddToFavourites,
  removeFromFavourites
}) => {
  const [recommendedPhones, setRecommendedPhones] = useState<Phone[]>([]);
  const phoneId = 'apple-iphone-xs-64gb-spacegray';

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const phonesFromServer: Phone[] = await getRecommendedById(phoneId);

        setRecommendedPhones(phonesFromServer);
        console.log(phonesFromServer);
      } catch (error) {
        console.error('Error fetching phones:', error);
      }
    };

    fetchPhones();
  }, []);

  return (
    <div className="phone">
      <div className='breadcrumbs'>
        <Link
        className='breadcrumbs__home'
        to='/home'
        ></Link>
        <div className='breadcrumbs__arrow'></div>
        <Link
        className='breadcrumbs__phones'
        to='/phones'
        >Phones</Link>
        <div className='breadcrumbs__arrow'></div>
        <p>Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</p>
      </div>
      <a href="#" className="phone__back-link">Back</a>

      <h1 className="phone__title">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>

      <div className="phone__container">
        <div className="phone__details">
          <div className="phone__photos">
            <img
              className='phone__photo--big'
              // eslint-disable-next-line max-len
              src="https://api.smartphonesquad.shop/img/phones/apple-iphone-7/gold/00.jpg"
              alt="Phone photo"
            />
            <div className="phone__photos--small">
              <img
                className='phone__photo--small'
                // eslint-disable-next-line max-len
                src="https://api.smartphonesquad.shop/img/phones/apple-iphone-7/gold/01.jpg"
                alt="Phone photo"
              />

              <img
                className='phone__photo--small'
                // eslint-disable-next-line max-len
                src="https://api.smartphonesquad.shop/img/phones/apple-iphone-7/gold/02.jpg"
                alt="Phone photo"
              />

              <img
                className='phone__photo--small'
                // eslint-disable-next-line max-len
                src="https://api.smartphonesquad.shop/img/phones/apple-iphone-7/gold/03.jpg"
                alt="Phone photo"
              />

              <img
                className='phone__photo--small'
                // eslint-disable-next-line max-len
                src="https://api.smartphonesquad.shop/img/phones/apple-iphone-7/gold/04.jpg"
                alt="Phone photo"
              />
            </div>
          </div>
          <PhoneActions />
        </div>
        <div className="phones__description">
          <div className="phone__about"></div>
        <div className="phone__tech-specs"></div>
        </div>
        <div className="phone__recommended">
          <Carousel
            title="You may also like"
            phones={recommendedPhones}
            phoneIdsInCart={phoneIdsInCart}
            handleAddToCart={handleAddToCart}
            removeFromCart={removeFromCart}
            phoneIdsInFavourites={phoneIdsInFavourites}
            handleAddToFavourites={handleAddToFavourites}
            removeFromFavourites={removeFromFavourites}
          />
        </div>
      </div>
    </div>
  );
};
