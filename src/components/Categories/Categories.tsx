import { NavLink } from 'react-router-dom';
import './Categories.scss';
import { useEffect, useState } from 'react';
import { Phone } from '../Types/Types';
import { getPhones, getTablets, getAccessories, getAllPhones } from '../Helpers/fetchClient';

const Base = 'https://api.smartphonesquad.shop/img/';

export const Categories = () => {
  const [tablets, setTablets] = useState<Phone[]>([]);
  const [accessories, setAccessories] = useState<Phone[]>([]);
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    async function getProductsFromServer() {
      try {
        const tabletsFromServer = await getTablets();
        const accessoriesFromServer = await getAccessories();
        const phonesFromServer = await getAllPhones();

        if (Array.isArray(tabletsFromServer)) {
          setTablets(tabletsFromServer);
        }

        if (Array.isArray(accessoriesFromServer)) {
          setAccessories(accessoriesFromServer);
        }

        if (Array.isArray(phonesFromServer)) {
          setPhones(phonesFromServer);
        }

        return;
      } catch {
        throw new Error('Unable to load data');
      }
    }

    getProductsFromServer();
  }, []);

  return (
    <div className='categories'>
      <div className="categories__category">
        <div className="categories__img-container phones">
          <NavLink to="/phones">
            <img
              src={`${Base}category-phones.png`}
              alt="Phones category image"
              className='categories__image'
            />
          </NavLink>
        </div>

        <NavLink
          className='categories__title'
          to="/phones"
        >
          Mobile phones
        </NavLink>

        <h5 className='categories__info'>
          {`${phones.length}`} models
        </h5>
      </div>

      <div className="categories__category">
        <div className="categories__img-container tablets">
          <NavLink to="/tablets">
            <img
              src={`${Base}category-tablets.png`}
              alt="Phones category image"
              className='categories__image'
            />
          </NavLink>
        </div>

        <NavLink
          className='categories__title'
          to="/tablets"
        >
          Tablets
        </NavLink>

        <h5 className='categories__info'>
          {`${tablets.length}`} models
        </h5>
      </div>

      <div className="categories__category">
        <div className="categories__img-container accessories">
          <NavLink to="/accessories">
            <img
              src={`${Base}category-accessories.png`}
              alt="Phones category image"
              className='categories__image'
            />
          </NavLink>
        </div>

        <NavLink
          className='categories__title'
          to="/accessories"
        >
          Accessories
        </NavLink>

        <h5 className='categories__info'>
          {`${accessories.length}`} models
        </h5>
      </div>
    </div>
  );
};
