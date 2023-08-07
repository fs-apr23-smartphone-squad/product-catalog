import { useEffect, useState } from 'react';
import { Carousel } from '../../components/Carousel';
import './HomePage.scss';
import { Phone } from '../../components/Types/Types';
import { getDiscount, getNew } from '../../components/Helpers/fetchClient';
import { Categories } from '../../components/Categories';
import { TitleSlider } from '../../components/TitleSlider';
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
  const [pageIsLoading, setPageIsLoading] = useState(true);

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
        setTimeout(() => setPageIsLoading(false), 1000);
      } catch (error) {
        throw new Error('Error fetching phones:' + error);
      }
    };

    fetchNewPhones();
  }, []);

  return (
    pageIsLoading
      ? (<Loader />)
      : (
        <div className="home-page">
      <h1 className="home-page__title">
        Welcome to Nice Gadgets store!
      </h1>

      <div className="home-page__slider">
        <TitleSlider />
      </div>

      <div className="home-page__new">
        <Carousel
          key="new-phones"
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

      <div className="home-page__category">
        <h3 className='home-page__category-title'>Shop by category</h3>
        <Categories />
      </div>

      <div className="home-page__hot">
        <Carousel
          key="hot-phones"
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
      )
  );
};
