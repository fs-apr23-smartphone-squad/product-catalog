import { useEffect, useState } from 'react';
import { Carousel } from '../../components/Carousel';
import './HomePage.scss';
import { Phone } from '../../components/Types/Types';
import { getDiscount, getNew } from '../../components/Helpers/fetchClient';

/* eslint-disable */
interface Props {
  phoneIdsInCart: number[];
  handleAddToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  phoneIdsInFavourites: number[];
  handleAddToFavourites: (id: number) => void;
  removeFromFavourites: (id: number) => void;
}

export const HomePage: React.FC<Props> = ({
  phoneIdsInCart,
  handleAddToCart,
  removeFromCart,
  phoneIdsInFavourites,
  handleAddToFavourites,
  removeFromFavourites,
}) => {
  const [newPhones, setNewPhones] = useState<Phone[]>([]);
  const [bestDiscountPhones, setBestDiscountPhones] = useState<Phone[]>([]);

  useEffect(() => {
    const fetchNewPhones = async() => {
      try {
        const fetchedPhones = await getNew();

        setNewPhones(fetchedPhones);
      } catch (error) {
        throw new Error('Error fetching phones:' + error);
      }
    };

    fetchNewPhones();
  }, []);

  useEffect(() => {
    const fetchNewPhones = async() => {
      try {
        const fetchedPhones = await getDiscount();

        setBestDiscountPhones(fetchedPhones);
      } catch (error) {
        throw new Error('Error fetching phones:' + error);
      }
    };

    fetchNewPhones();
  }, []);

  return (
    <div className="home-page">
      <h1 className="home-page__title">
        Welcome to Nice Gadgets store!
      </h1>

      <div className="home-page__slider">Home page slider here</div>

      <div className="home-page__new">
        <Carousel
          phones={newPhones}
          phoneIdsInCart={phoneIdsInCart}
          handleAddToCart={handleAddToCart}
          removeFromCart={removeFromCart}
          phoneIdsInFavourites={phoneIdsInFavourites}
          handleAddToFavourites={handleAddToFavourites}
          removeFromFavourites={removeFromFavourites}
          title='Brand new models'
        />
      </div>

      <div className="home-page__category">Shop by category here</div>

      <div className="home-page__hot">
        <Carousel
          phones={bestDiscountPhones}
          phoneIdsInCart={phoneIdsInCart}
          handleAddToCart={handleAddToCart}
          removeFromCart={removeFromCart}
          phoneIdsInFavourites={phoneIdsInFavourites}
          handleAddToFavourites={handleAddToFavourites}
          removeFromFavourites={removeFromFavourites}
          title='Hot prices'
        />
      </div>
    </div>
  );
};
