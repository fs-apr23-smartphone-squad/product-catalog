import React, { useEffect, useState } from 'react';

import { Cardlist } from '../../components/Cardlist';
import { getPhones } from '../../components/Helpers/fetchClient';
import { Phone } from '../../components/Types/Types';

/* eslint-disable no-console */

export const PhonesPage = () => {
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
    <>
    <h1 className="title">Phones page</h1>
    <div className='phones_page_container'>
    <Cardlist phones={phones}/>
    </div>
    </>
  );
};
