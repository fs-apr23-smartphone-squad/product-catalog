import React, { useEffect, useState } from 'react';
import './PhoneDetailsPage.scss';
import { Carousel } from '../../components/Carousel';
import { PhoneActions } from '../../components/PhoneActions';
import { Phone } from '../../components/Types/Types';
import { getPhoneById, getRecommendedById } from '../../components/Helpers/fetchClient';
import { Link, useParams } from 'react-router-dom';
import { PhonePhotos } from '../../components/PhonePhotos';

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
  const BASE_API_URL = 'https://api.smartphonesquad.shop';
  const [recommendedPhones, setRecommendedPhones] = useState<Phone[]>([]);
  const [showedPhone, setShowedPhone] = useState<Phone>();
  const productImages = (showedPhone?.images.slice(0, -1).slice(1))?.split(',');
  const [showedPhoto, setShowedPhoto] = useState();
  const { phoneId } = useParams();

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

  useEffect(() => {
    const fetchPhone = async () => {
      try {
        const phoneFromServer: Phone = await getPhoneById(phoneId);

        setShowedPhone(phoneFromServer);
        console.log(phoneFromServer);
      } catch (error) {
        console.error('Error fetching phone:', error);
      }
    };

    fetchPhone();
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

          <PhoneActions />
        </div>
        <div className="phone__description">
          <div className="phone__about about">
            <h3 className="about__header">
              About
            </h3>

            <h4 className="about__subheader">
              And then there was Pro
            </h4>

            <p className="about__text">
              A transformative triple‑camera system that adds tons of capability without complexity.
            </p>
            <p className="about__text">
              An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.
            </p>

            <h4 className="about__subheader">
              Camera
            </h4>

            <p className="about__text">
              Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.
            </p>

            <h4 className="about__subheader">
              Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.
            </h4>

            <p className="about__text">
              iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.
            </p>
          </div>

          <div className="phone__tech-specs tech-specs">
            <h3 className='tech-specs__header'>
              Tech specs
            </h3>

            <div className="tech-specs__speak spek">
              <div className="spek__title">Screen</div>

              <div className="spek__value">6.5” OLED</div>
            </div>

            <div className="tech-specs__speak spek">
              <div className="spek__title">Resolution</div>

              <div className="spek__value">2688x1242</div>
            </div>

            <div className="tech-specs__speak spek">
              <div className="spek__title">Processor</div>

              <div className="spek__value">Apple A12 Bionic</div>
            </div>

            <div className="tech-specs__speak spek">
              <div className="spek__title">RAM</div>

              <div className="spek__value">3 GB</div>
            </div>

            <div className="tech-specs__speak spek">
              <div className="spek__title">Built in memory</div>

              <div className="spek__value">64 GB</div>
            </div>

            <div className="tech-specs__speak spek">
              <div className="spek__title">Camera</div>

              <div className="spek__value">12 Mp + 12 Mp + 12 Mp (Triple)</div>
            </div>

            <div className="tech-specs__speak spek">
              <div className="spek__title">Zoom</div>

              <div className="spek__value">Zoom</div>
            </div>

            <div className="tech-specs__speak spek">
              <div className="spek__title">Cell</div>

              <div className="spek__value">GSM, LTE, UMTS</div>
            </div>
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
