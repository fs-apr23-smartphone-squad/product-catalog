import React, { useEffect, useState } from 'react';

import { Cardlist } from '../../components/Cardlist';
import { getPhones } from '../../components/Helpers/fetchClient';
import { Phone } from '../../components/Types/Types';

/* eslint-disable no-console */
/* eslint-disable */
interface Props {
  phoneIdsInCart: number[];
  handleAddToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}

export const PhonesPage: React.FC<Props> = ({ phoneIdsInCart, handleAddToCart, removeFromCart }) => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    const fetchPhones = async() => {
      try {
        const fetchedPhones = await getPhones();

        setPhones(fetchedPhones);
      } catch (error) {
        console.error('Error fetching phones:', error);
      }
    };

    fetchPhones();
  }, []);

  return (
    <div className='phones_page_container'>
      <Cardlist
        phones={phones}
        phoneIdsInCart={phoneIdsInCart}
        handleAddToCart={handleAddToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};
