import React, { useEffect, useState } from 'react';
import './PhoneDetailsPage.scss';
import { Carousel } from '../../components/Carousel';
import { PhoneActions } from '../../components/PhoneActions';
import { Phone, phoneDescription } from '../../Types/Types';
import { getPhoneById,
  getSingleItem,
  getRecommendedById, 
  getRecommendedBySingle} from '../../Helpers/fetchClient';
import { Link, useParams } from 'react-router-dom';
import { PhonePhotos } from '../../components/PhonePhotos';
import { Loader } from '../../components/Loader';

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
  removeFromFavourites,
}) => {
  const BASE_API_URL = 'https://api.smartphonesquad.shop';
  const category = 'phones';
  const [recommendedPhones, setRecommendedPhones] = useState<Phone[]>([]);
  const [showedPhone, setShowedPhone] = useState<phoneDescription>();
  const productImages = (showedPhone?.images.slice(0, -1).slice(1))?.split(',');
  const [showedPhoto, setShowedPhoto] = useState<string | null>();
  const { category, itemId } = useParams();

  console.log(category)
  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const phonesFromServer: Phone[] = await getRecommendedBySingle(category!, itemId!);

        setRecommendedPhones(phonesFromServer);
        console.log(phonesFromServer);
      } catch (error) {
        console.error('Error fetching phones:', error);
      }
    };

    fetchPhones();
  }, [itemId]);

  useEffect(() => {
    const fetchPhone = async () => {
      try {
        const phoneFromServer = await getSingleItem(category!, itemId!);

        setShowedPhone(phoneFromServer);
        console.log(phoneFromServer);
      } catch (error) {
        console.error('Error fetching phone:', error);
      }
    };

    fetchPhone();
  }, [itemId]);

  if (!showedPhone) {
    return <Loader />
  };

  const productImages = (showedPhone.images.slice(0, -1).slice(1))?.split(',');
  const productCapacityAvailable = (showedPhone.capacityAvailable.slice(0, -1).slice(1))?.split(',');
  const productColors = (showedPhone.colorsAvailable.slice(0, -1).slice(1))?.split(',');

  // console.log(showedPhone.description)

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
        to={`/${category}`}
        >{category}</Link>
        <div className='breadcrumbs__arrow'></div>
        <p>Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</p>
      </div>
      <a href="#" className="phone__back-link">Back</a>

      <h1 className="phone__title">
        {`${showedPhone?.name}`}
      </h1>

      <div className="phone__container">
        <div className="phone__details">
          <PhonePhotos
            BASE_API_URL={BASE_API_URL}
            setShowedPhoto={setShowedPhoto}
            showedPhoto={showedPhoto}
            productImages={productImages}
            phoneName={showedPhone?.name}
          />

          <PhoneActions
            capacity={showedPhone.capacity}
            capacityAvailable={productCapacityAvailable}
            color={showedPhone?.color}
            avalibleColors={productColors}
            productId={itemId}
            priceRegular={showedPhone.priceRegular}
            priceDiscount={showedPhone.priceDiscount}
            phoneIdsInCart={phoneIdsInCart}
            handleAddToCart={handleAddToCart}
            removeFromCart={removeFromCart}
            phoneIdsInFavourites={phoneIdsInFavourites}
            handleAddToFavourites={handleAddToFavourites}
            removeFromFavourites={removeFromFavourites}
            product={showedPhone}
          />
        </div>
        <div className="phone__description">
          <div className="phone__about about">
            <h3 className="about__header">
              About
            </h3>

            {showedPhone.description.map(desc => (
              <React.Fragment>
                <h4 className="about__subheader">
                  {desc.title}
                </h4>
                {desc.text.map(p => (
                  <p className="about__text">
                    {p}
                  </p>
                ))}
              </React.Fragment>
            ))}
          </div>

          <div className="phone__tech-specs tech-specs">
            <h3 className='tech-specs__header'>
              Tech specs
            </h3>
            {showedPhone.screen && (
              <div className="tech-specs__speak spek">
                <div className="spek__title">Screen</div>

                <div className="spek__value">{showedPhone.screen}</div>
              </div>
            )}

            {showedPhone.resolution && (
              <div className="tech-specs__speak spek">
                <div className="spek__title">Resolution</div>

                <div className="spek__value">{showedPhone.resolution}</div>
              </div>
            )}

            {showedPhone.processor && (
              <div className="tech-specs__speak spek">
                <div className="spek__title">Processor</div>

                <div className="spek__value">{showedPhone.processor}</div>
              </div>
            )}

            {showedPhone.ram && (
              <div className="tech-specs__speak spek">
                <div className="spek__title">RAM</div>

                <div className="spek__value">{showedPhone.ram}</div>
              </div>
            )}

            {showedPhone.capacity && (
              <div className="tech-specs__speak spek">
                <div className="spek__title">Built in memory</div>

                <div className="spek__value">{showedPhone.capacity}</div>
              </div>
            )}

            {showedPhone.camera && (
              <div className="tech-specs__speak spek">
                <div className="spek__title">Camera</div>

                <div className="spek__value">{showedPhone.camera}</div>
              </div>
            )}

            {showedPhone.zoom && (
              <div className="tech-specs__speak spek">
                <div className="spek__title">Zoom</div>

                <div className="spek__value">{showedPhone.zoom}</div>
              </div>
            )}

            {showedPhone.cell && (
              <div className="tech-specs__speak spek">
                <div className="spek__title">Cell</div>

                <div className="spek__value">GSM, LTE, UMTS</div>
              </div>
            )}
          </div>
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
